'use strict';

/*
 * Braze Web SDK v2.2.2
 * (c) Braze, Inc. 2018 - http://braze.com
 * License available at https://github.com/Appboy/appboy-web-sdk/blob/master/LICENSE
 * Compiled on 2018-06-21
 */
(function() {
  function L(k) {
      function T(a, c, d, e, g, h) {
          if (0 < a.buttons.length) {
              var f = document.createElement("div");
              f.className = "ab-message-buttons";
              a.imageStyle !== b.j.Nd.GRAPHIC && U(f, a.backgroundColor);
              e.insertBefore(f, e.firstChild);
              for (var n = function(m) {
                      return function(f) {
                          f = f || window.event;
                          a.fa(h || e, function() {
                              c.xe(m, a);
                              m.clickAction === b.j.xb.URI ? b.ma.openUri(m.uri, f, g || a.openTarget === b.j.ed.BLANK) : m.clickAction === b.j.xb.NEWS_FEED && d()
                          });
                          f.stopPropagation();
                          return !1
                      }
                  }, m = 0; m < a.buttons.length; m++) {
                  var p = a.buttons[m],
                      k = document.createElement("button");
                  k.className = "ab-message-button";
                  k.setAttribute("type", "button");
                  var r = p.text;
                  "" === p.text && (r = "\u00a0");
                  k.appendChild(document.createTextNode(r));
                  k.style.backgroundColor = b.Sa.sb(p.backgroundColor);
                  k.style.color = b.Sa.sb(p.textColor);
                  k.onclick = n(p);
                  f.appendChild(k)
              }
          }
      }

      function V(a) {
          a = a.querySelectorAll(".ab-close-button, .ab-message-button");
          if (0 < a.length) {
              var c = a[0],
                  d = a[a.length - 1];
              d.addEventListener("keydown", function(a) {
                  a = a || window.event;
                  a.keyCode !== b.Ia.Cg || a.shiftKey ||
                      (a.preventDefault(), c.focus())
              });
              c.addEventListener("keydown", function(a) {
                  a = a || window.event;
                  a.keyCode === b.Ia.Cg && a.shiftKey && (a.preventDefault(), d.focus())
              })
          }
      }

      function U(a, c) {
          var d = document.createElement("div");
          d.className = "ab-mask";
          a.appendChild(d);
          d = document.createElement("div");
          d.className = "ab-background";
          d.style.backgroundColor = b.Sa.sb(c);
          a.appendChild(d)
      }

      function S(a, c) {
          b.zg = ".ab-feed,.ab-feed .ab-card .ab-title,.ab-feed .ab-card .ab-url-area,.ab-in-app-message{font-family:'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif}.ab-centering-div:focus,.ab-feed .ab-feed-buttons-wrapper:focus,.ab-in-app-message:focus{outline:0}@-webkit-keyframes animSlideIn{0%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,500,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,500,0,0,1)}1.3%{-webkit-transform:matrix3d(1.207,0,0,0,0,1,0,0,0,0,1,0,395.034,0,0,1);transform:matrix3d(1.207,0,0,0,0,1,0,0,0,0,1,0,395.034,0,0,1)}2.55%{-webkit-transform:matrix3d(1.254,0,0,0,0,1,0,0,0,0,1,0,304.663,0,0,1);transform:matrix3d(1.254,0,0,0,0,1,0,0,0,0,1,0,304.663,0,0,1)}4.1%{-webkit-transform:matrix3d(1.216,0,0,0,0,1,0,0,0,0,1,0,209.854,0,0,1);transform:matrix3d(1.216,0,0,0,0,1,0,0,0,0,1,0,209.854,0,0,1)}5.71%{-webkit-transform:matrix3d(1.146,0,0,0,0,1,0,0,0,0,1,0,132.66,0,0,1);transform:matrix3d(1.146,0,0,0,0,1,0,0,0,0,1,0,132.66,0,0,1)}8.11%{-webkit-transform:matrix3d(1.059,0,0,0,0,1,0,0,0,0,1,0,52.745,0,0,1);transform:matrix3d(1.059,0,0,0,0,1,0,0,0,0,1,0,52.745,0,0,1)}8.81%{-webkit-transform:matrix3d(1.041,0,0,0,0,1,0,0,0,0,1,0,36.4,0,0,1);transform:matrix3d(1.041,0,0,0,0,1,0,0,0,0,1,0,36.4,0,0,1)}11.96%{-webkit-transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-8.042,0,0,1);transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-8.042,0,0,1)}12.11%{-webkit-transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-9.217,0,0,1);transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-9.217,0,0,1)}15.07%{-webkit-transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.103,0,0,1);transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.103,0,0,1)}16.12%{-webkit-transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.678,0,0,1);transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.678,0,0,1)}27.23%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.919,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.919,0,0,1)}27.58%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.534,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.534,0,0,1)}38.34%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.518,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.518,0,0,1)}40.09%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.485,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.485,0,0,1)}50%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.08,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.08,0,0,1)}60.56%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-.012,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-.012,0,0,1)}100%,82.78%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@keyframes animSlideIn{0%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,500,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,500,0,0,1)}1.3%{-webkit-transform:matrix3d(1.207,0,0,0,0,1,0,0,0,0,1,0,395.034,0,0,1);transform:matrix3d(1.207,0,0,0,0,1,0,0,0,0,1,0,395.034,0,0,1)}2.55%{-webkit-transform:matrix3d(1.254,0,0,0,0,1,0,0,0,0,1,0,304.663,0,0,1);transform:matrix3d(1.254,0,0,0,0,1,0,0,0,0,1,0,304.663,0,0,1)}4.1%{-webkit-transform:matrix3d(1.216,0,0,0,0,1,0,0,0,0,1,0,209.854,0,0,1);transform:matrix3d(1.216,0,0,0,0,1,0,0,0,0,1,0,209.854,0,0,1)}5.71%{-webkit-transform:matrix3d(1.146,0,0,0,0,1,0,0,0,0,1,0,132.66,0,0,1);transform:matrix3d(1.146,0,0,0,0,1,0,0,0,0,1,0,132.66,0,0,1)}8.11%{-webkit-transform:matrix3d(1.059,0,0,0,0,1,0,0,0,0,1,0,52.745,0,0,1);transform:matrix3d(1.059,0,0,0,0,1,0,0,0,0,1,0,52.745,0,0,1)}8.81%{-webkit-transform:matrix3d(1.041,0,0,0,0,1,0,0,0,0,1,0,36.4,0,0,1);transform:matrix3d(1.041,0,0,0,0,1,0,0,0,0,1,0,36.4,0,0,1)}11.96%{-webkit-transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-8.042,0,0,1);transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-8.042,0,0,1)}12.11%{-webkit-transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-9.217,0,0,1);transform:matrix3d(1.002,0,0,0,0,1,0,0,0,0,1,0,-9.217,0,0,1)}15.07%{-webkit-transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.103,0,0,1);transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.103,0,0,1)}16.12%{-webkit-transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.678,0,0,1);transform:matrix3d(.996,0,0,0,0,1,0,0,0,0,1,0,-21.678,0,0,1)}27.23%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.919,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.919,0,0,1)}27.58%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.534,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-3.534,0,0,1)}38.34%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.518,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.518,0,0,1)}40.09%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.485,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.485,0,0,1)}50%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.08,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,.08,0,0,1)}60.56%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-.012,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-.012,0,0,1)}100%,82.78%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@-webkit-keyframes animSlideOut{0%{-webkit-transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(300px,0,0) translate3d(100%,0,0)}}@keyframes animSlideOut{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(300px,0,0) translate3d(100%,0,0);transform:translate3d(300px,0,0) translate3d(100%,0,0)}}@-webkit-keyframes animSlideLeft{0%{-webkit-transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(-300px,0,0) translate3d(-100%,0,0)}}@keyframes animSlideLeft{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}100%{-webkit-transform:translate3d(-300px,0,0) translate3d(-100%,0,0);transform:translate3d(-300px,0,0) translate3d(-100%,0,0)}}@-webkit-keyframes animScale{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1)}}@keyframes animScale{0%{opacity:0;-webkit-transform:translate3d(0,40px,0) scale3d(.1,.6,1);transform:translate3d(0,40px,0) scale3d(.1,.6,1)}100%{opacity:1;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1)}}@-webkit-keyframes animJelly{0%{-webkit-transform:matrix3d(.3,0,0,0,0,.3,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.3,0,0,0,0,.3,0,0,0,0,1,0,0,0,0,1)}4.5%{-webkit-transform:matrix3d(.606,0,0,0,0,.64,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.606,0,0,0,0,.64,0,0,0,0,1,0,0,0,0,1)}5.51%{-webkit-transform:matrix3d(.666,0,0,0,0,.711,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.666,0,0,0,0,.711,0,0,0,0,1,0,0,0,0,1)}9.01%{-webkit-transform:matrix3d(.843,0,0,0,0,.916,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.843,0,0,0,0,.916,0,0,0,0,1,0,0,0,0,1)}11.01%{-webkit-transform:matrix3d(.917,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.917,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1)}13.51%{-webkit-transform:matrix3d(.984,0,0,0,0,1.061,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.984,0,0,0,0,1.061,0,0,0,0,1,0,0,0,0,1)}16.52%{-webkit-transform:matrix3d(1.033,0,0,0,0,1.094,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.033,0,0,0,0,1.094,0,0,0,0,1,0,0,0,0,1)}17.92%{-webkit-transform:matrix3d(1.046,0,0,0,0,1.097,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.046,0,0,0,0,1.097,0,0,0,0,1,0,0,0,0,1)}21.92%{-webkit-transform:matrix3d(1.059,0,0,0,0,1.08,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.059,0,0,0,0,1.08,0,0,0,0,1,0,0,0,0,1)}29.03%{-webkit-transform:matrix3d(1.039,0,0,0,0,1.023,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.039,0,0,0,0,1.023,0,0,0,0,1,0,0,0,0,1)}34.63%{-webkit-transform:matrix3d(1.018,0,0,0,0,.996,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.018,0,0,0,0,.996,0,0,0,0,1,0,0,0,0,1)}36.24%{-webkit-transform:matrix3d(1.013,0,0,0,0,.992,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.013,0,0,0,0,.992,0,0,0,0,1,0,0,0,0,1)}40.14%{-webkit-transform:matrix3d(1.004,0,0,0,0,.989,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.004,0,0,0,0,.989,0,0,0,0,1,0,0,0,0,1)}50.55%{-webkit-transform:matrix3d(.996,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.996,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1)}62.36%{-webkit-transform:matrix3d(.999,0,0,0,0,1.001,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.999,0,0,0,0,1.001,0,0,0,0,1,0,0,0,0,1)}100%,79.08%,84.68%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@keyframes animJelly{0%{-webkit-transform:matrix3d(.3,0,0,0,0,.3,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.3,0,0,0,0,.3,0,0,0,0,1,0,0,0,0,1)}4.5%{-webkit-transform:matrix3d(.606,0,0,0,0,.64,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.606,0,0,0,0,.64,0,0,0,0,1,0,0,0,0,1)}5.51%{-webkit-transform:matrix3d(.666,0,0,0,0,.711,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.666,0,0,0,0,.711,0,0,0,0,1,0,0,0,0,1)}9.01%{-webkit-transform:matrix3d(.843,0,0,0,0,.916,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.843,0,0,0,0,.916,0,0,0,0,1,0,0,0,0,1)}11.01%{-webkit-transform:matrix3d(.917,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.917,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1)}13.51%{-webkit-transform:matrix3d(.984,0,0,0,0,1.061,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.984,0,0,0,0,1.061,0,0,0,0,1,0,0,0,0,1)}16.52%{-webkit-transform:matrix3d(1.033,0,0,0,0,1.094,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.033,0,0,0,0,1.094,0,0,0,0,1,0,0,0,0,1)}17.92%{-webkit-transform:matrix3d(1.046,0,0,0,0,1.097,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.046,0,0,0,0,1.097,0,0,0,0,1,0,0,0,0,1)}21.92%{-webkit-transform:matrix3d(1.059,0,0,0,0,1.08,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.059,0,0,0,0,1.08,0,0,0,0,1,0,0,0,0,1)}29.03%{-webkit-transform:matrix3d(1.039,0,0,0,0,1.023,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.039,0,0,0,0,1.023,0,0,0,0,1,0,0,0,0,1)}34.63%{-webkit-transform:matrix3d(1.018,0,0,0,0,.996,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.018,0,0,0,0,.996,0,0,0,0,1,0,0,0,0,1)}36.24%{-webkit-transform:matrix3d(1.013,0,0,0,0,.992,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.013,0,0,0,0,.992,0,0,0,0,1,0,0,0,0,1)}40.14%{-webkit-transform:matrix3d(1.004,0,0,0,0,.989,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.004,0,0,0,0,.989,0,0,0,0,1,0,0,0,0,1)}50.55%{-webkit-transform:matrix3d(.996,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.996,0,0,0,0,.997,0,0,0,0,1,0,0,0,0,1)}62.36%{-webkit-transform:matrix3d(.999,0,0,0,0,1.001,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.999,0,0,0,0,1.001,0,0,0,0,1,0,0,0,0,1)}100%,79.08%,84.68%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@-webkit-keyframes animJellyThreeQuarterScale{0%{-webkit-transform:matrix3d(.2,0,0,0,0,.2,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.2,0,0,0,0,.2,0,0,0,0,1,0,0,0,0,1)}2.4%{-webkit-transform:matrix3d(.447,0,0,0,0,.478,0,0,0,0,1,0,0,-12.759,0,1);transform:matrix3d(.447,0,0,0,0,.478,0,0,0,0,1,0,0,-12.759,0,1)}3.28%{-webkit-transform:matrix3d(.519,0,0,0,0,.565,0,0,0,0,1,0,0,-20.381,0,1);transform:matrix3d(.519,0,0,0,0,.565,0,0,0,0,1,0,0,-20.381,0,1)}4.3%{-webkit-transform:matrix3d(.589,0,0,0,0,.649,0,0,0,0,1,0,0,-30.025,0,1);transform:matrix3d(.589,0,0,0,0,.649,0,0,0,0,1,0,0,-30.025,0,1)}4.8%{-webkit-transform:matrix3d(.618,0,0,0,0,.682,0,0,0,0,1,0,0,-34.797,0,1);transform:matrix3d(.618,0,0,0,0,.682,0,0,0,0,1,0,0,-34.797,0,1)}6.49%{-webkit-transform:matrix3d(.692,0,0,0,0,.762,0,0,0,0,1,0,0,-49.647,0,1);transform:matrix3d(.692,0,0,0,0,.762,0,0,0,0,1,0,0,-49.647,0,1)}7.21%{-webkit-transform:matrix3d(.715,0,0,0,0,.782,0,0,0,0,1,0,0,-55.053,0,1);transform:matrix3d(.715,0,0,0,0,.782,0,0,0,0,1,0,0,-55.053,0,1)}8.61%{-webkit-transform:matrix3d(.746,0,0,0,0,.803,0,0,0,0,1,0,0,-63.487,0,1);transform:matrix3d(.746,0,0,0,0,.803,0,0,0,0,1,0,0,-63.487,0,1)}9.61%{-webkit-transform:matrix3d(.759,0,0,0,0,.806,0,0,0,0,1,0,0,-67.836,0,1);transform:matrix3d(.759,0,0,0,0,.806,0,0,0,0,1,0,0,-67.836,0,1)}9.69%{-webkit-transform:matrix3d(.76,0,0,0,0,.806,0,0,0,0,1,0,0,-68.128,0,1);transform:matrix3d(.76,0,0,0,0,.806,0,0,0,0,1,0,0,-68.128,0,1)}12.89%{-webkit-transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.433,0,1);transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.433,0,1)}12.91%{-webkit-transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.447,0,1);transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.447,0,1)}15.78%{-webkit-transform:matrix3d(.769,0,0,0,0,.763,0,0,0,0,1,0,0,-74.797,0,1);transform:matrix3d(.769,0,0,0,0,.763,0,0,0,0,1,0,0,-74.797,0,1)}17.22%{-webkit-transform:matrix3d(.765,0,0,0,0,.755,0,0,0,0,1,0,0,-74.255,0,1);transform:matrix3d(.765,0,0,0,0,.755,0,0,0,0,1,0,0,-74.255,0,1)}21.78%{-webkit-transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.836,0,1);transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.836,0,1)}21.94%{-webkit-transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.749,0,1);transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.749,0,1)}28.33%{-webkit-transform:matrix3d(.75,0,0,0,0,.749,0,0,0,0,1,0,0,-68.815,0,1);transform:matrix3d(.75,0,0,0,0,.749,0,0,0,0,1,0,0,-68.815,0,1)}30.67%{-webkit-transform:matrix3d(.749,0,0,0,0,.75,0,0,0,0,1,0,0,-68.09,0,1);transform:matrix3d(.749,0,0,0,0,.75,0,0,0,0,1,0,0,-68.09,0,1)}34.27%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.391,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.391,0,1)}39.44%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.089,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.089,0,1)}46.61%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.277,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.277,0,1)}48.45%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.342,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.342,0,1)}58.94%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.524,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.524,0,1)}61.66%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.528,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.528,0,1)}66.23%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.521,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.521,0,1)}71.19%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.509,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.509,0,1)}80%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.499,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.499,0,1)}83.98%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.498,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.498,0,1)}100%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.5,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.5,0,1)}}@keyframes animJellyThreeQuarterScale{0%{-webkit-transform:matrix3d(.2,0,0,0,0,.2,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(.2,0,0,0,0,.2,0,0,0,0,1,0,0,0,0,1)}2.4%{-webkit-transform:matrix3d(.447,0,0,0,0,.478,0,0,0,0,1,0,0,-12.759,0,1);transform:matrix3d(.447,0,0,0,0,.478,0,0,0,0,1,0,0,-12.759,0,1)}3.28%{-webkit-transform:matrix3d(.519,0,0,0,0,.565,0,0,0,0,1,0,0,-20.381,0,1);transform:matrix3d(.519,0,0,0,0,.565,0,0,0,0,1,0,0,-20.381,0,1)}4.3%{-webkit-transform:matrix3d(.589,0,0,0,0,.649,0,0,0,0,1,0,0,-30.025,0,1);transform:matrix3d(.589,0,0,0,0,.649,0,0,0,0,1,0,0,-30.025,0,1)}4.8%{-webkit-transform:matrix3d(.618,0,0,0,0,.682,0,0,0,0,1,0,0,-34.797,0,1);transform:matrix3d(.618,0,0,0,0,.682,0,0,0,0,1,0,0,-34.797,0,1)}6.49%{-webkit-transform:matrix3d(.692,0,0,0,0,.762,0,0,0,0,1,0,0,-49.647,0,1);transform:matrix3d(.692,0,0,0,0,.762,0,0,0,0,1,0,0,-49.647,0,1)}7.21%{-webkit-transform:matrix3d(.715,0,0,0,0,.782,0,0,0,0,1,0,0,-55.053,0,1);transform:matrix3d(.715,0,0,0,0,.782,0,0,0,0,1,0,0,-55.053,0,1)}8.61%{-webkit-transform:matrix3d(.746,0,0,0,0,.803,0,0,0,0,1,0,0,-63.487,0,1);transform:matrix3d(.746,0,0,0,0,.803,0,0,0,0,1,0,0,-63.487,0,1)}9.61%{-webkit-transform:matrix3d(.759,0,0,0,0,.806,0,0,0,0,1,0,0,-67.836,0,1);transform:matrix3d(.759,0,0,0,0,.806,0,0,0,0,1,0,0,-67.836,0,1)}9.69%{-webkit-transform:matrix3d(.76,0,0,0,0,.806,0,0,0,0,1,0,0,-68.128,0,1);transform:matrix3d(.76,0,0,0,0,.806,0,0,0,0,1,0,0,-68.128,0,1)}12.89%{-webkit-transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.433,0,1);transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.433,0,1)}12.91%{-webkit-transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.447,0,1);transform:matrix3d(.774,0,0,0,0,.786,0,0,0,0,1,0,0,-74.447,0,1)}15.78%{-webkit-transform:matrix3d(.769,0,0,0,0,.763,0,0,0,0,1,0,0,-74.797,0,1);transform:matrix3d(.769,0,0,0,0,.763,0,0,0,0,1,0,0,-74.797,0,1)}17.22%{-webkit-transform:matrix3d(.765,0,0,0,0,.755,0,0,0,0,1,0,0,-74.255,0,1);transform:matrix3d(.765,0,0,0,0,.755,0,0,0,0,1,0,0,-74.255,0,1)}21.78%{-webkit-transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.836,0,1);transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.836,0,1)}21.94%{-webkit-transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.749,0,1);transform:matrix3d(.754,0,0,0,0,.746,0,0,0,0,1,0,0,-71.749,0,1)}28.33%{-webkit-transform:matrix3d(.75,0,0,0,0,.749,0,0,0,0,1,0,0,-68.815,0,1);transform:matrix3d(.75,0,0,0,0,.749,0,0,0,0,1,0,0,-68.815,0,1)}30.67%{-webkit-transform:matrix3d(.749,0,0,0,0,.75,0,0,0,0,1,0,0,-68.09,0,1);transform:matrix3d(.749,0,0,0,0,.75,0,0,0,0,1,0,0,-68.09,0,1)}34.27%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.391,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.391,0,1)}39.44%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.089,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.089,0,1)}46.61%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.277,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.277,0,1)}48.45%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.342,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.342,0,1)}58.94%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.524,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.524,0,1)}61.66%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.528,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.528,0,1)}66.23%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.521,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.521,0,1)}71.19%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.509,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.509,0,1)}80%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.499,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.499,0,1)}83.98%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.498,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.498,0,1)}100%{-webkit-transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.5,0,1);transform:matrix3d(.75,0,0,0,0,.75,0,0,0,0,1,0,0,-67.5,0,1)}}@-webkit-keyframes fadeToThreeQuarters{0%{opacity:0}100%{opacity:.75}}@keyframes fadeToThreeQuarters{0%{opacity:0}100%{opacity:.75}}@-webkit-keyframes fadeFromThreeQuarters{0%{opacity:.75}100%{opacity:0}}@keyframes fadeFromThreeQuarters{0%{opacity:.75}100%{opacity:0}}@-webkit-keyframes slideUp{0%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,3000,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,3000,0,1)}2.1%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,2097.078,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,2097.078,0,1)}4.2%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1451.432,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1451.432,0,1)}8.41%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,673.918,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,673.918,0,1)}12.61%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,298.665,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,298.665,0,1)}16.72%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,127.615,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,127.615,0,1)}25.03%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,17.095,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,17.095,0,1)}33.33%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}39.14%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1.13,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1.13,0,1)}100%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@keyframes slideUp{0%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,3000,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,3000,0,1)}2.1%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,2097.078,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,2097.078,0,1)}4.2%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1451.432,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1451.432,0,1)}8.41%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,673.918,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,673.918,0,1)}12.61%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,298.665,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,298.665,0,1)}16.72%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,127.615,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,127.615,0,1)}25.03%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,17.095,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,17.095,0,1)}33.33%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}39.14%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1.13,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,1.13,0,1)}100%{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}.ab-in-app-message{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:fixed;text-align:center;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);-moz-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:normal;letter-spacing:normal;z-index:1050}.ab-in-app-message.ab-clickable{cursor:pointer}.ab-in-app-message .ab-background,.ab-in-app-message .ab-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1}.ab-in-app-message .ab-mask{background-color:#cfcfcf}.ab-in-app-message .ab-close-button{display:block;cursor:pointer;position:absolute;z-index:1060}.ab-in-app-message .ab-message-text{margin:20px;overflow:hidden;vertical-align:text-bottom;word-wrap:break-word;white-space:pre-wrap;max-width:100%}.ab-in-app-message .ab-message-text.start-aligned{text-align:left;text-align:start}.ab-in-app-message .ab-message-text.end-aligned{text-align:right;text-align:end}.ab-in-app-message .ab-message-text.center-aligned{text-align:center}.ab-in-app-message .ab-message-text::-webkit-scrollbar{-webkit-appearance:none;width:9px}.ab-in-app-message .ab-message-text::-webkit-scrollbar-thumb{-webkit-appearance:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background-color:rgba(0,0,0,.4)}.ab-in-app-message .ab-message-header{display:block;font-weight:700;font-size:19px;margin-bottom:14px;line-height:23px}.ab-in-app-message .ab-message-header.start-aligned{text-align:left;text-align:start}.ab-in-app-message .ab-message-header.end-aligned{text-align:right;text-align:end}.ab-in-app-message .ab-message-header.center-aligned{text-align:center}.ab-in-app-message.ab-slideup{cursor:pointer;margin:20px;padding:10px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;right:0;font-size:13px}.ab-in-app-message.ab-slideup .ab-close-button{right:8px;top:8px;-webkit-transition:.2s;-moz-transition:.2s;-o-transition:.2s;transition:.2s}.ab-in-app-message.ab-slideup .ab-close-button:hover{font-size:18px;right:6px;top:6px}.ab-in-app-message.ab-slideup .ab-message-text{display:inline-block;margin:5px 15px 5px 10px;max-height:200px;max-width:440px}.ab-in-app-message.ab-slideup .ab-image-area{display:inline-block;width:60px;vertical-align:top;margin:5px 0 5px 5px}.ab-in-app-message.ab-slideup .ab-image-area.ab-icon-area{width:auto}.ab-in-app-message.ab-slideup .ab-image-area~.ab-message-text{max-height:60px}.ab-in-app-message.ab-slideup .ab-image-area img{width:100%}.ab-in-app-message.ab-fullscreen,.ab-in-app-message.ab-modal{right:0;left:0;margin-right:auto;margin-left:auto;font-size:14px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.ab-in-app-message.ab-fullscreen .ab-background,.ab-in-app-message.ab-fullscreen .ab-mask,.ab-in-app-message.ab-modal .ab-background,.ab-in-app-message.ab-modal .ab-mask{-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden}.ab-in-app-message.ab-fullscreen .ab-message-text,.ab-in-app-message.ab-modal .ab-message-text{overflow-y:auto;line-height:normal}.ab-in-app-message.ab-fullscreen .ab-close-button,.ab-in-app-message.ab-modal .ab-close-button{right:10px;top:10px;font-size:20px;width:20px;height:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;text-align:center}.ab-in-app-message.ab-fullscreen .ab-close-button .fa,.ab-in-app-message.ab-modal .ab-close-button .fa{line-height:20px}.ab-in-app-message.ab-fullscreen .ab-image-area,.ab-in-app-message.ab-modal .ab-image-area{position:relative;display:block;-webkit-border-radius:10px 10px 0 0;-moz-border-radius:10px 10px 0 0;border-radius:10px 10px 0 0;overflow:hidden}.ab-in-app-message.ab-fullscreen .ab-image-area img,.ab-in-app-message.ab-modal .ab-image-area img{position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.ab-in-app-message.ab-fullscreen .ab-image-area .ab-center-cropped-img,.ab-in-app-message.ab-modal .ab-image-area .ab-center-cropped-img{background-size:cover;background-repeat:no-repeat;background-position:50% 50%;position:absolute;top:0;right:0;bottom:0;left:0}.ab-in-app-message.ab-fullscreen .ab-icon,.ab-in-app-message.ab-modal .ab-icon{margin-top:20px}.ab-in-app-message.ab-fullscreen.graphic,.ab-in-app-message.ab-modal.graphic{padding:0}.ab-in-app-message.ab-fullscreen.graphic .ab-message-text,.ab-in-app-message.ab-modal.graphic .ab-message-text{display:none}.ab-in-app-message.ab-fullscreen.graphic .ab-message-buttons,.ab-in-app-message.ab-modal.graphic .ab-message-buttons{bottom:0;left:0}.ab-in-app-message.ab-fullscreen.graphic .ab-message-buttons .ab-background,.ab-in-app-message.ab-fullscreen.graphic .ab-message-buttons .ab-mask,.ab-in-app-message.ab-modal.graphic .ab-message-buttons .ab-background,.ab-in-app-message.ab-modal.graphic .ab-message-buttons .ab-mask{background-color:transparent}.ab-in-app-message.ab-fullscreen.graphic .ab-image-area,.ab-in-app-message.ab-modal.graphic .ab-image-area{height:auto;margin:0;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.ab-in-app-message.ab-fullscreen .ab-message-buttons~.ab-message-text,.ab-in-app-message.ab-modal .ab-message-buttons~.ab-message-text{margin-bottom:80px}.ab-in-app-message.ab-fullscreen.graphic .ab-image-area img,.ab-in-app-message.ab-modal.graphic .ab-image-area img{display:block;top:0;-webkit-transform:none;-ms-transform:none;transform:none}.ab-in-app-message.ab-modal{padding-top:20px;top:20%;width:290px;max-width:290px;max-height:320px}.ab-in-app-message.ab-modal .ab-message-text{max-height:121px}.ab-in-app-message.ab-modal .ab-image-area{margin-top:-20px;height:100px}.ab-in-app-message.ab-modal .ab-image-area img{max-width:100%;max-height:100%}.ab-in-app-message.ab-modal .ab-image-area.ab-icon-area{height:auto}.ab-in-app-message.ab-modal.graphic{width:auto;overflow:hidden}.ab-in-app-message.ab-modal.graphic .ab-image-area{display:inline}.ab-in-app-message.ab-modal.graphic .ab-image-area img{max-height:320px;max-width:290px}.ab-in-app-message.ab-fullscreen{top:8%;-webkit-transition:top .4s;-moz-transition:top .4s;-o-transition:top .4s;transition:top .4s;width:400px;max-height:640px}.ab-in-app-message.ab-fullscreen.landscape{width:640px;max-height:400px}.ab-in-app-message.ab-fullscreen.landscape .ab-image-area{height:200px}.ab-in-app-message.ab-fullscreen.landscape.graphic .ab-image-area{height:400px}.ab-in-app-message.ab-fullscreen.landscape .ab-message-text{max-height:100px}.ab-in-app-message.ab-fullscreen .ab-message-text{max-height:220px}.ab-in-app-message.ab-fullscreen .ab-image-area{height:320px}.ab-in-app-message.ab-fullscreen.graphic .ab-image-area{height:640px}.ab-in-app-message.ab-html-message{background-color:transparent;border:none;top:0;right:0;bottom:0;left:0;width:100%;height:100%}.ab-in-app-message.ab-html-message.ab-show{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-in-app-message.ab-html-message.ab-hide{-webkit-transition:.25s;-moz-transition:.25s;-o-transition:.25s;transition:.25s;-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:0;animation-duration:0;-webkit-animation-timing-function:linear;animation-timing-function:linear;top:100%}.ab-in-app-message .ab-message-buttons{position:absolute;bottom:0;width:100%;padding:15px 20px 20px;z-index:inherit;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ab-feed,.ab-feed .ab-feed-body{-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.ab-in-app-message .ab-message-button{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border:none;display:inline-block;font-size:12px;font-weight:700;height:auto;line-height:normal;letter-spacing:normal;padding:14px 10px;text-transform:none;margin:0;width:48%;cursor:pointer;overflow:hidden;text-overflow:ellipsis;word-wrap:normal;white-space:nowrap}.ab-in-app-message .ab-message-button:first-of-type{float:left}.ab-in-app-message .ab-message-button:last-of-type{float:right}.ab-in-app-message .ab-message-button:first-of-type:last-of-type{width:100%}.ab-in-app-message .ab-message-button a{color:inherit;text-decoration:inherit}.ab-in-app-message img{display:inline-block}.ab-in-app-message .ab-icon{display:inline-block;padding:10px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.ab-in-app-message .ab-icon .fa{font-size:30px;width:30px}.ab-start-hidden{visibility:hidden}.ab-effect-slide.ab-show{-webkit-animation-name:animSlideIn;animation-name:animSlideIn;-webkit-animation-duration:1.25s;animation-duration:1.25s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-effect-slide.ab-hide{-webkit-animation-name:animSlideOut;animation-name:animSlideOut;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-effect-fullscreen.ab-show,.ab-effect-modal.ab-show{-webkit-animation-name:animJelly;animation-name:animJelly;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-effect-fullscreen.ab-hide,.ab-effect-modal.ab-hide{-webkit-animation-name:animScale;animation-name:animScale;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-direction:reverse;animation-direction:reverse;animation-fill-mode:forwards;-webkit-transition:.25s;-moz-transition:.25s;-o-transition:.25s;transition:.25s}.ab-centering-div{position:fixed;text-align:center;z-index:1050;top:0;right:0;bottom:0;left:0;pointer-events:none}.ab-centering-div .ab-in-app-message{display:inline-block;pointer-events:all}@media (max-width:750px){.ab-in-app-message.ab-slideup{width:90%;margin:5%}.ab-in-app-message.ab-slideup .ab-message-text{margin:2%;max-width:100%}.ab-in-app-message.ab-slideup .ab-image-area{width:20%;margin:2%}.ab-in-app-message.ab-slideup .ab-image-area~.ab-message-text{max-width:72%}.ab-in-app-message.ab-slideup .ab-image-area img{width:100%}.ab-in-app-message.ab-fullscreen,.ab-in-app-message.ab-fullscreen.landscape{top:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen .ab-background,.ab-in-app-message.ab-fullscreen .ab-mask,.ab-in-app-message.ab-fullscreen.landscape .ab-background,.ab-in-app-message.ab-fullscreen.landscape .ab-mask{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen.ab-effect-fullscreen.ab-show,.ab-in-app-message.ab-fullscreen.landscape.ab-effect-fullscreen.ab-show{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-in-app-message.ab-fullscreen.ab-effect-fullscreen.ab-hide,.ab-in-app-message.ab-fullscreen.landscape.ab-effect-fullscreen.ab-hide{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:0;animation-duration:0;-webkit-animation-timing-function:linear;animation-timing-function:linear;top:100%}.ab-in-app-message.ab-fullscreen .ab-image-area,.ab-in-app-message.ab-fullscreen.landscape .ab-image-area{height:50%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen .ab-message-text,.ab-in-app-message.ab-fullscreen.landscape .ab-message-text{top:50%;right:0;bottom:0;left:0;position:absolute;height:auto;max-height:none}.ab-in-app-message.ab-fullscreen.graphic,.ab-in-app-message.ab-fullscreen.landscape.graphic{display:block}.ab-in-app-message.ab-fullscreen.graphic .ab-image-area,.ab-in-app-message.ab-fullscreen.landscape.graphic .ab-image-area{height:100%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen .ab-close-button,.ab-in-app-message.ab-fullscreen.landscape .ab-close-button{font-size:6vw;width:6vw;height:6vw;-webkit-border-radius:3vw;-moz-border-radius:3vw;border-radius:3vw;right:3vw;top:3vw}}@media (max-device-width:750px) and (orientation:landscape){.ab-in-app-message.ab-modal{top:0;margin:0}.ab-in-app-message.ab-fullscreen .ab-close-button,.ab-in-app-message.ab-fullscreen.landscape .ab-close-button{font-size:6vh;width:6vh;height:6vh;-webkit-border-radius:3vh;-moz-border-radius:3vh;border-radius:3vh;right:3vh;top:3vh}}@media (min-device-width:321px) and (max-device-width:750px) and (orientation:landscape){.ab-in-app-message.ab-modal{margin-top:20px}}@media (min-device-width:751px) and (max-device-width:1024px) and (orientation:landscape){.ab-in-app-message.ab-fullscreen:not(.landscape){top:0;margin-top:20px}}@media (min-width:751px){.ab-in-app-message.ab-fullscreen .ab-image-area img{max-height:100%;max-width:100%}}@media (max-height:790px) and (min-width:751px){.ab-in-app-message.ab-fullscreen:not(.landscape){margin-top:2%;top:0}}@media (max-height:650px) and (min-width:751px){.ab-in-app-message.ab-fullscreen:not(.landscape).ab-effect-fullscreen.ab-show{-webkit-animation-name:animJellyThreeQuarterScale;animation-name:animJellyThreeQuarterScale;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-timing-function:linear;animation-timing-function:linear;animation-fill-mode:both}.ab-in-app-message.ab-fullscreen:not(.landscape).ab-effect-fullscreen.ab-hide{-webkit-animation-name:animJellyThreeQuarterScale;animation-name:animJellyThreeQuarterScale;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-direction:reverse;animation-direction:reverse;animation-fill-mode:forwards;-webkit-transition:.25s;-moz-transition:.25s;-o-transition:.25s;transition:.25s}}@media (max-height:500px) and (min-width:751px){.ab-in-app-message.ab-fullscreen:not(.landscape){top:0;height:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;width:400px}.ab-in-app-message.ab-fullscreen:not(.landscape) .ab-background,.ab-in-app-message.ab-fullscreen:not(.landscape) .ab-mask{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen:not(.landscape).ab-effect-fullscreen.ab-show{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-in-app-message.ab-fullscreen:not(.landscape).ab-effect-fullscreen.ab-hide{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:0;animation-duration:0;-webkit-animation-timing-function:linear;animation-timing-function:linear;top:100%}.ab-in-app-message.ab-fullscreen:not(.landscape) .ab-image-area{height:50%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen:not(.landscape) .ab-message-text{top:50%;right:0;bottom:0;left:0;position:absolute;height:auto;max-height:none}.ab-in-app-message.ab-fullscreen:not(.landscape).graphic{display:block}.ab-in-app-message.ab-fullscreen:not(.landscape).graphic .ab-image-area{height:100%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}}@media (max-height:430px){.ab-in-app-message.ab-fullscreen.landscape{top:0}}@media (max-height:400px){.ab-in-app-message.ab-fullscreen.landscape{top:0;height:100%;width:100%;max-height:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen.landscape .ab-background,.ab-in-app-message.ab-fullscreen.landscape .ab-mask{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen.landscape.ab-effect-fullscreen.ab-show{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-in-app-message.ab-fullscreen.landscape.ab-effect-fullscreen.ab-hide{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:0;animation-duration:0;-webkit-animation-timing-function:linear;animation-timing-function:linear;top:100%}.ab-in-app-message.ab-fullscreen.landscape .ab-image-area{height:50%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ab-in-app-message.ab-fullscreen.landscape .ab-message-text{top:50%;right:0;bottom:0;left:0;position:absolute;height:auto;max-height:none}.ab-in-app-message.ab-fullscreen.landscape.graphic{display:block}.ab-in-app-message.ab-fullscreen.landscape.graphic .ab-image-area{height:100%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}}.ab-page-blocker{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1040}.ab-page-blocker.ab-show{-webkit-animation-name:fadeToThreeQuarters;animation-name:fadeToThreeQuarters;-webkit-animation-duration:.16666667s;animation-duration:.16666667s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-page-blocker.ab-hide{-webkit-animation-name:fadeFromThreeQuarters;animation-name:fadeFromThreeQuarters;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-feed.ab-hide,.ab-feed.ab-show{-webkit-animation-timing-function:linear}body>.ab-feed{position:fixed;top:0;right:0;bottom:0;width:421px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}body>.ab-feed .ab-feed-body{position:absolute;top:0;left:0;right:0;border:none;border-left:1px solid #d0d0d0;padding-top:58px;min-height:100%}body>.ab-feed .ab-no-cards-message{position:absolute;width:100%;margin-left:-20px;top:40%}.ab-feed{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;box-sizing:border-box;-webkit-box-shadow:0 1px 7px 1px rgba(66,82,113,.15);-moz-box-shadow:0 1px 7px 1px rgba(66,82,113,.15);box-shadow:0 1px 7px 1px rgba(66,82,113,.15);width:402px;background-color:#eee;font-size:13px;line-height:130%;letter-spacing:normal;overflow-y:auto;overflow-x:visible;-webkit-overflow-scrolling:touch;-webkit-transition:opacity .25s;-moz-transition:opacity .25s;-o-transition:opacity .25s;transition:opacity .25s}.ab-feed .ab-feed-body{box-sizing:border-box;border:1px solid #d0d0d0;border-top:none;padding:20px 20px 0}.ab-feed.ab-show{-webkit-animation-name:animSlideIn;animation-name:animSlideIn;-webkit-animation-duration:1s;animation-duration:1s;animation-timing-function:linear}.ab-feed.ab-hide{opacity:0;-webkit-animation-name:animSlideOut;animation-name:animSlideOut;-webkit-animation-duration:.25s;animation-duration:.25s;animation-timing-function:linear}.ab-feed .ab-card{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;width:100%;border:1px solid #d0d0d0;margin-bottom:20px;overflow:hidden;background-color:#fff}.ab-feed .ab-card .ab-pinned-indicator{position:absolute;right:0;top:0;margin-right:-1px;width:0;height:0;border-style:solid;border-width:0 24px 24px 0;border-color:transparent #1676d0 transparent transparent}.ab-feed .ab-card .ab-pinned-indicator .fa-star{position:absolute;right:-21px;top:2px;font-size:9px;color:#fff}.ab-feed .ab-card.ab-hide{-webkit-animation-name:animSlideLeft;animation-name:animSlideLeft;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.ab-feed .ab-card .ab-close-button{display:block;cursor:pointer;position:absolute;z-index:1060;right:10px;top:10px;font-size:20px;width:20px;height:20px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;text-align:center;visibility:hidden;opacity:0;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s;transition:.5s}.ab-feed .ab-card .ab-close-button .fa{line-height:20px}.ab-feed .ab-card:hover .ab-close-button{visibility:visible;opacity:1}.ab-feed .ab-card a{color:inherit;text-decoration:none}.ab-feed .ab-card a:hover{text-decoration:underline}.ab-feed .ab-card .ab-image-area{display:inline-block;vertical-align:top;line-height:0;overflow:hidden;width:100%;-webkit-box-sizing:initial;-moz-box-sizing:initial;box-sizing:initial}.ab-feed .ab-card .ab-image-area img{height:auto;width:100%}.ab-feed .ab-card.ab-banner .ab-card-body{display:none}.ab-feed .ab-card .ab-card-body{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;width:100%;position:relative}.ab-feed .ab-card .ab-unread-indicator{position:absolute;bottom:0;margin-right:-1px;width:100%;height:5px;background-color:#1676d0}.ab-feed .ab-card .ab-unread-indicator.read{background-color:transparent}.ab-feed .ab-card .ab-title{overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;font-size:18px;line-height:130%;font-weight:700;padding:20px 20px 0}.ab-feed .ab-card .ab-description{color:#545454;padding:15px 20px;word-wrap:break-word;white-space:pre-wrap}.ab-feed .ab-card .ab-url-area{color:#1676d0;margin-top:15px}.ab-feed .ab-card.ab-classic-card .ab-card-body{min-height:95px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.ab-feed .ab-card.ab-classic-card.with-image .ab-card-body{min-height:100px;padding-left:80px}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area{width:60px;height:60px;padding:20px 0 20px 20px;position:absolute}.ab-feed .ab-card.ab-classic-card.with-image .ab-image-area img{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;width:60px;height:60px}.ab-feed .ab-card.ab-classic-card.with-image .ab-title{background-color:transparent;font-size:16px}.ab-feed .ab-card.ab-classic-card.with-image .ab-description{padding-top:10px}.ab-feed .ab-card.ab-control-card{height:0;width:0;margin:0;border:0}.ab-feed .ab-feed-buttons-wrapper{position:relative;background-color:#282828;height:38px;-webkit-box-shadow:0 1px 4px 1px rgba(66,82,113,.35);-moz-box-shadow:0 1px 4px 1px rgba(66,82,113,.35);box-shadow:0 1px 4px 1px rgba(66,82,113,.35);z-index:1}.ab-feed .ab-feed-buttons-wrapper .ab-close-button,.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button{cursor:pointer;color:#fff;font-size:18px;margin:10px;-webkit-transition:.2s;-moz-transition:.2s;-o-transition:.2s;transition:.2s}.ab-feed .ab-feed-buttons-wrapper .ab-close-button:hover,.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button:hover{font-size:22px}.ab-feed .ab-feed-buttons-wrapper .ab-close-button{float:right;margin-top:9px}.ab-feed .ab-feed-buttons-wrapper .ab-close-button:hover{margin-top:6px;margin-right:9px}.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button{margin-left:12px}.ab-feed .ab-feed-buttons-wrapper .ab-refresh-button:hover{margin-top:8px;margin-left:10px}.ab-feed .ab-no-cards-message{text-align:center;margin-bottom:20px}@media (max-width:750px){body>.ab-feed{width:100%;-webkit-transition:.25s;-moz-transition:.25s;-o-transition:.25s;transition:.25s}body>.ab-feed.ab-show{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;animation-timing-function:linear}body>.ab-feed.ab-hide{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:0;animation-duration:0;-webkit-animation-timing-function:linear;animation-timing-function:linear;top:100%;opacity:.5}}";
          var d = !1,
              e = !1,
              g = !1,
              h = !1,
              q = null;
          a.Sh(function(a) {
              d = a.openInAppMessagesInNewTab || !1;
              e = a.openCardsInNewTab || a.openNewsFeedCardsInNewTab || !1;
              g = a.requireExplicitInAppMessageDismissal || !1;
              h = a.enableHtmlInAppMessages || !1;
              q = null;
              a.doNotLoadFontAwesome || null !== document.querySelector('link[rel=stylesheet][href="https://use.fontawesome.com/7f85a56ba4.css"]') || (a = document.createElement("link"), a.setAttribute("rel", "stylesheet"), a.setAttribute("href", "https://use.fontawesome.com/7f85a56ba4.css"), document.getElementsByTagName("head")[0].appendChild(a));
              null == document.getElementById("ab-css-definitions") && (a = document.createElement("style"), a.innerHTML = b.zg, a.id = "ab-css-definitions", document.getElementsByTagName("head")[0].appendChild(a));
              g || document.addEventListener("keydown", function(a) {
                  a = a || window.event;
                  if (a.keyCode === b.Ia.xi && 0 < document.querySelectorAll(".ab-modal-interactions").length) {
                      a = document.getElementsByClassName("ab-html-message");
                      for (var c = !1, d = 0; d < a.length; d++) {
                          var e = a[d].contentWindow.document.getElementsByClassName("ab-programmatic-close-button")[0];
                          null != e && (b.ha.jh(e), c = !0)
                      }
                      c || (a = document.querySelectorAll(".ab-page-blocker")[0], null != a && b.ha.jh(a))
                  }
              }, !1)
          });
          var n = {
              Dj: function() {
                  null == q && (q = a.Th(function(a) {
                      n.showInAppMessage(a[0]);
                      return a.slice(1)
                  }));
                  return q
              },
              Xk: function(e, q, n) {
                  if (null == e) return !1;
                  if (e instanceof b.Na && !h) return f.f.error('For security reasons, HTML in-app messages are disabled by default. Use the "enableHtmlInAppMessages" configuration option for appboy.initialize to enable these messages.'), !1;
                  if (e instanceof b.wc) return f.f.info("User received control for a multivariate test, logging to Braze servers."),
                      a.Cd(e), !0;
                  if (!(e instanceof b.j)) return !1;
                  null == q && (q = document.getElementsByTagName("body")[0]);
                  if (e.Nc() && 0 < q.querySelectorAll(".ab-modal-interactions").length) return f.f.info("Cannot show in-app message '" + e.message + "' because another message is being shown. This message will be returned to the queue for future handling."), e.Df = !0, !1;
                  if (b.ma.rk()) {
                      var m = b.ma.hk();
                      if (m === b.ma.Ca.Sd && e.orientation === b.j.Ca.LANDSCAPE || m === b.ma.Ca.Ue && e.orientation === b.j.Ca.PORTRAIT) return f.f.info("Not showing " +
                          (e.orientation === b.j.Ca.PORTRAIT ? "portrait" : "landscape") + " in-app message '" + e.message + "' because the screen is currently " + (m === b.ma.Ca.Sd ? "portrait" : "landscape")), !1
                  }
                  var p = this,
                      m = e.La(a, c, function() {
                          p.Oh()
                      }, function(c) {
                          if (e.Nc() && e.Wh()) {
                              var d = document.createElement("div");
                              d.className = "ab-page-blocker";
                              d.className += e.sd();
                              d.style.backgroundColor = b.Sa.sb(e.frameColor);
                              q.appendChild(d);
                              if (!g) {
                                  var h = Date.now();
                                  d.onclick = function(a) {
                                      Date.now() - h > b.j.Pi && (a = a || window.event, e.fa(c), e.Oc(), a.stopPropagation())
                                  }
                              }
                          } else if (e instanceof b.mb) {
                              for (var f = document.querySelectorAll(".ab-slideup"), d = null, m = f.length - 1; 0 <= m; m--)
                                  if (f[m] !== c) {
                                      d = f[m];
                                      break
                                  } e.slideFrom === b.j.Vd.TOP ? (f = 0, null != d && (f = d.offsetTop + d.offsetHeight), c.style.top = Math.max(f, 0) + "px") : (f = 0, null != d && (f = (window.innerHeight || document.documentElement.clientHeight) - d.offsetTop), c.style.bottom = Math.max(f, 0) + "px")
                          }
                          a.Cd(e);
                          e.dismissType === b.j.xc.AUTO_DISMISS && setTimeout(function() {
                              q.contains(c) && (e.fa(c), e.Oc())
                          }, e.duration);
                          "function" === typeof n && n()
                      }, d);
                  q.appendChild(m);
                  e.Nc() &&
                      m.focus();
                  e.Hh(m);
                  return !0
              },
              Oh: function(c, d, g) {
                  function h(c) {
                      for (var d = c.querySelectorAll(".ab-feed"), e = null, g = 0; g < d.length; g++) d[g].parentNode === c && (e = d[g]);
                      null != e ? (b.J.fa(a, e), e.parentNode.replaceChild(p, e)) : c.appendChild(p);
                      p.getElementsByClassName("ab-feed-buttons-wrapper")[0].focus();
                      a.Bh();
                      m.qe(a, p)
                  }

                  function q(a, c) {
                      if (null == c) return a;
                      var d, e = [];
                      for (d = 0; d < c.length; d++) e.push(c[d].toLowerCase());
                      c = [];
                      for (var g = 0; g < a.length; g++) {
                          var h = [];
                          for (d = 0; d < a[g].categories.length; d++) h.push(a[g].categories[d].toLowerCase());
                          0 < b.G.uh(h, e).length && c.push(a[g])
                      }
                      return c
                  }
                  null == c && (c = document.getElementsByTagName("body")[0]);
                  var n = !1,
                      m = null;
                  null == d ? (m = a.re(), m.Je(q(m.cards, g), m.lastUpdated, null, a, e), n = !0) : m = new b.J(q(d, g), new Date);
                  var p = m.La(a, e);
                  if (n) {
                      if (null == m.lastUpdated || Date.now() - m.lastUpdated.valueOf() > b.J.bd) f.f.info("Cached feed was older than max TTL of " + b.J.bd + " ms, requesting an update from the server."), m.Tf(a, p);
                      var k = Date.now();
                      d = a.Rh(function(c) {
                          var d = p.querySelectorAll(".ab-refresh-button")[0];
                          if (null !=
                              d) {
                              var h = 500,
                                  f = parseInt(p.getAttribute(b.J.Od)),
                                  h = isNaN(f) ? h - (Date.now() - k) : h - (Date.now() - f);
                              setTimeout(function() {
                                  d.className = d.className.replace(/fa-spin/g, "")
                              }, Math.max(h, 0))
                          }
                          m.Je(q(c.cards, g), c.lastUpdated, p, a, e)
                      });
                      m.Kh(d, p)
                  }
                  null != c ? h(c) : window.onload = function(a) {
                      return function() {
                          "function" === typeof a && a();
                          h(document.getElementsByTagName("body")[0])
                      }
                  }(window.onload)
              },
              Tj: function() {
                  for (var c = document.querySelectorAll(".ab-feed"), d = 0; d < c.length; d++) b.J.fa(a, c[d])
              },
              el: function(a, b, c) {
                  0 < document.querySelectorAll(".ab-feed").length ?
                      n.destroyFeed() : n.showFeed(a, b, c)
              },
              Wk: function(c, d) {
                  function g(c) {
                      for (var d = c.querySelectorAll(".ab-feed"), e = null, g = 0; g < d.length; g++) d[g].parentNode === c && (e = d[g]);
                      null != e ? (b.qa.fa(a, e), e.parentNode.replaceChild(q, e)) : c.appendChild(q);
                      a.Ah();
                      h.qe(a, q)
                  }
                  null == c && (c = document.getElementsByTagName("body")[0]);
                  var h = null,
                      h = a.Lc();
                  "function" === typeof d && h.Je(d(h.cards.slice()), h.lastUpdated, null, a, e);
                  var q = h.La(a, e);
                  if (null == h.lastUpdated || Date.now() - h.lastUpdated.valueOf() > b.qa.bd) f.f.info("Cached content cards were older than max TTL of " +
                      b.qa.bd + " ms, requesting a sync from the server."), h.Tf(a, q);
                  var n = Date.now(),
                      m = a.Ph(function(c) {
                          var g = q.querySelectorAll(".ab-refresh-button")[0];
                          if (null != g) {
                              var f = 500,
                                  m = parseInt(q.getAttribute(b.J.Od)),
                                  f = isNaN(m) ? f - (Date.now() - n) : f - (Date.now() - m);
                              setTimeout(function() {
                                  g.className = g.className.replace(/fa-spin/g, "")
                              }, Math.max(f, 0))
                          }
                          f = c.cards;
                          "function" === typeof d && (f = d(f.slice()));
                          h.Je(f, c.lastUpdated, q, a, e)
                      });
                  h.Kh(m, q);
                  null != c ? g(c) : window.onload = function(a) {
                      return function() {
                          "function" === typeof a &&
                              a();
                          g(document.getElementsByTagName("body")[0])
                      }
                  }(window.onload)
              },
              kk: function() {
                  for (var c = document.querySelectorAll(".ab-feed"), d = 0; d < c.length; d++) b.qa.fa(a, c[d])
              },
              dl: function(a, b) {
                  0 < document.querySelectorAll(".ab-feed").length ? n.hideContentCards() : n.showContentCards(a, b)
              }
          };
          return n
      }

      function aa(a, c) {
          var d, e = [a];
          b.G.isArray(a) && (e = a);
          if (null === c) return null;
          if (null == c) return c = {}, c[b.w.Ga] = e, c;
          if (!J(c) || null == c[b.w.Fa] && null == c[b.w.Ga]) {
              if (!b.G.isArray(c)) return f.f.error("Attempted to remove from custom attribute array but it is not an array."),
                  !1;
              for (d = 0; d < e.length; d++)
                  for (; - 1 !== (a = c.indexOf(e[d]));) c.splice(a, 1)
          } else if (c[b.w.Ga] = (c[b.w.Ga] || []).concat(e), null != c[b.w.Fa]) {
              for (d = 0; d < e.length; d++)
                  for (; - 1 !== (a = c[b.w.Fa].indexOf(e[d]));) c[b.w.Fa].splice(a, 1);
              0 === c[b.w.Fa].length && (c[b.w.Fa] = void 0)
          }
          return c
      }

      function ba(a, c) {
          var d = [a];
          b.G.isArray(a) && (d = a);
          if (null === c) return d;
          if (null == c) return c = {}, c[b.w.Fa] = d, c;
          if (!J(c) || null == c[b.w.Fa] && null == c[b.w.Ga]) {
              if (!b.G.isArray(c)) return f.f.error("Attempted to add to custom attribute array but it is not an array."),
                  !1;
              c = c.concat(d)
          } else if (c[b.w.Fa] = (c[b.w.Fa] || []).concat(d), null != c[b.w.Ga]) {
              for (a = 0; a < d.length; a++)
                  for (var e; - 1 !== (e = c[b.w.Ga].indexOf(d[a]));) c[b.w.Ga].splice(e, 1);
              0 === c[b.w.Ga].length && (c[b.w.Ga] = void 0)
          }
          return c
      }

      function ca(a, c) {
          return null === c ? a : null == c ? (c = {}, c[b.w.Xb] = a, c) : J(c) && null != c[b.w.Xb] ? (c[b.w.Xb] += a, c) : isNaN(parseInt(c)) ? (f.f.error("Attempted to increment attribute but it is not an integer."), !1) : c + a
      }

      function J(a) {
          return null != a && "object" === typeof a && !b.G.isArray(a)
      }

      function W(a) {
          function c(a) {
              var c = {},
                  d;
              for (d in a) {
                  var e = a[d];
                  null == e ? delete a[d] : c[d] = b.G.rb(e) ? b.L.Uh(e) : e
              }
              return c
          }

          function d(a, c, d, e, g) {
              null == a && (a = {});
              if ("object" !== typeof a || b.G.isArray(a)) return f.f.error(c + " requires that " + d + " be an object. Ignoring " + g + "."), !1;
              for (var h in a) {
                  if (!b.S.$a(h, e, "the " + g + " property name")) return !1;
                  c = a[h];
                  if (null != c && !b.S.ml(c, e, "the " + g + ' property "' + h + '"')) return !1
              }
              return !0
          }

          function e() {
              f.f.yd();
              E && (v.clearData(!1), v = null, y.clearData(!1), y = null, w.clearData(!1), w = null, t.ua(), t = null, C.ua(), C =
                  null, x.ua(), x = null, r.yd(), A = r = null, G.Wf(), n = p = G = null, D = [], k = null);
              F = E = !1
          }

          function g() {
              if (F) return !1;
              if (!E) throw Error("Appboy must be initialized before calling methods.");
              return !0
          }
          var h = {
              Ij: function(a) {
                  return new b.Ld(b.Ic, a)
              },
              Nj: function(a, c, d, e, g, h, f, n, m) {
                  null == g && (g = {});
                  var p = new b.ic(m, f),
                      B = new b.fc(f, p, m, g[q.dj]);
                  return new b.K(a, d, e, g[q.ai], c, B, n, p, m, f, h)
              },
              Af: function() {
                  return new b.Pa
              },
              Kj: function(a) {
                  return new b.yc(a)
              },
              Jj: function(a, c) {
                  return new b.$b(a, c)
              },
              Hj: function(a, c, d) {
                  return new b.Ma(a,
                      c, d)
              },
              Oj: function(a, c, d, e) {
                  return new b.Hb(a, c, d, e)
              },
              Mj: function(a, c, d, e, g, h, f) {
                  return new b.PushManager(a, c, d, e + "/safari/" + c, g, h, f)
              },
              Lj: function(a) {
                  return new b.Fb(a)
              }
          };
          null == a && (a = h);
          var q = {
                  $h: "allowCrawlerActivity",
                  Gd: "baseUrl",
                  Ui: "noCookies",
                  ui: "enableLogging",
                  Ei: "minimumIntervalBetweenTriggerActionsInSeconds",
                  dj: "sessionTimeoutInSeconds",
                  ai: "appVersion",
                  cj: "serviceWorkerLocation",
                  aj: "safariWebsitePushId",
                  rg: "localization",
                  xg: "sdkFlavor",
                  og: "language"
              },
              n, m, p, k, r, l, t, v, x, z, y, w, C, A, G, I = new b.Pa,
              D = [],
              E = !1,
              F = !1;
          b.Ua = {};
          b.Ua.sg = 100;
          b.Ua.Ye = "inAppMessage must be an ab.InAppMessage object";
          b.Ua.Xe = "must be an ab.Card object";
          return {
              Sh: function(a) {
                  return I.fb(a)
              },
              Ff: function(c, d) {
                  if (E) return f.f.info("Braze has already been initialized with an API key."), !0;
                  f.f.qc(null != d && d[q.ui]);
                  if (null == c || "" === c || "string" !== typeof c) return f.f.error("Braze requires a valid API key to be initialized."), !1;
                  n = c;
                  p = d || {};
                  b.Ic.qc();
                  if (b.Ic.nk && !p[q.$h]) return f.f.info("Ignoring activity from crawler bot " + navigator.userAgent),
                      F = !0, !1;
                  m = d = b.Wd.Rj(c, p[q.Ui] || !1);
                  if ((new b.h.bb(null, !0)).Ja(b.h.B.af)) return f.f.info("Ignoring all activity due to previous opt out"), F = !0, !1;
                  var e = ["mparticle", "wordpress"];
                  if (null != p[q.xg]) {
                      var g = p[q.xg]; - 1 !== e.indexOf(g) ? k = g : f.f.error("Invalid sdk flavor passed: " + g)
                  }
                  var h = [];
                  t = a.Af();
                  D.push(t);
                  v = a.Jj(t, d);
                  h.push(v);
                  C = a.Af();
                  D.push(C);
                  y = a.Kj(C);
                  h.push(y);
                  e = null != p[q.Gd] ? p[q.Gd] : "https://dev.appboy.com/api/v3";
                  l = a.Ij(d);
                  g = new b.lb(d);
                  r = a.Nj(n, e, "2.2.2", k, p, function(a) {
                      if (E)
                          for (var b =
                                  0; b < h.length; b++) h[b].Ad(a)
                  }, d, l, g);
                  var B = p[q.Ei];
                  null == B && (B = 30);
                  w = a.Oj(B, y, d, r);
                  h.push(w);
                  x = a.Af();
                  D.push(x);
                  z = a.Hj(x, r, d);
                  h.push(z);
                  r.Zk(function() {
                      z.vc()
                  });
                  r.Ff();
                  A = a.Mj(r.Mc(), n, l, e, p[q.cj], p[q.aj], g);
                  G = a.Lj(r.Mc());
                  d = "Initialized ";
                  p && p[q.Gd] && (d += 'for the Braze backend at "' + p[q.Gd] + '" ');
                  f.f.info(d + ('with API key "' + c + '".'));
                  c = b.Ic.language;
                  d = !1;
                  p && (p[q.og] && (c = p[q.og], d = !0), p[q.rg] && (c = p[q.rg], d = !0));
                  b.If.qc(c, d);
                  I.ya(p);
                  return E = !0
              },
              yd: function() {
                  f.f.info("Destroying appboy instance");
                  m =
                      null;
                  e()
              },
              dk: function(a) {
                  g() && (null == a && f.f.error("getDeviceId must be supplied with a callback. e.g., appboy.getDeviceId(function(deviceId) {console.log('the device id is ' + deviceId)})"), "function" === typeof a && a(l.zd().id))
              },
              Yf: function() {
                  f.f.Yf()
              },
              Uf: function(a) {
                  f.f.Uf(a)
              },
              Ae: function(a) {
                  if (g()) {
                      r.Ae(A, a);
                      var c = f.Z.ib.dc,
                          d = new f.Z(c, f.f);
                      d.nh(c.la.vg, function(a, e) {
                          function g() {
                              w.Ob(b.ia.Bc, [q], n)
                          }
                          var h = e.lastClick,
                              q = e.trackingString;
                          f.f.info("Firing push click trigger from " + q + " push click at " +
                              h);
                          var n = r.Qj(h, q);
                          r.Gk(g, g);
                          d.kh(c.la.vg, a)
                      });
                      d.$j(c.la.ci, function(a) {
                          z.jk(a)
                      })
                  }
              },
              Nb: function(a, b) {
                  g() && (null == a || 0 === a.length ? f.f.error("changeUser requires a non-empty userId.") : r.Nb(a.toString(), [y, v, z, w], b, A))
              },
              Mc: function() {
                  if (g()) return r.Mc()
              },
              Dd: function() {
                  g() && r.Dd()
              },
              Ee: function() {
                  g() && r.Ee()
              },
              Rh: function(a) {
                  if (g()) return t.fb(a)
              },
              re: function() {
                  if (g()) return v.re()
              },
              vc: function() {
                  if (g()) return z.vc()
              },
              Ph: function(a) {
                  if (g()) return x.fb(a)
              },
              Lc: function() {
                  if (g()) return z.Lc()
              },
              Th: function(a) {
                  if (g()) return C.fb(a)
              },
              Cd: function(a) {
                  if (g()) return a instanceof b.j || a instanceof b.wc ? r.Cd(a).O : (f.f.error(b.Ua.Ye), !1)
              },
              ye: function(a) {
                  if (g()) {
                      if (!(a instanceof b.j)) return f.f.error(b.Ua.Ye), !1;
                      var c = r.ye(a);
                      if (c.O)
                          for (var d = 0; d < c.N.length; d++) w.Ob(b.ia.Cb, [a.triggerId], c.N[d]);
                      return c.O
                  }
              },
              xe: function(a, c) {
                  if (g()) {
                      if (!(a instanceof b.j.wa)) return f.f.error("button must be an ab.InAppMessage.Button object"), !1;
                      if (!(c instanceof b.j)) return f.f.error(b.Ua.Ye), !1;
                      var d = r.xe(a, c);
                      if (d.O)
                          for (var e = 0; e < d.N.length; e++) w.Ob(b.ia.Cb,
                              [c.triggerId, a.id], d.N[e]);
                      return d.O
                  }
              },
              Bd: function(a, c, d) {
                  if (g()) {
                      if (!(a instanceof b.Na)) return f.f.error("inAppMessage argument to logInAppMessageHtmlClick must be an ab.HtmlMessage object."), !1;
                      d = r.Bd(a, c, d);
                      if (d.O)
                          for (var e = 0; e < d.N.length; e++) w.Ob(b.ia.Cb, [a.triggerId, c], d.N[e]);
                      return d.O
                  }
              },
              Rb: function(a, c) {
                  if (g()) {
                      if (!b.G.isArray(a)) return f.f.error("cards must be an array"), !1;
                      for (var d = 0; d < a.length; d++)
                          if (!(a[d] instanceof b.b)) return f.f.error("Each card in cards " + b.Ua.Xe), !1;
                      return r.Rb(a,
                          c).O
                  }
              },
              Qb: function(a, c) {
                  if (g()) return a instanceof b.b ? r.Qb(a, c).O : (f.f.error("card " + b.Ua.Xe), !1)
              },
              we: function(a) {
                  if (g()) return a instanceof b.b ? r.we(a).O : (f.f.error("card " + b.Ua.Xe), !1)
              },
              Bh: function() {
                  if (g()) return r.Ch(f.ng.Bi).O
              },
              Ah: function() {
                  if (g()) return r.Ch(f.ng.mi).O
              },
              Aa: function(a) {
                  if (g()) {
                      for (var b = 0; b < D.length; b++) D[b].Aa(a);
                      I.Aa(a)
                  }
              },
              ua: function() {
                  if (g())
                      for (var a = 0; a < D.length; a++) D[a].ua()
              },
              Kf: function(a, e) {
                  if (g()) {
                      if (null == a || 0 >= a.length) return f.f.error('logCustomEvent requires a non-empty eventName, got "' +
                          a + '". Ignoring event.'), !1;
                      if (!b.S.$a(a, "log custom event", "the event name") || !d(e, "logCustomEvent", "eventProperties", 'log custom event "' + a + '"', "event")) return !1;
                      var h = r.Kf(a, c(e));
                      if (h.O) {
                          f.f.info('Logged custom event "' + a + '".');
                          for (var q = 0; q < h.N.length; q++) w.Ob(b.ia.Yb, [a, e], h.N[q])
                      }
                      return h.O
                  }
              },
              Lf: function(a, e, h, q, n) {
                  if (g()) {
                      null == h && (h = "USD");
                      null == q && (q = 1);
                      if (null == a || 0 >= a.length) return f.f.error('logPurchase requires a non-empty productId, got "' + a + '", ignoring.'), !1;
                      if (!b.S.$a(a, "log purchase",
                              "the purchase name")) return !1;
                      var m = parseFloat(e);
                      if (isNaN(m)) return f.f.error("logPurchase requires a numeric price, got " + e + ", ignoring."), !1;
                      m = m.toFixed(2);
                      e = parseInt(q);
                      if (isNaN(e)) return f.f.error("logPurchase requires an integer quantity, got " + q + ", ignoring."), !1;
                      if (1 > e || e > b.Ua.sg) return f.f.error("logPurchase requires a quantity >1 and <" + b.Ua.sg + ", got " + e + ", ignoring."), !1;
                      h = h.toUpperCase();
                      if (-1 === "AED AFN ALL AMD ANG AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BRL BSD BTC BTN BWP BYR BZD CAD CDF CHF CLF CLP CNY COP CRC CUC CUP CVE CZK DJF DKK DOP DZD EEK EGP ERN ETB EUR FJD FKP GBP GEL GGP GHS GIP GMD GNF GTQ GYD HKD HNL HRK HTG HUF IDR ILS IMP INR IQD IRR ISK JEP JMD JOD JPY KES KGS KHR KMF KPW KRW KWD KYD KZT LAK LBP LKR LRD LSL LTL LVL LYD MAD MDL MGA MKD MMK MNT MOP MRO MTL MUR MVR MWK MXN MYR MZN NAD NGN NIO NOK NPR NZD OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SEK SGD SHP SLL SOS SRD STD SVC SYP SZL THB TJS TMT TND TOP TRY TTD TWD TZS UAH UGX USD UYU UZS VEF VND VUV WST XAF XAG XAU XCD XDR XOF XPD XPF XPT YER ZAR ZMK ZMW ZWL".split(" ").indexOf(h)) return f.f.error("logPurchase requires a valid currencyCode, got " +
                          h + ", ignoring."), !1;
                      if (!d(n, "logPurchase", "purchaseProperties", 'log purchase "' + a + '"', "purchase")) return !1;
                      q = r.Lf(a, m, h, e, c(n));
                      if (q.O)
                          for (f.f.info("Logged " + e + " purchase" + (1 < e ? "s" : "") + ' of "' + a + '" for ' + h + " " + m + "."), h = 0; h < q.N.length; h++) w.Ob(b.ia.cc, [a, n], q.N[h]);
                      return q.O
                  }
              },
              Pb: function() {
                  if (g()) return A.Pb()
              },
              rc: function() {
                  if (g()) return A.rc()
              },
              Hf: function(a, b, c) {
                  g() && A.Hf(a, b, c)
              },
              ue: function() {
                  if (g()) return A.ue()
              },
              Ck: function(a, b, c) {
                  if (g()) return A.subscribe(c, function(b, c, d) {
                      r.Dd();
                      "function" ===
                      typeof a && a(b, c, d)
                  }, b)
              },
              jl: function(a, b) {
                  if (g()) return A.unsubscribe(a, b)
              },
              Xf: function(a, c, d, e, h) {
                  if (g()) {
                      if (!b.Md.ll(a, c)) return !1;
                      r.Xf(a, c, d, e, h);
                      return !0
                  }
              },
              hl: function() {
                  g() && G.watchPosition()
              },
              Yk: function() {
                  null != r && r.Dd();
                  var a = new b.h.bb(null, !0);
                  a.gb(b.h.B.af, "This-cookie-will-expire-in-" + a.ek());
                  a = f.Z.ib.dc;
                  (new f.Z(a, f.f)).setItem(a.la.$e, a.Ud, !0);
                  e();
                  F = !0
              },
              Ik: function() {
                  (new b.h.bb(null, !0)).remove(b.h.B.af);
                  var a = f.Z.ib.dc;
                  (new f.Z(a, f.f)).kh(a.la.$e, a.Ud);
                  e()
              },
              ol: function() {
                  if (null == m) throw Error("Appboy must be initialized before calling methods.");
                  m.clearData();
                  for (var a = b.G.keys(f.Z.ib), c = 0; c < a.length; c++)(new f.Z(f.Z.ib[a[c]], f.f)).clearData();
                  E && (v.clearData(!0), y.clearData(!0), w.clearData(!0))
              }
          }
      }
      var f = {
          gg: {}
      };
      f.gg.kl = function(a) {
          var b = "=".repeat((4 - a.length % 4) % 4);
          a = (a + b).replace(/\-/g, "+").replace(/_/g, "/");
          a = atob(a);
          for (var b = new Uint8Array(a.length), d = 0; d < a.length; ++d) b[d] = a.charCodeAt(d);
          return b
      };
      f.ba = {
          CustomEvent: "ce",
          Ii: "p",
          Yi: "pc",
          yl: "ca",
          zl: "pd",
          Ki: "i",
          Ji: "ie",
          li: "cci",
          ni: "ccic",
          ji: "ccc",
          ki: "ccd",
          Bg: "ss",
          fj: "se",
          Hi: "si",
          mg: "sc",
          lg: "sbc",
          oi: "iec",
          Ni: "lr",
          bi: "uae",
          ii: "ci",
          gi: "cc"
      };
      f.ng = {
          Bi: "feed_displayed",
          mi: "content_cards_displayed"
      };
      f.$c = function() {};
      f.$c.se = function() {
          function a(a) {
              var b = (Math.random().toString(16) + "000000000").substr(2, 8);
              return a ? "-" + b.substr(0, 4) + "-" + b.substr(4, 4) : b
          }
          return a() + a(!0) + a(!0) + a()
      };
      f.Z = function(a, b) {
          this.Qg = "undefined" === typeof window ? self : window;
          this.M = a;
          this.P = b
      };
      f.Z.ib = {
          dc: {
              $: "AppboyServiceWorkerAsyncStorage",
              VERSION: 5,
              la: {
                  pi: "data",
                  vg: "pushClicks",
                  cf: "pushSubscribed",
                  ul: "fallbackDevice",
                  ci: "cardUpdates",
                  $e: "optOut"
              },
              Ud: 1
          }
      };
      f.Z.prototype.bh = function() {
          if ("indexedDB" in this.Qg) return this.Qg.indexedDB
      };
      f.Z.prototype.Gc = function() {
          return null != this.bh()
      };
      f.Z.prototype.Hc = function(a, b) {
          var c = this.bh().open(this.M.$, this.M.VERSION);
          if (null == c) return "function" === typeof b && b(), !1;
          var e = this;
          c.onupgradeneeded = function(a) {
              e.P.info("Upgrading indexedDB " + e.M.$ + " to v" + e.M.VERSION + "...");
              a = a.target.result;
              for (var b in e.M.la) e.M.la.hasOwnProperty(b) && !a.objectStoreNames.contains(e.M.la[b]) &&
                  a.createObjectStore(e.M.la[b])
          };
          c.onsuccess = function(c) {
              e.P.debug("Opened indexedDB " + e.M.$ + " v" + e.M.VERSION);
              var d = c.target.result;
              d.onversionchange = function() {
                  d.close();
                  "function" === typeof b && b();
                  e.P.error("Needed to close the database unexpectedly because of an upgrade in another tab")
              };
              a(d)
          };
          c.onerror = function(a) {
              e.P.info("Could not open indexedDB " + e.M.$ + " v" + e.M.VERSION + ": " + a.target.errorCode);
              "function" === typeof b && b();
              return !0
          };
          return !0
      };
      f.Z.prototype.setItem = function(a, b, d, e, g) {
          if (!this.Gc()) return "function" ===
              typeof g && g(), !1;
          var c = this;
          return this.Hc(function(h) {
              h.objectStoreNames.contains(a) ? (h = h.transaction([a], "readwrite").objectStore(a).put(d, b), h.onerror = function() {
                  c.P.error("Could not store object " + b + " in " + a + " on indexedDB " + c.M.$);
                  "function" === typeof g && g()
              }, h.onsuccess = function() {
                  c.P.debug("Stored object " + b + " in " + a + " on indexedDB " + c.M.$);
                  "function" === typeof e && e()
              }) : (c.P.error("Could not store object " + b + " in " + a + " on indexedDB " + c.M.$ + " - " + a + " is not a valid objectStore"), "function" ===
                  typeof g && g())
          }, g)
      };
      f.Z.prototype.getItem = function(a, b, d) {
          if (!this.Gc()) return !1;
          var c = this;
          return this.Hc(function(e) {
              e.objectStoreNames.contains(a) ? (e = e.transaction([a], "readonly").objectStore(a).get(b), e.onerror = function() {
                  c.P.error("Could not retrieve object " + b + " in " + a + " on indexedDB " + c.M.$)
              }, e.onsuccess = function(e) {
                  c.P.debug("Retrieved object " + b + " in " + a + " on indexedDB " + c.M.$);
                  e = e.target.result;
                  null != e && d(e)
              }) : c.P.error("Could not retrieve object " + b + " in " + a + " on indexedDB " + c.M.$ + " - " +
                  a + " is not a valid objectStore")
          })
      };
      f.Z.prototype.nh = function(a, b, d) {
          if (this.Gc()) {
              var c = this;
              this.Hc(function(e) {
                  e.objectStoreNames.contains(a) ? (e = e.transaction([a], "readonly").objectStore(a).openCursor(null, "prev"), e.onerror = function() {
                      c.P.error("Could not open cursor for " + a + " on indexedDB " + c.M.$);
                      "function" === typeof d && d()
                  }, e.onsuccess = function(e) {
                      e = e.target.result;
                      null != e && null != e.value && null != e.key ? (c.P.debug("Retrieved last record " + e.key + " in " + a + " on indexedDB " + c.M.$), b(e.key, e.value)) :
                          "function" === typeof d && d()
                  }) : (c.P.error("Could not retrieve last record from " + a + " on indexedDB " + c.M.$ + " - " + a + " is not a valid objectStore"), "function" === typeof d && d())
              }, d)
          } else "function" === typeof d && d()
      };
      f.Z.prototype.kh = function(a, b) {
          if (this.Gc()) {
              var c = this;
              this.Hc(function(d) {
                  d.objectStoreNames.contains(a) ? (d = d.transaction([a], "readwrite").objectStore(a)["delete"](b), d.onerror = function() {
                      c.P.error("Could not delete record " + b + " from " + a + " on indexedDB " + c.M.$)
                  }, d.onsuccess = function() {
                      c.P.debug("Deleted record " +
                          b + " from " + a + " on indexedDB " + c.M.$)
                  }) : c.P.error("Could not delete record " + b + " from " + a + " on indexedDB " + c.M.$ + " - " + a + " is not a valid objectStore")
              })
          }
      };
      f.Z.prototype.$j = function(a, b) {
          if (this.Gc()) {
              var c = this;
              this.Hc(function(d) {
                  if (d.objectStoreNames.contains(a)) {
                      var e = d.transaction([a], "readwrite").objectStore(a);
                      d = e.openCursor();
                      var h = [];
                      d.onerror = function() {
                          0 < h.length ? (c.P.info("Cursor closed midway through for " + a + " on indexedDB " + c.M.$), b(h)) : c.P.error("Could not open cursor for " + a + " on indexedDB " +
                              c.M.$)
                      };
                      d.onsuccess = function(a) {
                          var c = a.target.result;
                          null != c ? (null != c.value && null != c.key && (e["delete"](c.key).onsuccess = function() {
                              h.push(c.value)
                          }), c.continue()) : 0 < h.length && b(h)
                      }
                  } else c.P.error("Could not retrieve objects from " + a + " on indexedDB " + c.M.$ + " - " + a + " is not a valid objectStore")
              })
          }
      };
      f.Z.prototype.clearData = function() {
          if (!this.Gc()) return !1;
          var a = [],
              b;
          for (b in this.M.la) this.M.la.hasOwnProperty(b) && this.M.la[b] !== this.M.la.$e && a.push(this.M.la[b]);
          var d = this;
          return this.Hc(function(b) {
              b =
                  b.transaction(a, "readwrite");
              for (var c = 0; c < a.length; c++) {
                  var e = b.objectStore(a[c]).clear();
                  e.onsuccess = function() {
                      d.P.debug("Cleared " + this.source.name + " on indexedDB " + d.M.$)
                  };
                  e.onerror = function() {
                      d.P.error("Could not clear " + this.source.name + " on indexedDB " + d.M.$)
                  }
              }
              b.oncomplete = function() {
                  d.P.debug("Cleared all object stores on indexedDB " + d.M.$)
              };
              b.onerror = function() {
                  d.P.error("Could not clear object stores on indexedDB " + d.M.$)
              }
          })
      };
      f.f = {
          qc: function(a) {
              if (void 0 !== a || void 0 === f.f.Jb) f.f.Jb = !!a;
              f.f.Ng || (f.f.Ng = !0)
          },
          yd: function() {
              f.f.Ng = !1;
              f.f.Jb = void 0;
              f.f.P = void 0
          },
          Uf: function(a) {
              "function" !== typeof a ? f.f.info("Ignoring setLogger call since logger is not a function") : (f.f.qc(), f.f.P = a)
          },
          Yf: function() {
              f.f.qc();
              f.f.Jb ? (console.log("Disabling Appboy logging"), f.f.Jb = !1) : (console.log("Enabled Appboy logging"), f.f.Jb = !0)
          },
          debug: function(a) {
              f.f.Jb && null != f.f.P && f.f.P("Appboy: " + a)
          },
          info: function(a) {
              f.f.Jb && (null != f.f.P ? f.f.P("Appboy: " + a) : console.log("Appboy: " + a))
          },
          error: function(a) {
              f.f.Jb &&
                  (null != f.f.P ? f.f.P("Appboy SDK Error: " + a) : console.error("Appboy SDK Error: " + a))
          }
      };
      var b = {
          Ka: function(a, b) {
              a.prototype = Object.create(b.prototype);
              a.prototype.constructor = a
          }
      };
      "undefined" === typeof console && (window.console = {
          log: function() {}
      });
      Function.prototype.bind || (Function.prototype.bind = function(a) {
          function b() {
              return g.apply(this.prototype && this instanceof d ? this : a, e.concat(Array.prototype.slice.call(arguments)))
          }

          function d() {}
          if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
          var e = Array.prototype.slice.call(arguments, 1),
              g = this;
          d.prototype = this.prototype;
          b.prototype = new d;
          return b
      });
      void 0 === Object.create && (Object.create = function(a) {
          function b() {}
          b.prototype = a;
          return new b
      });
      Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
          var c = this.length >>> 0;
          b = Number(b) || 0;
          b = 0 > b ? Math.ceil(b) : Math.floor(b);
          for (0 > b && (b += c); b < c; b++)
              if (b in this && this[b] === a) return b;
          return -1
      });
      Event.prototype.stopPropagation || (Event.prototype.stopPropagation = function() {
          this.cancelBubble = !0
      });
      Date.now || (Date.now = function() {
          return (new Date).valueOf()
      });
      window.atob || (window.atob = function(a) {
          var b = {},
              d, e = [],
              g = "",
              h = String.fromCharCode,
              f = [
                  [65, 91],
                  [97, 123],
                  [48, 58],
                  [43, 44],
                  [47, 48]
              ],
              n;
          for (n in f)
              for (d = f[n][0]; d < f[n][1]; d++) e.push(h(d));
          for (d = 0; 64 > d; d++) b[e[d]] = d;
          for (d = 0; d < a.length; d += 72) {
              var m = e = 0,
                  p = a.substring(d, d + 72);
              for (n = 0; n < p.length; n++)
                  for (f = b[p.charAt(n)], e = (e << 6) + f, m += 6; 8 <= m;) g += h((e >>> (m -= 8)) % 256)
          }
          return g
      });
      b.Ld = function(a, b) {
          this.kd = a;
          this.A = b
      };
      b.Ld.prototype.zd = function() {
          var a =
              this.A.Qc(b.h.B.Ha.eg);
          null == a && (a = new b.Db(f.$c.se()), this.A.Ge(b.h.B.Ha.eg, a));
          return new b.fg(a.qb, this.kd.td, this.kd.version, this.kd.Wi, screen.width + "x" + screen.height, this.kd.language, this.rj(), this.kd.userAgent)
      };
      b.Ld.prototype.rj = function() {
          var a = new Date;
          if ("undefined" !== typeof Intl && "function" === typeof Intl.DateTimeFormat && "function" === typeof Intl.DateTimeFormat().resolvedOptions) {
              var b = Intl.DateTimeFormat().resolvedOptions().timeZone;
              if (null != b && "" !== b) return b
          }
          return this.oj(a.getTimezoneOffset())
      };
      b.Ld.prototype.oj = function(a) {
          var b = parseInt(a / 60),
              d = parseInt(a % 60),
              e = "GMT";
          0 !== a && (e = e + (0 > a ? "+" : "-") + (("00" + Math.abs(b)).slice(-2) + ":" + ("00" + Math.abs(d)).slice(-2)));
          return e
      };
      b.Fb = function(a) {
          this.kc = a;
          this.ee = null;
          this.Vg = "geolocation" in navigator
      };
      b.Fb.cd = "Location tracking is not supported in this browser.";
      b.Fb.prototype.vj = function(a) {
          if (document.hidden) {
              this.Wf();
              var b = this,
                  d = function() {
                      document.hidden || (document.removeEventListener("visibilitychange", d, !1), b.watchPosition())
                  };
              document.addEventListener("visibilitychange",
                  d, !1)
          }
          this.kc.Fe(a.coords.latitude, a.coords.longitude, a.coords.accuracy, a.coords.altitude, a.coords.altitudeAccuracy)
      };
      b.Fb.prototype.uj = function(a) {
          a.code === a.PERMISSION_DENIED ? f.f.info(a.message) : f.f.error("Could not detect user location: " + a.code + " - " + a.message)
      };
      b.Fb.prototype.watchPosition = function() {
          this.Vg ? (this.Wf(), this.ee = navigator.geolocation.watchPosition(this.vj.bind(this), this.uj.bind(this)), f.f.info("Requested Geolocation")) : f.f.info(b.Fb.cd)
      };
      b.Fb.prototype.Wf = function() {
          this.Vg ? null !=
              this.ee && (navigator.geolocation.clearWatch(this.ee), this.ee = null, f.f.info("Stopped watching Geolocation")) : f.f.info(b.Fb.cd)
      };
      b.PushManager = function(a, b, d, e, g, h, f) {
          this.kc = a;
          this.Xa = b;
          this.ld = d;
          this.kj = e;
          this.qd = g || "/service-worker.js";
          this.Sg = h;
          this.Ra = f;
          this.ce = "serviceWorker" in navigator && "undefined" !== typeof ServiceWorkerRegistration && "showNotification" in ServiceWorkerRegistration.prototype && "PushManager" in window;
          this.sf = "safari" in window && "pushNotification" in window.safari
      };
      b.PushManager.cd =
          "Push notifications are not supported in this browser.";
      b.PushManager.ub = "catch";
      b.PushManager.prototype.Pb = function() {
          return this.ce || this.sf
      };
      b.PushManager.prototype.rc = function() {
          return this.Pb() && null != Notification && null != Notification.permission && "denied" === Notification.permission
      };
      b.PushManager.prototype.ue = function() {
          return this.Pb() && null != Notification && null != Notification.permission && "granted" === Notification.permission
      };
      b.PushManager.prototype.Hf = function(a, c, d) {
          d = this.Sg || d;
          if (this.Pb())
              if (this.ce) {
                  var e =
                      this;
                  navigator.serviceWorker.register(this.qd).then(function() {
                      e.rc() ? c() : navigator.serviceWorker.ready.then(function(d) {
                          d.pushManager.getSubscription().then(function(b) {
                              b ? a() : c()
                          })[b.PushManager.ub](function() {
                              c()
                          })
                      })
                  })[b.PushManager.ub](function() {
                      c()
                  })
              } else null == d || "" === d ? f.f.error("You must supply the safariWebsitePushId argument in order to use isPushGranted on Safari") : "granted" === window.safari.pushNotification.permission(d).permission ? a() : c();
          else c()
      };
      b.PushManager.prototype.xf = function(a,
          b) {
          var c;
          "string" === typeof a ? c = a : 0 !== a.endpoint.indexOf("https://android.googleapis.com/gcm/send") ? c = a.endpoint : (c = a.endpoint, a.subscriptionId && -1 === a.endpoint.indexOf(a.subscriptionId) && (c = a.endpoint + "/" + a.subscriptionId));
          var e = null,
              g = null;
          if (null != a.getKey) try {
              e = btoa(String.fromCharCode.apply(null, new Uint8Array(a.getKey("p256dh")))), g = btoa(String.fromCharCode.apply(null, new Uint8Array(a.getKey("auth"))))
          } catch (q) {
              if ("invalid arguments" !== q.message) throw q;
          }
          var h;
          a = a.options && (h = a.options.applicationServerKey) &&
              h.byteLength && 0 < h.byteLength ? btoa(String.fromCharCode.apply(null, new Uint8Array(h))).replace(/\+/g, "-").replace(/\//g, "_") : null;
          this.kc.Sf(c, e, g, a);
          c && "function" === typeof b && b(c, e, g)
      };
      b.PushManager.prototype.fh = function() {
          this.kc.De(!0)
      };
      b.PushManager.prototype.eh = function(a, c, d, e) {
          if ("default" === c.permission) {
              var g = this;
              window.safari.pushNotification.requestPermission(this.kj, a, {
                  api_key: this.Xa,
                  device_id: this.ld.zd().id
              }, function(c) {
                  "granted" === c.permission && g.kc.Vf(b.w.dd.OPTED_IN);
                  g.eh(a, c, d, e)
              })
          } else "denied" ===
              c.permission ? (f.f.info("The user has blocked notifications from this site, or Safari push is not configured in the Braze dashboard."), "function" === typeof e && e()) : "granted" === c.permission && (f.f.info("Device successfully subscribed to push."), this.xf(c.deviceToken, d))
      };
      b.PushManager.prototype.Yg = function(a, c, d, e) {
          function g(c) {
              switch (c) {
                  case "denied":
                      f.f.info("Permission for push notifications was denied.");
                      "function" === typeof e && e();
                      break;
                  case "default":
                      c = "Permission for push notifications was ignored.";
                      h.rc() && (c += " The browser has automatically blocked further permission requests for a period (probably 1 week).");
                      f.f.info(c);
                      break;
                  case "granted":
                      a.pushManager.subscribe(q).then(function(a) {
                          f.f.info("Device successfully subscribed to push.");
                          n || h.kc.Vf(b.w.dd.OPTED_IN);
                          h.xf(a, d)
                      })[b.PushManager.ub](function(a) {
                          h.rc() ? (f.f.info("Permission for push notifications was denied."), "function" === typeof e && e()) : f.f.error("Push subscription failed. Be sure that your site is https and that your manifest file is correctly configured:" +
                              a)
                      });
                      break;
                  default:
                      f.f.error("Received unexpected permission result " + c)
              }
          }
          var h = this,
              q = {
                  userVisibleOnly: !0
              };
          null != c && (q.applicationServerKey = c);
          var n = this.ue(),
              m = !1;
          (c = Notification.requestPermission(function(a) {
              m && g(a)
          })) ? c.then(function(a) {
              g(a)
          }): m = !0
      };
      b.PushManager.prototype.subscribe = function(a, c, d) {
          a = this.Sg || a;
          if (!this.Pb()) f.f.info(b.PushManager.cd);
          else if (this.ce)
              if (null != window.location && null != window.location.pathname && 0 !== window.location.pathname.indexOf(this.qd.substr(0, this.qd.lastIndexOf("/") +
                      1))) f.f.error("Cannot subscribe to push from a path higher than the service worker location (tried to subscribe from " + window.location.pathname + " but service worker is at " + this.qd + ")");
              else {
                  var e = this;
                  navigator.serviceWorker.register(this.qd).then(function() {
                      e.rc() ? (f.f.info("Notifications from this site are blocked. This may be a temporary embargo or a permanent denial."), e.kc.De(!1), "function" === typeof d && d()) : navigator.serviceWorker.ready.then(function(a) {
                          a && "function" === typeof a.update && a.update();
                          a.pushManager.getSubscription().then(function(g) {
                              var h = null;
                              e.Ra && null != e.Ra.ph() && (h = f.gg.kl(e.Ra.ph()));
                              g ? null != h && g.options && g.options.applicationServerKey && g.options.applicationServerKey.byteLength && 0 < g.options.applicationServerKey.byteLength && !b.G.isEqual(h, new Uint8Array(g.options.applicationServerKey)) ? (12 < g.options.applicationServerKey.byteLength ? f.f.info("Device was already subscribed to push using a different VAPID provider, creating new subscription.") : f.f.info("Attempting to upgrade a gcm_sender_id-based push registration to VAPID - depending on the browser this may or may not result in the same gcm_sender_id-based subscription."),
                                  g.unsubscribe().then(function(b) {
                                      b ? e.Yg(a, h, c, d) : (f.f.error("Failed to unsubscribe device from push while unsubscribing token from different VAPID provider."), "function" === typeof d && d())
                                  })[b.PushManager.ub](function(a) {
                                      f.f.error("Push unsubscription error while unsubscribing token from different VAPID provider: " + a);
                                      "function" === typeof d && d()
                                  })) : (f.f.info("Device already subscribed to push, sending existing subscription to backend."), e.xf(g, c)) : e.Yg(a, h, c, d)
                          })[b.PushManager.ub](function(a) {
                              f.f.error("Error checking current push subscriptions: " +
                                  a)
                          })
                      })
                  })[b.PushManager.ub](function(a) {
                      f.f.error("ServiceWorker registration failed: " + a)
                  })
              }
          else if (this.sf)
              if (null == a || "" === a) f.f.error("You must supply the safariWebsitePushId argument in order to use registerAppboyPushMessages on Safari");
              else {
                  var g = window.safari.pushNotification.permission(a);
                  this.eh(a, g, c, d)
              }
      };
      b.PushManager.prototype.unsubscribe = function(a, c) {
          if (this.Pb())
              if (this.ce) {
                  var d = this;
                  navigator.serviceWorker.getRegistration().then(function(e) {
                      if (e) e.pushManager.getSubscription().then(function(g) {
                          g &&
                              (d.fh(), g.unsubscribe().then(function(b) {
                                  b ? (f.f.info("Device successfully unsubscribed from push."), "function" === typeof a && a()) : (f.f.error("Failed to unsubscribe device from push."), "function" === typeof c && c());
                                  e.unregister();
                                  f.f.info("Service worker successfully unregistered.")
                              })[b.PushManager.ub](function(a) {
                                  f.f.error("Push unsubscription error: " + a);
                                  "function" === typeof c && c()
                              }))
                      })[b.PushManager.ub](function(a) {
                          f.f.error("Error unsubscribing from push: " + a);
                          "function" === typeof c && c()
                      })
                  })
              } else this.sf &&
                  (this.fh(), f.f.info("Device unsubscribed from push."));
          else f.f.info(b.PushManager.cd)
      };
      b.lb = function(a) {
          this.A = a;
          this.be = null
      };
      b.lb.prototype.lc = function() {
          if (null == this.be) {
              var a = this.A.ka(b.h.B.C.yg);
              this.be = null != a ? b.Cc.na(a) : new b.Cc
          }
          return this.be
      };
      b.lb.prototype.fk = function() {
          return this.lc().Jf
      };
      b.lb.prototype.Ak = function(a) {
          null != a && null != a.config && (a = a.config, a.time > this.lc().Jf && (this.be = a = new b.Cc(a.time, a.events_blacklist, a.attributes_blacklist, a.purchases_blacklist, a.messaging_session_timeout,
              a.vapid_public_key), this.A.ga(b.h.B.C.yg, a.X())))
      };
      b.lb.prototype.Yj = function(a) {
          return -1 !== this.lc().mh.indexOf(a)
      };
      b.lb.prototype.Cj = function(a) {
          return -1 !== this.lc().ih.indexOf(a)
      };
      b.lb.prototype.yk = function(a) {
          return -1 !== this.lc().Jh.indexOf(a)
      };
      b.lb.prototype.gk = function() {
          return this.lc().Mf
      };
      b.lb.prototype.ph = function() {
          return this.lc().Xh
      };
      b.fc = function(a, b, d, e) {
          this.A = a;
          this.H = b;
          this.Ra = d;
          this.pd = 1E3;
          e = parseFloat(e);
          isNaN(e) && (e = 1800);
          e < this.pd / 1E3 && (f.f.info("Specified session timeout of " +
              e + "s is too small, using the minimum session timeout of " + this.pd / 1E3 + "s instead."), e = this.pd / 1E3);
          this.mj = e
      };
      b.fc.prototype.Zg = function(a, c) {
          return new b.Event(this.H.U(), f.ba.fj, a, c.qb, {
              d: b.L.vd(a - c.wd)
          })
      };
      b.fc.prototype.ck = function() {
          var a = this.A.Qc(b.h.B.Ha.ec);
          return null == a ? null : a.qb
      };
      b.fc.prototype.uk = function() {
          var a = Date.now(),
              c = this.Ra.gk();
          if (null == c) return !1;
          var d = this.A.ka(b.h.B.C.tg);
          (c = null == d || a - d > 1E3 * c) && this.A.ga(b.h.B.C.tg, a);
          return c
      };
      b.fc.prototype.sj = function(a, b) {
          return null ==
              b ? !0 : a - b.wd < this.pd ? !1 : b.Cf < a
      };
      b.fc.prototype.pa = function() {
          var a = Date.now(),
              c = a + 1E3 * this.mj,
              d = this.A.Qc(b.h.B.Ha.ec);
          if (this.sj(a, d)) {
              var e = "Generating session start event with time " + a;
              if (null != d) {
                  var g = d.ve;
                  g - d.wd < this.pd && (g = d.wd + this.Cl);
                  this.A.Ce(this.Zg(g, d));
                  e += " (old session ended " + g + ")"
              }
              e += ". Will expire " + c.valueOf();
              f.f.info(e);
              c = new b.Db(f.$c.se(), c);
              this.A.Ce(new b.Event(this.H.U(), f.ba.Bg, a, c.qb));
              this.A.Ge(b.h.B.Ha.ec, c);
              return c.qb
          }
          d.ve = a;
          d.Cf = c;
          this.A.Ge(b.h.B.Ha.ec, d);
          return d.qb
      };
      b.fc.prototype.Pj = function() {
          var a = this.A.Qc(b.h.B.Ha.ec);
          null != a && (this.A.Ek(b.h.B.Ha.ec), this.A.Ce(this.Zg(Date.now(), a)))
      };
      b.Wd = function() {};
      b.h = function(a, b) {
          this.nd = a;
          this.xa = b
      };
      b.Wd.Rj = function(a, c) {
          var d = !1;
          try {
              if (localStorage && localStorage.getItem) try {
                  localStorage.setItem(b.h.B.C.gf, !0), localStorage.getItem(b.h.B.C.gf) && (localStorage.removeItem(b.h.B.C.gf), d = !0)
              } catch (g) {
                  if (("QuotaExceededError" === g.name || "NS_ERROR_DOM_QUOTA_REACHED" === g.name) && 0 < localStorage.length) d = !0;
                  else throw g;
              }
          } catch (g) {
              f.f.info("Local Storage not supported!")
          }
          var e =
              b.Wd.nj();
          c = new b.h.Kd(a, e && !c, d);
          return new b.h(c, d ? new b.h.Ac(a) : new b.h.zc)
      };
      b.Wd.nj = function() {
          return navigator.cookieEnabled || "cookie" in document && (0 < document.cookie.length || -1 < (document.cookie = "test").indexOf.call(document.cookie, "test"))
      };
      b.h.B = {
          Ha: {
              Gg: "ab.storage.userId",
              eg: "ab.storage.deviceId",
              ec: "ab.storage.sessionId"
          },
          C: {
              gf: "ab.test",
              Ed: "ab.storage.events",
              Vb: "ab.storage.attributes",
              Se: "ab.storage.device",
              df: "ab.storage.pushToken",
              Ze: "ab.storage.newsFeed",
              Ve: "ab.storage.lastNewsFeedRefresh",
              Sc: "ab.storage.cardImpressions",
              Li: "ab.storage.lastInAppMessageRefresh",
              yg: "ab.storage.serverConfig",
              hf: "ab.storage.triggers",
              We: "ab.storage.lastTriggeredTime",
              Pd: "ab.storage.lastTriggeredTimesById",
              Qd: "ab.storage.lastTriggerEventDataById",
              tg: "ab.storage.messagingSessionStart",
              Oe: "ab.storage.cc",
              Ne: "ab.storage.ccLastFullSync",
              Me: "ab.storage.ccLastCardUpdated",
              Uc: "ab.storage.ccImpressions",
              Tc: "ab.storage.ccDismissals"
          },
          af: "ab.optOut"
      };
      b.h.prototype.Ge = function(a, c) {
          var d = c;
          null != c && c instanceof b.Db &&
              (d = c.X());
          this.nd.remove(a);
          this.nd.gb(a, d)
      };
      b.h.prototype.Qc = function(a) {
          return b.Db.na(this.nd.Ja(a))
      };
      b.h.prototype.Ek = function(a) {
          this.nd.remove(a)
      };
      b.h.prototype.Ea = function(a) {
          if (null == a || 0 === a.length) return !1;
          b.G.isArray(a) || (a = [a]);
          var c = this.xa.Ja(b.h.B.C.Ed);
          null != c && b.G.isArray(c) || (c = []);
          for (var d = 0; d < a.length; d++) c.push(a[d].X());
          return this.xa.gb(b.h.B.C.Ed, c)
      };
      b.h.prototype.Ce = function(a) {
          null == a || this.Ea([a])
      };
      b.h.prototype.lh = function() {
          var a = this.xa.Ja(b.h.B.C.Ed);
          this.xa.remove(b.h.B.C.Ed);
          null == a && (a = []);
          var c = [],
              d = !1,
              e = null;
          if (b.G.isArray(a))
              for (var g = 0; g < a.length; g++) b.Event.xh(a[g]) ? c.push(b.Event.na(a[g])) : e = g;
          else d = !0;
          if (d || null != e) g = "Stored events could not be deserialized as ab.Events", d && (g += ", was " + Object.prototype.toString.call(a) + " not an array"), null != e && (g += ", value at index " + e + " does not look like an event"), g += ", serialized values were of type " + typeof a + ": " + JSON.stringify(a), c.push(new b.Event(null, f.ba.Ji, Date.now(), null, {
              e: g
          }));
          return c
      };
      b.h.prototype.ga = function(a,
          c) {
          b.G.Ub(b.h.B.C, a, "StorageManager cannot store object.", "ab.StorageManager.KEYS.OBJECTS") && this.xa.gb(a, c)
      };
      b.h.prototype.ka = function(a) {
          return b.G.Ub(b.h.B.C, a, "StorageManager cannot retrieve object.", "ab.StorageManager.KEYS.OBJECTS") ? this.xa.Ja(a) : !1
      };
      b.h.prototype.za = function(a) {
          b.G.Ub(b.h.B.C, a, "StorageManager cannot remove object.", "ab.StorageManager.KEYS.OBJECTS") && this.xa.remove(a)
      };
      b.h.prototype.clearData = function() {
          for (var a = b.G.keys(b.h.B.Ha), c = b.G.keys(b.h.B.C), d = 0; d < a.length; d++) this.nd.remove(b.h.B.Ha[a[d]]);
          for (a = 0; a < c.length; a++) this.xa.remove(b.h.B.C[c[a]])
      };
      b.h.prototype.vf = function(a) {
          return a || "ab.storage.attributes.anonymous_user"
      };
      b.h.prototype.Eh = function(a) {
          var c = this.xa.Ja(b.h.B.C.Vb);
          null == c && (c = {});
          var d = this.vf(a[b.w.jd]),
              e;
          for (e in a) e === b.w.jd || null != c[d] && null != c[d][e] || this.Nh(a[b.w.jd], e, a[e])
      };
      b.h.prototype.Nh = function(a, c, d) {
          var e = this.xa.Ja(b.h.B.C.Vb);
          null == e && (e = {});
          var g = this.vf(a),
              h = e[g];
          null == h && (h = {}, null != a && (h[b.w.jd] = a));
          if (c === b.w.ag) {
              null == h[c] && (h[c] = {});
              for (var f in d) {
                  a =
                      d[f];
                  var n = h[c][f],
                      m = null;
                  if (J(a)) {
                      if (void 0 !== a[b.w.Xb]) {
                          m = ca(a[b.w.Xb], n);
                          if (!m && null !== m) return !1;
                          n = m
                      }
                      if (void 0 !== a[b.w.Fa]) {
                          m = ba(a[b.w.Fa], n);
                          if (!m && null !== m) return !1;
                          n = m
                      }
                      if (void 0 !== a[b.w.Ga] && (m = aa(a[b.w.Ga], n), !m && null !== m)) return !1
                  } else m = d[f];
                  h[c][f] = m
              }
          } else h[c] = d;
          e[g] = h;
          return this.xa.gb(b.h.B.C.Vb, e)
      };
      b.h.prototype.Xj = function() {
          var a = this.xa.Ja(b.h.B.C.Vb);
          this.xa.remove(b.h.B.C.Vb);
          var c = [],
              d;
          for (d in a) null != a[d] && c.push(a[d]);
          return c
      };
      b.h.prototype.Bj = function(a) {
          var c = this.xa.Ja(b.h.B.C.Vb);
          if (null != c) {
              var d = this.vf(null),
                  e = c[d];
              null != e && (c[d] = void 0, this.xa.gb(b.h.B.C.Vb, c), e[b.w.jd] = a, this.Eh(e))
          }
          d = this.Qc(b.h.B.Ha.ec);
          c = null;
          null != d && (c = d.qb);
          d = this.lh();
          if (null != d)
              for (e = 0; e < d.length; e++) {
                  var g = d[e];
                  null == g.Sb && g.sessionId == c && (g.Sb = a);
                  this.Ce(g)
              }
      };
      b.h.Ac = function(a) {
          this.Xa = a
      };
      b.h.Ac.prototype.mc = function(a) {
          return a + "." + this.Xa
      };
      b.h.Ac.prototype.gb = function(a, b) {
          b = {
              v: b
          };
          try {
              return localStorage.setItem(this.mc(a), JSON.stringify(b)), !0
          } catch (d) {
              return f.f.info("Storage failure: " +
                  d.message), !1
          }
      };
      b.h.Ac.prototype.Ja = function(a) {
          try {
              var b = JSON.parse(localStorage.getItem(this.mc(a)));
              return null == b ? null : b.v
          } catch (d) {
              return f.f.info("Storage retrieval failure: " + d.message), null
          }
      };
      b.h.Ac.prototype.remove = function(a) {
          try {
              localStorage.removeItem(this.mc(a))
          } catch (c) {
              return f.f.info("Storage removal failure: " + c.message), !1
          }
      };
      b.h.bb = function(a, b) {
          this.Xa = a;
          this.Rg = this.qj();
          this.Kg = 10518980;
          this.Ug = !!b
      };
      b.h.bb.prototype.mc = function(a) {
          return null != this.Xa ? a + "." + this.Xa : a
      };
      b.h.bb.prototype.qj =
          function() {
              for (var a = 0, b = document.domain, d = b.split("."), e = "ab._gd" + Date.now(); a < d.length - 1 && -1 === document.cookie.indexOf(e + "=" + e);) a++, b = "." + d.slice(-1 - a).join("."), document.cookie = e + "=" + e + ";domain=" + b + ";";
              document.cookie = e + "=;expires=" + (new Date(0)).toGMTString() + ";domain=" + b + ";";
              return b
          };
      b.h.bb.prototype.ek = function() {
          var a = new Date;
          a.setTime(a.getTime() + 6E4 * this.Kg);
          return a.getFullYear()
      };
      b.h.bb.prototype.gb = function(a, b) {
          var c = new Date;
          c.setTime(c.getTime() + 6E4 * this.Kg);
          var c = "expires=" + c.toUTCString(),
              e = "domain=" + this.Rg;
          b = this.Ug ? b : encodeURIComponent(JSON.stringify(b));
          a = this.mc(a) + "=" + b + ";" + c + ";" + e + ";path=/";
          if (4093 <= a.length) return f.f.info("Storage failure: string is " + a.length + " chars which is too large to store as a cookie."), !1;
          document.cookie = a;
          return !0
      };
      b.h.bb.prototype.Ja = function(a) {
          for (var b = [], d = this.mc(a) + "=", e = document.cookie.split(";"), g = 0; g < e.length; g++) {
              for (var h = e[g];
                  " " === h.charAt(0);) h = h.substring(1);
              if (0 === h.indexOf(d)) try {
                  var q;
                  q = this.Ug ? h.substring(d.length, h.length) : JSON.parse(decodeURIComponent(h.substring(d.length,
                      h.length)));
                  b.push(q)
              } catch (n) {
                  return f.f.info("Storage retrieval failure: " + n.message), this.remove(a), null
              }
          }
          return 0 < b.length ? b[b.length - 1] : null
      };
      b.h.bb.prototype.remove = function(a) {
          a = this.mc(a) + "=;expires=" + (new Date(0)).toGMTString();
          document.cookie = a;
          document.cookie = a + ";path=/";
          document.cookie = a + ";path=" + document.location.pathname;
          a = a + ";domain=" + this.Rg;
          document.cookie = a;
          document.cookie = a + ";path=/";
          document.cookie = a + ";path=" + document.location.pathname
      };
      b.h.zc = function() {
          this.rf = {};
          this.Pg = 5242880
      };
      b.h.zc.prototype.gb = function(a, b) {
          var c = {
              value: b
          };
          b = this.xj(b);
          if (b > this.Pg) return f.f.info("Storage failure: object is \u2248" + b + " bytes which is greater than the max of " + this.Pg), !1;
          this.rf[a] = c;
          return !0
      };
      b.h.zc.prototype.xj = function(a) {
          var b = [];
          a = [a];
          for (var d = 0; a.length;) {
              var e = a.pop();
              if ("boolean" === typeof e) d += 4;
              else if ("string" === typeof e) d += 2 * e.length;
              else if ("number" === typeof e) d += 8;
              else if ("object" === typeof e && -1 === b.indexOf(e)) {
                  b.push(e);
                  for (var g in e) a.push(e[g])
              }
          }
          return d
      };
      b.h.zc.prototype.Ja =
          function(a) {
              a = this.rf[a];
              return null == a ? null : a.value
          };
      b.h.zc.prototype.remove = function(a) {
          this.rf[a] = null
      };
      b.h.Kd = function(a, c, d) {
          this.ob = [];
          c && this.ob.push(new b.h.bb(a));
          d && this.ob.push(new b.h.Ac(a));
          this.ob.push(new b.h.zc)
      };
      b.h.Kd.prototype.gb = function(a, b) {
          for (var c = !0, e = 0; e < this.ob.length; e++) c = this.ob[e].gb(a, b) && c;
          return c
      };
      b.h.Kd.prototype.Ja = function(a) {
          for (var b = 0; b < this.ob.length; b++) {
              var d = this.ob[b].Ja(a);
              if (null != d) return d
          }
          return null
      };
      b.h.Kd.prototype.remove = function(a) {
          for (var b =
                  0; b < this.ob.length; b++) this.ob[b].remove(a)
      };
      b.Pa = function() {
          this.rd = {}
      };
      b.Pa.prototype.fb = function(a) {
          if ("function" !== typeof a) return null;
          var b = f.$c.se();
          this.rd[b] = a;
          return b
      };
      b.Pa.prototype.Aa = function(a) {
          delete this.rd[a]
      };
      b.Pa.prototype.ua = function() {
          this.rd = {}
      };
      b.Pa.prototype.ya = function(a) {
          var b = [],
              d;
          for (d in this.rd) b.push(this.rd[d](a));
          return b
      };
      b.ic = function(a, b) {
          this.Ra = a;
          this.A = b
      };
      b.ic.prototype.U = function() {
          var a = this.A.Qc(b.h.B.Ha.Gg);
          return null != a ? a.qb : null
      };
      b.ic.prototype.lk = function(a) {
          var c =
              null == this.U();
          this.A.Ge(b.h.B.Ha.Gg, new b.Db(a));
          c && this.A.Bj(a)
      };
      b.ic.prototype.Rc = function(a, c) {
          if (this.Ra.Cj(a)) return f.f.info('Custom Attribute "' + a + '" is blacklisted, ignoring.'), !1;
          var d = {};
          d[a] = c;
          return this.aa(b.w.ag, d)
      };
      b.ic.prototype.aa = function(a, b) {
          return this.A.Nh(this.U(), a, b)
      };
      b.ic.prototype.Sf = function(a, c, d, e) {
          this.aa("push_token", a);
          this.aa("custom_push_public_key", c);
          this.aa("custom_push_user_auth", d);
          this.aa("custom_push_vapid_public_key", e);
          var g = f.Z.ib.dc,
              h = new f.Z(g, f.f);
          this.A.ga(b.h.B.C.df, [a, c, d, e]);
          h.setItem(g.la.cf, g.Ud, !0)
      };
      b.ic.prototype.De = function(a) {
          this.aa("push_token", null);
          this.aa("custom_push_public_key", null);
          this.aa("custom_push_user_auth", null);
          this.aa("custom_push_vapid_public_key", null);
          if (a) {
              a = f.Z.ib.dc;
              var c = new f.Z(a, f.f);
              this.A.za(b.h.B.C.df);
              c.setItem(a.la.cf, a.Ud, !1)
          }
      };
      b.Le = {
          Fi: "invalid_api_key",
          di: "blacklisted",
          Vi: "no_device_identifier"
      };
      b.b = function(a, b, d, e, g, h, f, n, m, p, k, r, l, t, v) {
          this.id = a;
          this.viewed = b || !1;
          this.title = d || "";
          this.imageUrl =
              e;
          this.description = g || "";
          this.created = h || null;
          this.updated = f || null;
          this.categories = n || [];
          this.expiresAt = m || null;
          this.url = p;
          this.linkText = k;
          r = parseFloat(r);
          this.aspectRatio = isNaN(r) ? null : r;
          this.extras = l;
          this.pinned = t || !1;
          this.dismissible = v || !1;
          this.dismissed = this.cb = this.md = !1;
          this.lf = this.Da = null
      };
      b.b.ug = -1;
      b.b.prototype.je = function() {
          null == this.Da && (this.Da = new b.Pa);
          return this.Da
      };
      b.b.prototype.ke = function() {
          null == this.lf && (this.lf = new b.Pa);
          return this.lf
      };
      b.b.prototype.He = function(a) {
          return this.je().fb(a)
      };
      b.b.prototype.Qh = function(a) {
          return this.ke().fb(a)
      };
      b.b.prototype.Aa = function(a) {
          this.je().Aa(a);
          this.ke().Aa(a)
      };
      b.b.prototype.ua = function() {
          this.je().ua();
          this.ke().ua()
      };
      b.b.prototype.Rf = function() {
          return this.md ? !1 : this.viewed = this.md = !0
      };
      b.b.prototype.uc = function() {
          return this.cb ? !1 : (this.cb = !0, this.je().ya(), this.viewed = !0)
      };
      b.b.prototype.Oc = function() {
          return this.dismissible && !this.dismissed ? (this.dismissed = !0, this.ke().ya(), !0) : !1
      };
      b.b.R = {
          Hd: "captioned_image",
          Dg: "text_announcement",
          Rd: "short_news",
          Fd: "banner_image",
          Pe: "control"
      };
      b.b.I = {
          Ab: "id",
          Ib: "v",
          yb: "db",
          wg: "r",
          Wa: "ca",
          kb: "p",
          Va: "ea",
          jb: "e",
          hc: "tp",
          Bb: "i",
          gc: "tt",
          Zb: "ds",
          URL: "u",
          Eb: "dm",
          tb: "ar"
      };
      b.b.D = {
          Ab: "id",
          Ib: "v",
          yb: "db",
          Jd: "cr",
          Wa: "ca",
          kb: "p",
          Id: "t",
          Va: "ea",
          jb: "e",
          hc: "tp",
          Bb: "i",
          gc: "tt",
          Zb: "ds",
          URL: "u",
          Eb: "dm",
          tb: "ar"
      };
      b.b.tl = {
          ql: "ADVERTISING",
          rl: "ANNOUNCEMENTS",
          wl: "NEWS",
          Al: "SOCIAL"
      };
      b.vb = function(a, c, d, e, g, h, f, n, m, p, k, r, l, t, v) {
          b.b.call(this, a, c, d, e, g, h, f, n, m, p, k, r, l, t, v)
      };
      b.Ka(b.vb, b.b);
      b.vb.prototype.X = function() {
          var a = {};
          a[b.b.D.hc] =
              b.b.R.Hd;
          a[b.b.D.Ab] = this.id;
          a[b.b.D.Ib] = this.viewed;
          a[b.b.D.gc] = this.title;
          a[b.b.D.Bb] = this.imageUrl;
          a[b.b.D.Zb] = this.description;
          a[b.b.D.Wa] = this.updated;
          a[b.b.D.Jd] = this.created;
          a[b.b.D.Id] = this.categories;
          a[b.b.D.Va] = this.expiresAt;
          a[b.b.D.URL] = this.url;
          a[b.b.D.Eb] = this.linkText;
          a[b.b.D.tb] = this.aspectRatio;
          a[b.b.D.jb] = this.extras;
          a[b.b.D.kb] = this.pinned;
          a[b.b.D.yb] = this.dismissible;
          return a
      };
      b.wb = function(a, c, d, e, g, h, f, n, m, p, k, r, l, t, v) {
          b.b.call(this, a, c, d, e, g, h, f, n, m, p, k, r, l, t, v)
      };
      b.Ka(b.wb,
          b.b);
      b.wb.prototype.X = function() {
          var a = {};
          a[b.b.D.hc] = b.b.R.Rd;
          a[b.b.D.Ab] = this.id;
          a[b.b.D.Ib] = this.viewed;
          a[b.b.D.gc] = this.title;
          a[b.b.D.Bb] = this.imageUrl;
          a[b.b.D.Zb] = this.description;
          a[b.b.D.Wa] = this.updated;
          a[b.b.D.Jd] = this.created;
          a[b.b.D.Id] = this.categories;
          a[b.b.D.Va] = this.expiresAt;
          a[b.b.D.URL] = this.url;
          a[b.b.D.Eb] = this.linkText;
          a[b.b.D.tb] = this.aspectRatio;
          a[b.b.D.jb] = this.extras;
          a[b.b.D.kb] = this.pinned;
          a[b.b.D.yb] = this.dismissible;
          return a
      };
      b.Banner = function(a, c, d, e, g, h, f, n, m, p, k, r, l) {
          b.b.call(this,
              a, c, null, d, null, e, g, h, f, n, m, p, k, r, l)
      };
      b.Ka(b.Banner, b.b);
      b.Banner.prototype.X = function() {
          var a = {};
          a[b.b.D.hc] = b.b.R.Fd;
          a[b.b.D.Ab] = this.id;
          a[b.b.D.Ib] = this.viewed;
          a[b.b.D.Bb] = this.imageUrl;
          a[b.b.D.Wa] = this.updated;
          a[b.b.D.Jd] = this.created;
          a[b.b.D.Id] = this.categories;
          a[b.b.D.Va] = this.expiresAt;
          a[b.b.D.URL] = this.url;
          a[b.b.D.Eb] = this.linkText;
          a[b.b.D.tb] = this.aspectRatio;
          a[b.b.D.jb] = this.extras;
          a[b.b.D.kb] = this.pinned;
          a[b.b.D.yb] = this.dismissible;
          return a
      };
      b.hb = function(a, c, d, e, g, h) {
          b.b.call(this, a,
              c, null, null, null, null, d, null, e, null, null, null, g, h, null)
      };
      b.Ka(b.hb, b.b);
      b.hb.prototype.X = function() {
          var a = {};
          a[b.b.D.hc] = b.b.R.Pe;
          a[b.b.D.Ab] = this.id;
          a[b.b.D.Ib] = this.viewed;
          a[b.b.D.Wa] = this.updated;
          a[b.b.D.Va] = this.expiresAt;
          a[b.b.D.jb] = this.extras;
          a[b.b.D.kb] = this.pinned;
          return a
      };
      b.b.prototype.sh = function(a) {
          if (null == a || a[b.b.I.Ab] !== this.id) return !0;
          if (a[b.b.I.wg]) return !1;
          if (null != a[b.b.I.Wa] && null != this.updated && a[b.b.I.Wa] < b.L.vd(this.updated.valueOf())) return !0;
          a[b.b.I.Ib] && !this.viewed &&
              (this.viewed = !0);
          null != a[b.b.I.gc] && (this.title = a[b.b.I.gc]);
          null != a[b.b.I.Bb] && (this.imageUrl = a[b.b.I.Bb]);
          null != a[b.b.I.Zb] && (this.description = a[b.b.I.Zb]);
          if (null != a[b.b.I.Wa]) {
              var c = b.L.Ya(a[b.b.I.Wa]);
              null != c && (this.updated = c)
          }
          null != a[b.b.I.Va] && (this.expiresAt = a[b.b.I.Va] === b.b.ug ? null : b.L.Ya(a[b.b.I.Va]));
          null != a[b.b.I.URL] && (this.url = a[b.b.I.URL]);
          null != a[b.b.I.Eb] && (this.linkText = a[b.b.I.Eb]);
          null != a[b.b.I.tb] && (c = parseFloat(a[b.b.I.tb]), this.aspectRatio = isNaN(c) ? null : c);
          null != a[b.b.I.jb] &&
              (this.extras = a[b.b.I.jb]);
          null != a[b.b.I.kb] && (this.pinned = a[b.b.I.kb]);
          null != a[b.b.I.yb] && (this.dismissible = a[b.b.I.yb]);
          return !0
      };
      b.b.Ef = function(a) {
          if (a[b.b.I.wg]) return null;
          var c = a[b.b.I.Ab],
              d = a[b.b.I.hc],
              e = a[b.b.I.Ib],
              g = a[b.b.I.gc],
              h = a[b.b.I.Bb],
              f = a[b.b.I.Zb],
              n = b.L.Ya(a[b.b.I.Wa]),
              m;
          m = a[b.b.I.Va] === b.b.ug ? null : b.L.Ya(a[b.b.I.Va]);
          var p = a[b.b.I.URL],
              k = a[b.b.I.Eb],
              r = a[b.b.I.tb],
              l = a[b.b.I.jb],
              t = a[b.b.I.kb];
          a = a[b.b.I.yb];
          return d === b.b.R.Dg || d === b.b.R.Rd ? new b.wb(c, e, g, h, f, null, n, null, m, p, k, r, l,
              t, a) : d === b.b.R.Hd ? new b.vb(c, e, g, h, f, null, n, null, m, p, k, r, l, t, a) : d === b.b.R.Fd ? new b.Banner(c, e, h, null, n, null, m, p, k, r, l, t, a) : d === b.b.R.Pe ? new b.hb(c, e, n, m, l, t) : null
      };
      b.b.Zj = function(a) {
          var c = a.id,
              d = a.type,
              e = a.viewed,
              g = a.title,
              h = a.image,
              f = a.description,
              n = b.L.Ya(a.created),
              m = b.L.Ya(a.updated),
              p = a.categories,
              k = b.L.Ya(a.expires_at),
              l = a.url,
              u = a.domain,
              t = a.aspect_ratio;
          a = a.extras;
          return d === b.b.R.Dg || d === b.b.R.Rd ? new b.wb(c, e, g, h, f, n, m, p, k, l, u, t, a, !1, !1) : d === b.b.R.Hd ? new b.vb(c, e, g, h, f, n, m, p, k, l, u, t, a, !1,
              !1) : d === b.b.R.Fd ? new b.Banner(c, e, h, n, m, p, k, l, u, t, a, !1, !1) : null
      };
      b.b.na = function(a) {
          var c = a[b.b.D.Ab],
              d = a[b.b.D.hc],
              e = a[b.b.D.Ib],
              g = a[b.b.D.gc],
              h = a[b.b.D.Bb],
              f = a[b.b.D.Zb],
              n = b.L.Pc(a[b.b.D.Jd]),
              m = b.L.Pc(a[b.b.D.Wa]),
              p = a[b.b.D.Id],
              k = b.L.Pc(a[b.b.D.Va]),
              l = a[b.b.D.URL],
              u = a[b.b.D.Eb],
              t = a[b.b.D.tb],
              v = a[b.b.D.jb],
              x = a[b.b.D.kb];
          a = a[b.b.D.yb];
          if (d === b.b.R.Rd) return new b.wb(c, e, g, h, f, n, m, p, k, l, u, t, v, x, a);
          if (d === b.b.R.Hd) return new b.vb(c, e, g, h, f, n, m, p, k, l, u, t, v, x, a);
          if (d === b.b.R.Fd) return new b.Banner(c,
              e, h, n, m, p, k, l, u, t, v, x, a);
          if (d === b.b.R.Pe) return new b.hb(c, e, m, k, v, x)
      };
      b.wc = function(a) {
          this.triggerId = a
      };
      b.wc.T = function(a) {
          return new this(a.trigger_id)
      };
      b.fg = function(a, b, d, e, g, h, f, n) {
          this.id = a;
          this.td = b;
          this.Gj = d;
          this.wk = e;
          this.Hk = g;
          this.locale = h;
          this.bl = f;
          this.userAgent = n
      };
      b.fg.prototype.nc = function() {
          return {
              browser: this.td,
              browser_version: this.Gj,
              os_version: this.wk,
              resolution: this.Hk,
              locale: this.locale,
              time_zone: this.bl,
              user_agent: this.userAgent
          }
      };
      b.Event = function(a, c, d, e, g) {
          this.Sb = a;
          this.type =
              c;
          this.time = b.L.cl(d);
          this.sessionId = e;
          this.data = g
      };
      b.Event.prototype.nc = function() {
          var a = {
              name: this.type,
              time: b.L.vd(this.time),
              data: this.data || {},
              session_id: this.sessionId
          };
          null != this.Sb && (a.user_id = this.Sb);
          return a
      };
      b.Event.prototype.X = function() {
          return {
              u: this.Sb,
              t: this.type,
              ts: this.time,
              s: this.sessionId,
              d: this.data
          }
      };
      b.Event.xh = function(a) {
          return null != a && b.G.qk(a) && null != a.t && "" !== a.t
      };
      b.Event.na = function(a) {
          return new b.Event(a.u, a.t, a.ts, a.s, a.d)
      };
      b.J = function(a, b) {
          this.cards = a;
          this.lastUpdated =
              b
      };
      b.J.prototype.oh = function() {
          for (var a = 0, b = 0; b < this.cards.length; b++) this.cards[b].viewed || a++;
          return a
      };
      b.qa = function(a, c) {
          b.J.call(this, a, c)
      };
      b.Ka(b.qa, b.J);
      b.qa.prototype.ik = b.J.prototype.oh;
      b.Md = function(a, b, d, e, g, h) {
          this.Sb = a;
          this.Fk = b;
          this.message = d;
          this.sk = e;
          this.Wj = g;
          this.appVersion = h
      };
      b.Md.prototype.nc = function() {
          var a = {
              message: this.message,
              is_bug: !!this.sk,
              reply_to: this.Fk,
              device: this.Wj,
              app_version: this.appVersion
          };
          null != this.Sb && (a.user_id = this.Sb);
          return a
      };
      b.Md.ll = function(a, c) {
          return b.S.wh(a) ?
              null == c || "" === c.trim() ? (f.f.error("Feedback requires a non-empty message."), !1) : !0 : (f.f.error('Feedback requires a valid RFC-5322 email address - "' + a + '" is not valid.'), !1)
      };
      b.Db = function(a, b, d) {
          null == a && (a = f.$c.se());
          d = parseInt(d);
          if (isNaN(d) || 0 === d) d = Date.now();
          this.qb = a;
          this.wd = d;
          this.ve = Date.now();
          this.Cf = b
      };
      b.Db.prototype.X = function() {
          return {
              g: this.qb,
              e: this.Cf,
              c: this.wd,
              l: this.ve
          }
      };
      b.Db.na = function(a) {
          if (null == a || null == a.g) return null;
          var c = new b.Db(a.g, a.e, a.c);
          c.ve = a.l;
          return c
      };
      b.j = function(a,
          c, d, e, g, h, f, n, m, p, k, l, u, t, v, x, z, y, w, C, A, G, I, D, E, F, B, H, K) {
          this.message = a;
          this.messageAlignment = c || b.j.kf.CENTER;
          this.duration = l || 5E3;
          this.slideFrom = d || b.j.Vd.BOTTOM;
          this.extras = e || [];
          this.campaignId = g;
          this.cardId = h;
          this.triggerId = f;
          this.clickAction = n || b.j.xb.NONE;
          this.uri = m;
          this.openTarget = p || b.j.ed.NONE;
          this.dismissType = k || b.j.xc.AUTO_DISMISS;
          this.icon = u;
          this.imageUrl = t;
          this.imageStyle = v || b.j.Nd.TOP;
          this.iconColor = x || b.j.Ta.Xd;
          this.iconBackgroundColor = z || b.j.Ta.Zf;
          this.backgroundColor = y || b.j.Ta.Xd;
          this.textColor = w || b.j.Ta.Ke;
          this.closeButtonColor = C || b.j.Ta.Ke;
          this.animateIn = A;
          null == this.animateIn && (this.animateIn = !0);
          this.animateOut = G;
          null == this.animateOut && (this.animateOut = !0);
          this.header = I;
          this.headerAlignment = D || b.j.kf.CENTER;
          this.headerTextColor = E || b.j.Ta.Ke;
          this.frameColor = F || b.j.Ta.bj;
          this.buttons = B || [];
          this.cropType = H || b.j.Wc.vl;
          this.orientation = K;
          this.Lg = this.cb = this.md = this.Df = !1;
          this.Da = new b.Pa;
          this.Zd = new b.Pa
      };
      b.j.prototype.Nc = function() {
          return !0
      };
      b.j.prototype.Wh = function() {
          return this.Nc()
      };
      b.j.prototype.He = function(a) {
          return this.Da.fb(a)
      };
      b.j.prototype.Qh = function(a) {
          return this.Zd.fb(a)
      };
      b.j.prototype.Aa = function(a) {
          this.Da.Aa(a);
          this.Zd.Aa(a)
      };
      b.j.prototype.ua = function() {
          this.Da.ua();
          this.Zd.ua()
      };
      b.j.prototype.Rf = function() {
          return this.md ? !1 : this.md = !0
      };
      b.j.prototype.uc = function() {
          return this.cb ? !1 : (this.cb = !0, this.Da.ya(), !0)
      };
      b.j.prototype.Oc = function() {
          return this.Lg ? !1 : (this.Lg = !0, this.Zd.ya(), !0)
      };
      b.j.Ta = {
          Ke: 4278190080,
          Xd: 4294967295,
          Zf: 4278219733,
          Ri: 3858759680,
          bj: 3224580915
      };
      b.j.wa = function(a, c, d, e, g, h) {
          this.text = a || "";
          this.backgroundColor = c || b.j.Ta.Zf;
          this.textColor = d || b.j.Ta.Xd;
          this.clickAction = e || b.j.xb.NEWS_FEED;
          this.uri = g;
          null == h && (h = b.j.wa.dg);
          this.id = h;
          this.cb = !1;
          this.Da = new b.Pa
      };
      b.j.wa.dg = -1;
      b.j.wa.prototype.He = function(a) {
          return this.Da.fb(a)
      };
      b.j.wa.prototype.Aa = function(a) {
          this.Da.Aa(a)
      };
      b.j.wa.prototype.ua = function() {
          this.Da.ua()
      };
      b.j.wa.prototype.uc = function() {
          return this.cb ? !1 : (this.cb = !0, this.Da.ya(), !0)
      };
      b.j.wa.T = function(a) {
          return new b.j.wa(a.text,
              a.bg_color, a.text_color, a.click_action, a.uri, a.id)
      };
      b.j.Vd = {
          TOP: "TOP",
          BOTTOM: "BOTTOM"
      };
      b.j.xb = {
          NEWS_FEED: "NEWS_FEED",
          URI: "URI",
          NONE: "NONE"
      };
      b.j.xc = {
          AUTO_DISMISS: "AUTO_DISMISS",
          MANUAL: "SWIPE"
      };
      b.j.ed = {
          NONE: "NONE",
          BLANK: "BLANK"
      };
      b.j.Nd = {
          TOP: "TOP",
          GRAPHIC: "GRAPHIC"
      };
      b.j.Ca = {
          PORTRAIT: "PORTRAIT",
          LANDSCAPE: "LANDSCAPE"
      };
      b.j.kf = {
          START: "START",
          CENTER: "CENTER",
          END: "END"
      };
      b.j.Wc = {
          CENTER_CROP: "CENTER_CROP",
          FIT_CENTER: "FIT_CENTER"
      };
      b.j.R = {
          ej: "SLIDEUP",
          Qi: "MODAL",
          Ai: "FULL",
          Di: "WEB_HTML"
      };
      b.mb = function(a, c, d, e,
          g, h, f, n, m, p, k, l, u, t, v, x, z, y, w, C) {
          y = y || b.j.Ta.Xd;
          z = z || b.j.Ta.Ri;
          b.j.call(this, a, c, d, e, g, h, f, n, m, p, k, l, u, t, null, v, x, z, y, y, w, C)
      };
      b.Ka(b.mb, b.j);
      b.mb.prototype.R = b.j.R.ej;
      b.mb.prototype.Nc = function() {
          return !1
      };
      b.bc = function(a, c, d, e, g, h, f, n, m, p, k, l, u, t, v, x, z, y, w, C, A, G, I, D, E, F, B) {
          p = p || b.j.xc.MANUAL;
          B = B || b.j.Wc.FIT_CENTER;
          b.j.call(this, a, c, null, d, e, g, h, f, n, m, p, k, l, u, t, v, x, z, y, w, C, A, G, I, D, E, F, B)
      };
      b.Ka(b.bc, b.j);
      b.bc.prototype.R = b.j.R.Qi;
      b.ac = function(a, c, d, e, g, h, f, n, m, p, k, l, u, t, v, x, z, y, w, C, A, G, I, D, E, F, B,
          H) {
          p = p || b.j.xc.MANUAL;
          H = H || b.j.Ca.PORTRAIT;
          B = B || b.j.Wc.CENTER_CROP;
          b.j.call(this, a, c, null, d, e, g, h, f, n, m, p, k, l, u, t, v, x, z, y, w, C, A, G, I, D, E, F, B, H)
      };
      b.Ka(b.ac, b.j);
      b.ac.prototype.R = b.j.R.Ai;
      b.Na = function(a, c, d, e, g, h, f, n, m, p) {
          h = h || b.j.xc.MANUAL;
          b.j.call(this, a, null, null, c, d, e, g, null, null, null, h, f, null, null, null, null, null, null, null, null, n, m, null, null, null, p)
      };
      b.Ka(b.Na, b.j);
      b.Na.prototype.R = b.j.R.Di;
      b.Na.prototype.Wh = function() {
          return !1
      };
      b.Na.prototype.uc = function(a) {
          return this.cb ? !1 : (this.cb = !0, this.Da.ya(a),
              !0)
      };
      b.j.T = function(a) {
          if (a.is_control) return b.wc.T(a);
          var c = a.type;
          null != c && (c = c.toUpperCase());
          var d = a.message,
              e = a.text_align_message,
              g = a.slide_from,
              h = a.extras,
              q = a.campaign_id,
              n = a.card_id,
              m = a.trigger_id,
              p = a.click_action,
              k = a.uri,
              l = a.open_target,
              u = a.message_close,
              t = a.duration,
              v = a.icon,
              x = a.image_url,
              z = a.image_style,
              y = a.icon_color,
              w = a.icon_bg_color,
              C = a.bg_color,
              A = a.text_color,
              G = a.close_btn_color,
              I = a.header,
              D = a.text_align_header,
              E = a.header_text_color,
              F = a.frame_color,
              B = [],
              H = a.btns;
          null == H && (H = []);
          for (var K =
                  0; K < H.length; K++) B.push(b.j.wa.T(H[K]));
          var H = a.crop_type,
              K = a.orientation,
              J = a.animate_in;
          a = a.animate_out;
          if (c === b.bc.prototype.R) return new b.bc(d, e, h, q, n, m, p, k, l, u, t, v, x, z, y, w, C, A, G, J, a, I, D, E, F, B, H);
          if (c === b.ac.prototype.R) return new b.ac(d, e, h, q, n, m, p, k, l, u, t, v, x, z, y, w, C, A, G, J, a, I, D, E, F, B, H, K);
          if (c === b.mb.prototype.R) return new b.mb(d, e, g, h, q, n, m, p, k, l, u, t, v, x, y, w, C, A, J, a);
          if (c === b.Na.prototype.R) return new b.Na(d, h, q, n, m, u, t, J, a, F);
          f.f.error("Ignoring message with unknown type " + c)
      };
      b.Oa = function() {
          this.O = !1;
          this.N = []
      };
      b.Cc = function(a, b, d, e, g, h) {
          this.Jf = a || 0;
          this.mh = b || [];
          this.ih = d || [];
          this.Jh = e || [];
          this.Mf = g;
          if (null == g || "" === g) this.Mf = null;
          this.Xh = h || null
      };
      b.Cc.prototype.X = function() {
          return {
              s: "2.2.2",
              l: this.Jf,
              e: this.mh,
              a: this.ih,
              p: this.Jh,
              m: this.Mf,
              v: this.Xh
          }
      };
      b.Cc.na = function(a) {
          var c = a.l;
          "2.2.2" !== a.s && (c = 0);
          return new b.Cc(c, a.e, a.a, a.p, a.m, a.v)
      };
      b.jf = function(a, b) {
          this.Vh = a;
          this.Yh = b
      };
      b.jf.prototype.Bk = function(a) {
          null != a && null != a.templated_message && (a = a.templated_message,
              "inapp" === a.type && (a = b.j.T(a.data), "function" === typeof this.Yh && null != a && this.Yh(a)))
      };
      b.jf.T = function(a, b) {
          return null == a || null == a.trigger_id ? null : new this(a.trigger_id, b)
      };
      b.o = function(a, b) {
          this.type = a;
          this.data = b
      };
      b.o.prototype.vh = function(a, c) {
          return b.nb[this.type] === a && (null == this.data || this.data.Za(c))
      };
      b.o.gh = function(a, b) {
          var c = null;
          try {
              c = window.atob(a)
          } catch (e) {
              return f.f.info("Failed to unencode analytics id " + a + ": " + e.message), !1
          }
          return b === c.split("_")[0]
      };
      b.o.T = function(a) {
          var c = a.type,
              d;
          switch (c) {
              case b.o.V.OPEN:
                  d = null;
                  break;
              case b.o.V.cc:
                  d = b.o.fd.T(a.data);
                  break;
              case b.o.V.bf:
                  d = b.o.gd.T(a.data);
                  break;
              case b.o.V.Bc:
                  d = b.o.hd.T(a.data);
                  break;
              case b.o.V.Yb:
                  d = b.o.Xc.T(a.data);
                  break;
              case b.o.V.Qe:
                  d = b.o.Yc.T(a.data);
                  break;
              case b.o.V.Cb:
                  d = b.o.ad.T(a.data);
                  break;
              case b.o.V.Gb:
                  d = null
          }
          return new this(c, d)
      };
      b.o.V = {
          OPEN: "open",
          cc: "purchase",
          bf: "purchase_property",
          Bc: "push_click",
          Yb: "custom_event",
          Qe: "custom_event_property",
          Cb: "iam_click",
          Gb: "test"
      };
      b.ia = {
          OPEN: "open",
          cc: "purchase",
          Bc: "push_click",
          Yb: "custom_event",
          Cb: "iam_click",
          Gb: "test"
      };
      b.nb = {};
      b.nb[b.o.V.OPEN] = b.ia.OPEN;
      b.nb[b.o.V.cc] = b.ia.cc;
      b.nb[b.o.V.bf] = b.ia.cc;
      b.nb[b.o.V.Bc] = b.ia.Bc;
      b.nb[b.o.V.Yb] = b.ia.Yb;
      b.nb[b.o.V.Qe] = b.ia.Yb;
      b.nb[b.o.V.Cb] = b.ia.Cb;
      b.nb[b.o.V.Gb] = b.ia.Gb;
      b.o.Y = function(a, c, d, e) {
          this.Ih = a;
          this.Be = c;
          this.Jc = d;
          this.ca = e;
          this.Be === b.o.Y.ef.Re && this.Jc !== b.o.Y.va.jg && this.Jc !== b.o.Y.va.qg && this.Jc !== b.o.Y.va.bg && this.Jc !== b.o.Y.va.cg && (this.ca = b.L.Ya(this.ca))
      };
      b.o.Y.T = function(a) {
          return new this(a.property_key, a.property_type,
              a.comparator, a.property_value)
      };
      b.o.Y.prototype.Za = function(a) {
          var c = null;
          null != a && (c = a[this.Ih]);
          switch (this.Jc) {
              case b.o.Y.va.wi:
                  return null != c && c.valueOf() === this.ca.valueOf();
              case b.o.Y.va.Si:
                  return null == c || c.valueOf() !== this.ca.valueOf();
              case b.o.Y.va.Ci:
                  return typeof c === typeof this.ca && c > this.ca;
              case b.o.Y.va.jg:
                  return this.Be === b.o.Y.ef.Re ? null != c && b.G.rb(c) && b.L.Lh(c) <= this.ca : typeof c === typeof this.ca && c >= this.ca;
              case b.o.Y.va.Mi:
                  return typeof c === typeof this.ca && c < this.ca;
              case b.o.Y.va.qg:
                  return this.Be ===
                      b.o.Y.ef.Re ? null != c && b.G.rb(c) && b.L.Lh(c) >= this.ca : typeof c === typeof this.ca && c <= this.ca;
              case b.o.Y.va.Oi:
                  return null != c && "string" === typeof c && typeof c === typeof this.ca && null != c.match(this.ca);
              case b.o.Y.va.yi:
                  return null != c;
              case b.o.Y.va.ri:
                  return null == c;
              case b.o.Y.va.bg:
                  return null != c && b.G.rb(c) && b.L.Mh(c) < this.ca;
              case b.o.Y.va.cg:
                  return null != c && b.G.rb(c) && b.L.Mh(c) > this.ca;
              case b.o.Y.va.Ti:
                  return null == c || typeof c !== typeof this.ca || "string" !== typeof c || null == c.match(this.ca)
          }
          return !1
      };
      b.o.Y.prototype.X =
          function() {
              var a = this.ca;
              b.G.rb(this.ca) && (a = b.L.vd(a.valueOf()));
              return {
                  k: this.Ih,
                  t: this.Be,
                  c: this.Jc,
                  v: a
              }
          };
      b.o.Y.na = function(a) {
          return new this(a.k, a.t, a.c, a.v)
      };
      b.o.Y.va = {
          wi: 1,
          Si: 2,
          Ci: 3,
          jg: 4,
          Mi: 5,
          qg: 6,
          Oi: 10,
          yi: 11,
          ri: 12,
          bg: 15,
          cg: 16,
          Ti: 17
      };
      b.o.Y.ef = {
          sl: "boolean",
          xl: "number",
          Bl: "string",
          Re: "date"
      };
      b.o.zb = function(a) {
          this.filters = a
      };
      b.o.zb.T = function(a) {
          if (null == a || !b.G.isArray(a)) return null;
          for (var c = [], d = 0; d < a.length; d++) {
              for (var e = [], g = a[d], h = 0; h < g.length; h++) e.push(b.o.Y.T(g[h]));
              c.push(e)
          }
          return new this(c)
      };
      b.o.zb.prototype.Za = function(a) {
          for (var b = !0, d = 0; d < this.filters.length; d++) {
              for (var e = this.filters[d], g = !1, h = 0; h < e.length; h++)
                  if (e[h].Za(a)) {
                      g = !0;
                      break
                  } if (!g) {
                  b = !1;
                  break
              }
          }
          return b
      };
      b.o.zb.prototype.X = function() {
          for (var a = [], b = 0; b < this.filters.length; b++) {
              for (var d = this.filters[b], e = [], g = 0; g < d.length; g++) e.push(d[g].X());
              a.push(e)
          }
          return a
      };
      b.o.zb.na = function(a) {
          for (var c = [], d = 0; d < a.length; d++) {
              for (var e = [], g = a[d], h = 0; h < g.length; h++) e.push(b.o.Y.na(g[h]));
              c.push(e)
          }
          return new this(c)
      };
      b.o.fd = function(a) {
          this.sc =
              a
      };
      b.o.fd.prototype.Za = function(a) {
          return null == this.sc || a[0] === this.sc
      };
      b.o.fd.T = function(a) {
          return new this(a ? a.product_id : null)
      };
      b.o.gd = function(a, b) {
          this.sc = a;
          this.tc = b
      };
      b.o.gd.prototype.Za = function(a) {
          if (null == this.sc || null == this.tc) return !1;
          var b = a[1];
          return a[0] === this.sc && this.tc.Za(b)
      };
      b.o.gd.T = function(a) {
          return new this(a ? a.product_id : null, a ? b.o.zb.T(a.property_filters) : null)
      };
      b.o.hd = function(a) {
          this.oc = a
      };
      b.o.hd.prototype.Za = function(a) {
          return null == this.oc ? !0 : b.o.gh(a[0], this.oc)
      };
      b.o.hd.T =
          function(a) {
              return new this(a ? a.campaign_id : null)
          };
      b.o.Xc = function(a) {
          this.pc = a
      };
      b.o.Xc.prototype.Za = function(a) {
          return null == this.pc || this.pc === a[0]
      };
      b.o.Xc.T = function(a) {
          return new this(a ? a.event_name : null)
      };
      b.o.Yc = function(a, b) {
          this.pc = a;
          this.tc = b
      };
      b.o.Yc.prototype.Za = function(a) {
          if (null == this.pc || null == this.tc) return !1;
          var b = a[1];
          return a[0] === this.pc && this.tc.Za(b)
      };
      b.o.Yc.T = function(a) {
          return new this(a ? a.event_name : null, a ? b.o.zb.T(a.property_filters) : null)
      };
      b.o.ad = function(a, b) {
          this.oc = a;
          this.ud =
              b
      };
      b.o.ad.prototype.Za = function(a) {
          if (null == this.oc) return !1;
          var c = b.o.gh(a[0], this.oc);
          if (!c) return !1;
          var d = null == this.ud || 0 === this.ud.length;
          if (null != this.ud)
              for (var e = 0; e < this.ud.length; e++)
                  if (this.ud[e] === a[1]) {
                      d = !0;
                      break
                  } return c && d
      };
      b.o.ad.T = function(a) {
          return new this(a ? a.id : null, a ? a.buttons : null)
      };
      b.o.prototype.X = function() {
          return {
              t: this.type,
              d: this.data ? this.data.X() : null
          }
      };
      b.o.fd.prototype.X = function() {
          return this.sc
      };
      b.o.gd.prototype.X = function() {
          return {
              id: this.sc,
              pf: this.tc.X()
          }
      };
      b.o.hd.prototype.X =
          function() {
              return this.oc
          };
      b.o.Xc.prototype.X = function() {
          return this.pc
      };
      b.o.Yc.prototype.X = function() {
          return {
              e: this.pc,
              pf: this.tc.X()
          }
      };
      b.o.ad.prototype.X = function() {
          return this.oc
      };
      b.o.na = function(a) {
          var c;
          switch (a.t) {
              case b.o.V.OPEN:
                  c = null;
                  break;
              case b.o.V.cc:
                  c = new b.o.fd(a.d);
                  break;
              case b.o.V.bf:
                  c = a.d || {};
                  c = new b.o.gd(c.id, b.o.zb.na(c.pf || []));
                  break;
              case b.o.V.Bc:
                  c = new b.o.hd(a.d);
                  break;
              case b.o.V.Yb:
                  c = new b.o.Xc(a.d);
                  break;
              case b.o.V.Qe:
                  c = a.d || {};
                  c = new b.o.Yc(c.e, b.o.zb.na(c.pf || []));
                  break;
              case b.o.V.Cb:
                  c =
                      new b.o.ad(a.d);
                  break;
              case b.o.V.Gb:
                  c = null
          }
          return new this(a.t, c)
      };
      b.ra = function(a, c, d, e, g, h, f, n, m, p, k, l) {
          this.id = a;
          this.Kc = c || [];
          void 0 === d && (d = null);
          this.startTime = d;
          void 0 === e && (e = null);
          this.endTime = e;
          this.Of = g || 0;
          this.type = h;
          void 0 === p && (p = null);
          this.Ie = p;
          this.data = f;
          this.xd = n || 0;
          null == m && (m = b.ra.Fg);
          this.Qf = m;
          this.Fh = k;
          this.jc = l || null
      };
      b.ra.prototype.pk = function(a) {
          return null == this.jc || this.Qf !== b.ra.Fg && a - this.jc >= 1E3 * this.Qf
      };
      b.ra.prototype.Pf = function(a) {
          this.jc = a
      };
      b.ra.prototype.vk = function() {
          return Math.max(this.jc +
              1E3 * this.xd - Date.now(), 0)
      };
      b.ra.prototype.yh = function() {
          var a = Date.now() - this.jc,
              b = null == this.jc || isNaN(a) || null == this.Ie || a < this.Ie;
          b || f.f.info("Trigger action " + this.type + " is no longer eligible for display - fired " + a + "ms ago and has a timeout of " + this.Ie + "ms");
          return b
      };
      b.ra.Fg = -1;
      b.ra.V = {
          Gi: "inapp",
          gj: "templated_iam"
      };
      b.ra.T = function(a) {
          for (var c = a.id, d = [], e = 0; e < a.trigger_condition.length; e++) d.push(b.o.T(a.trigger_condition[e]));
          var e = b.L.Ya(a.start_time),
              g = b.L.Ya(a.end_time),
              h = a.priority,
              f = a.type,
              n = a.delay,
              m = a.re_eligibility,
              p = a.timeout,
              k = a.data;
          a = a.min_seconds_since_last_trigger;
          return b.G.Ub(b.ra.V, f, "Could not construct Trigger from server data", "ab.Trigger.Types") ? new this(c, d, e, g, h, f, k, n, m, p, a) : null
      };
      b.ra.prototype.X = function() {
          for (var a = [], b = 0; b < this.Kc.length; b++) a.push(this.Kc[b].X());
          return {
              i: this.id,
              c: a,
              s: this.startTime,
              e: this.endTime,
              p: this.Of,
              t: this.type,
              da: this.data,
              d: this.xd,
              r: this.Qf,
              tm: this.Ie,
              ss: this.Fh,
              lt: this.jc
          }
      };
      b.ra.na = function(a) {
          for (var c = [], d = 0; d < a.c.length; d++) c.push(b.o.na(a.c[d]));
          return new b.ra(a.i, c, b.L.Pc(a.s), b.L.Pc(a.e), a.p, a.t, a.da, a.d, a.r, a.tm, a.ss, a.lt)
      };
      b.w = function(a, b) {
          this.H = a;
          this.Kb = b
      };
      b.w.Xi = /^[0-9 .\\(\\)\\+\\-]+$/;
      b.w.kg = {
          MALE: "m",
          FEMALE: "f",
          OTHER: "o",
          UNKNOWN: "u",
          NOT_APPLICABLE: "n",
          PREFER_NOT_TO_SAY: "p"
      };
      b.w.dd = {
          OPTED_IN: "opted_in",
          SUBSCRIBED: "subscribed",
          UNSUBSCRIBED: "unsubscribed"
      };
      b.w.jd = "user_id";
      b.w.ag = "custom";
      b.w.Xb = "inc";
      b.w.Fa = "add";
      b.w.Ga = "remove";
      b.w.prototype.U = function(a) {
          null == a && f.f.error("getUserId must be supplied with a callback. e.g., appboy.getUser().getUserId(function(userId) {console.log('the user id is ' + userId)})");
          "function" === typeof a && a(this.H.U())
      };
      b.w.prototype.zj = function(a, c) {
          return !b.S.Tb(a, "add alias", "the alias", !1) || 0 >= a.length ? (f.f.error("addAlias requires a non-empty alias"), !1) : !b.S.Tb(c, "add alias", "the label", !1) || 0 >= c.length ? (f.f.error("addAlias requires a non-empty label"), !1) : this.Kb.tk(a, c).O
      };
      b.w.prototype.Pk = function(a) {
          return b.S.Tb(a, "set first name", "the firstName", !0) ? this.H.aa("first_name", a) : !1
      };
      b.w.prototype.Tk = function(a) {
          return b.S.Tb(a, "set last name", "the lastName", !0) ? this.H.aa("last_name",
              a) : !1
      };
      b.w.prototype.Nk = function(a) {
          return null === a || b.S.wh(a) ? this.H.aa("email", a) : (f.f.error('Cannot set email address - "' + a + '" did not pass RFC-5322 validation.'), !1)
      };
      b.w.prototype.Qk = function(a) {
          "string" === typeof a && (a = a.toLowerCase());
          return null === a || b.G.Ub(b.w.kg, a, 'Gender "' + a + '" is not a valid gender.', "ab.User.Genders") ? this.H.aa("gender", a) : !1
      };
      b.w.prototype.Mk = function(a, b, d) {
          if (null === a && null === b && null === d) return this.H.aa("dob", null);
          a = parseInt(a);
          b = parseInt(b);
          d = parseInt(d);
          return isNaN(a) ||
              isNaN(b) || isNaN(d) || 12 < b || 1 > b || 31 < d || 1 > d ? (f.f.error("Cannot set date of birth - parameters should comprise a valid date e.g. setDateOfBirth(1776, 7, 4);"), !1) : this.H.aa("dob", "" + a + "-" + b + "-" + d)
      };
      b.w.prototype.Lk = function(a) {
          return b.S.Tb(a, "set country", "the country", !0) ? this.H.aa("country", a) : !1
      };
      b.w.prototype.Rk = function(a) {
          return b.S.Tb(a, "set home city", "the homeCity", !0) ? this.H.aa("home_city", a) : !1
      };
      b.w.prototype.Sk = function(a) {
          return b.S.Tb(a, "set language", "the language", !0) ? this.H.aa("language",
              a) : !1
      };
      b.w.prototype.Ok = function(a) {
          return b.G.Ub(b.w.dd, a, 'Email notification setting "' + a + '" is not a valid subscription type.', "ab.User.NotificationSubscriptionTypes") ? this.H.aa("email_subscribe", a) : !1
      };
      b.w.prototype.Vf = function(a) {
          return b.G.Ub(b.w.dd, a, 'Push notification setting "' + a + '" is not a valid subscription type.', "ab.User.NotificationSubscriptionTypes") ? this.H.aa("push_subscribe", a) : !1
      };
      b.w.prototype.Uk = function(a) {
          return b.S.Tb(a, "set phone number", "the phoneNumber", !0) ? null === a || a.match(b.w.Xi) ?
              this.H.aa("phone", a) : (f.f.error('Cannot set phone number - "' + a + '" did not pass validation.'), !1) : !1
      };
      b.w.prototype.Kk = function(a) {
          return this.H.aa("image_url", a)
      };
      b.w.prototype.Fe = function(a, b, d, e, g) {
          if (null == a || null == b) return f.f.error("Cannot set last-known location - latitude and longitude are required."), !1;
          a = parseFloat(a);
          b = parseFloat(b);
          null != d && (d = parseFloat(d));
          null != e && (e = parseFloat(e));
          null != g && (g = parseFloat(g));
          return isNaN(a) || isNaN(b) || null != d && isNaN(d) || null != e && isNaN(e) || null != g &&
              isNaN(g) ? (f.f.error("Cannot set last-known location - all supplied parameters must be numeric."), !1) : 90 < a || -90 > a || 180 < b || -180 > b ? (f.f.error("Cannot set last-known location - latitude and longitude are bounded by \u00b190 and \u00b1180 respectively."), !1) : null != d && 0 > d || null != g && 0 > g ? (f.f.error("Cannot set last-known location - accuracy and altitudeAccuracy may not be negative."), !1) : this.Kb.Fe(this.H.U(), a, b, e, d, g).O
      };
      b.w.prototype.Rc = function(a, c) {
          if (!b.S.$a(a, "set custom user attribute", "the given key")) return !1;
          var d = typeof c,
              e = b.G.rb(c),
              g = b.G.isArray(c);
          if ("number" !== d && "boolean" !== d && !e && !g && null != c && !b.S.$a(c, 'set custom user attribute "' + a + '"', "the given value")) return !1;
          e && (c = b.L.Uh(c));
          if (g)
              for (d = 0; d < c.length; d++)
                  if (!b.S.$a(c[d], 'set custom user attribute "' + a + '"', "the element in the given array")) return !1;
          return this.H.Rc(a, c)
      };
      b.w.prototype.Aj = function(a, c) {
          if (!b.S.$a(a, "add to custom user attribute array", "the given key") || null != c && !b.S.$a(c, "add to custom user attribute array", "the given value")) return !1;
          var d = {};
          d[b.w.Fa] = c;
          return this.H.Rc(a, d)
      };
      b.w.prototype.Dk = function(a, c) {
          if (!b.S.$a(a, "remove from custom user attribute array", "the given key") || null != c && !b.S.$a(c, "remove from custom user attribute array", "the given value")) return !1;
          var d = {};
          d[b.w.Ga] = c;
          return this.H.Rc(a, d)
      };
      b.w.prototype.mk = function(a, c) {
          if (!b.S.$a(a, "increment custom user attribute", "the given key")) return !1;
          null == c && (c = 1);
          var d = parseInt(c);
          if (isNaN(d) || d !== parseFloat(c)) return f.f.error('Cannot increment custom user attribute because the given incrementValue "' +
              c + '" is not an integer.'), !1;
          c = {};
          c[b.w.Xb] = d;
          return this.H.Rc(a, c)
      };
      b.w.prototype.Sf = function(a, b, d, e) {
          this.H.Sf(a, b, d, e);
          this.Kb.Zh()
      };
      b.w.prototype.De = function(a) {
          this.H.De(a)
      };
      b.Wb = function() {};
      b.Wb.prototype.Ad = function() {};
      b.Wb.prototype.Nb = function() {};
      b.Wb.prototype.clearData = function() {};
      b.Ma = function(a, c, d) {
          this.pb = a;
          this.Kb = c;
          this.A = d;
          a = this.A.ka(b.h.B.C.Oe) || [];
          c = [];
          for (d = 0; d < a.length; d++) {
              var e = b.b.na(a[d]);
              null != e && c.push(e)
          }
          this.W = this.le(this.wf(c));
          this.Ec = this.A.ka(b.h.B.C.Ne) ||
              0;
          this.Dc = this.A.ka(b.h.B.C.Me) || 0
      };
      b.Ka(b.Ma, b.Wb);
      b.Ma.prototype.tj = function(a, c, d, e) {
          var g;
          g = c ? [] : this.W.slice();
          for (var h = 0; h < a.length; h++) {
              for (var f = a[h], n = null, m = 0; m < this.W.length; m++)
                  if (f.id === this.W[m].id) {
                      n = this.W[m];
                      break
                  } if (c) f = b.b.Ef(f), null != n && n.viewed && (f.viewed = !0), null != f && g.push(f);
              else if (null == n) n = b.b.Ef(f), null != n && g.push(n);
              else if (!n.sh(f))
                  for (m = 0; m < g.length; m++)
                      if (f.id === g[m].id) {
                          g.splice(m, 1);
                          break
                      }
          }
          this.W = this.le(this.wf(g));
          this.ne();
          this.Ec = d || 0;
          this.A.ga(b.h.B.C.Ne, this.Ec);
          this.Dc = e || 0;
          this.A.ga(b.h.B.C.Me, this.Dc)
      };
      b.Ma.prototype.Ad = function(a) {
          null != a && a.cards && (this.tj(a.cards, a.full_sync, a.last_full_sync_at, a.last_card_updated_at), this.pb.ya(this.Lc()))
      };
      b.Ma.prototype.jk = function(a) {
          var c = this.W.slice();
          this.Kb.Mc().U(function(d) {
              for (var e = 0; e < a.length; e++)
                  if (d === a[e].userId || null == d && null == a[e].userId) {
                      for (var g = a[e].card, h = null, f = 0; f < this.W.length; f++)
                          if (g.id === this.W[f].id) {
                              h = this.W[f];
                              break
                          } if (null == h) g = b.b.Ef(g), null != g && c.push(g);
                      else if (!h.sh(g))
                          for (f = 0; f <
                              c.length; f++)
                              if (g.id === c[f].id) {
                                  c.splice(f, 1);
                                  break
                              }
                  } this.W = this.le(this.wf(c));
              this.ne();
              this.pb.ya(this.Lc())
          }.bind(this))
      };
      b.Ma.prototype.wf = function(a) {
          for (var c = this.A.ka(b.h.B.C.Uc) || {}, d = this.A.ka(b.h.B.C.Tc) || {}, e = {}, g = {}, h = 0; h < a.length; h++) c[a[h].id] && (a[h].viewed = !0, e[a[h].id] = !0), d[a[h].id] && (a[h].dismissed = !0, g[a[h].id] = !0);
          this.A.ga(b.h.B.C.Uc, e);
          this.A.ga(b.h.B.C.Tc, g);
          return a
      };
      b.Ma.prototype.le = function(a) {
          for (var b = [], d = new Date, e = 0; e < a.length; e++)(null == a[e].expiresAt || a[e].expiresAt >=
              d) && !a[e].dismissed && b.push(a[e]);
          return b
      };
      b.Ma.prototype.ne = function() {
          for (var a = [], c = 0; c < this.W.length; c++) a.push(this.W[c].X());
          this.A.ga(b.h.B.C.Oe, a)
      };
      b.Ma.prototype.vc = function() {
          return this.Kb.vc(this.Ec, this.Dc, this.Ad.bind(this))
      };
      b.Ma.prototype.Lc = function() {
          var a = this.le(this.W);
          a.sort(function(a, b) {
              return a.pinned && !b.pinned ? -1 : b.pinned && !a.pinned ? 1 : a.updated > b.updated ? -1 : b.updated > a.updated ? 1 : 0
          });
          var c = Math.max(this.Dc || 0, this.Ec || 0);
          0 === c && (c = void 0);
          return new b.qa(a, b.L.Ya(c))
      };
      b.Ma.prototype.Nb =
          function(a) {
              a || (this.W = [], this.pb.ya(new b.qa(this.W.slice(), null)), this.A.za(b.h.B.C.Oe), this.A.za(b.h.B.C.Uc), this.A.za(b.h.B.C.Tc));
              this.Dc = this.Ec = 0;
              this.A.za(b.h.B.C.Ne);
              this.A.za(b.h.B.C.Me)
          };
      b.Ma.prototype.clearData = function() {
          this.Dc = this.Ec = 0;
          this.W = [];
          this.pb.ya(new b.qa(this.W.slice(), null))
      };
      b.$b = function(a, c) {
          this.pb = a;
          this.A = c;
          a = this.A.ka(b.h.B.C.Ze) || [];
          c = [];
          for (var d = 0; d < a.length; d++) {
              var e = b.b.na(a[d]);
              null != e && c.push(e)
          }
          this.W = c;
          this.Fc = b.L.Pc(this.A.ka(b.h.B.C.Ve))
      };
      b.Ka(b.$b, b.Wb);
      b.$b.prototype.wj = function(a) {
          for (var c = [], d, e = this.A.ka(b.h.B.C.Sc) || {}, g = {}, h = 0; h < a.length; h++) d = a[h], d = b.b.Zj(d), null != d && (e[d.id] && (d.viewed = !0, g[d.id] = !0), c.push(d));
          this.A.ga(b.h.B.C.Sc, g);
          this.W = c;
          this.ne();
          this.Fc = new Date;
          this.A.ga(b.h.B.C.Ve, this.Fc)
      };
      b.$b.prototype.ne = function() {
          for (var a = [], c = 0; c < this.W.length; c++) a.push(this.W[c].X());
          this.A.ga(b.h.B.C.Ze, a)
      };
      b.$b.prototype.Ad = function(a) {
          null != a && a.feed && (this.wj(a.feed), this.pb.ya(new b.J(this.W.slice(), this.Fc)))
      };
      b.$b.prototype.re =
          function() {
              for (var a = [], c = new Date, d = 0; d < this.W.length; d++)(null == this.W[d].expiresAt || this.W[d].expiresAt >= c) && a.push(this.W[d]);
              return new b.J(a, this.Fc)
          };
      b.$b.prototype.clearData = function(a) {
          null == a && (a = !1);
          this.W = [];
          this.Fc = null;
          a && (this.A.za(b.h.B.C.Ze), this.A.za(b.h.B.C.Ve));
          this.pb.ya(new b.J(this.W.slice(), this.Fc))
      };
      b.yc = function(a) {
          this.pb = a;
          this.mf = []
      };
      b.Ka(b.yc, b.Wb);
      b.yc.prototype.pj = function(a) {
          null != a && this.mf.push(a)
      };
      b.yc.prototype.Nb = function(a) {
          a || this.clearData()
      };
      b.yc.prototype.clearData =
          function() {
              var a = this.mf;
              this.mf = [];
              return a
          };
      b.yc.prototype.Gh = function(a) {
          null == a && (a = []);
          a = this.clearData().concat(a);
          if (0 < a.length) {
              for (var c = this.pb.ya(a.slice()) || [], c = b.G.uh.apply(this, c), d = 0; d < a.length; d++) a[d].Df && (a[d].Df = !1, -1 === c.indexOf(a[d]) && c.push(a[d]));
              for (d = 0; d < c.length; d++) this.pj(c[d])
          }
      };
      b.Hb = function(a, c, d, e) {
          function g(a, b, c) {
              return function() {
                  h.uf(a, b, c)
              }
          }
          this.jj = a;
          this.Mg = c;
          this.A = d;
          this.Kb = e;
          this.Qa = this.A.ka(b.h.B.C.Pd) || {};
          this.eb = this.A.ka(b.h.B.C.Qd) || {};
          this.Lb = [];
          a =
              this.A.ka(b.h.B.C.hf) || [];
          c = [];
          var h = this;
          for (d = 0; d < a.length; d++) {
              e = b.ra.na(a[d]);
              if (null != this.Qa[e.id]) {
                  e.Pf(this.Qa[e.id]);
                  var f = e.vk();
                  if (0 < f) {
                      var n, m, p = this.eb[e.id];
                      null != p && (n = p.il, null != p.zf && b.Event.xh(p.zf) && (m = b.Event.na(p.zf)));
                      this.Lb.push(setTimeout(g(e, n, m), f))
                  }
              }
              c.push(e)
          }
          this.sa = c;
          this.od = this.A.ka(b.h.B.C.We) || null
      };
      b.Ka(b.Hb, b.Wb);
      b.Hb.prototype.yj = function() {
          for (var a = [], c = 0; c < this.sa.length; c++) a.push(this.sa[c].X());
          this.A.ga(b.h.B.C.hf, a)
      };
      b.Hb.prototype.Ad = function(a) {
          var c = !1;
          if (null != a && a.triggers) {
              var d = {},
                  e = {};
              this.sa = [];
              for (var g = 0; g < a.triggers.length; g++) {
                  var h = b.ra.T(a.triggers[g]);
                  null != this.Qa[h.id] && (h.Pf(this.Qa[h.id]), d[h.id] = this.Qa[h.id]);
                  null != this.eb[h.id] && (e[h.id] = this.eb[h.id]);
                  for (var q = 0; q < h.Kc.length; q++)
                      if (h.Kc[q].vh(b.ia.Gb, null)) {
                          c = !0;
                          break
                      } null != h && this.sa.push(h)
              }
              b.G.isEqual(this.Qa, d) || (this.Qa = d, this.A.ga(b.h.B.C.Pd, this.Qa));
              b.G.isEqual(this.eb, e) || (this.eb = e, this.A.ga(b.h.B.C.Qd, this.eb));
              this.yj();
              c && (f.f.info("Trigger with test condition found, firing test."),
                  this.Ob(b.ia.Gb));
              this.Ob(b.ia.OPEN)
          }
      };
      b.Hb.prototype.uf = function(a, c, d) {
          switch (a.type) {
              case b.ra.V.Gi:
                  c = b.j.T(a.data);
                  if (null == c) {
                      f.f.error("Could not parse trigger data for trigger " + a.id + ", ignoring.");
                      break
                  }
                  a.yh() && this.Mg.Gh([c]);
                  break;
              case b.ra.V.gj:
                  var e = this,
                      g = b.jf.T(a.data, function(b) {
                          a.yh() && e.Mg.Gh([b])
                      });
                  if (null == g) {
                      f.f.error("Could not parse trigger data for trigger " + a.id + ", ignoring.");
                      break
                  }
                  this.Kb.al(g, c, d);
                  break;
              default:
                  f.f.error("Trigger " + a.id + " was of unexpected type " + a.type +
                      ", ignoring.")
          }
      };
      b.Hb.prototype.Ob = function(a, c, d) {
          if (b.G.Ub(b.ia, a, "Cannot fire trigger action.", "ab.TriggerEvents")) {
              for (var e = Date.now(), g = e - this.od, h = !0, q = !0, n = null, m = 0; m < this.sa.length; m++)
                  if (this.sa[m].pk(e) && (null == this.sa[m].startTime || this.sa[m].startTime <= e) && (null == this.sa[m].endTime || this.sa[m].endTime >= e) && (null == n || this.sa[m].Of > n.Of)) {
                      for (var p = !1, k = 0; k < this.sa[m].Kc.length; k++)
                          if (this.sa[m].Kc[k].vh(a, c)) {
                              p = !0;
                              break
                          } if (p) {
                          h = !1;
                          if (null != this.od)
                              if (a === b.ia.Gb) f.f.info("Ignoring minimum interval between trigger because it is a test type.");
                              else if (p = this.sa[m].Fh, null == p && (p = this.jj), g < 1E3 * p) continue;
                          q = !1;
                          n = this.sa[m]
                      }
                  } if (h) f.f.info("Trigger event " + a + " did not match any trigger conditions.");
              else if (q) f.f.info("Ignoring " + a + " trigger event because a trigger fired " + g / 1E3 + "s ago.");
              else if (null != n)
                  if (!1 === navigator.onLine && 0 === n.xd) f.f.info("Not firing " + n.type + " trigger action " + n.id + " due to offline state.");
                  else {
                      f.f.info("Firing " + n.type + " trigger action " + n.id);
                      n.Pf(e);
                      this.od = e;
                      this.A.ga(b.h.B.C.We, e);
                      this.Qa[n.id] = e;
                      this.A.ga(b.h.B.C.Pd,
                          this.Qa);
                      c = {
                          il: a
                      };
                      null != d && (c.zf = d.X());
                      this.eb[n.id] = c;
                      this.A.ga(b.h.B.C.Qd, this.eb);
                      var l = this;
                      0 === n.xd ? l.uf(n, a, d) : this.Lb.push(setTimeout(function() {
                          l.uf(n, a, d)
                      }, 1E3 * n.xd))
                  }
          }
      };
      b.Hb.prototype.Nb = function(a) {
          this.sa = [];
          this.A.za(b.h.B.C.hf);
          if (!a) {
              this.od = null;
              this.Qa = {};
              this.eb = {};
              for (a = 0; a < this.Lb.length; a++) clearTimeout(this.Lb[a]);
              this.Lb = [];
              this.A.za(b.h.B.C.We);
              this.A.za(b.h.B.C.Pd);
              this.A.za(b.h.B.C.Qd)
          }
      };
      b.Hb.prototype.clearData = function() {
          this.sa = [];
          this.od = null;
          this.Qa = {};
          this.eb = {};
          for (var a =
                  0; a < this.Lb.length; a++) clearTimeout(this.Lb[a]);
          this.Lb = []
      };
      b.K = function(a, c, d, e, g, h, f, n, m, p, k) {
          this.Xa = a;
          this.lj = c;
          this.Tg = d;
          this.Ig = e;
          this.Yd = g;
          this.$d = 10;
          this.Og = null;
          this.ea = h;
          this.ld = f;
          this.H = n;
          this.Ra = m;
          this.A = p;
          this.ij = k;
          this.nf = new b.Pa;
          this.qf = []
      };
      b.K.prototype.tf = function(a) {
          var c = this.ld.zd(),
              d = c.nc(),
              e = this.A.ka(b.h.B.C.Se);
          b.G.isEqual(e, d) || (a.device = d);
          a.api_key = this.Xa;
          a.time = b.L.vd(Date.now(), !0);
          a.sdk_version = this.lj;
          this.Tg && (a.sdk_flavor = this.Tg);
          a.app_version = this.Ig;
          a.device_id =
              c.id;
          return a
      };
      b.K.prototype.yf = function(a, c) {
          if (c.error) {
              var d = c.error;
              c.error === b.Le.Fi ? d = 'The given API key "' + a.api_key + '" is invalid.' : c.error === b.Le.di ? d = "Sorry, we are not currently accepting your requests. If you think this is in error, please contact us." : c.error === b.Le.Vi && (d = "No device identifier. This should never happen. Please contact support@braze.com");
              f.f.error("Backend error: " + d);
              return !1
          }
          return !0
      };
      b.K.prototype.Mb = function(a, c, d, e, g, h) {
          null == d && (d = !0);
          d && this.ie();
          var k, n = this.A.lh(),
              m = this.A.Xj(),
              p = this.qf;
          this.qf = [];
          var l = this.ea.uk();
          if (0 < n.length)
              for (k = 0; k < n.length; k++) n[k].type === f.ba.Bg && (l = !0);
          var r = c || l;
          "function" !== typeof h || r || h();
          if (!d || 0 !== n.length || 0 !== m.length || 0 !== p.length || a || r) {
              var u = this.Xg(a, r);
              if (0 < n.length) {
                  a = [];
                  for (k = 0; k < n.length; k++) a.push(n[k].nc());
                  u.events = a
              }
              0 < m.length && (u.attributes = m);
              if (0 < p.length) {
                  a = [];
                  for (k = 0; k < p.length; k++) a.push(p[k].nc());
                  u.feedback = a
              }
              u = this.tf(u);
              k = this.Wg(u);
              var t = this;
              b.ze.Nf({
                  url: "" + this.Yd + "/data/",
                  data: u,
                  headers: k,
                  O: function(a) {
                      t.yf(u,
                          a) && (t.Ra.Ak(a), null == u.respond_with || u.respond_with.user_id == t.H.U()) && (null != u.device && t.A.ga(b.h.B.C.Se, u.device), t.ij(a), "function" === typeof e && e())
                  },
                  error: function() {
                      t.A.Ea(n);
                      for (var a = 0; a < m.length; a++) t.A.Eh(m[a]);
                      "function" === typeof g && g()
                  },
                  oe: function(a) {
                      "function" === typeof h && r && h();
                      if (d)
                          if (a) t.me();
                          else {
                              a = t.Og;
                              if (null == a || a < 1E3 * t.$d) a = 1E3 * t.$d;
                              t.me(Math.min(3E5, b.Math.zk(1E3 * t.$d, 3 * a)))
                          }
                  }
              });
              l && this.nf.ya()
          } else this.me()
      };
      b.K.prototype.dh = function(a, b) {
          var c = "HTTP error ";
          null != a && (c +=
              a + " ");
          f.f.error(c + b)
      };
      b.K.prototype.al = function(a, c, d) {
          var e = this.Xg(!1, !1),
              e = this.tf(e);
          e.template = {
              trigger_id: a.Vh,
              trigger_event_type: c
          };
          null != d && (e.template.data = d.nc());
          c = this.Wg(e);
          var g = this;
          b.ze.Nf({
              url: "" + this.Yd + "/template/",
              data: e,
              headers: c,
              O: function(b) {
                  g.yf(e, b) && a.Bk(b)
              },
              error: function(b) {
                  g.dh(b, "retrieving user personalization for message " + a.Vh)
              }
          })
      };
      b.K.prototype.vc = function(a, c, d) {
          var e = this.tf({});
          e.last_full_sync_at = a;
          e.last_card_updated_at = c;
          a = this.H.U();
          null != a && (e.user_id = a);
          var g = this;
          b.ze.Nf({
              url: "" + this.Yd + "/content_cards/sync",
              data: e,
              headers: [
                  ["X-Braze-Api-Key", this.Xa],
                  ["X-Braze-DataRequest", !0],
                  ["X-Braze-ContentCardsRequest", !0]
              ],
              O: function(a) {
                  g.yf(e, a) && d(a)
              },
              error: function(a) {
                  g.dh(a, "retrieving content cards")
              }
          })
      };
      b.K.prototype.Xg = function(a, b) {
          var c = {};
          a && (c.feed = !0);
          b && (c.triggers = !0);
          a = this.H.U();
          null != a && (c.user_id = a);
          c.config = {
              config_time: this.Ra.fk()
          };
          return {
              respond_with: c
          }
      };
      b.K.prototype.Wg = function(a) {
          var b = [
                  ["X-Braze-Api-Key", this.Xa]
              ],
              d = !1;
          null != a.respond_with &&
              a.respond_with.triggers && (b.push(["X-Braze-TriggersRequest", !0]), d = !0);
          null != a.respond_with && a.respond_with.feed && (b.push(["X-Braze-FeedRequest", !0]), d = !0);
          d && b.push(["X-Braze-DataRequest", !0]);
          return b
      };
      b.K.prototype.ge = function(a) {
          if (null == a.campaignId && null == a.cardId && null == a.triggerId) return f.f.info("The in-app message has no campaignId, cardId, or triggerId - not sending event info to Braze servers."), null;
          var b = {};
          null != a.cardId && (b.card_ids = [a.cardId]);
          null != a.campaignId && (b.campaign_ids = [a.campaignId]);
          null != a.triggerId && (b.trigger_ids = [a.triggerId]);
          return b
      };
      b.K.prototype.fe = function(a) {
          for (var b = null, d = 0; d < a.length; d++) null != a[d].id && "" !== a[d].id && (b = b || {}, b.ids = b.ids || [], b.ids.push(a[d].id));
          return b
      };
      b.K.prototype.me = function(a) {
          if (!this.Jg) {
              null == a && (a = 1E3 * this.$d);
              this.ie();
              var b = this;
              this.ae = setTimeout(function() {
                  if (document.hidden) {
                      var a = function() {
                          document.hidden || (document.removeEventListener("visibilitychange", a, !1), b.Mb())
                      };
                      document.addEventListener("visibilitychange",
                          a, !1)
                  } else b.Mb()
              }, a);
              this.Og = a
          }
      };
      b.K.prototype.ie = function() {
          null != this.ae && (clearTimeout(this.ae), this.ae = null)
      };
      b.K.prototype.Ff = function() {
          this.Jg = !1;
          this.me()
      };
      b.K.prototype.yd = function() {
          this.nf.ua();
          this.ie();
          this.Jg = !0;
          this.Mb(null, null, !1);
          this.ae = null
      };
      b.K.prototype.Zk = function(a) {
          this.nf.fb(a)
      };
      b.K.prototype.Ae = function(a, c) {
          var d = this.ea.ck(),
              e = this.ea.pa();
          this.A.za(b.h.B.C.Li);
          var g = this;
          this.Zh();
          var h = d !== e;
          g.Mb(null, !1, null, null, null, c);
          c = f.Z.ib.dc;
          (new f.Z(c, f.f)).nh(c.la.cf, function(b,
              c) {
              h && null != a && c && a.subscribe()
          }, function() {
              var c = g.A.ka(b.h.B.C.df);
              h && null != a && null != c && a.subscribe()
          })
      };
      b.K.prototype.Nb = function(a, c, d, e) {
          var g = this.H.U();
          if (g !== a) {
              this.ea.Pj();
              this.H.lk(a);
              for (var h = 0; h < c.length; h++) c[h].Nb(null == g);
              null != g && this.A.za(b.h.B.C.Sc);
              this.A.za(b.h.B.C.Se);
              this.Ae(e, d);
              f.f.info('Changed user to "' + a + '".')
          } else "function" === typeof d ? (f.f.info('Current user is already "' + a + '". Executing networkCallCompleteCallback.'), d()) : f.f.info('Current user is already "' + a + '". Doing nothing.')
      };
      b.K.prototype.Mc = function() {
          return new b.w(this.H, this)
      };
      b.K.prototype.Dd = function() {
          this.ie();
          this.ea.pa();
          this.Mb()
      };
      b.K.prototype.Ee = function() {
          this.ea.pa();
          this.Mb(!0)
      };
      b.K.prototype.Gk = function(a, b) {
          this.ea.pa();
          f.f.info("Requesting explicit trigger refresh.");
          this.Mb(null, !0, null, a, b)
      };
      b.K.prototype.tk = function(a, c) {
          var d = new b.Oa,
              e = this.ea.pa(),
              g = f.ba.bi;
          d.N.push(new b.Event(this.H.U(), g, Date.now(), e, {
              a: a,
              l: c
          }));
          d.O = this.A.Ea(d.N);
          return d
      };
      b.K.prototype.Kf = function(a, c) {
          var d = new b.Oa,
              e = this.ea.pa();
          if (this.Ra.Yj(a)) return f.f.info('Custom Event "' + a + '" is blacklisted, ignoring.'), d;
          d.N.push(new b.Event(this.H.U(), f.ba.CustomEvent, Date.now(), e, {
              n: a,
              p: c
          }));
          d.O = this.A.Ea(d.N);
          return d
      };
      b.K.prototype.Lf = function(a, c, d, e, g) {
          var h = new b.Oa,
              k = this.ea.pa();
          if (this.Ra.yk(a)) return f.f.info('Purchase "' + a + '" is blacklisted, ignoring.'), h;
          h.N.push(new b.Event(this.H.U(), f.ba.Ii, Date.now(), k, {
              pid: a,
              c: d,
              p: c,
              q: e,
              pr: g
          }));
          h.O = this.A.Ea(h.N);
          return h
      };
      b.K.prototype.Fe = function(a, c, d, e, g, h) {
          var k = new b.Oa,
              n =
              this.ea.pa();
          c = {
              latitude: c,
              longitude: d
          };
          null != e && (c.altitude = e);
          null != g && (c.ll_accuracy = g);
          null != h && (c.alt_accuracy = h);
          k.N.push(new b.Event(a, f.ba.Ni, Date.now(), n, c));
          k.O = this.A.Ea(k.N);
          return k
      };
      b.K.prototype.Cd = function(a) {
          var c = new b.Oa,
              d = this.ea.pa();
          if (a instanceof b.wc) c.N.push(new b.Event(this.H.U(), f.ba.oi, Date.now(), d, {
              trigger_ids: [a.triggerId]
          }));
          else {
              if (!a.Rf()) return f.f.info("This in-app message has already received an impression. Ignoring analytics event."), c;
              a = this.ge(a);
              if (null == a) return c;
              c.N.push(new b.Event(this.H.U(), f.ba.Hi, Date.now(), d, a))
          }
          c.O = this.A.Ea(c.N);
          return c
      };
      b.K.prototype.ye = function(a) {
          var c = new b.Oa,
              d = this.ea.pa();
          if (!a.uc()) return f.f.info("This in-app message has already received a click. Ignoring analytics event."), c;
          a = this.ge(a);
          if (null == a) return c;
          c.N.push(new b.Event(this.H.U(), f.ba.mg, Date.now(), d, a));
          c.O = this.A.Ea(c.N);
          return c
      };
      b.K.prototype.xe = function(a, c) {
          var d = new b.Oa,
              e = this.ea.pa();
          if (!a.uc()) return f.f.info("This in-app message button has already received a click. Ignoring analytics event."),
              d;
          c = this.ge(c);
          if (null == c) return d;
          if (a.id === b.j.wa.dg) return f.f.info("This in-app message button does not have a tracking id. Not logging event to Braze servers."), d;
          null != a.id && (c.bid = a.id);
          d.N.push(new b.Event(this.H.U(), f.ba.lg, Date.now(), e, c));
          d.O = this.A.Ea(d.N);
          return d
      };
      b.K.prototype.Bd = function(a, c, d) {
          var e = new b.Oa,
              g = this.ea.pa();
          if (!a.uc(d)) return f.f.info("This in-app message has already received a click. Ignoring analytics event."), e;
          a = this.ge(a);
          if (null == a) return e;
          d = f.ba.mg;
          null != c &&
              (a.bid = c, d = f.ba.lg);
          e.N.push(new b.Event(this.H.U(), d, Date.now(), g, a));
          e.O = this.A.Ea(e.N);
          return e
      };
      b.K.prototype.Rb = function(a, c) {
          var d = new b.Oa,
              e = this.ea.pa(),
              g = [],
              h = [],
              k;
          k = c ? this.A.ka(b.h.B.C.Uc) || {} : this.A.ka(b.h.B.C.Sc) || {};
          for (var n = 0; n < a.length; n++) a[n].Rf() ? a[n] instanceof b.hb ? h.push(a[n]) : g.push(a[n]) : f.f.info("Card " + a[n].id + " has already logged an impression."), k[a[n].id] = !0;
          if (0 === g.length && 0 === h.length) return f.f.info("All cards have already logged an impression. Ignoring analytics event."),
              d;
          a = this.fe(g);
          h = this.fe(h);
          if (null == a && null == h) return d;
          c ? this.A.ga(b.h.B.C.Uc, k) : this.A.ga(b.h.B.C.Sc, k);
          null != a && d.N.push(new b.Event(this.H.U(), c ? f.ba.li : f.ba.ii, Date.now(), e, a));
          null != h && c && d.N.push(new b.Event(this.H.U(), f.ba.ni, Date.now(), e, h));
          d.O = this.A.Ea(d.N);
          return d
      };
      b.K.prototype.Qb = function(a, c) {
          var d = new b.Oa,
              e = this.ea.pa();
          if (!a.uc()) return f.f.info("Card " + a.id + " has already received a click. Ignoring analytics event."), d;
          if (null == a.url || "" === a.url) return f.f.info("Card " + a.id + " has no url. Not logging click to Braze servers."),
              d;
          a = this.fe([a]);
          if (null == a) return d;
          d.N.push(new b.Event(this.H.U(), c ? f.ba.ji : f.ba.gi, Date.now(), e, a));
          d.O = this.A.Ea(d.N);
          return d
      };
      b.K.prototype.we = function(a) {
          var c = new b.Oa,
              d = this.ea.pa();
          if (!a.Oc()) return f.f.info("Card " + a.id + " refused this dismissal. Ignoring analytics event."), c;
          var e = this.A.ka(b.h.B.C.Tc) || {};
          e[a.id] = !0;
          this.A.ga(b.h.B.C.Tc, e);
          a = this.fe([a]);
          if (null == a) return c;
          c.N.push(new b.Event(this.H.U(), f.ba.ki, Date.now(), d, a));
          c.O = this.A.Ea(c.N);
          return c
      };
      b.K.prototype.Ch = function(a) {
          var c =
              new b.Oa,
              d = this.ea.pa();
          c.N.push(new b.Event(this.H.U(), f.ba.Ki, Date.now(), d, {
              n: a
          }));
          c.O = this.A.Ea(c.N);
          return c
      };
      b.K.prototype.Qj = function(a, c) {
          var d = this.ea.pa();
          return new b.Event(this.H.U(), f.ba.Yi, a, d, {
              cid: c
          })
      };
      b.K.prototype.Zh = function() {
          var a = f.Z.ib.dc;
          (new f.Z(a, f.f)).setItem(a.la.pi, 1, {
              baseUrl: this.Yd,
              data: {
                  api_key: this.Xa,
                  device_id: this.ld.zd().id
              },
              userId: this.H.U()
          })
      };
      b.K.prototype.Xf = function(a, c, d, e, g) {
          this.ea.pa();
          var f = new b.Md(this.H.U(), a, c, d, this.ld.zd().nc(), this.Ig);
          this.qf.push(f);
          this.Mb(null, null, null, function() {
              "function" === typeof e && e(a, c, d)
          }, function() {
              "function" === typeof g && g(a, c, d)
          })
      };
      b.Ic = {
          qc: function() {
              var a = this.ak(navigator.userAgent || "");
              this.td = a[0] || "Unknown Browser";
              this.version = a[1] || "Unknown Version";
              this.Wi = this.Jk(this.Sj) || navigator.platform;
              this.language = (navigator.Il || navigator.language || navigator.browserLanguage || navigator.Gl || "").toLowerCase();
              this.nk = this.Uj(navigator.userAgent);
              this.userAgent = navigator.userAgent
          },
          Jk: function(a) {
              for (var c = 0; c < a.length; c++) {
                  var d =
                      a[c].Ba,
                      e = a[c].Fl;
                  if (d)
                      if (d = d.toLowerCase(), b.G.isArray(a[c].oa))
                          for (e = 0; e < a[c].oa.length; e++) {
                              if (-1 !== d.indexOf(a[c].oa[e].toLowerCase())) return a[c].ta
                          } else {
                              if (-1 !== d.indexOf(a[c].oa.toLowerCase())) return a[c].ta
                          } else if (e) return a[c].ta
              }
          },
          ak: function(a) {
              var b, d = a.match(/(konqueror|icab|crios|opera|chrome|safari|firefox|camino|msie|trident(?=\/))\/?\s*(\.?\d+(\.\d+)*)/i) || [];
              if (/trident/i.test(d[1])) return b = /\brv[ :]+(\.?\d+(\.\d+)*)/g.exec(a) || [], ["Internet Explorer", b[1] || ""];
              if ("Chrome" === d[1] &&
                  (b = a.match(/\b(OPR|Edge|EdgA)\/(\.?\d+(\.\d+)*)/), null != b)) return b = b.slice(1), b[0] = b[0].replace("OPR", "Opera"), b[0] = b[0].replace("EdgA", "Edge"), [b[0], b[1]];
              if ("Safari" === d[1] && (b = a.match(/\b(EdgiOS)\/(\.?\d+(\.\d+)*)/), null != b)) return b = b.slice(1), b[0] = b[0].replace("EdgiOS", "Edge"), [b[0], b[1]];
              d = d[2] ? [d[1], d[2]] : [null, null];
              null != (b = a.match(/version\/(\.?\d+(\.\d+)*)/i)) && d.splice(1, 1, b[1]);
              if ("Opera" === d[0] && null != (b = a.match(/mini\/(\.?\d+(\.\d+)*)/i))) return ["Opera Mini", b[1] || ""];
              "MSIE" === d[0] &&
                  (d[0] = "Internet Explorer");
              "CriOS" === d[0] && (d[0] = "Chrome");
              return d
          },
          $k: function() {
              return "Internet Explorer" === this.td ? 8 < this.version : !0
          },
          Uj: function(a) {
              a = a.toLowerCase();
              return -1 !== a.indexOf("googlebot") || -1 !== a.indexOf("bingbot") || -1 !== a.indexOf("slurp") || -1 !== a.indexOf("duckduckbot") || -1 !== a.indexOf("baiduspider") || -1 !== a.indexOf("yandexbot") || -1 !== a.indexOf("facebookexternalhit") || -1 !== a.indexOf("sogou") || -1 !== a.indexOf("ia_archiver") || -1 !== a.indexOf("+https://github.com/prerender/prerender")
          },
          Sj: [{
              Ba: navigator.platform,
              oa: "Win",
              ta: "Windows"
          }, {
              Ba: navigator.platform,
              oa: "Mac",
              ta: "Mac"
          }, {
              Ba: navigator.platform,
              oa: "BlackBerry",
              ta: "BlackBerry"
          }, {
              Ba: navigator.platform,
              oa: "FreeBSD",
              ta: "FreeBSD"
          }, {
              Ba: navigator.platform,
              oa: "OpenBSD",
              ta: "OpenBSD"
          }, {
              Ba: navigator.platform,
              oa: "Nintendo",
              ta: "Nintendo"
          }, {
              Ba: navigator.platform,
              oa: "SunOS",
              ta: "SunOS"
          }, {
              Ba: navigator.platform,
              oa: "PlayStation",
              ta: "PlayStation"
          }, {
              Ba: navigator.platform,
              oa: "X11",
              ta: "X11"
          }, {
              Ba: navigator.userAgent,
              oa: "iPhone",
              ta: "iOS"
          }, {
              Ba: navigator.userAgent,
              oa: "iPad",
              ta: "iOS"
          }, {
              Ba: navigator.platform,
              oa: "Pike v",
              ta: "iOS"
          }, {
              Ba: navigator.platform,
              oa: ["Linux armv7l", "Android"],
              ta: "Android"
          }, {
              Ba: navigator.userAgent,
              oa: ["Android"],
              ta: "Android"
          }, {
              Ba: navigator.platform,
              oa: "Linux",
              ta: "Linux"
          }]
      };
      b.G = {};
      b.G.Ub = function(a, b, d, e) {
          var c = [],
              h;
          for (h in a) c.push(a[h]);
          return -1 === c.indexOf(b) ? (f.f.error(d + " Valid values from " + e + ' are "' + c.join('"/"') + '".'), !1) : !0
      };
      b.G.isArray = function(a) {
          return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
      };
      b.G.rb = function(a) {
          return "[object Date]" === Object.prototype.toString.call(a)
      };
      b.G.qk = function(a) {
          return "[object Object]" === Object.prototype.toString.call(a)
      };
      b.G.uh = function(a) {
          null == a && (a = []);
          for (var b = [], d = arguments.length, e = 0, g = a.length; e < g; e++) {
              var f = a[e];
              if (-1 === b.indexOf(f)) {
                  for (var k = 1; k < d && -1 !== arguments[k].indexOf(f); k++);
                  k === d && b.push(f)
              }
          }
          return b
      };
      b.G.keys = function(a) {
          var b = [];
          if (null != a)
              for (var d in a) a.hasOwnProperty(d) && b.push(d);
          return b
      };
      b.G.isEqual = function(a, c) {
          if (a === c) return 0 !==
              a || 1 / a === 1 / c;
          if (null == a || null == c) return a === c;
          var d = a.toString();
          if (d !== c.toString()) return !1;
          switch (d) {
              case "[object RegExp]":
              case "[object String]":
                  return "" + a === "" + c;
              case "[object Number]":
                  return +a !== +a ? +c !== +c : 0 === +a ? 1 / +a === 1 / c : +a === +c;
              case "[object Date]":
              case "[object Boolean]":
                  return +a === +c
          }
          d = "[object Array]" === d;
          if (!d) {
              if ("object" !== typeof a || "object" !== typeof c) return !1;
              var e = a.constructor,
                  g = c.constructor;
              if (e !== g && !("function" === typeof e && e instanceof e && "function" === typeof g && g instanceof g) && "constructor" in a && "constructor" in c) return !1
          }
          for (var e = [], g = [], f = e.length; f--;)
              if (e[f] === a) return g[f] === c;
          e.push(a);
          g.push(c);
          if (d) {
              f = a.length;
              if (f !== c.length) return !1;
              for (; f--;)
                  if (!b.G.isEqual(a[f], c[f], e, g)) return !1
          } else {
              var d = b.G.keys(a),
                  k, f = d.length;
              if (b.G.keys(c).length !== f) return !1;
              for (; f--;)
                  if (k = d[f], !c.hasOwnProperty(k) || !b.G.isEqual(a[k], c[k], e, g)) return !1
          }
          e.pop();
          g.pop();
          return !0
      };
      b.L = {};
      b.L.vd = function(a, b) {
          a /= 1E3;
          b && (a = Math.floor(a));
          return a
      };
      b.L.Ya = function(a) {
          var b = parseInt(a);
          return null == a || isNaN(b) ? null : new Date(1E3 * b)
      };
      b.L.Uh = function(a) {
          return null != a && b.G.rb(a) ? a.toISOString().replace(/\.[0-9]{3}Z$/, "") : a
      };
      b.L.Pc = function(a) {
          return null == a || "" === a ? null : new Date(a)
      };
      b.L.cl = function(a) {
          return null == a || "" === a ? Date.now() : a
      };
      b.L.Lh = function(a) {
          return (Date.now() - a.valueOf()) / 1E3
      };
      b.L.Mh = function(a) {
          return (a.valueOf() - Date.now()) / 1E3
      };
      b.Ia = {};
      b.Ia.ff = 32;
      b.Ia.Cg = 9;
      b.Ia.Te = 13;
      b.Ia.xi = 27;
      b.If = {
          qc: function(a, b) {
              this.data = {
                  en: {
                      NO_CARDS_MESSAGE: "We have no updates for you at this time.<br/>Please check again later.",
                      FEED_TIMEOUT_MESSAGE: "Sorry, this refresh timed out.<br/>Please try again later."
                  },
                  ar: {
                      NO_CARDS_MESSAGE: "\u0644\u064a\u0633 \u0644\u062f\u064a\u0646\u0627 \u0623\u064a \u062a\u062d\u062f\u064a\u062b. \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 \u0644\u0627\u062d\u0642\u0627\u064b",
                      FEED_TIMEOUT_MESSAGE: "\u064a\u0631\u062c\u0649 \u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u0627"
                  },
                  da: {
                      NO_CARDS_MESSAGE: "Vi har ingen updates.<br/>Pr\u00f8v venligst senere.",
                      FEED_TIMEOUT_MESSAGE: "Pr\u00f8v venligst senere."
                  },
                  de: {
                      NO_CARDS_MESSAGE: "Derzeit sind keine Updates verf\u00fcgbar.<br/>Bitte sp\u00e4ter noch einmal versuchen.",
                      FEED_TIMEOUT_MESSAGE: "Bitte sp\u00e4ter noch einmal versuchen."
                  },
                  es: {
                      NO_CARDS_MESSAGE: "No tenemos actualizaciones.<br/>Por favor compru\u00e9belo m\u00e1s tarde.",
                      FEED_TIMEOUT_MESSAGE: "Por favor int\u00e9ntelo m\u00e1s tarde."
                  },
                  "es-mx": {
                      NO_CARDS_MESSAGE: "No tenemos ninguna actualizaci\u00f3n.<br/>Vuelva a verificar m\u00e1s tarde.",
                      FEED_TIMEOUT_MESSAGE: "Por favor, vuelva a intentarlo m\u00e1s tarde."
                  },
                  et: {
                      NO_CARDS_MESSAGE: "Uuendusi pole praegu saadaval.<br/>Proovige hiljem uuesti.",
                      FEED_TIMEOUT_MESSAGE: "Palun proovige hiljem uuesti."
                  },
                  fi: {
                      NO_CARDS_MESSAGE: "P\u00e4ivityksi\u00e4 ei ole saatavilla.<br/>Tarkista my\u00f6hemmin uudelleen.",
                      FEED_TIMEOUT_MESSAGE: "Yrit\u00e4 my\u00f6hemmin uudelleen."
                  },
                  fr: {
                      NO_CARDS_MESSAGE: "Aucune mise \u00e0 jour disponible.<br/>Veuillez v\u00e9rifier ult\u00e9rieurement.",
                      FEED_TIMEOUT_MESSAGE: "Veuillez r\u00e9essayer ult\u00e9rieurement."
                  },
                  he: {
                      NO_CARDS_MESSAGE: ".\u05d0\u05d9\u05df \u05dc\u05e0\u05d5 \u05e2\u05d3\u05db\u05d5\u05e0\u05d9\u05dd. \u05d1\u05d1\u05e7\u05e9\u05d4 \u05d1\u05d3\u05d5\u05e7 \u05e9\u05d5\u05d1 \u05d1\u05e7\u05e8\u05d5\u05d1",
                      FEED_TIMEOUT_MESSAGE: ".\u05d1\u05d1\u05e7\u05e9\u05d4 \u05e0\u05e1\u05d4 \u05e9\u05d5\u05d1 \u05d1\u05e7\u05e8\u05d5\u05d1"
                  },
                  hi: {
                      NO_CARDS_MESSAGE: "\u0939\u092e\u093e\u0930\u0947 \u092a\u093e\u0938 \u0915\u094b\u0908 \u0905\u092a\u0921\u0947\u091f \u0928\u0939\u0940\u0902 \u0939\u0948\u0902\u0964 \u0915\u0943\u092a\u092f\u093e \u092c\u093e\u0926 \u092e\u0947\u0902 \u092b\u093f\u0930 \u0938\u0947 \u091c\u093e\u0901\u091a \u0915\u0930\u0947\u0902.\u0964",
                      FEED_TIMEOUT_MESSAGE: "\u0915\u0943\u092a\u092f\u093e \u092c\u093e\u0926 \u092e\u0947\u0902 \u0926\u094b\u092c\u093e\u0930\u093e \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902\u0964."
                  },
                  id: {
                      NO_CARDS_MESSAGE: "Kami tidak memiliki pembaruan. Coba lagi nanti.",
                      FEED_TIMEOUT_MESSAGE: "Coba lagi nanti."
                  },
                  it: {
                      NO_CARDS_MESSAGE: "Non ci sono aggiornamenti.<br/>Ricontrollare pi\u00f9 tardi.",
                      FEED_TIMEOUT_MESSAGE: "Riprovare pi\u00f9 tardi."
                  },
                  ja: {
                      NO_CARDS_MESSAGE: "\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306f\u3042\u308a\u307e\u305b\u3093\u3002<br/>\u5f8c\u3067\u3082\u3046\u4e00\u5ea6\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                      FEED_TIMEOUT_MESSAGE: "\u5f8c\u3067\u3082\u3046\u4e00\u5ea6\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                  },
                  ko: {
                      NO_CARDS_MESSAGE: "\uc5c5\ub370\uc774\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc5d0 \ub2e4\uc2dc \ud655\uc778\ud574 \uc8fc\uc2ed\uc2dc\uc624.",
                      FEED_TIMEOUT_MESSAGE: "\ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc2ed\uc2dc\uc624."
                  },
                  ms: {
                      NO_CARDS_MESSAGE: "Tiada kemas kini. Sila periksa kemudian.",
                      FEED_TIMEOUT_MESSAGE: "Sila cuba kemudian."
                  },
                  nl: {
                      NO_CARDS_MESSAGE: "Er zijn geen updates.<br/>Probeer het later opnieuw.",
                      FEED_TIMEOUT_MESSAGE: "Probeer het later opnieuw."
                  },
                  no: {
                      NO_CARDS_MESSAGE: "Vi har ingen oppdateringer.<br/>Vennligst sjekk igjen senere.",
                      FEED_TIMEOUT_MESSAGE: "Vennligst pr\u00f8v igjen senere."
                  },
                  pl: {
                      NO_CARDS_MESSAGE: "Brak aktualizacji.<br/>Prosz\u0119 sprawdzi\u0107 ponownie p\u00f3\u017aniej.",
                      FEED_TIMEOUT_MESSAGE: "Prosz\u0119 spr\u00f3bowa\u0107 ponownie p\u00f3\u017aniej."
                  },
                  pt: {
                      NO_CARDS_MESSAGE: "N\u00e3o temos atualiza\u00e7\u00f5es.<br/>Por favor, verifique mais tarde.",
                      FEED_TIMEOUT_MESSAGE: "Por favor, tente mais tarde."
                  },
                  "pt-br": {
                      NO_CARDS_MESSAGE: "N\u00e3o temos nenhuma atualiza\u00e7\u00e3o.<br/>Verifique novamente mais tarde.",
                      FEED_TIMEOUT_MESSAGE: "Tente novamente mais tarde."
                  },
                  ru: {
                      NO_CARDS_MESSAGE: "\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b.<br/>\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043d\u043e\u0432\u0430 \u043f\u043e\u0437\u0436\u0435.",
                      FEED_TIMEOUT_MESSAGE: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435."
                  },
                  sv: {
                      NO_CARDS_MESSAGE: "Det finns inga uppdateringar.<br/>F\u00f6rs\u00f6k igen senare.",
                      FEED_TIMEOUT_MESSAGE: "F\u00f6rs\u00f6k igen senare."
                  },
                  th: {
                      NO_CARDS_MESSAGE: "\u0e40\u0e23\u0e32\u0e44\u0e21\u0e48\u0e21\u0e35\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e15 \u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07.",
                      FEED_TIMEOUT_MESSAGE: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07."
                  },
                  vi: {
                      NO_CARDS_MESSAGE: "Ch\u00fang t\u00f4i kh\u00f4ng c\u00f3 c\u1eadp nh\u1eadt n\u00e0o.<br/>Vui l\u00f2ng ki\u1ec3m tra l\u1ea1i sau.",
                      FEED_TIMEOUT_MESSAGE: "Vui l\u00f2ng th\u1eed l\u1ea1i sau."
                  },
                  "zh-hk": {
                      NO_CARDS_MESSAGE: "\u66ab\u6642\u6c92\u6709\u66f4\u65b0.<br/>\u8acb\u7a0d\u5019\u518d\u8a66.",
                      FEED_TIMEOUT_MESSAGE: "\u8acb\u7a0d\u5019\u518d\u8a66."
                  },
                  "zh-hans": {
                      NO_CARDS_MESSAGE: "\u6682\u65f6\u6ca1\u6709\u66f4\u65b0.<br/>\u8bf7\u7a0d\u540e\u518d\u8bd5.",
                      FEED_TIMEOUT_MESSAGE: "\u8bf7\u7a0d\u5019\u518d\u8bd5."
                  },
                  "zh-hant": {
                      NO_CARDS_MESSAGE: "\u66ab\u6642\u6c92\u6709\u66f4\u65b0.<br/>\u8acb\u7a0d\u5019\u518d\u8a66.",
                      FEED_TIMEOUT_MESSAGE: "\u8acb\u7a0d\u5019\u518d\u8a66."
                  },
                  "zh-tw": {
                      NO_CARDS_MESSAGE: "\u66ab\u6642\u6c92\u6709\u66f4\u65b0.<br/>\u8acb\u7a0d\u5019\u518d\u8a66.",
                      FEED_TIMEOUT_MESSAGE: "\u8acb\u7a0d\u5019\u518d\u8a66."
                  },
                  zh: {
                      NO_CARDS_MESSAGE: "\u6682\u65f6\u6ca1\u6709\u66f4\u65b0.<br/>\u8bf7\u7a0d\u540e\u518d\u8bd5.",
                      FEED_TIMEOUT_MESSAGE: "\u8bf7\u7a0d\u5019\u518d\u8bd5."
                  }
              };
              null != a && (a = a.toLowerCase());
              if (null != a && null == this.data[a]) {
                  var c = a.indexOf("-");
                  0 < c && (a = a.substring(0, c))
              }
              null == this.data[a] && (a = "Braze does not yet have a localization for language " + a + ", defaulting to English. Please contact us if you are willing and able to help us translate our SDK into this language.", b ? f.f.error(a) : f.f.info(a), a = "en");
              this.language = a
          },
          get: function(a) {
              return this.data[this.language][a]
          }
      };
      b.Math = {};
      b.Math.zk = function(a, b) {
          a = Math.ceil(a);
          b = Math.floor(b);
          return Math.floor(Math.random() * (b - a + 1)) + a
      };
      b.ze = function() {};
      b.ze.Nf = function(a) {
          var b, d, e = !1;
          try {
              if (window.XMLHttpRequest && (b = new XMLHttpRequest) && "undefined" !== typeof b.withCredentials || ("undefined" !== typeof XDomainRequest ? (b = new XDomainRequest, e = b.async = !0) : f.f.error("This browser does not have any supported ajax options!")), null != b) {
                  var g = function(b) {
                      "function" === typeof a.error && a.error(b);
                      "function" === typeof a.oe && a.oe(!1)
                  };
                  b.onload = function() {
                      var c;
                      if (e) c = !0;
                      else {
                          if (4 !== b.readyState) return;
                          c = 200 <= b.status && 300 > b.status || 304 === b.status
                      }
                      c ? ("function" ===
                          typeof a.O && a.O(JSON.parse(b.responseText)), "function" === typeof a.oe && a.oe(!0)) : g(b.status)
                  };
                  b.onerror = function() {
                      g()
                  };
                  b.ontimeout = function() {
                      g()
                  };
                  d = JSON.stringify(a.data);
                  if (e) b.onprogress = function() {}, b.open("post", a.url);
                  else {
                      b.open("POST", a.url, !0);
                      b.setRequestHeader("Content-type", "application/json");
                      b.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                      for (var h = a.headers || [], k = 0; k < h.length; k++) b.setRequestHeader(h[k][0], h[k][1])
                  }
                  b.send(d)
              }
          } catch (n) {
              f.f.error("Network request error: " + n.message)
          }
      };
      b.S = function() {};
      b.S.ei = /^[^\x00-\x1F\x22]+$/;
      b.S.ti = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      b.S.Tb = function(a, b,
          d, e) {
          (e = "string" === typeof a || null === a && e) || f.f.error("Cannot " + b + " because " + d + ' "' + a + '" is invalid.');
          return e
      };
      b.S.$a = function(a, c, d) {
          var e = null != a && "string" === typeof a && ("" === a || a.match(b.S.ei));
          e || f.f.error("Cannot " + c + " because " + d + ' "' + a + '" is invalid.');
          return e
      };
      b.S.ml = function(a, c, d) {
          var e = typeof a,
              g = b.G.rb(a);
          (e = null != a && ("number" === e || "boolean" === e || g || "string" === e)) || f.f.error("Cannot " + c + " because " + d + ' "' + a + '" is invalid.');
          return e
      };
      b.S.wh = function(a) {
          return "string" === typeof a && null !=
              a.match(b.S.ti)
      };
      b.Sa = {};
      b.Sa.sb = function(a) {
          a = parseInt(a);
          if (isNaN(a)) return "";
          a >>>= 0;
          var c = a & 255,
              d = (a & 65280) >>> 8,
              e = (a & 16711680) >>> 16;
          return b.Ic.$k() ? "rgba(" + [e, d, c, ((a & 4278190080) >>> 24) / 255].join() + ")" : "rgb(" + [e, d, c].join() + ")"
      };
      b.Sa.Hl = function(a) {
          a = parseInt(a);
          if (isNaN(a)) return "";
          a >>>= 0;
          return "rgb(" + [(a & 16711680) >>> 16, (a & 65280) >>> 8, a & 255].join() + ")"
      };
      b.ha = {};
      b.ha.Zc = {
          hj: "up",
          si: "down",
          pg: "left",
          $i: "right"
      };
      b.ha.Gf = function(a, b, d, e) {
          if (null == a) return !1;
          b = b || !1;
          d = d || !1;
          a = a.getBoundingClientRect();
          return null == a ? !1 : (0 <= a.top && a.top <= (window.innerHeight || document.documentElement.clientHeight) || !b) && (0 <= a.left || !e) && (0 <= a.bottom && a.bottom <= (window.innerHeight || document.documentElement.clientHeight) || !d) && (a.right <= (window.innerWidth || document.documentElement.clientWidth) || !e)
      };
      b.ha.gl = function(a) {
          return b.ha.Gf(a, !0, !1, !1)
      };
      b.ha.Fj = function(a) {
          return b.ha.Gf(a, !1, !0, !1)
      };
      b.ha.jh = function(a) {
          if (a.onclick) {
              var b = document.createEvent("MouseEvents");
              b.initEvent("click", !0, !0);
              a.onclick.apply(a, [b])
          }
      };
      b.ha.Vj = function(a, c, d) {
          var e = null,
              g = null;
          a.addEventListener("touchstart", function(a) {
              e = a.touches[0].clientX;
              g = a.touches[0].clientY
          }, !1);
          a.addEventListener("touchmove", function(a) {
              if (null != e && null != g) {
                  var f = e - a.touches[0].clientX,
                      h = g - a.touches[0].clientY;
                  Math.abs(f) > Math.abs(h) && 25 <= Math.abs(f) ? (0 < f && c === b.ha.Zc.pg ? d(a) : c === b.ha.Zc.$i && d(a), g = e = null) : 25 <= Math.abs(h) && (0 < h && c === b.ha.Zc.hj ? d(a) : c === b.ha.Zc.si && d(a), g = e = null)
              }
          }, !1)
      };
      b.wb.prototype.pe = "ab-classic-card";
      b.vb.prototype.pe = "ab-captioned-image";
      b.Banner.prototype.pe = "ab-banner";
      b.hb.prototype.pe = "ab-control-card";
      b.wb.prototype.te = !0;
      b.vb.prototype.te = !0;
      b.Banner.prototype.te = !1;
      b.hb.prototype.te = !1;
      b.b.Eg = "data-ab-had-top-impression";
      b.b.$f = "data-ab-had-bottom-impression";
      b.b.fl = function(a) {
          return null != a && !!a.getAttribute(b.b.Eg)
      };
      b.b.rh = function(a) {
          null != a && a.setAttribute(b.b.Eg, !0)
      };
      b.b.Ej = function(a) {
          return null != a && !!a.getAttribute(b.b.$f)
      };
      b.b.qh = function(a) {
          null != a && a.setAttribute(b.b.$f, !0)
      };
      b.b.Dh = function(a) {
          null != a && (a = a.querySelectorAll(".ab-unread-indicator")[0],
              null != a && (a.className += " read"))
      };
      b.b.bk = function(a) {
          return a.getAttribute("data-ab-card-id")
      };
      b.b.prototype.La = function(a, c, d) {
          function e(c) {
              c = c || window.event;
              b.b.Dh(g);
              f && (a(k), b.ma.openUri(k.url, c, d));
              return !1
          }
          var g = document.createElement("div");
          g.className = "ab-card " + this.constructor.prototype.pe;
          g.setAttribute("data-ab-card-id", this.id);
          var f = this.url && "" !== this.url,
              k = this;
          if (this.pinned) {
              var n = document.createElement("div");
              n.className = "ab-pinned-indicator";
              var m = document.createElement("i");
              m.className = "fa fa-star";
              n.appendChild(m);
              g.appendChild(n)
          }
          this.imageUrl && "" !== this.imageUrl && (n = document.createElement("div"), n.className = "ab-image-area", m = document.createElement("img"), m.setAttribute("src", this.imageUrl), n.appendChild(m), g.className += " with-image", f && !this.constructor.prototype.te ? (m = document.createElement("a"), m.setAttribute("href", this.url), m.onclick = e, m.appendChild(n), g.appendChild(m)) : g.appendChild(n));
          n = document.createElement("div");
          n.className = "ab-card-body";
          if (this.dismissible) {
              m =
                  document.createElement("i");
              m.className = "fa fa-times ab-close-button fa-times-circle";
              var p = function(a) {
                  a = a || window.event;
                  c(k);
                  g.className += " ab-hide";
                  setTimeout(function() {
                      g && g.parentNode && g.parentNode.removeChild(g)
                  }, b.J.Td);
                  a.stopPropagation()
              };
              m.onclick = p;
              g.appendChild(m);
              b.ha.Vj(n, b.ha.Zc.pg, p)
          }
          m = document.createElement("div");
          m.className = "ab-title";
          f ? (p = document.createElement("a"), p.setAttribute("href", this.url), p.onclick = e, p.appendChild(document.createTextNode(this.title)), m.appendChild(p)) :
              m.appendChild(document.createTextNode(this.title));
          n.appendChild(m);
          m = document.createElement("div");
          m.className = "ab-description";
          m.appendChild(document.createTextNode(this.description));
          if (f) {
              p = document.createElement("div");
              p.className = "ab-url-area";
              var l = document.createElement("a");
              l.setAttribute("href", this.url);
              l.appendChild(document.createTextNode(this.linkText));
              l.onclick = e;
              p.appendChild(l);
              m.appendChild(p)
          }
          n.appendChild(m);
          g.appendChild(n);
          n = document.createElement("div");
          n.className = "ab-unread-indicator";
          this.viewed && (n.className += " read", b.b.rh(g), b.b.qh(g));
          g.appendChild(n);
          return g
      };
      b.J.Td = 240;
      b.J.bd = 6E4;
      b.qa.bd = 6E4;
      b.J.Ag = "data-update-subscription-id";
      b.J.Od = "data-last-requested-refresh";
      b.J.Zi = 1E4;
      b.J.fa = function(a, c) {
          c && (c.className = c.className.replace("ab-show", "ab-hide"), setTimeout(function() {
              c && c.parentNode && c.parentNode.removeChild(c)
          }, b.J.Td));
          var d = c.getAttribute(b.J.Ag);
          null != d && a.Aa(d)
      };
      b.J.prototype.Rb = function(a, b) {
          a.Rb(b)
      };
      b.J.prototype.Qb = function(a, b) {
          a.Qb(b)
      };
      b.J.prototype.ah =
          function(a, c) {
              var d = document.createElement("div");
              d.className = "ab-feed-body";
              if (null == this.lastUpdated) {
                  c = document.createElement("div");
                  c.className = "ab-no-cards-message";
                  var e = document.createElement("i");
                  e.className = "fa fa-spinner fa-spin fa-4x ab-initial-spinner";
                  c.appendChild(e);
                  d.appendChild(c)
              } else {
                  for (var e = !1, g = this, h = function(b) {
                          g.Qb(a, b)
                      }, k = function(b) {
                          a.we(b)
                      }, n = 0; n < this.cards.length; n++) {
                      var m = this.cards[n] instanceof b.hb;
                      !m || this instanceof b.qa ? (d.appendChild(this.cards[n].La(h, k, c)),
                          e = e || !m) : f.f.error("Received a control card for a legacy news feed. Control cards are only supported with content cards.")
                  }
                  e || (c = document.createElement("div"), c.className = "ab-no-cards-message", c.innerHTML = b.If.get("NO_CARDS_MESSAGE"), d.appendChild(c))
              }
              return d
          };
      b.J.prototype.qe = function(a, c) {
          if (null != c) {
              var d = [];
              c = c.querySelectorAll(".ab-card");
              for (var e = 0; e < c.length; e++) {
                  var g = b.b.fl(c[e]),
                      f = b.b.Ej(c[e]),
                      k = g,
                      n = f,
                      m = b.ha.gl(c[e]),
                      p = b.ha.Fj(c[e]);
                  !g && m && (g = !0, b.b.rh(c[e]));
                  !f && p && (f = !0, b.b.qh(c[e]));
                  if (g && f && (m || p || b.b.Dh(c[e]), !k || !n))
                      for (g = b.b.bk(c[e]), f = 0; f < this.cards.length; f++)
                          if (this.cards[e].id === g) {
                              d.push(this.cards[e]);
                              break
                          }
              }
              0 < d.length && this.Rb(a, d)
          }
      };
      b.J.prototype.$g = function(a) {
          a.Ee()
      };
      b.J.prototype.Tf = function(a, c) {
          var d = c.querySelectorAll(".ab-refresh-button")[0];
          null != d && (d.className += " fa-spin");
          var e = Date.now().toString();
          c.setAttribute(b.J.Od, e);
          setTimeout(function() {
              if (c.getAttribute(b.J.Od) === e) {
                  for (var a = c.querySelectorAll(".fa-spin"), d = 0; d < a.length; d++) a[d].className = a[d].className.replace(/fa-spin/g,
                      "");
                  a = c.querySelectorAll(".ab-initial-spinner")[0];
                  null != a && (d = document.createElement("span"), d.innerHTML = b.If.get("FEED_TIMEOUT_MESSAGE"), a.parentNode.appendChild(d), a.parentNode.removeChild(a))
              }
          }, b.J.Zi);
          this.$g(a)
      };
      b.J.prototype.La = function(a, c) {
          function d(b) {
              b = b || window.event;
              g.Tf(a, f);
              b.stopPropagation()
          }

          function e(c) {
              c = c || window.event;
              b.J.fa(a, f);
              c.stopPropagation()
          }
          var g = this,
              f = document.createElement("div");
          f.className = "ab-feed ab-show";
          var k = document.createElement("div");
          k.className = "ab-feed-buttons-wrapper";
          k.setAttribute("tabindex", "-1");
          f.appendChild(k);
          var n = document.createElement("i");
          n.className = "fa fa-times ab-close-button";
          n.setAttribute("aria-label", "Close Feed");
          n.setAttribute("tabindex", "0");
          n.setAttribute("role", "button");
          n.addEventListener("keydown", function(a) {
              a = a || window.event;
              a.keyCode !== b.Ia.ff && a.keyCode !== b.Ia.Te || e(a)
          });
          n.onclick = e;
          var m = document.createElement("i");
          m.className = "fa fa-refresh ab-refresh-button";
          null == this.lastUpdated && (m.className += " fa-spin");
          m.setAttribute("aria-label",
              "Refresh Feed");
          m.setAttribute("tabindex", "0");
          m.setAttribute("role", "button");
          m.addEventListener("keydown", function(a) {
              a = a || window.event;
              a.keyCode !== b.Ia.ff && a.keyCode !== b.Ia.Te || d(a)
          });
          m.onclick = d;
          k.appendChild(m);
          k.appendChild(n);
          f.appendChild(this.ah(a, c));
          f.onscroll = function() {
              g.qe(a, f)
          };
          return f
      };
      b.J.prototype.Kh = function(a, c) {
          c.setAttribute(b.J.Ag, a)
      };
      b.J.prototype.Je = function(a, c, d, e, g) {
          if (b.G.isArray(a)) {
              for (var f = [], k = 0; k < a.length; k++) a[k] instanceof b.b && f.push(a[k]);
              this.cards = f;
              this.lastUpdated =
                  c;
              null != d && (null == this.lastUpdated ? b.J.fa(e, d) : (a = d.querySelectorAll(".ab-feed-body")[0], null != a && (g = this.ah(e, g), a.parentNode.replaceChild(g, a), this.qe(e, g.parentNode))))
          }
      };
      b.qa.fa = b.J.fa;
      b.qa.prototype.Rb = function(a, b) {
          a.Rb(b, !0)
      };
      b.qa.prototype.Qb = function(a, b) {
          a.Qb(b, !0)
      };
      b.qa.prototype.$g = function(a) {
          a.vc()
      };
      b.j.Td = 240;
      b.j.zi = 480;
      b.j.Pi = 200;
      b.j.Vc = {
          NONE: 0,
          hg: 1,
          ig: 2
      };
      b.j.prototype.sd = function() {
          return this.animateIn ? " ab-show " : " "
      };
      b.j.prototype.hh = function() {
          return this.animateOut ? " ab-hide " :
              " "
      };
      b.j.prototype.Bf = function(a) {
          a.className = a.className.replace(this.sd(), this.hh());
          return this.animateOut
      };
      b.j.prototype.fa = function(a, c) {
          if (a) {
              var d;
              d = -1 === a.className.indexOf("ab-in-app-message") ? a.getElementsByClassName("ab-in-app-message")[0] : a;
              var e = !1;
              d && (e = this.Bf(d));
              var g = document.getElementsByTagName("body")[0];
              if (null != g) var f = g.scrollTop;
              d = function() {
                  a && a.parentNode && a.parentNode.removeChild(a);
                  null != g && "Safari" === b.Ic.td && (g.scrollTop = f);
                  c && c()
              };
              e ? setTimeout(d, b.j.Td) : d()
          }
      };
      b.j.prototype.La =
          function(a, c, d, e, g, f) {
              function h() {
                  -1 !== m.className.indexOf("ab-start-hidden") && (m.className = m.className.replace("ab-start-hidden", k.sd()), d(f))
              }
              var k = this,
                  m = document.createElement("div");
              m.className = "ab-in-app-message ab-start-hidden";
              this.Nc() && (m.className += " ab-modal-interactions");
              m.style.color = b.Sa.sb(this.textColor);
              null != f ? f.appendChild(m) : f = m;
              this.imageStyle === b.j.Nd.GRAPHIC && (m.className += " graphic");
              this.orientation === b.j.Ca.LANDSCAPE && (m.className += " landscape");
              0 === this.buttons.length &&
                  (k.clickAction !== b.j.xb.NONE && (m.className += " ab-clickable"), m.onclick = function(d) {
                      d = d || window.event;
                      k.fa(f, function() {
                          a.ye(k);
                          k.clickAction === b.j.xb.URI ? b.ma.openUri(k.uri, d, e || k.openTarget === b.j.ed.BLANK) : k.clickAction === b.j.xb.NEWS_FEED && c()
                      });
                      d.stopPropagation();
                      return !1
                  });
              U(m, this.backgroundColor);
              if (g !== b.j.Vc.NONE) {
                  var l = document.createElement("i");
                  l.setAttribute("aria-label", "Close Message");
                  l.setAttribute("tabindex", "0");
                  l.setAttribute("role", "button");
                  l.className = "fa fa-times ab-close-button";
                  l.className = g === b.j.Vc.hg ? l.className + " fa-times" : l.className + " fa-times-circle";
                  var J = function(a) {
                      a = a || window.event;
                      k.fa(f);
                      k.Oc();
                      a.stopPropagation()
                  };
                  l.addEventListener("keydown", function(a) {
                      a = a || window.event;
                      a.keyCode !== b.Ia.ff && a.keyCode !== b.Ia.Te || J(a)
                  });
                  l.onclick = J;
                  l.style.color = b.Sa.sb(this.closeButtonColor);
                  m.appendChild(l)
              }
              g = !1;
              l = document.createElement("div");
              l.className = "ab-image-area";
              if (this.imageUrl) {
                  if (this.cropType === b.j.Wc.CENTER_CROP) {
                      var r = document.createElement("span");
                      r.className =
                          "ab-center-cropped-img";
                      r.style.backgroundImage = "url(" + this.imageUrl + ")"
                  } else r = document.createElement("img"), r.setAttribute("src", this.imageUrl), g = !0, r.onload = h, setTimeout(h, 1E3);
                  l.appendChild(r);
                  m.appendChild(l)
              } else if (this.icon) {
                  l.className += " ab-icon-area";
                  r = document.createElement("span");
                  r.className = "ab-icon";
                  r.style.backgroundColor = b.Sa.sb(this.iconBackgroundColor);
                  r.style.color = b.Sa.sb(this.iconColor);
                  var u = document.createElement("i");
                  u.className = "fa";
                  u.appendChild(document.createTextNode(this.icon));
                  r.appendChild(u);
                  l.appendChild(r);
                  m.appendChild(l)
              }
              l = document.createElement("div");
              l.className = "ab-message-text";
              l.className += " " + this.messageAlignment.toLowerCase() + "-aligned";
              l.addEventListener("touchstart", function() {}, {
                  passive: !0
              });
              this.header && 0 < this.header.length && (r = document.createElement("span"), r.className = "ab-message-header", r.className += " " + this.headerAlignment.toLowerCase() + "-aligned", r.style.color = b.Sa.sb(this.headerTextColor), r.appendChild(document.createTextNode(this.header)), l.appendChild(r));
              l.appendChild(document.createTextNode(this.message));
              m.appendChild(l);
              g || h();
              return m
          };
      b.j.prototype.Hh = function() {};
      b.mb.prototype.La = function(a, c, d, e, f) {
          a = b.j.prototype.La.call(this, a, d, e, f, b.j.Vc.hg);
          a.className += " ab-slideup ab-effect-slide";
          return a
      };
      b.mb.prototype.Hh = function(a) {
          b.ha.Gf(a, !0, !0) || (this.slideFrom === b.j.Vd.TOP ? a.style.top = "0px" : a.style.bottom = "0px")
      };
      b.bc.prototype.La = function(a, c, d, e, f) {
          c = document.createElement("div");
          c.className = "ab-centering-div ab-modal ab-modal-interactions";
          e = b.j.prototype.La.call(this, a, d, e, f, b.j.Vc.ig, c);
          e.className += " ab-modal ab-effect-modal";
          c.setAttribute("tabindex", "-1");
          T(this, a, d, e, f, c);
          V(e);
          return c
      };
      b.ac.prototype.La = function(a, c, d, e, f) {
          c = b.j.prototype.La.call(this, a, d, e, f, b.j.Vc.ig);
          c.className += " ab-fullscreen ab-effect-fullscreen";
          c.setAttribute("tabindex", "-1");
          T(this, a, d, c, f);
          V(c);
          return c
      };
      b.Na.prototype.La = function(a, c, d, e, f) {
          function g(c) {
              var d = c.getAttribute("href"),
                  e = c.onclick;
              return function(g) {
                  g = g || window.event;
                  if (null == e || "function" !==
                      typeof e || !1 !== e()) {
                      var h = b.Hg.xk(d).abButtonId;
                      if (null == h || "" === h) h = c.getAttribute("id");
                      if (null != d && "" !== d && 0 !== d.indexOf("#")) {
                          var m = "blank" === (c.getAttribute("target") || "").toLowerCase().replace("_", ""),
                              l = f || k.openTarget === b.j.ed.BLANK || m,
                              m = function() {
                                  a.Bd(k, h, d);
                                  b.ma.openUri(d, g, l)
                              };
                          l ? m() : k.fa(n, m)
                      } else a.Bd(k, h, d);
                      g.stopPropagation();
                      return !1
                  }
              }
          }
          var k = this,
              n = document.createElement("iframe");
          n.onload = function() {
              function a(a) {
                  return function() {
                      k.fa(n);
                      c.display[a].apply(c.display, Array.prototype.slice.call(arguments))
                  }
              }

              function d(a) {
                  return function() {
                      var b = c.getUser();
                      b[a].apply(b, Array.prototype.slice.call(arguments))
                  }
              }

              function f(a) {
                  return function() {
                      c[a].apply(c, Array.prototype.slice.call(arguments))
                  }
              }
              n.contentWindow.document.write(k.message);
              var h = n.contentWindow.document.getElementsByTagName("head")[0];
              if (null != h) {
                  var l = document.createElement("style");
                  l.innerHTML = b.zg;
                  h.appendChild(l);
                  l = n.contentWindow.document.createElement("base");
                  l.setAttribute("target", "_parent");
                  h.appendChild(l)
              }
              for (var h = {
                      closeMessage: function() {
                          k.fa(n);
                          k.Oc()
                      },
                      display: {},
                      web: {}
                  }, q = ["requestImmediateDataFlush", "logCustomEvent", "logPurchase", "unregisterAppboyPushMessages"], l = 0; l < q.length; l++) h[q[l]] = f(q[l]);
              for (var q = "setFirstName setLastName setEmail setGender setDateOfBirth setCountry setHomeCity setEmailNotificationSubscriptionType setPushNotificationSubscriptionType setPhoneNumber setCustomUserAttribute addToCustomAttributeArray removeFromCustomAttributeArray incrementCustomUserAttribute".split(" "), v = {}, l = 0; l < q.length; l++) v[q[l]] = d(q[l]);
              h.getUser =
                  function() {
                      return v
                  };
              q = ["showFeed"];
              for (l = 0; l < q.length; l++) h.display[q[l]] = a(q[l]);
              q = ["registerAppboyPushMessages"];
              for (l = 0; l < q.length; l++) h.web[q[l]] = f(q[l]);
              n.contentWindow.appboyBridge = h;
              q = n.contentWindow.document.getElementsByTagName("a");
              for (l = 0; l < q.length; l++) q[l].onclick = g(q[l]);
              q = n.contentWindow.document.getElementsByTagName("button");
              for (l = 0; l < q.length; l++) q[l].onclick = g(q[l]);
              l = n.contentWindow.document.body;
              null != l && (q = document.createElement("hidden"), q.onclick = h.closeMessage, q.className =
                  "ab-programmatic-close-button", l.appendChild(q)); - 1 !== n.className.indexOf("ab-start-hidden") && (n.className = n.className.replace("ab-start-hidden", k.sd()), e(n))
          };
          n.className = "ab-in-app-message ab-start-hidden ab-html-message ab-modal-interactions";
          return n
      };
      b.Na.prototype.Bf = function(a) {
          var c = b.j.prototype.Bf.call(this, a);
          if (!this.animateIn && !this.animateOut) {
              a = Array.prototype.slice.call(a.contentWindow.document.body.getElementsByClassName("ab-show"));
              for (var d = 0; d < a.length; d++) c = !0, a[d].className =
                  a[d].className.replace("ab-show", "ab-hide")
          }
          return c
      };
      b.bc.prototype.fa = b.ac.prototype.fa = b.Na.prototype.fa = function(a, c) {
          for (var d = document.querySelectorAll(".ab-page-blocker"), e = null, f = 0; f < d.length; f++) - 1 === d[f].className.indexOf("ab-hide") && (e = d[f]);
          e && (e.className = e.className.replace(this.sd(), this.hh()), d = function() {
              e.parentNode && e.parentNode.removeChild(e)
          }, this.animateOut ? setTimeout(d, b.j.zi) : d());
          b.j.prototype.fa.call(this, a, c)
      };
      b.Hg = {};
      b.Hg.xk = function(a) {
          null == a && (a = "");
          var b = a.split("?").slice(1).join("?");
          a = {};
          if (null != b)
              for (var b = b.split("&"), d = 0; d < b.length; d++) {
                  var e = b[d].split("=");
                  "" !== e[0] && (a[e[0]] = e[1])
              }
          return a
      };
      b.ma = {};
      b.ma.openUri = function(a, b, d) {
          d || null != b && b.metaKey ? window.open(a) : window.location = a
      };
      b.ma.rk = function() {
          return 750 >= screen.width
      };
      b.ma.Ca = {
          Sd: 0,
          Ue: 1
      };
      b.ma.hk = function() {
          if ("orientation" in window) return 90 === Math.abs(window.orientation) || 270 === window.orientation ? b.ma.Ca.Ue : b.ma.Ca.Sd;
          if ("screen" in window) {
              var a = window.screen.orientation || screen.Dl || screen.El;
              null != a && "object" ===
                  typeof a && (a = a.type);
              if ("landscape-primary" === a || "landscape-secondary" === a) return b.ma.Ca.Ue
          }
          return b.ma.Ca.Sd
      };
      var l = new W;
      l.F = b;
      l.Vk = f;
      k.AF = W;
      k.initialize = l.Ff;
      k.destroy = l.yd;
      k.getDeviceId = l.dk;
      k.toggleAppboyLogging = l.Yf;
      k.setLogger = l.Uf;
      k.openSession = l.Ae;
      k.changeUser = l.Nb;
      k.getUser = l.Mc;
      k.requestImmediateDataFlush = l.Dd;
      k.requestFeedRefresh = l.Ee;
      k.getCachedFeed = l.re;
      k.subscribeToFeedUpdates = l.Rh;
      k.requestContentCardsRefresh = l.vc;
      k.getCachedContentCards = l.Lc;
      k.subscribeToContentCardsUpdates = l.Ph;
      k.logCardImpressions = l.Rb;
      k.logCardClick = l.Qb;
      k.logCardDismissal = l.we;
      k.logFeedDisplayed = l.Bh;
      k.logContentCardsDisplayed = l.Ah;
      k.logInAppMessageImpression = l.Cd;
      k.logInAppMessageClick = l.ye;
      k.logInAppMessageButtonClick = l.xe;
      k.logInAppMessageHtmlClick = l.Bd;
      k.subscribeToNewInAppMessages = l.Th;
      k.removeSubscription = l.Aa;
      k.removeAllSubscriptions = l.ua;
      k.logCustomEvent = l.Kf;
      k.logPurchase = l.Lf;
      k.isPushSupported = l.Pb;
      k.isPushBlocked = l.rc;
      k.isPushGranted = l.Hf;
      k.isPushPermissionGranted = l.ue;
      k.registerAppboyPushMessages =
          l.Ck;
      k.unregisterAppboyPushMessages = l.jl;
      k.submitFeedback = l.Xf;
      k.trackLocation = l.hl;
      k.stopWebTracking = l.Yk;
      k.resumeWebTracking = l.Ik;
      k.wipeData = l.ol;
      k.ab = l.F;
      k.ab.User = l.F.w;
      k.ab.User.Genders = l.F.w.kg;
      k.ab.User.NotificationSubscriptionTypes = l.F.w.dd;
      k.ab.User.prototype.getUserId = l.F.w.prototype.U;
      k.ab.User.prototype.setFirstName = l.F.w.prototype.Pk;
      k.ab.User.prototype.setLastName = l.F.w.prototype.Tk;
      k.ab.User.prototype.setEmail = l.F.w.prototype.Nk;
      k.ab.User.prototype.setGender = l.F.w.prototype.Qk;
      k.ab.User.prototype.setDateOfBirth =
          l.F.w.prototype.Mk;
      k.ab.User.prototype.setCountry = l.F.w.prototype.Lk;
      k.ab.User.prototype.setHomeCity = l.F.w.prototype.Rk;
      k.ab.User.prototype.setLanguage = l.F.w.prototype.Sk;
      k.ab.User.prototype.setEmailNotificationSubscriptionType = l.F.w.prototype.Ok;
      k.ab.User.prototype.setPushNotificationSubscriptionType = l.F.w.prototype.Vf;
      k.ab.User.prototype.setPhoneNumber = l.F.w.prototype.Uk;
      k.ab.User.prototype.setAvatarImageUrl = l.F.w.prototype.Kk;
      k.ab.User.prototype.setLastKnownLocation = l.F.w.prototype.Fe;
      k.ab.User.prototype.setUserAttribute =
          l.F.w.prototype.aa;
      k.ab.User.prototype.setCustomUserAttribute = l.F.w.prototype.Rc;
      k.ab.User.prototype.addToCustomAttributeArray = l.F.w.prototype.Aj;
      k.ab.User.prototype.removeFromCustomAttributeArray = l.F.w.prototype.Dk;
      k.ab.User.prototype.incrementCustomUserAttribute = l.F.w.prototype.mk;
      k.ab.User.prototype.addAlias = l.F.w.prototype.zj;
      k.ab.InAppMessage = l.F.j;
      k.ab.InAppMessage.SlideFrom = l.F.j.Vd;
      k.ab.InAppMessage.ClickAction = l.F.j.xb;
      k.ab.InAppMessage.DismissType = l.F.j.xc;
      k.ab.InAppMessage.OpenTarget = l.F.j.ed;
      k.ab.InAppMessage.ImageStyle = l.F.j.Nd;
      k.ab.InAppMessage.TextAlignment = l.F.j.kf;
      k.ab.InAppMessage.Orientation = l.F.j.Ca;
      k.ab.InAppMessage.CropType = l.F.j.Wc;
      k.ab.InAppMessage.prototype.subscribeToClickedEvent = l.F.j.prototype.He;
      k.ab.InAppMessage.prototype.subscribeToDismissedEvent = l.F.j.prototype.Qh;
      k.ab.InAppMessage.prototype.removeSubscription = l.F.j.prototype.Aa;
      k.ab.InAppMessage.prototype.removeAllSubscriptions = l.F.j.prototype.ua;
      k.ab.InAppMessage.Button = l.F.j.wa;
      k.ab.InAppMessage.Button.prototype.subscribeToClickedEvent =
          l.F.j.wa.prototype.He;
      k.ab.InAppMessage.Button.prototype.removeSubscription = l.F.j.wa.prototype.Aa;
      k.ab.InAppMessage.Button.prototype.removeAllSubscriptions = l.F.j.wa.prototype.ua;
      k.ab.SlideUpMessage = l.F.mb;
      k.ab.ModalMessage = l.F.bc;
      k.ab.FullScreenMessage = l.F.ac;
      k.ab.HtmlMessage = l.F.Na;
      k.ab.ControlMessage = l.F.wc;
      k.ab.Feed = l.F.J;
      k.ab.Feed.prototype.getUnreadCardCount = l.F.J.prototype.oh;
      k.ab.ContentCards = l.F.qa;
      k.ab.ContentCards.prototype.getUnviewedCardCount = l.F.qa.prototype.ik;
      k.ab.Card = l.F.b;
      k.ab.ClassicCard =
          l.F.wb;
      k.ab.CaptionedImage = l.F.vb;
      k.ab.Banner = l.F.Banner;
      k.ab.ControlCard = l.F.hb;
      k.ab.WindowUtils = l.F.ma;
      "undefined" !== typeof S && (k.ADF = S, l.display = new S(l, k), k.display = l.display, k.display.automaticallyShowNewInAppMessages = l.display.Dj, k.display.showInAppMessage = l.display.Xk, k.display.showFeed = l.display.Oh, k.display.destroyFeed = l.display.Tj, k.display.toggleFeed = l.display.el, k.display.showContentCards = l.display.Wk, k.display.hideContentCards = l.display.kk, k.display.toggleContentCards = l.display.dl);
      k.sharedLib =
          l.Vk;
      k.subscribeToInit = l.Sh;
      return k
  }

  // This line is modified from the original:
  //
  // "function" === typeof define && define.amd ? define(["exports", "require"], L) : "function" === typeof require && "object" === typeof exports && "object" === typeof module ? L(module.exports || exports) : L(window.appboy = {});
  //
  // This writes to window.appboyV2, instead of the more obvious window.appboy,
  // to avoid breaking unit tests for this integration. The tests for this
  // integration, which we did not want to modify, always attempt to look at
  // window.appboy -- but because the SDK is inlined here, if we had written to
  // window.appboy the tests would always look at the inlined SDK in stead of
  // the SDK loaded by the V1 codepath.
  //
  // Tests for the V1 codepath looking at an appboy loaded in by V2 would be bad
  // and won't work. Instead we write to appboyV2 to avoid problems, and
  // reassign window.appboy = window.appboyV2 as required.
  window.appboyV2 = {};
  L(window.appboyV2);

  if ("undefined" !== typeof appboyQueue && appboyQueue && appboyQueue.length && 0 < appboyQueue.length) {
      var M = appboyQueue;
      appboyQueue = null;
      for (var N = 0; N < M.length; N++)
          if (M[N].callee) {
              var O = M[N].callee.name;
              if (null == O || "" === O) O = /^function ([\w]*)\(/g.exec(M[N].callee.toString())[1];
              if (null != O && "" !== O) {
                  for (var P = O.split("_"), Q = appboy, R = this, X = "appboy", Y = 0; Y < P.length; Y++) {
                      if ("prototype" === P[Y]) var Z = eval({
                              "appboy.ab.User": "appboy.getUser",
                              "appboy.ab.Feed": "appboy.getCachedFeed",
                              "appboy.ab.ContentCards": "appboy.getCachedContentCards"
                          } [X]),
                          R = Q = null != Z ? Z.apply() : new Q.constructor;
                      else Q = Q[P[Y]];
                      X += "." + P[Y]
                  }
                  null != Q && "function" === typeof Q && Q.apply(R, M[N])
              }
          }
  };
}).call(window);

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');
var Track = require('segmentio-facade').Track;
var each = require('@ndhoule/each');
var del = require('obj-case').del;
var clone = require('@ndhoule/clone');

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
  .tag('v1', '<script src="https://js.appboycdn.com/web-sdk/1.6/appboy.min.js">');


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

  if (Number(options.version) === 2) {
    this.initializeV2(customEndpoint);
  } else {
    this.initializeV1(customEndpoint);
  }
};
/**
 * Initialize v1.
 *
 * @api public
 */

Appboy.prototype.initializeV1 = function(customEndpoint) {
  var options = this.options;
  var self = this;
  var userId = this.analytics.user().id();

  // stub out function
  /* eslint-disable */
  +function(a,p,P,b,y) {
    window.appboy={};for(var s="destroy toggleAppboyLogging setLogger openSession changeUser requestImmediateDataFlush requestFeedRefresh subscribeToFeedUpdates logCardImpressions logCardClick logFeedDisplayed requestInAppMessageRefresh logInAppMessageImpression logInAppMessageClick logInAppMessageButtonClick subscribeToNewInAppMessages removeSubscription removeAllSubscriptions logCustomEvent logPurchase isPushSupported isPushBlocked isPushGranted isPushPermissionGranted registerAppboyPushMessages unregisterAppboyPushMessages submitFeedback ab ab.User ab.User.Genders ab.User.NotificationSubscriptionTypes ab.User.prototype.getUserId ab.User.prototype.setFirstName ab.User.prototype.setLastName ab.User.prototype.setEmail ab.User.prototype.setGender ab.User.prototype.setDateOfBirth ab.User.prototype.setCountry ab.User.prototype.setHomeCity ab.User.prototype.setEmailNotificationSubscriptionType ab.User.prototype.setPushNotificationSubscriptionType ab.User.prototype.setPhoneNumber ab.User.prototype.setAvatarImageUrl ab.User.prototype.setLastKnownLocation ab.User.prototype.setUserAttribute ab.User.prototype.setCustomUserAttribute ab.User.prototype.addToCustomAttributeArray ab.User.prototype.removeFromCustomAttributeArray ab.User.prototype.incrementCustomUserAttribute ab.InAppMessage ab.InAppMessage.SlideFrom ab.InAppMessage.ClickAction ab.InAppMessage.DismissType ab.InAppMessage.OpenTarget ab.InAppMessage.ImageStyle ab.InAppMessage.Orientation ab.InAppMessage.CropType ab.InAppMessage.prototype.subscribeToClickedEvent ab.InAppMessage.prototype.subscribeToDismissedEvent ab.InAppMessage.prototype.removeSubscription ab.InAppMessage.prototype.removeAllSubscriptions ab.InAppMessage.Button ab.InAppMessage.Button.prototype.subscribeToClickedEvent ab.InAppMessage.Button.prototype.removeSubscription ab.InAppMessage.Button.prototype.removeAllSubscriptions ab.SlideUpMessage ab.ModalMessage ab.FullScreenMessage ab.ControlMessage ab.Feed ab.Feed.prototype.getUnreadCardCount ab.Card ab.ClassicCard ab.CaptionedImage ab.Banner ab.WindowUtils display display.automaticallyShowNewInAppMessages display.showInAppMessage display.showFeed display.destroyFeed display.toggleFeed sharedLib".split(" "),i=0;i<s.length;i++){for(var k=appboy,l=s[i].split("."),j=0;j<l.length-1;j++)k=k[l[j]];k[l[j]]=function(){console&&console.error("The Appboy SDK has not yet been loaded.")}}appboy.initialize=function(){console&&console.error("Appboy cannot be loaded - this is usually due to strict corporate firewalls or ad blockers.")};appboy.getUser=function(){return new appboy.ab.User};appboy.getCachedFeed=function(){return new appboy.ab.Feed};
  }(document, 'script', 'link');
  /* eslint-enable */

  // this is used to test this.loaded
  this._shim = window.appboy.initialize;

  this.load('v1', function() {
    var config = {};
    var datacenterMappings = {
      us:   'https://sdk.iad-01.braze.com',
      us02: 'https://sdk.iad-02.braze.com',
      us03: 'https://sdk.iad-03.braze.com',
      eu:   'https://sdk.fra-01.braze.eu'
    };
    if (options.safariWebsitePushId) config.safariWebsitePushId = options.safariWebsitePushId;
    if (options.enableHtmlInAppMessages) config.enableHtmlInAppMessages = true;

    // Setup custom endpoints
    if (options.customEndpoint) {
      var endpoint = options.customEndpoint;
      var regex = new RegExp('^(http|https)://', 'i');
      config.baseUrl = (regex.test(endpoint) ? endpoint : 'https://' + endpoint) + '/api/v3';
    } else {
      config.baseUrl = (datacenterMappings[options.datacenter] || 'https://sdk.iad-01.braze.com') + '/api/v3';
    }

    if (customEndpoint) config.baseUrl = customEndpoint;

    self.initializeTester(options.apiKey, config);
    window.appboy.initialize(options.apiKey, config);

    if (options.automaticallyDisplayMessages) window.appboy.display.automaticallyShowNewInAppMessages();
    if (userId) window.appboy.changeUser(userId);

    window.appboy.openSession();
    self.ready();
  });
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

  window.appboy = window.appboyV2;
  this.initializeTester(options.apiKey, config);
  window.appboy.initialize(options.apiKey, config);

  if (options.automaticallyDisplayMessages) window.appboy.display.automaticallyShowNewInAppMessages();

  // Initialization of Appboy must proceed as follows:
  //
  // 1. Assign Appboy's script to window.appboy.
  // 2. If there is already a cached userId for this page, then invoke
  //    `changeUser` with that userId. Do not proceed until the in-app messages
  //    for that user are ready.
  // 3. Invoke `openSession`. Do not proceed until the session is successfully
  //    opened.
  // 4. Mark the integration as ready. This is `self.ready`.
  var self = this;
  if (userId) {
    self._changeUser(userId, function() {
      self._pollForReady(function() {
        window.appboy.openSession(function() {
          self.ready();
        });
      });
    });
  } else {
    self._pollForReady(function() {
      window.appboy.openSession(function() {
        self.ready();
      });
    });
  }
};

Appboy.prototype._pollForReady = function(callback) {
  var timeoutId = setInterval(function() {
    var globalCallback = window.brazeInitializeCB;
    if (globalCallback !== undefined) {
      clearInterval(timeoutId);
      globalCallback(function() {
        callback();
      });
    }
  }, 100);
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

  // Put the work to be done after `changeUser` completes into a variable. In
  // some situations, we will have to call this ourselves, as Braze's SDK will
  // not do so for us.
  var changeUserCallback = function() {
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
  };

  if (userId == null || userId === undefined) {
    window.appboy.changeUser(userId);
    changeUserCallback();
  } else {
    window.appboy.changeUser(userId, changeUserCallback);
  }
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
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

Appboy.prototype.loaded = function() {
  var options = this.options;
  if (Number(options.version) === 2) return window.appboy !== undefined;
  return window.appboy && window.appboy.initialize !== this._shim;
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
    window.appboy.getUser().setAvatarImageUrl(avatar);
    window.appboy.getUser().setEmail(email);
    window.appboy.getUser().setFirstName(firstName);
    window.appboy.getUser().setGender(getGender(gender));
    window.appboy.getUser().setLastName(lastName);
    window.appboy.getUser().setPhoneNumber(phone);
    if (address) {
      window.appboy.getUser().setCountry(address.country);
      window.appboy.getUser().setHomeCity(address.city);
    }
    if (birthday) {
      window.appboy.getUser().setDateOfBirth(birthday.getUTCFullYear(), birthday.getUTCMonth() + 1, birthday.getUTCDate());
    }

    // delete all the standard traits from traits clone so that we can use appboy's setCustomAttribute on non-standard traits
    // also remove all reserved keys so we dont set them as custom attributes, otherwise Appboy rejects the entire event
    // https://www.appboy.com/documentation/Platform_Wide/#reserved-keys
    var reserved = ['avatar', 'address', 'birthday', 'email', 'id', 'firstName', 'gender', 'lastName', 'phone', 'facebook', 'twitter', 'first_name', 'last_name', 'dob', 'external_id', 'country', 'home_city', 'bio', 'gender', 'phone', 'email_subscribe', 'push_subscribe'];
    each(function(key) {
      delete traits[key];
    }, reserved);

    each(function(value, key) {
      window.appboy.getUser().setCustomUserAttribute(key, value);
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

  window.appboy.getUser().setCustomUserAttribute(groupIdKey, true);
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
    window.appboy.logCustomEvent(eventName, properties);
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
    window.appboy.logCustomEvent(eventName, properties);
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
      window.appboy.logPurchase(productId, price, currencyCode, quantity, purchaseProperties);
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

  if (femaleGenders.indexOf(gender.toLowerCase()) > -1) return window.appboy.ab.User.Genders.FEMALE;
  if (maleGenders.indexOf(gender.toLowerCase()) > -1) return window.appboy.ab.User.Genders.MALE;
  if (otherGenders.indexOf(gender.toLowerCase()) > -1) return window.appboy.ab.User.Genders.OTHER;
}
