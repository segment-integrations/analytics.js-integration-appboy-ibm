'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var Track = require('segmentio-facade').Track;
var each = require('@ndhoule/each');
var del = require('obj-case').del;
var clone = require('@ndhoule/clone');

//Require Braze Web SDK through npm
var appboy = require('appboy-web-sdk');

/**
 * Expose `Appboy` integration.
 */

var Appboy = module.exports = integration('Appboy-IBM')
  .global('appboy')
  .option('apiKey', '')
  .option('safariWebsitePushId', '')
  .option('allowCrawlerActivity', false)
  .option('doNotLoadFontAwesome', false)
  .option('enableLogging', false)
  .option('automaticallyDisplayMessages', true)
  .option('localization', 'en')
  .option('minimumIntervalBetweenTriggerActionsInSeconds', 30)
  .option('openInAppMessagesInNewTab', false)
  .option('openNewsFeedCardsInNewTab', false)
  .option('sessionTimeoutInSeconds', 30)
  .option('requireExplicitInAppMessageDismissal', false)
  .option('enableHtmlInAppMessages', false)
  .option('trackAllPages', false)
  .option('trackNamedPages', false)
  .option('customEndpoint', '')
  .option('version', 1)
  .tag('v1', '<script src="https://js.appboycdn.com/web-sdk/1.6/appboy.min.js">')
  .tag('v2', '<script src="https://js.appboycdn.com/web-sdk/2.1/appboy.min.js">');


Appboy.prototype.initialize = function() {
  var options = this.options;
  var customEndpoint;
  // Setup custom endpoints
  if (options.customEndpoint) {
    var endpoint = options.customEndpoint;
    var regex = new RegExp('^(http|https)://', 'i');
    customEndpoint = (regex.test(endpoint) ? endpoint : 'https://' + endpoint) + '/api/v3';
  } else if (options.datacenter === 'eu') {
    customEndpoint = 'https://sdk.fra-01.braze.eu/api/v3';
  }

  this._messagingReady = false;
  this._messagingReadyQueue = [];
  
  this.initializeV2(customEndpoint);
};

/**
 * Initialize v2.
 *
 * @api public
 */

Appboy.prototype.initializeV2 = function(customEndpoint) {
  var options = this.options;
  var userId = this.analytics.user().id();

  // https://js.appboycdn.com/web-sdk/2.0/doc/module-appboy.html#.initialize
  var config = {
    safariWebsitePushId: options.safariWebsitePushId,
    enableHtmlInAppMessages: options.enableHtmlInAppMessages,
    allowCrawlerActivity: options.allowCrawlerActivity,
    doNotLoadFontAwesome: options.doNotLoadFontAwesome,
    enableLogging: options.enableLogging,
    localization: options.localization,
    minimumIntervalBetweenTriggerActionsInSeconds: Number(options.minimumIntervalBetweenTriggerActionsInSeconds) || 30,
    openInAppMessagesInNewTab: options.openInAppMessagesInNewTab,
    openNewsFeedCardsInNewTab: options.openNewsFeedCardsInNewTab,
    requireExplicitInAppMessageDismissal: options.requireExplicitInAppMessageDismissal,
    sessionTimeoutInSeconds: Number(options.sessionTimeoutInSeconds) || 30
  };

  if (customEndpoint) config.baseUrl = customEndpoint;

  this.initializeTester(options.apiKey, config);
  appboy.initialize(options.apiKey, config);

  if (options.automaticallyDisplayMessages) appboy.display.automaticallyShowNewInAppMessages();

  // Initialization of Appboy must proceed as follows:
  //
  // 1. Load Appboy's script onto the page. This is `this.load`.
  // 2. If there is already a cached userId for this page, then invoke
  //    `changeUser` with that userId. Do not proceed until the in-app messages
  //    for that user are ready.
  // 3. Invoke `openSession`. Do not proceed until the session is successfully
  //    opened.
  // 4. Mark the integration as ready. This is `self.ready`.
  var self = this;
  if (userId) {
    this.load('v2', function() {
      self._changeUser(userId, function() {
        appboy.openSession(function() {
          self.ready();
        });
      });
    });
  } else {
    this.load('v2', function() {
      appboy.openSession(function() {
        self.ready();
      });
    });
  }
};

// This is used to test window.appboy.initialize
Appboy.prototype.initializeTester = function() {};

// A wrapper around `appboy.changeUser` that supports a queued system for
// waiting for in-app messages.
Appboy.prototype._changeUser = function(userId, callback) {
  // If we're using SDK v2, then messaging should be delayed -- `messagingReady`
  // should be false. With SDK v1, messaging is ready right away.
  this._messagingReady = Number(this.options.version) !== 2;

  // Do not invoke the callback until messaging is ready.
  this._onMessagingReady(callback);
  
  // Actually perform the `changeUser` call. The callback we pass to
  // `appboy.changeUser` will be invoked when in-app messaging is ready.
  var self = this;
  appboy.changeUser(userId, function() {
    // Invoke all the callbacks awaiting for in-app messages to be ready. These
    // callbacks were all enqueued by calling `_onMessagingReady`.
    each(function(callback) {
      callback();
    }, self._messagingReadyQueue);

    // We have processed all awaiting callbacks. Future calls to
    // `_onMessagingReady` can have their callbacks invoked immediately, at
    // least until the next time we call `_changeUser` and new in-app messages
    // must be downloaded.
    self._messagingReady = true;
    self._messagingReadyQueue = [];
  });
};

// If in-app messages are available, the passed callback will be invoked
// immediately. If we are still downloading in-app messaging, then the passed
// callback will not be called until the messaging is ready.
Appboy.prototype._onMessagingReady = function(callback) {
  if (this._messagingReady) {
    callback();
  } else {
    this._messagingReadyQueue.push(callback);
  }
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */

Appboy.prototype.identify = function(identify) {
  var userId = identify.userId();
  var address = identify.address();
  var avatar = identify.avatar();
  var birthday = identify.birthday();
  var email = identify.email();
  var firstName = identify.firstName();
  var gender = identify.gender();
  var lastName = identify.lastName();
  var phone = identify.phone();
  var traits = clone(identify.traits());

  this._changeUser(userId, function() {
    appboy.getUser().setAvatarImageUrl(avatar);
    appboy.getUser().setEmail(email);
    appboy.getUser().setFirstName(firstName);
    appboy.getUser().setGender(getGender(gender));
    appboy.getUser().setLastName(lastName);
    appboy.getUser().setPhoneNumber(phone);
    if (address) {
      appboy.getUser().setCountry(address.country);
      appboy.getUser().setHomeCity(address.city);
    }
    if (birthday) {
      appboy.getUser().setDateOfBirth(birthday.getUTCFullYear(), birthday.getUTCMonth() + 1, birthday.getUTCDate());
    }
  
    // delete all the standard traits from traits clone so that we can use appboy's setCustomAttribute on non-standard traits
    // also remove all reserved keys so we dont set them as custom attributes, otherwise Appboy rejects the entire event
    // https://www.appboy.com/documentation/Platform_Wide/#reserved-keys
    var reserved = ['avatar', 'address', 'birthday', 'email', 'id', 'firstName', 'gender', 'lastName', 'phone', 'facebook', 'twitter', 'first_name', 'last_name', 'dob', 'external_id', 'country', 'home_city', 'bio', 'gender', 'phone', 'email_subscribe', 'push_subscribe'];
    each(function(key) {
      delete traits[key];
    }, reserved);
  
    each(function(value, key) {
      appboy.getUser().setCustomUserAttribute(key, value);
    }, traits);  
  });
};

/**
 * Group.
 *
 * Sets the group Id for users.
 *
 * @api public
 * @param {Group} group
 */

Appboy.prototype.group = function(group) {
  var groupIdKey = 'ab_segment_group_' + group.groupId();

  appboy.getUser().setCustomUserAttribute(groupIdKey, true);
};

/**
 * Track.
 *
 * https://js.appboycdn.com/web-sdk/latest/doc/module-appboy.html#.logCustomEvent
 *
 * @api public
 * @param {Track} track
 */

Appboy.prototype.track = function(track) {
  var eventName = track.event();
  var properties = track.properties();
  // remove reserved keys from custom event properties
  // https://www.appboy.com/documentation/Platform_Wide/#reserved-keys
  var reserved = ['time', 'product_id', 'quantity', 'event_name', 'price', 'currency'];
  each(function(key) {
    delete properties[key];
  }, reserved);

  // Fire a logCustomEvent once in-app messaging is ready.
  this._onMessagingReady(function() {
    appboy.logCustomEvent(eventName, properties);
  });
};

/**
 * Page.
 *
 * https://js.appboycdn.com/web-sdk/latest/doc/module-appboy.html#.logCustomEvent
 *
 * @api public
 * @param {Page} page
 */

Appboy.prototype.page = function(page) {
  var settings = this.options;
  if (!settings.trackAllPages && !settings.trackNamedPages) return;
  if (settings.trackNamedPages && !page.name()) return;

  var pageEvent = page.track(page.fullName());
  var eventName = pageEvent.event();
  var properties = page.properties();

  // Fire a logCustomEvent once in-app messaging is ready.
  this._onMessagingReady(function() {
    appboy.logCustomEvent(eventName, properties);
  });
};

/**
 * Order Completed.
 *
 * Breaking this out because it requires certain properties that all other events don't.
 *
 * https://js.appboycdn.com/web-sdk/latest/doc/module-appboy.html#.logPurchase
 *
 * @api public
 * @param {Track} track
 */


Appboy.prototype.orderCompleted = function(track) {
  var products = track.products();
  var currencyCode = track.currency();
  var purchaseProperties = track.properties();

  // remove reduntant properties
  del(purchaseProperties, 'products');
  del(purchaseProperties, 'currency');

  // we have to make a separate call to appboy for each product
  var self = this;
  each(function(product) {
    var track = new Track({ properties: product });
    var productId = track.productId();
    var price = track.price();
    var quantity = track.quantity();

    // Fire a logPurchase once in-app messaging is ready.
    self._onMessagingReady(function() {
      appboy.logPurchase(productId, price, currencyCode, quantity, purchaseProperties);
    });
  }, products);
};

/**
 * Get Gender.
 *
 * Returns Gender in the way that Appboy understands it.
 *
 * https://js.appboycdn.com/web-sdk/latest/doc/ab.User.html#toc4
 *
 * @api public
 * @param {string} gender
 * @return {string}
 */

function getGender(gender) {
  if (!gender) return;
  if (typeof gender !== 'string') return;

  var femaleGenders = ['woman', 'female', 'w', 'f'];
  var maleGenders = ['man', 'male', 'm'];
  var otherGenders = ['other', 'o'];

  if (femaleGenders.indexOf(gender.toLowerCase()) > -1) return appboy.ab.User.Genders.FEMALE;
  if (maleGenders.indexOf(gender.toLowerCase()) > -1) return appboy.ab.User.Genders.MALE;
  if (otherGenders.indexOf(gender.toLowerCase()) > -1) return appboy.ab.User.Genders.OTHER;
}
