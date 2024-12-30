function getDefaultExportFromCjs(ze) {
  return ze && ze.__esModule && Object.prototype.hasOwnProperty.call(ze, "default") ? ze.default : ze;
}
var htmx_min$1 = { exports: {} }, htmx_min = htmx_min$1.exports, hasRequiredHtmx_min;
function requireHtmx_min() {
  return hasRequiredHtmx_min || (hasRequiredHtmx_min = 1, function(module) {
    (function(ze, Qr) {
      module.exports ? module.exports = Qr() : ze.htmx = ze.htmx || Qr();
    })(typeof self < "u" ? self : htmx_min, function() {
      return function() {
        var Q = { onLoad: F, process: zt, on: de, off: ge, trigger: ce, ajax: Nr, find: C, findAll: f, closest: v, values: function(ze, Qr) {
          var Jr = dr(ze, Qr || "post");
          return Jr.values;
        }, remove: _, addClass: z, removeClass: n, toggleClass: $, takeClass: W, defineExtension: Ur, removeExtension: Br, logAll: V, logNone: j, logger: null, config: { historyEnabled: !0, historyCacheSize: 10, refreshOnHistoryMiss: !1, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: !0, indicatorClass: "htmx-indicator", requestClass: "htmx-request", addedClass: "htmx-added", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: !0, allowScriptTags: !0, inlineScriptNonce: "", attributesToSettle: ["class", "style", "width", "height"], withCredentials: !1, timeout: 0, wsReconnectDelay: "full-jitter", wsBinaryType: "blob", disableSelector: "[hx-disable], [data-hx-disable]", useTemplateFragments: !1, scrollBehavior: "smooth", defaultFocusScroll: !1, getCacheBusterParam: !1, globalViewTransitions: !1, methodsThatUseUrlParams: ["get"], selfRequestsOnly: !1, ignoreTitle: !1, scrollIntoViewOnBoost: !0, triggerSpecsCache: null }, parseInterval: d, _: t, createEventSource: function(ze) {
          return new EventSource(ze, { withCredentials: !0 });
        }, createWebSocket: function(ze) {
          var Qr = new WebSocket(ze, []);
          return Qr.binaryType = Q.config.wsBinaryType, Qr;
        }, version: "1.9.12" }, r = { addTriggerHandler: Lt, bodyContains: se, canAccessLocalStorage: U, findThisElement: xe, filterValues: yr, hasAttribute: o, getAttributeValue: te, getClosestAttributeValue: ne, getClosestMatch: c, getExpressionVars: Hr, getHeaders: xr, getInputValues: dr, getInternalData: ae, getSwapSpecification: wr, getTriggerSpecs: it, getTarget: ye, makeFragment: l, mergeObjects: le, makeSettleInfo: T, oobSwap: Ee, querySelectorExt: ue, selectAndSwap: je, settleImmediately: nr, shouldCancel: ut, triggerEvent: ce, triggerErrorEvent: fe, withExtensions: R }, w = ["get", "post", "put", "delete", "patch"], i = w.map(function(ze) {
          return "[hx-" + ze + "], [data-hx-" + ze + "]";
        }).join(", "), S = e("head"), q = e("title"), H = e("svg", !0);
        function e(ze, Qr) {
          return new RegExp("<" + ze + "(\\s[^>]*>|>)([\\s\\S]*?)<\\/" + ze + ">", Qr ? "gim" : "im");
        }
        function d(ze) {
          if (ze == null)
            return;
          let Qr = NaN;
          return ze.slice(-2) == "ms" ? Qr = parseFloat(ze.slice(0, -2)) : ze.slice(-1) == "s" ? Qr = parseFloat(ze.slice(0, -1)) * 1e3 : ze.slice(-1) == "m" ? Qr = parseFloat(ze.slice(0, -1)) * 1e3 * 60 : Qr = parseFloat(ze), isNaN(Qr) ? void 0 : Qr;
        }
        function ee(ze, Qr) {
          return ze.getAttribute && ze.getAttribute(Qr);
        }
        function o(ze, Qr) {
          return ze.hasAttribute && (ze.hasAttribute(Qr) || ze.hasAttribute("data-" + Qr));
        }
        function te(ze, Qr) {
          return ee(ze, Qr) || ee(ze, "data-" + Qr);
        }
        function u(ze) {
          return ze.parentElement;
        }
        function re() {
          return document;
        }
        function c(ze, Qr) {
          for (; ze && !Qr(ze); )
            ze = u(ze);
          return ze || null;
        }
        function L(ze, Qr, Jr) {
          var Zr = te(Qr, Jr), Wr = te(Qr, "hx-disinherit");
          return ze !== Qr && Wr && (Wr === "*" || Wr.split(" ").indexOf(Jr) >= 0) ? "unset" : Zr;
        }
        function ne(ze, Qr) {
          var Jr = null;
          if (c(ze, function(Zr) {
            return Jr = L(ze, Zr, Qr);
          }), Jr !== "unset")
            return Jr;
        }
        function h(ze, Qr) {
          var Jr = ze.matches || ze.matchesSelector || ze.msMatchesSelector || ze.mozMatchesSelector || ze.webkitMatchesSelector || ze.oMatchesSelector;
          return Jr && Jr.call(ze, Qr);
        }
        function A(ze) {
          var Qr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Jr = Qr.exec(ze);
          return Jr ? Jr[1].toLowerCase() : "";
        }
        function s(ze, Qr) {
          for (var Jr = new DOMParser(), Zr = Jr.parseFromString(ze, "text/html"), Wr = Zr.body; Qr > 0; )
            Qr--, Wr = Wr.firstChild;
          return Wr == null && (Wr = re().createDocumentFragment()), Wr;
        }
        function N(ze) {
          return /<body/.test(ze);
        }
        function l(ze) {
          var Qr = !N(ze), Jr = A(ze), Zr = ze;
          if (Jr === "head" && (Zr = Zr.replace(S, "")), Q.config.useTemplateFragments && Qr) {
            var Wr = s("<body><template>" + Zr + "</template></body>", 0), Yr = Wr.querySelector("template").content;
            return Q.config.allowScriptTags ? oe(Yr.querySelectorAll("script"), function(Gr) {
              Q.config.inlineScriptNonce && (Gr.nonce = Q.config.inlineScriptNonce), Gr.htmxExecuted = navigator.userAgent.indexOf("Firefox") === -1;
            }) : oe(Yr.querySelectorAll("script"), function(Gr) {
              _(Gr);
            }), Yr;
          }
          switch (Jr) {
            case "thead":
            case "tbody":
            case "tfoot":
            case "colgroup":
            case "caption":
              return s("<table>" + Zr + "</table>", 1);
            case "col":
              return s("<table><colgroup>" + Zr + "</colgroup></table>", 2);
            case "tr":
              return s("<table><tbody>" + Zr + "</tbody></table>", 2);
            case "td":
            case "th":
              return s("<table><tbody><tr>" + Zr + "</tr></tbody></table>", 3);
            case "script":
            case "style":
              return s("<div>" + Zr + "</div>", 1);
            default:
              return s(Zr, 0);
          }
        }
        function ie(ze) {
          ze && ze();
        }
        function I(ze, Qr) {
          return Object.prototype.toString.call(ze) === "[object " + Qr + "]";
        }
        function k(ze) {
          return I(ze, "Function");
        }
        function P(ze) {
          return I(ze, "Object");
        }
        function ae(ze) {
          var Qr = "htmx-internal-data", Jr = ze[Qr];
          return Jr || (Jr = ze[Qr] = {}), Jr;
        }
        function M(ze) {
          var Qr = [];
          if (ze)
            for (var Jr = 0; Jr < ze.length; Jr++)
              Qr.push(ze[Jr]);
          return Qr;
        }
        function oe(ze, Qr) {
          if (ze)
            for (var Jr = 0; Jr < ze.length; Jr++)
              Qr(ze[Jr]);
        }
        function X(ze) {
          var Qr = ze.getBoundingClientRect(), Jr = Qr.top, Zr = Qr.bottom;
          return Jr < window.innerHeight && Zr >= 0;
        }
        function se(ze) {
          return ze.getRootNode && ze.getRootNode() instanceof window.ShadowRoot ? re().body.contains(ze.getRootNode().host) : re().body.contains(ze);
        }
        function D(ze) {
          return ze.trim().split(/\s+/);
        }
        function le(ze, Qr) {
          for (var Jr in Qr)
            Qr.hasOwnProperty(Jr) && (ze[Jr] = Qr[Jr]);
          return ze;
        }
        function E(ze) {
          try {
            return JSON.parse(ze);
          } catch (Qr) {
            return b(Qr), null;
          }
        }
        function U() {
          var ze = "htmx:localStorageTest";
          try {
            return localStorage.setItem(ze, ze), localStorage.removeItem(ze), !0;
          } catch {
            return !1;
          }
        }
        function B(ze) {
          try {
            var Qr = new URL(ze);
            return Qr && (ze = Qr.pathname + Qr.search), /^\/$/.test(ze) || (ze = ze.replace(/\/+$/, "")), ze;
          } catch {
            return ze;
          }
        }
        function t(e) {
          return Tr(re().body, function() {
            return eval(e);
          });
        }
        function F(ze) {
          var Qr = Q.on("htmx:load", function(Jr) {
            ze(Jr.detail.elt);
          });
          return Qr;
        }
        function V() {
          Q.logger = function(ze, Qr, Jr) {
            console && console.log(Qr, ze, Jr);
          };
        }
        function j() {
          Q.logger = null;
        }
        function C(ze, Qr) {
          return Qr ? ze.querySelector(Qr) : C(re(), ze);
        }
        function f(ze, Qr) {
          return Qr ? ze.querySelectorAll(Qr) : f(re(), ze);
        }
        function _(ze, Qr) {
          ze = p(ze), Qr ? setTimeout(function() {
            _(ze), ze = null;
          }, Qr) : ze.parentElement.removeChild(ze);
        }
        function z(ze, Qr, Jr) {
          ze = p(ze), Jr ? setTimeout(function() {
            z(ze, Qr), ze = null;
          }, Jr) : ze.classList && ze.classList.add(Qr);
        }
        function n(ze, Qr, Jr) {
          ze = p(ze), Jr ? setTimeout(function() {
            n(ze, Qr), ze = null;
          }, Jr) : ze.classList && (ze.classList.remove(Qr), ze.classList.length === 0 && ze.removeAttribute("class"));
        }
        function $(ze, Qr) {
          ze = p(ze), ze.classList.toggle(Qr);
        }
        function W(ze, Qr) {
          ze = p(ze), oe(ze.parentElement.children, function(Jr) {
            n(Jr, Qr);
          }), z(ze, Qr);
        }
        function v(ze, Qr) {
          if (ze = p(ze), ze.closest)
            return ze.closest(Qr);
          do
            if (ze == null || h(ze, Qr))
              return ze;
          while (ze = ze && u(ze));
          return null;
        }
        function g(ze, Qr) {
          return ze.substring(0, Qr.length) === Qr;
        }
        function G(ze, Qr) {
          return ze.substring(ze.length - Qr.length) === Qr;
        }
        function J(ze) {
          var Qr = ze.trim();
          return g(Qr, "<") && G(Qr, "/>") ? Qr.substring(1, Qr.length - 2) : Qr;
        }
        function Z(ze, Qr) {
          return Qr.indexOf("closest ") === 0 ? [v(ze, J(Qr.substr(8)))] : Qr.indexOf("find ") === 0 ? [C(ze, J(Qr.substr(5)))] : Qr === "next" ? [ze.nextElementSibling] : Qr.indexOf("next ") === 0 ? [K(ze, J(Qr.substr(5)))] : Qr === "previous" ? [ze.previousElementSibling] : Qr.indexOf("previous ") === 0 ? [Y(ze, J(Qr.substr(9)))] : Qr === "document" ? [document] : Qr === "window" ? [window] : Qr === "body" ? [document.body] : re().querySelectorAll(J(Qr));
        }
        var K = function(ze, Qr) {
          for (var Jr = re().querySelectorAll(Qr), Zr = 0; Zr < Jr.length; Zr++) {
            var Wr = Jr[Zr];
            if (Wr.compareDocumentPosition(ze) === Node.DOCUMENT_POSITION_PRECEDING)
              return Wr;
          }
        }, Y = function(ze, Qr) {
          for (var Jr = re().querySelectorAll(Qr), Zr = Jr.length - 1; Zr >= 0; Zr--) {
            var Wr = Jr[Zr];
            if (Wr.compareDocumentPosition(ze) === Node.DOCUMENT_POSITION_FOLLOWING)
              return Wr;
          }
        };
        function ue(ze, Qr) {
          return Qr ? Z(ze, Qr)[0] : Z(re().body, ze)[0];
        }
        function p(ze) {
          return I(ze, "String") ? C(ze) : ze;
        }
        function ve(ze, Qr, Jr) {
          return k(Qr) ? { target: re().body, event: ze, listener: Qr } : { target: p(ze), event: Qr, listener: Jr };
        }
        function de(ze, Qr, Jr) {
          jr(function() {
            var Wr = ve(ze, Qr, Jr);
            Wr.target.addEventListener(Wr.event, Wr.listener);
          });
          var Zr = k(Qr);
          return Zr ? Qr : Jr;
        }
        function ge(ze, Qr, Jr) {
          return jr(function() {
            var Zr = ve(ze, Qr, Jr);
            Zr.target.removeEventListener(Zr.event, Zr.listener);
          }), k(Qr) ? Qr : Jr;
        }
        var pe = re().createElement("output");
        function me(ze, Qr) {
          var Jr = ne(ze, Qr);
          if (Jr) {
            if (Jr === "this")
              return [xe(ze, Qr)];
            var Zr = Z(ze, Jr);
            return Zr.length === 0 ? (b('The selector "' + Jr + '" on ' + Qr + " returned no matches!"), [pe]) : Zr;
          }
        }
        function xe(ze, Qr) {
          return c(ze, function(Jr) {
            return te(Jr, Qr) != null;
          });
        }
        function ye(ze) {
          var Qr = ne(ze, "hx-target");
          if (Qr)
            return Qr === "this" ? xe(ze, "hx-target") : ue(ze, Qr);
          var Jr = ae(ze);
          return Jr.boosted ? re().body : ze;
        }
        function be(ze) {
          for (var Qr = Q.config.attributesToSettle, Jr = 0; Jr < Qr.length; Jr++)
            if (ze === Qr[Jr])
              return !0;
          return !1;
        }
        function we(ze, Qr) {
          oe(ze.attributes, function(Jr) {
            !Qr.hasAttribute(Jr.name) && be(Jr.name) && ze.removeAttribute(Jr.name);
          }), oe(Qr.attributes, function(Jr) {
            be(Jr.name) && ze.setAttribute(Jr.name, Jr.value);
          });
        }
        function Se(ze, Qr) {
          for (var Jr = Fr(Qr), Zr = 0; Zr < Jr.length; Zr++) {
            var Wr = Jr[Zr];
            try {
              if (Wr.isInlineSwap(ze))
                return !0;
            } catch (Yr) {
              b(Yr);
            }
          }
          return ze === "outerHTML";
        }
        function Ee(ze, Qr, Jr) {
          var Zr = "#" + ee(Qr, "id"), Wr = "outerHTML";
          ze === "true" || (ze.indexOf(":") > 0 ? (Wr = ze.substr(0, ze.indexOf(":")), Zr = ze.substr(ze.indexOf(":") + 1, ze.length)) : Wr = ze);
          var Yr = re().querySelectorAll(Zr);
          return Yr ? (oe(Yr, function(Gr) {
            var Kr, en = Qr.cloneNode(!0);
            Kr = re().createDocumentFragment(), Kr.appendChild(en), Se(Wr, Gr) || (Kr = en);
            var tn = { shouldSwap: !0, target: Gr, fragment: Kr };
            ce(Gr, "htmx:oobBeforeSwap", tn) && (Gr = tn.target, tn.shouldSwap && Fe(Wr, Gr, Gr, Kr, Jr), oe(Jr.elts, function(rn) {
              ce(rn, "htmx:oobAfterSwap", tn);
            }));
          }), Qr.parentNode.removeChild(Qr)) : (Qr.parentNode.removeChild(Qr), fe(re().body, "htmx:oobErrorNoTarget", { content: Qr })), ze;
        }
        function Ce(ze, Qr, Jr) {
          var Zr = ne(ze, "hx-select-oob");
          if (Zr)
            for (var Wr = Zr.split(","), Yr = 0; Yr < Wr.length; Yr++) {
              var Gr = Wr[Yr].split(":", 2), Kr = Gr[0].trim();
              Kr.indexOf("#") === 0 && (Kr = Kr.substring(1));
              var en = Gr[1] || "true", tn = Qr.querySelector("#" + Kr);
              tn && Ee(en, tn, Jr);
            }
          oe(f(Qr, "[hx-swap-oob], [data-hx-swap-oob]"), function(rn) {
            var nn = te(rn, "hx-swap-oob");
            nn != null && Ee(nn, rn, Jr);
          });
        }
        function Re(ze) {
          oe(f(ze, "[hx-preserve], [data-hx-preserve]"), function(Qr) {
            var Jr = te(Qr, "id"), Zr = re().getElementById(Jr);
            Zr != null && Qr.parentNode.replaceChild(Zr, Qr);
          });
        }
        function Te(ze, Qr, Jr) {
          oe(Qr.querySelectorAll("[id]"), function(Zr) {
            var Wr = ee(Zr, "id");
            if (Wr && Wr.length > 0) {
              var Yr = Wr.replace("'", "\\'"), Gr = Zr.tagName.replace(":", "\\:"), Kr = ze.querySelector(Gr + "[id='" + Yr + "']");
              if (Kr && Kr !== ze) {
                var en = Zr.cloneNode();
                we(Zr, Kr), Jr.tasks.push(function() {
                  we(Zr, en);
                });
              }
            }
          });
        }
        function Oe(ze) {
          return function() {
            n(ze, Q.config.addedClass), zt(ze), Nt(ze), qe(ze), ce(ze, "htmx:load");
          };
        }
        function qe(ze) {
          var Qr = "[autofocus]", Jr = h(ze, Qr) ? ze : ze.querySelector(Qr);
          Jr != null && Jr.focus();
        }
        function a(ze, Qr, Jr, Zr) {
          for (Te(ze, Jr, Zr); Jr.childNodes.length > 0; ) {
            var Wr = Jr.firstChild;
            z(Wr, Q.config.addedClass), ze.insertBefore(Wr, Qr), Wr.nodeType !== Node.TEXT_NODE && Wr.nodeType !== Node.COMMENT_NODE && Zr.tasks.push(Oe(Wr));
          }
        }
        function He(ze, Qr) {
          for (var Jr = 0; Jr < ze.length; )
            Qr = (Qr << 5) - Qr + ze.charCodeAt(Jr++) | 0;
          return Qr;
        }
        function Le(ze) {
          var Qr = 0;
          if (ze.attributes)
            for (var Jr = 0; Jr < ze.attributes.length; Jr++) {
              var Zr = ze.attributes[Jr];
              Zr.value && (Qr = He(Zr.name, Qr), Qr = He(Zr.value, Qr));
            }
          return Qr;
        }
        function Ae(ze) {
          var Qr = ae(ze);
          if (Qr.onHandlers) {
            for (var Jr = 0; Jr < Qr.onHandlers.length; Jr++) {
              const Zr = Qr.onHandlers[Jr];
              ze.removeEventListener(Zr.event, Zr.listener);
            }
            delete Qr.onHandlers;
          }
        }
        function Ne(ze) {
          var Qr = ae(ze);
          Qr.timeout && clearTimeout(Qr.timeout), Qr.webSocket && Qr.webSocket.close(), Qr.sseEventSource && Qr.sseEventSource.close(), Qr.listenerInfos && oe(Qr.listenerInfos, function(Jr) {
            Jr.on && Jr.on.removeEventListener(Jr.trigger, Jr.listener);
          }), Ae(ze), oe(Object.keys(Qr), function(Jr) {
            delete Qr[Jr];
          });
        }
        function m(ze) {
          ce(ze, "htmx:beforeCleanupElement"), Ne(ze), ze.children && oe(ze.children, function(Qr) {
            m(Qr);
          });
        }
        function Ie(ze, Qr, Jr) {
          if (ze.tagName === "BODY")
            return Ue(ze, Qr, Jr);
          var Zr, Wr = ze.previousSibling;
          for (a(u(ze), ze, Qr, Jr), Wr == null ? Zr = u(ze).firstChild : Zr = Wr.nextSibling, Jr.elts = Jr.elts.filter(function(Yr) {
            return Yr != ze;
          }); Zr && Zr !== ze; )
            Zr.nodeType === Node.ELEMENT_NODE && Jr.elts.push(Zr), Zr = Zr.nextElementSibling;
          m(ze), u(ze).removeChild(ze);
        }
        function ke(ze, Qr, Jr) {
          return a(ze, ze.firstChild, Qr, Jr);
        }
        function Pe(ze, Qr, Jr) {
          return a(u(ze), ze, Qr, Jr);
        }
        function Me(ze, Qr, Jr) {
          return a(ze, null, Qr, Jr);
        }
        function Xe(ze, Qr, Jr) {
          return a(u(ze), ze.nextSibling, Qr, Jr);
        }
        function De(ze, Qr, Jr) {
          return m(ze), u(ze).removeChild(ze);
        }
        function Ue(ze, Qr, Jr) {
          var Zr = ze.firstChild;
          if (a(ze, Zr, Qr, Jr), Zr) {
            for (; Zr.nextSibling; )
              m(Zr.nextSibling), ze.removeChild(Zr.nextSibling);
            m(Zr), ze.removeChild(Zr);
          }
        }
        function Be(ze, Qr, Jr) {
          var Zr = Jr || ne(ze, "hx-select");
          if (Zr) {
            var Wr = re().createDocumentFragment();
            oe(Qr.querySelectorAll(Zr), function(Yr) {
              Wr.appendChild(Yr);
            }), Qr = Wr;
          }
          return Qr;
        }
        function Fe(ze, Qr, Jr, Zr, Wr) {
          switch (ze) {
            case "none":
              return;
            case "outerHTML":
              Ie(Jr, Zr, Wr);
              return;
            case "afterbegin":
              ke(Jr, Zr, Wr);
              return;
            case "beforebegin":
              Pe(Jr, Zr, Wr);
              return;
            case "beforeend":
              Me(Jr, Zr, Wr);
              return;
            case "afterend":
              Xe(Jr, Zr, Wr);
              return;
            case "delete":
              De(Jr);
              return;
            default:
              for (var Yr = Fr(Qr), Gr = 0; Gr < Yr.length; Gr++) {
                var Kr = Yr[Gr];
                try {
                  var en = Kr.handleSwap(ze, Jr, Zr, Wr);
                  if (en) {
                    if (typeof en.length < "u")
                      for (var tn = 0; tn < en.length; tn++) {
                        var rn = en[tn];
                        rn.nodeType !== Node.TEXT_NODE && rn.nodeType !== Node.COMMENT_NODE && Wr.tasks.push(Oe(rn));
                      }
                    return;
                  }
                } catch (nn) {
                  b(nn);
                }
              }
              ze === "innerHTML" ? Ue(Jr, Zr, Wr) : Fe(Q.config.defaultSwapStyle, Qr, Jr, Zr, Wr);
          }
        }
        function Ve(ze) {
          if (ze.indexOf("<title") > -1) {
            var Qr = ze.replace(H, ""), Jr = Qr.match(q);
            if (Jr)
              return Jr[2];
          }
        }
        function je(ze, Qr, Jr, Zr, Wr, Yr) {
          Wr.title = Ve(Zr);
          var Gr = l(Zr);
          if (Gr)
            return Ce(Jr, Gr, Wr), Gr = Be(Jr, Gr, Yr), Re(Gr), Fe(ze, Jr, Qr, Gr, Wr);
        }
        function _e(ze, Qr, Jr) {
          var Zr = ze.getResponseHeader(Qr);
          if (Zr.indexOf("{") === 0) {
            var Wr = E(Zr);
            for (var Yr in Wr)
              if (Wr.hasOwnProperty(Yr)) {
                var Gr = Wr[Yr];
                P(Gr) || (Gr = { value: Gr }), ce(Jr, Yr, Gr);
              }
          } else
            for (var Kr = Zr.split(","), en = 0; en < Kr.length; en++)
              ce(Jr, Kr[en].trim(), []);
        }
        var x = /[\s,]/, $e = /[_$a-zA-Z]/, We = /[_$a-zA-Z0-9]/, Ge = ['"', "'", "/"], Je = /[^\s]/, Ze = /[{(]/, Ke = /[})]/;
        function Ye(ze) {
          for (var Qr = [], Jr = 0; Jr < ze.length; ) {
            if ($e.exec(ze.charAt(Jr))) {
              for (var Zr = Jr; We.exec(ze.charAt(Jr + 1)); )
                Jr++;
              Qr.push(ze.substr(Zr, Jr - Zr + 1));
            } else if (Ge.indexOf(ze.charAt(Jr)) !== -1) {
              var Wr = ze.charAt(Jr), Zr = Jr;
              for (Jr++; Jr < ze.length && ze.charAt(Jr) !== Wr; )
                ze.charAt(Jr) === "\\" && Jr++, Jr++;
              Qr.push(ze.substr(Zr, Jr - Zr + 1));
            } else {
              var Yr = ze.charAt(Jr);
              Qr.push(Yr);
            }
            Jr++;
          }
          return Qr;
        }
        function Qe(ze, Qr, Jr) {
          return $e.exec(ze.charAt(0)) && ze !== "true" && ze !== "false" && ze !== "this" && ze !== Jr && Qr !== ".";
        }
        function et(ze, Qr, Jr) {
          if (Qr[0] === "[") {
            Qr.shift();
            for (var Zr = 1, Wr = " return (function(" + Jr + "){ return (", Yr = null; Qr.length > 0; ) {
              var Gr = Qr[0];
              if (Gr === "]") {
                if (Zr--, Zr === 0) {
                  Yr === null && (Wr = Wr + "true"), Qr.shift(), Wr += ")})";
                  try {
                    var Kr = Tr(ze, function() {
                      return Function(Wr)();
                    }, function() {
                      return !0;
                    });
                    return Kr.source = Wr, Kr;
                  } catch (en) {
                    return fe(re().body, "htmx:syntax:error", { error: en, source: Wr }), null;
                  }
                }
              } else Gr === "[" && Zr++;
              Qe(Gr, Yr, Jr) ? Wr += "((" + Jr + "." + Gr + ") ? (" + Jr + "." + Gr + ") : (window." + Gr + "))" : Wr = Wr + Gr, Yr = Qr.shift();
            }
          }
        }
        function y(ze, Qr) {
          for (var Jr = ""; ze.length > 0 && !Qr.test(ze[0]); )
            Jr += ze.shift();
          return Jr;
        }
        function tt(ze) {
          var Qr;
          return ze.length > 0 && Ze.test(ze[0]) ? (ze.shift(), Qr = y(ze, Ke).trim(), ze.shift()) : Qr = y(ze, x), Qr;
        }
        var rt = "input, textarea, select";
        function nt(ze, Qr, Jr) {
          var Zr = [], Wr = Ye(Qr);
          do {
            y(Wr, Je);
            var Yr = Wr.length, Gr = y(Wr, /[,\[\s]/);
            if (Gr !== "")
              if (Gr === "every") {
                var Kr = { trigger: "every" };
                y(Wr, Je), Kr.pollInterval = d(y(Wr, /[,\[\s]/)), y(Wr, Je);
                var en = et(ze, Wr, "event");
                en && (Kr.eventFilter = en), Zr.push(Kr);
              } else if (Gr.indexOf("sse:") === 0)
                Zr.push({ trigger: "sse", sseEvent: Gr.substr(4) });
              else {
                var tn = { trigger: Gr }, en = et(ze, Wr, "event");
                for (en && (tn.eventFilter = en); Wr.length > 0 && Wr[0] !== ","; ) {
                  y(Wr, Je);
                  var rn = Wr.shift();
                  if (rn === "changed")
                    tn.changed = !0;
                  else if (rn === "once")
                    tn.once = !0;
                  else if (rn === "consume")
                    tn.consume = !0;
                  else if (rn === "delay" && Wr[0] === ":")
                    Wr.shift(), tn.delay = d(y(Wr, x));
                  else if (rn === "from" && Wr[0] === ":") {
                    if (Wr.shift(), Ze.test(Wr[0]))
                      var nn = tt(Wr);
                    else {
                      var nn = y(Wr, x);
                      if (nn === "closest" || nn === "find" || nn === "next" || nn === "previous") {
                        Wr.shift();
                        var on = tt(Wr);
                        on.length > 0 && (nn += " " + on);
                      }
                    }
                    tn.from = nn;
                  } else rn === "target" && Wr[0] === ":" ? (Wr.shift(), tn.target = tt(Wr)) : rn === "throttle" && Wr[0] === ":" ? (Wr.shift(), tn.throttle = d(y(Wr, x))) : rn === "queue" && Wr[0] === ":" ? (Wr.shift(), tn.queue = y(Wr, x)) : rn === "root" && Wr[0] === ":" ? (Wr.shift(), tn[rn] = tt(Wr)) : rn === "threshold" && Wr[0] === ":" ? (Wr.shift(), tn[rn] = y(Wr, x)) : fe(ze, "htmx:syntax:error", { token: Wr.shift() });
                }
                Zr.push(tn);
              }
            Wr.length === Yr && fe(ze, "htmx:syntax:error", { token: Wr.shift() }), y(Wr, Je);
          } while (Wr[0] === "," && Wr.shift());
          return Jr && (Jr[Qr] = Zr), Zr;
        }
        function it(ze) {
          var Qr = te(ze, "hx-trigger"), Jr = [];
          if (Qr) {
            var Zr = Q.config.triggerSpecsCache;
            Jr = Zr && Zr[Qr] || nt(ze, Qr, Zr);
          }
          return Jr.length > 0 ? Jr : h(ze, "form") ? [{ trigger: "submit" }] : h(ze, 'input[type="button"], input[type="submit"]') ? [{ trigger: "click" }] : h(ze, rt) ? [{ trigger: "change" }] : [{ trigger: "click" }];
        }
        function at(ze) {
          ae(ze).cancelled = !0;
        }
        function ot(ze, Qr, Jr) {
          var Zr = ae(ze);
          Zr.timeout = setTimeout(function() {
            se(ze) && Zr.cancelled !== !0 && (ct(Jr, ze, Wt("hx:poll:trigger", { triggerSpec: Jr, target: ze })) || Qr(ze), ot(ze, Qr, Jr));
          }, Jr.pollInterval);
        }
        function st(ze) {
          return location.hostname === ze.hostname && ee(ze, "href") && ee(ze, "href").indexOf("#") !== 0;
        }
        function lt(ze, Qr, Jr) {
          if (ze.tagName === "A" && st(ze) && (ze.target === "" || ze.target === "_self") || ze.tagName === "FORM") {
            Qr.boosted = !0;
            var Zr, Wr;
            if (ze.tagName === "A")
              Zr = "get", Wr = ee(ze, "href");
            else {
              var Yr = ee(ze, "method");
              Zr = Yr ? Yr.toLowerCase() : "get", Wr = ee(ze, "action");
            }
            Jr.forEach(function(Gr) {
              ht(ze, function(Kr, en) {
                if (v(Kr, Q.config.disableSelector)) {
                  m(Kr);
                  return;
                }
                he(Zr, Wr, Kr, en);
              }, Qr, Gr, !0);
            });
          }
        }
        function ut(ze, Qr) {
          return !!((ze.type === "submit" || ze.type === "click") && (Qr.tagName === "FORM" || h(Qr, 'input[type="submit"], button') && v(Qr, "form") !== null || Qr.tagName === "A" && Qr.href && (Qr.getAttribute("href") === "#" || Qr.getAttribute("href").indexOf("#") !== 0)));
        }
        function ft(ze, Qr) {
          return ae(ze).boosted && ze.tagName === "A" && Qr.type === "click" && (Qr.ctrlKey || Qr.metaKey);
        }
        function ct(ze, Qr, Jr) {
          var Zr = ze.eventFilter;
          if (Zr)
            try {
              return Zr.call(Qr, Jr) !== !0;
            } catch (Wr) {
              return fe(re().body, "htmx:eventFilter:error", { error: Wr, source: Zr.source }), !0;
            }
          return !1;
        }
        function ht(ze, Qr, Jr, Zr, Wr) {
          var Yr = ae(ze), Gr;
          Zr.from ? Gr = Z(ze, Zr.from) : Gr = [ze], Zr.changed && Gr.forEach(function(Kr) {
            var en = ae(Kr);
            en.lastValue = Kr.value;
          }), oe(Gr, function(Kr) {
            var en = function(tn) {
              if (!se(ze)) {
                Kr.removeEventListener(Zr.trigger, en);
                return;
              }
              if (!ft(ze, tn) && ((Wr || ut(tn, ze)) && tn.preventDefault(), !ct(Zr, ze, tn))) {
                var rn = ae(tn);
                if (rn.triggerSpec = Zr, rn.handledFor == null && (rn.handledFor = []), rn.handledFor.indexOf(ze) < 0) {
                  if (rn.handledFor.push(ze), Zr.consume && tn.stopPropagation(), Zr.target && tn.target && !h(tn.target, Zr.target))
                    return;
                  if (Zr.once) {
                    if (Yr.triggeredOnce)
                      return;
                    Yr.triggeredOnce = !0;
                  }
                  if (Zr.changed) {
                    var nn = ae(Kr);
                    if (nn.lastValue === Kr.value)
                      return;
                    nn.lastValue = Kr.value;
                  }
                  if (Yr.delayed && clearTimeout(Yr.delayed), Yr.throttle)
                    return;
                  Zr.throttle > 0 ? Yr.throttle || (Qr(ze, tn), Yr.throttle = setTimeout(function() {
                    Yr.throttle = null;
                  }, Zr.throttle)) : Zr.delay > 0 ? Yr.delayed = setTimeout(function() {
                    Qr(ze, tn);
                  }, Zr.delay) : (ce(ze, "htmx:trigger"), Qr(ze, tn));
                }
              }
            };
            Jr.listenerInfos == null && (Jr.listenerInfos = []), Jr.listenerInfos.push({ trigger: Zr.trigger, listener: en, on: Kr }), Kr.addEventListener(Zr.trigger, en);
          });
        }
        var vt = !1, dt = null;
        function gt() {
          dt || (dt = function() {
            vt = !0;
          }, window.addEventListener("scroll", dt), setInterval(function() {
            vt && (vt = !1, oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(ze) {
              pt(ze);
            }));
          }, 200));
        }
        function pt(ze) {
          if (!o(ze, "data-hx-revealed") && X(ze)) {
            ze.setAttribute("data-hx-revealed", "true");
            var Qr = ae(ze);
            Qr.initHash ? ce(ze, "revealed") : ze.addEventListener("htmx:afterProcessNode", function(Jr) {
              ce(ze, "revealed");
            }, { once: !0 });
          }
        }
        function mt(ze, Qr, Jr) {
          for (var Zr = D(Jr), Wr = 0; Wr < Zr.length; Wr++) {
            var Yr = Zr[Wr].split(/:(.+)/);
            Yr[0] === "connect" && xt(ze, Yr[1], 0), Yr[0] === "send" && bt(ze);
          }
        }
        function xt(ze, Qr, Jr) {
          if (se(ze)) {
            if (Qr.indexOf("/") == 0) {
              var Zr = location.hostname + (location.port ? ":" + location.port : "");
              location.protocol == "https:" ? Qr = "wss://" + Zr + Qr : location.protocol == "http:" && (Qr = "ws://" + Zr + Qr);
            }
            var Wr = Q.createWebSocket(Qr);
            Wr.onerror = function(Yr) {
              fe(ze, "htmx:wsError", { error: Yr, socket: Wr }), yt(ze);
            }, Wr.onclose = function(Yr) {
              if ([1006, 1012, 1013].indexOf(Yr.code) >= 0) {
                var Gr = wt(Jr);
                setTimeout(function() {
                  xt(ze, Qr, Jr + 1);
                }, Gr);
              }
            }, Wr.onopen = function(Yr) {
              Jr = 0;
            }, ae(ze).webSocket = Wr, Wr.addEventListener("message", function(Yr) {
              if (!yt(ze)) {
                var Gr = Yr.data;
                R(ze, function(on) {
                  Gr = on.transformResponse(Gr, null, ze);
                });
                for (var Kr = T(ze), en = l(Gr), tn = M(en.children), rn = 0; rn < tn.length; rn++) {
                  var nn = tn[rn];
                  Ee(te(nn, "hx-swap-oob") || "true", nn, Kr);
                }
                nr(Kr.tasks);
              }
            });
          }
        }
        function yt(ze) {
          if (!se(ze))
            return ae(ze).webSocket.close(), !0;
        }
        function bt(ze) {
          var Qr = c(ze, function(Jr) {
            return ae(Jr).webSocket != null;
          });
          Qr ? ze.addEventListener(it(ze)[0].trigger, function(Jr) {
            var Zr = ae(Qr).webSocket, Wr = xr(ze, Qr), Yr = dr(ze, "post"), Gr = Yr.errors, Kr = Yr.values, en = Hr(ze), tn = le(Kr, en), rn = yr(tn, ze);
            if (rn.HEADERS = Wr, Gr && Gr.length > 0) {
              ce(ze, "htmx:validation:halted", Gr);
              return;
            }
            Zr.send(JSON.stringify(rn)), ut(Jr, ze) && Jr.preventDefault();
          }) : fe(ze, "htmx:noWebSocketSourceError");
        }
        function wt(ze) {
          var Qr = Q.config.wsReconnectDelay;
          if (typeof Qr == "function")
            return Qr(ze);
          if (Qr === "full-jitter") {
            var Jr = Math.min(ze, 6), Zr = 1e3 * Math.pow(2, Jr);
            return Zr * Math.random();
          }
          b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
        }
        function St(ze, Qr, Jr) {
          for (var Zr = D(Jr), Wr = 0; Wr < Zr.length; Wr++) {
            var Yr = Zr[Wr].split(/:(.+)/);
            Yr[0] === "connect" && Et(ze, Yr[1]), Yr[0] === "swap" && Ct(ze, Yr[1]);
          }
        }
        function Et(ze, Qr) {
          var Jr = Q.createEventSource(Qr);
          Jr.onerror = function(Zr) {
            fe(ze, "htmx:sseError", { error: Zr, source: Jr }), Tt(ze);
          }, ae(ze).sseEventSource = Jr;
        }
        function Ct(ze, Qr) {
          var Jr = c(ze, Ot);
          if (Jr) {
            var Zr = ae(Jr).sseEventSource, Wr = function(Yr) {
              if (!Tt(Jr)) {
                if (!se(ze)) {
                  Zr.removeEventListener(Qr, Wr);
                  return;
                }
                var Gr = Yr.data;
                R(ze, function(rn) {
                  Gr = rn.transformResponse(Gr, null, ze);
                });
                var Kr = wr(ze), en = ye(ze), tn = T(ze);
                je(Kr.swapStyle, en, ze, Gr, tn), nr(tn.tasks), ce(ze, "htmx:sseMessage", Yr);
              }
            };
            ae(ze).sseListener = Wr, Zr.addEventListener(Qr, Wr);
          } else
            fe(ze, "htmx:noSSESourceError");
        }
        function Rt(ze, Qr, Jr) {
          var Zr = c(ze, Ot);
          if (Zr) {
            var Wr = ae(Zr).sseEventSource, Yr = function() {
              Tt(Zr) || (se(ze) ? Qr(ze) : Wr.removeEventListener(Jr, Yr));
            };
            ae(ze).sseListener = Yr, Wr.addEventListener(Jr, Yr);
          } else
            fe(ze, "htmx:noSSESourceError");
        }
        function Tt(ze) {
          if (!se(ze))
            return ae(ze).sseEventSource.close(), !0;
        }
        function Ot(ze) {
          return ae(ze).sseEventSource != null;
        }
        function qt(ze, Qr, Jr, Zr) {
          var Wr = function() {
            Jr.loaded || (Jr.loaded = !0, Qr(ze));
          };
          Zr > 0 ? setTimeout(Wr, Zr) : Wr();
        }
        function Ht(ze, Qr, Jr) {
          var Zr = !1;
          return oe(w, function(Wr) {
            if (o(ze, "hx-" + Wr)) {
              var Yr = te(ze, "hx-" + Wr);
              Zr = !0, Qr.path = Yr, Qr.verb = Wr, Jr.forEach(function(Gr) {
                Lt(ze, Gr, Qr, function(Kr, en) {
                  if (v(Kr, Q.config.disableSelector)) {
                    m(Kr);
                    return;
                  }
                  he(Wr, Yr, Kr, en);
                });
              });
            }
          }), Zr;
        }
        function Lt(ze, Qr, Jr, Zr) {
          if (Qr.sseEvent)
            Rt(ze, Zr, Qr.sseEvent);
          else if (Qr.trigger === "revealed")
            gt(), ht(ze, Zr, Jr, Qr), pt(ze);
          else if (Qr.trigger === "intersect") {
            var Wr = {};
            Qr.root && (Wr.root = ue(ze, Qr.root)), Qr.threshold && (Wr.threshold = parseFloat(Qr.threshold));
            var Yr = new IntersectionObserver(function(Gr) {
              for (var Kr = 0; Kr < Gr.length; Kr++) {
                var en = Gr[Kr];
                if (en.isIntersecting) {
                  ce(ze, "intersect");
                  break;
                }
              }
            }, Wr);
            Yr.observe(ze), ht(ze, Zr, Jr, Qr);
          } else Qr.trigger === "load" ? ct(Qr, ze, Wt("load", { elt: ze })) || qt(ze, Zr, Jr, Qr.delay) : Qr.pollInterval > 0 ? (Jr.polling = !0, ot(ze, Zr, Qr)) : ht(ze, Zr, Jr, Qr);
        }
        function At(ze) {
          if (!ze.htmxExecuted && Q.config.allowScriptTags && (ze.type === "text/javascript" || ze.type === "module" || ze.type === "")) {
            var Qr = re().createElement("script");
            oe(ze.attributes, function(Zr) {
              Qr.setAttribute(Zr.name, Zr.value);
            }), Qr.textContent = ze.textContent, Qr.async = !1, Q.config.inlineScriptNonce && (Qr.nonce = Q.config.inlineScriptNonce);
            var Jr = ze.parentElement;
            try {
              Jr.insertBefore(Qr, ze);
            } catch (Zr) {
              b(Zr);
            } finally {
              ze.parentElement && ze.parentElement.removeChild(ze);
            }
          }
        }
        function Nt(ze) {
          h(ze, "script") && At(ze), oe(f(ze, "script"), function(Qr) {
            At(Qr);
          });
        }
        function It(ze) {
          var Qr = ze.attributes;
          if (!Qr)
            return !1;
          for (var Jr = 0; Jr < Qr.length; Jr++) {
            var Zr = Qr[Jr].name;
            if (g(Zr, "hx-on:") || g(Zr, "data-hx-on:") || g(Zr, "hx-on-") || g(Zr, "data-hx-on-"))
              return !0;
          }
          return !1;
        }
        function kt(ze) {
          var Qr = null, Jr = [];
          if (It(ze) && Jr.push(ze), document.evaluate)
            for (var Zr = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', ze); Qr = Zr.iterateNext(); ) Jr.push(Qr);
          else if (typeof ze.getElementsByTagName == "function")
            for (var Wr = ze.getElementsByTagName("*"), Yr = 0; Yr < Wr.length; Yr++)
              It(Wr[Yr]) && Jr.push(Wr[Yr]);
          return Jr;
        }
        function Pt(ze) {
          if (ze.querySelectorAll) {
            var Qr = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]", Jr = ze.querySelectorAll(i + Qr + ", form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]");
            return Jr;
          } else
            return [];
        }
        function Mt(ze) {
          var Qr = v(ze.target, "button, input[type='submit']"), Jr = Dt(ze);
          Jr && (Jr.lastButtonClicked = Qr);
        }
        function Xt(ze) {
          var Qr = Dt(ze);
          Qr && (Qr.lastButtonClicked = null);
        }
        function Dt(ze) {
          var Qr = v(ze.target, "button, input[type='submit']");
          if (Qr) {
            var Jr = p("#" + ee(Qr, "form")) || v(Qr, "form");
            if (Jr)
              return ae(Jr);
          }
        }
        function Ut(ze) {
          ze.addEventListener("click", Mt), ze.addEventListener("focusin", Mt), ze.addEventListener("focusout", Xt);
        }
        function Bt(ze) {
          for (var Qr = Ye(ze), Jr = 0, Zr = 0; Zr < Qr.length; Zr++) {
            const Wr = Qr[Zr];
            Wr === "{" ? Jr++ : Wr === "}" && Jr--;
          }
          return Jr;
        }
        function Ft(ze, Qr, Jr) {
          var Zr = ae(ze);
          Array.isArray(Zr.onHandlers) || (Zr.onHandlers = []);
          var Wr, Yr = function(Gr) {
            return Tr(ze, function() {
              Wr || (Wr = new Function("event", Jr)), Wr.call(ze, Gr);
            });
          };
          ze.addEventListener(Qr, Yr), Zr.onHandlers.push({ event: Qr, listener: Yr });
        }
        function Vt(ze) {
          var Qr = te(ze, "hx-on");
          if (Qr) {
            for (var Jr = {}, Zr = Qr.split(`
`), Wr = null, Yr = 0; Zr.length > 0; ) {
              var Gr = Zr.shift(), Kr = Gr.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
              Yr === 0 && Kr ? (Gr.split(":"), Wr = Kr[1].slice(0, -1), Jr[Wr] = Kr[2]) : Jr[Wr] += Gr, Yr += Bt(Gr);
            }
            for (var en in Jr)
              Ft(ze, en, Jr[en]);
          }
        }
        function jt(ze) {
          Ae(ze);
          for (var Qr = 0; Qr < ze.attributes.length; Qr++) {
            var Jr = ze.attributes[Qr].name, Zr = ze.attributes[Qr].value;
            if (g(Jr, "hx-on") || g(Jr, "data-hx-on")) {
              var Wr = Jr.indexOf("-on") + 3, Yr = Jr.slice(Wr, Wr + 1);
              if (Yr === "-" || Yr === ":") {
                var Gr = Jr.slice(Wr + 1);
                g(Gr, ":") ? Gr = "htmx" + Gr : g(Gr, "-") ? Gr = "htmx:" + Gr.slice(1) : g(Gr, "htmx-") && (Gr = "htmx:" + Gr.slice(5)), Ft(ze, Gr, Zr);
              }
            }
          }
        }
        function _t(ze) {
          if (v(ze, Q.config.disableSelector)) {
            m(ze);
            return;
          }
          var Qr = ae(ze);
          if (Qr.initHash !== Le(ze)) {
            Ne(ze), Qr.initHash = Le(ze), Vt(ze), ce(ze, "htmx:beforeProcessNode"), ze.value && (Qr.lastValue = ze.value);
            var Jr = it(ze), Zr = Ht(ze, Qr, Jr);
            Zr || (ne(ze, "hx-boost") === "true" ? lt(ze, Qr, Jr) : o(ze, "hx-trigger") && Jr.forEach(function(Gr) {
              Lt(ze, Gr, Qr, function() {
              });
            })), (ze.tagName === "FORM" || ee(ze, "type") === "submit" && o(ze, "form")) && Ut(ze);
            var Wr = te(ze, "hx-sse");
            Wr && St(ze, Qr, Wr);
            var Yr = te(ze, "hx-ws");
            Yr && mt(ze, Qr, Yr), ce(ze, "htmx:afterProcessNode");
          }
        }
        function zt(ze) {
          if (ze = p(ze), v(ze, Q.config.disableSelector)) {
            m(ze);
            return;
          }
          _t(ze), oe(Pt(ze), function(Qr) {
            _t(Qr);
          }), oe(kt(ze), jt);
        }
        function $t(ze) {
          return ze.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function Wt(ze, Qr) {
          var Jr;
          return window.CustomEvent && typeof window.CustomEvent == "function" ? Jr = new CustomEvent(ze, { bubbles: !0, cancelable: !0, detail: Qr }) : (Jr = re().createEvent("CustomEvent"), Jr.initCustomEvent(ze, !0, !0, Qr)), Jr;
        }
        function fe(ze, Qr, Jr) {
          ce(ze, Qr, le({ error: Qr }, Jr));
        }
        function Gt(ze) {
          return ze === "htmx:afterProcessNode";
        }
        function R(ze, Qr) {
          oe(Fr(ze), function(Jr) {
            try {
              Qr(Jr);
            } catch (Zr) {
              b(Zr);
            }
          });
        }
        function b(ze) {
          console.error ? console.error(ze) : console.log && console.log("ERROR: ", ze);
        }
        function ce(ze, Qr, Jr) {
          ze = p(ze), Jr == null && (Jr = {}), Jr.elt = ze;
          var Zr = Wt(Qr, Jr);
          Q.logger && !Gt(Qr) && Q.logger(ze, Qr, Jr), Jr.error && (b(Jr.error), ce(ze, "htmx:error", { errorInfo: Jr }));
          var Wr = ze.dispatchEvent(Zr), Yr = $t(Qr);
          if (Wr && Yr !== Qr) {
            var Gr = Wt(Yr, Zr.detail);
            Wr = Wr && ze.dispatchEvent(Gr);
          }
          return R(ze, function(Kr) {
            Wr = Wr && Kr.onEvent(Qr, Zr) !== !1 && !Zr.defaultPrevented;
          }), Wr;
        }
        var Jt = location.pathname + location.search;
        function Zt() {
          var ze = re().querySelector("[hx-history-elt],[data-hx-history-elt]");
          return ze || re().body;
        }
        function Kt(ze, Qr, Jr, Zr) {
          if (U()) {
            if (Q.config.historyCacheSize <= 0) {
              localStorage.removeItem("htmx-history-cache");
              return;
            }
            ze = B(ze);
            for (var Wr = E(localStorage.getItem("htmx-history-cache")) || [], Yr = 0; Yr < Wr.length; Yr++)
              if (Wr[Yr].url === ze) {
                Wr.splice(Yr, 1);
                break;
              }
            var Gr = { url: ze, content: Qr, title: Jr, scroll: Zr };
            for (ce(re().body, "htmx:historyItemCreated", { item: Gr, cache: Wr }), Wr.push(Gr); Wr.length > Q.config.historyCacheSize; )
              Wr.shift();
            for (; Wr.length > 0; )
              try {
                localStorage.setItem("htmx-history-cache", JSON.stringify(Wr));
                break;
              } catch (Kr) {
                fe(re().body, "htmx:historyCacheError", { cause: Kr, cache: Wr }), Wr.shift();
              }
          }
        }
        function Yt(ze) {
          if (!U())
            return null;
          ze = B(ze);
          for (var Qr = E(localStorage.getItem("htmx-history-cache")) || [], Jr = 0; Jr < Qr.length; Jr++)
            if (Qr[Jr].url === ze)
              return Qr[Jr];
          return null;
        }
        function Qt(ze) {
          var Qr = Q.config.requestClass, Jr = ze.cloneNode(!0);
          return oe(f(Jr, "." + Qr), function(Zr) {
            n(Zr, Qr);
          }), Jr.innerHTML;
        }
        function er() {
          var ze = Zt(), Qr = Jt || location.pathname + location.search, Jr;
          try {
            Jr = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
          } catch {
            Jr = re().querySelector('[hx-history="false"],[data-hx-history="false"]');
          }
          Jr || (ce(re().body, "htmx:beforeHistorySave", { path: Qr, historyElt: ze }), Kt(Qr, Qt(ze), re().title, window.scrollY)), Q.config.historyEnabled && history.replaceState({ htmx: !0 }, re().title, window.location.href);
        }
        function tr(ze) {
          Q.config.getCacheBusterParam && (ze = ze.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""), (G(ze, "&") || G(ze, "?")) && (ze = ze.slice(0, -1))), Q.config.historyEnabled && history.pushState({ htmx: !0 }, "", ze), Jt = ze;
        }
        function rr(ze) {
          Q.config.historyEnabled && history.replaceState({ htmx: !0 }, "", ze), Jt = ze;
        }
        function nr(ze) {
          oe(ze, function(Qr) {
            Qr.call();
          });
        }
        function ir(ze) {
          var Qr = new XMLHttpRequest(), Jr = { path: ze, xhr: Qr };
          ce(re().body, "htmx:historyCacheMiss", Jr), Qr.open("GET", ze, !0), Qr.setRequestHeader("HX-Request", "true"), Qr.setRequestHeader("HX-History-Restore-Request", "true"), Qr.setRequestHeader("HX-Current-URL", re().location.href), Qr.onload = function() {
            if (this.status >= 200 && this.status < 400) {
              ce(re().body, "htmx:historyCacheMissLoad", Jr);
              var Zr = l(this.response);
              Zr = Zr.querySelector("[hx-history-elt],[data-hx-history-elt]") || Zr;
              var Wr = Zt(), Yr = T(Wr), Gr = Ve(this.response);
              if (Gr) {
                var Kr = C("title");
                Kr ? Kr.innerHTML = Gr : window.document.title = Gr;
              }
              Ue(Wr, Zr, Yr), nr(Yr.tasks), Jt = ze, ce(re().body, "htmx:historyRestore", { path: ze, cacheMiss: !0, serverResponse: this.response });
            } else
              fe(re().body, "htmx:historyCacheMissLoadError", Jr);
          }, Qr.send();
        }
        function ar(ze) {
          er(), ze = ze || location.pathname + location.search;
          var Qr = Yt(ze);
          if (Qr) {
            var Jr = l(Qr.content), Zr = Zt(), Wr = T(Zr);
            Ue(Zr, Jr, Wr), nr(Wr.tasks), document.title = Qr.title, setTimeout(function() {
              window.scrollTo(0, Qr.scroll);
            }, 0), Jt = ze, ce(re().body, "htmx:historyRestore", { path: ze, item: Qr });
          } else
            Q.config.refreshOnHistoryMiss ? window.location.reload(!0) : ir(ze);
        }
        function or(ze) {
          var Qr = me(ze, "hx-indicator");
          return Qr == null && (Qr = [ze]), oe(Qr, function(Jr) {
            var Zr = ae(Jr);
            Zr.requestCount = (Zr.requestCount || 0) + 1, Jr.classList.add.call(Jr.classList, Q.config.requestClass);
          }), Qr;
        }
        function sr(ze) {
          var Qr = me(ze, "hx-disabled-elt");
          return Qr == null && (Qr = []), oe(Qr, function(Jr) {
            var Zr = ae(Jr);
            Zr.requestCount = (Zr.requestCount || 0) + 1, Jr.setAttribute("disabled", "");
          }), Qr;
        }
        function lr(ze, Qr) {
          oe(ze, function(Jr) {
            var Zr = ae(Jr);
            Zr.requestCount = (Zr.requestCount || 0) - 1, Zr.requestCount === 0 && Jr.classList.remove.call(Jr.classList, Q.config.requestClass);
          }), oe(Qr, function(Jr) {
            var Zr = ae(Jr);
            Zr.requestCount = (Zr.requestCount || 0) - 1, Zr.requestCount === 0 && Jr.removeAttribute("disabled");
          });
        }
        function ur(ze, Qr) {
          for (var Jr = 0; Jr < ze.length; Jr++) {
            var Zr = ze[Jr];
            if (Zr.isSameNode(Qr))
              return !0;
          }
          return !1;
        }
        function fr(ze) {
          return ze.name === "" || ze.name == null || ze.disabled || v(ze, "fieldset[disabled]") || ze.type === "button" || ze.type === "submit" || ze.tagName === "image" || ze.tagName === "reset" || ze.tagName === "file" ? !1 : ze.type === "checkbox" || ze.type === "radio" ? ze.checked : !0;
        }
        function cr(ze, Qr, Jr) {
          if (ze != null && Qr != null) {
            var Zr = Jr[ze];
            Zr === void 0 ? Jr[ze] = Qr : Array.isArray(Zr) ? Array.isArray(Qr) ? Jr[ze] = Zr.concat(Qr) : Zr.push(Qr) : Array.isArray(Qr) ? Jr[ze] = [Zr].concat(Qr) : Jr[ze] = [Zr, Qr];
          }
        }
        function hr(ze, Qr, Jr, Zr, Wr) {
          if (!(Zr == null || ur(ze, Zr))) {
            if (ze.push(Zr), fr(Zr)) {
              var Yr = ee(Zr, "name"), Gr = Zr.value;
              Zr.multiple && Zr.tagName === "SELECT" && (Gr = M(Zr.querySelectorAll("option:checked")).map(function(en) {
                return en.value;
              })), Zr.files && (Gr = M(Zr.files)), cr(Yr, Gr, Qr), Wr && vr(Zr, Jr);
            }
            if (h(Zr, "form")) {
              var Kr = Zr.elements;
              oe(Kr, function(en) {
                hr(ze, Qr, Jr, en, Wr);
              });
            }
          }
        }
        function vr(ze, Qr) {
          ze.willValidate && (ce(ze, "htmx:validation:validate"), ze.checkValidity() || (Qr.push({ elt: ze, message: ze.validationMessage, validity: ze.validity }), ce(ze, "htmx:validation:failed", { message: ze.validationMessage, validity: ze.validity })));
        }
        function dr(ze, Qr) {
          var Jr = [], Zr = {}, Wr = {}, Yr = [], Gr = ae(ze);
          Gr.lastButtonClicked && !se(Gr.lastButtonClicked) && (Gr.lastButtonClicked = null);
          var Kr = h(ze, "form") && ze.noValidate !== !0 || te(ze, "hx-validate") === "true";
          if (Gr.lastButtonClicked && (Kr = Kr && Gr.lastButtonClicked.formNoValidate !== !0), Qr !== "get" && hr(Jr, Wr, Yr, v(ze, "form"), Kr), hr(Jr, Zr, Yr, ze, Kr), Gr.lastButtonClicked || ze.tagName === "BUTTON" || ze.tagName === "INPUT" && ee(ze, "type") === "submit") {
            var en = Gr.lastButtonClicked || ze, tn = ee(en, "name");
            cr(tn, en.value, Wr);
          }
          var rn = me(ze, "hx-include");
          return oe(rn, function(nn) {
            hr(Jr, Zr, Yr, nn, Kr), h(nn, "form") || oe(nn.querySelectorAll(rt), function(on) {
              hr(Jr, Zr, Yr, on, Kr);
            });
          }), Zr = le(Zr, Wr), { errors: Yr, values: Zr };
        }
        function gr(ze, Qr, Jr) {
          ze !== "" && (ze += "&"), String(Jr) === "[object Object]" && (Jr = JSON.stringify(Jr));
          var Zr = encodeURIComponent(Jr);
          return ze += encodeURIComponent(Qr) + "=" + Zr, ze;
        }
        function pr(ze) {
          var Qr = "";
          for (var Jr in ze)
            if (ze.hasOwnProperty(Jr)) {
              var Zr = ze[Jr];
              Array.isArray(Zr) ? oe(Zr, function(Wr) {
                Qr = gr(Qr, Jr, Wr);
              }) : Qr = gr(Qr, Jr, Zr);
            }
          return Qr;
        }
        function mr(ze) {
          var Qr = new FormData();
          for (var Jr in ze)
            if (ze.hasOwnProperty(Jr)) {
              var Zr = ze[Jr];
              Array.isArray(Zr) ? oe(Zr, function(Wr) {
                Qr.append(Jr, Wr);
              }) : Qr.append(Jr, Zr);
            }
          return Qr;
        }
        function xr(ze, Qr, Jr) {
          var Zr = { "HX-Request": "true", "HX-Trigger": ee(ze, "id"), "HX-Trigger-Name": ee(ze, "name"), "HX-Target": te(Qr, "id"), "HX-Current-URL": re().location.href };
          return Rr(ze, "hx-headers", !1, Zr), Jr !== void 0 && (Zr["HX-Prompt"] = Jr), ae(ze).boosted && (Zr["HX-Boosted"] = "true"), Zr;
        }
        function yr(ze, Qr) {
          var Jr = ne(Qr, "hx-params");
          if (Jr) {
            if (Jr === "none")
              return {};
            if (Jr === "*")
              return ze;
            if (Jr.indexOf("not ") === 0)
              return oe(Jr.substr(4).split(","), function(Wr) {
                Wr = Wr.trim(), delete ze[Wr];
              }), ze;
            var Zr = {};
            return oe(Jr.split(","), function(Wr) {
              Wr = Wr.trim(), Zr[Wr] = ze[Wr];
            }), Zr;
          } else
            return ze;
        }
        function br(ze) {
          return ee(ze, "href") && ee(ze, "href").indexOf("#") >= 0;
        }
        function wr(ze, Qr) {
          var Jr = Qr || ne(ze, "hx-swap"), Zr = { swapStyle: ae(ze).boosted ? "innerHTML" : Q.config.defaultSwapStyle, swapDelay: Q.config.defaultSwapDelay, settleDelay: Q.config.defaultSettleDelay };
          if (Q.config.scrollIntoViewOnBoost && ae(ze).boosted && !br(ze) && (Zr.show = "top"), Jr) {
            var Wr = D(Jr);
            if (Wr.length > 0)
              for (var Yr = 0; Yr < Wr.length; Yr++) {
                var Gr = Wr[Yr];
                if (Gr.indexOf("swap:") === 0)
                  Zr.swapDelay = d(Gr.substr(5));
                else if (Gr.indexOf("settle:") === 0)
                  Zr.settleDelay = d(Gr.substr(7));
                else if (Gr.indexOf("transition:") === 0)
                  Zr.transition = Gr.substr(11) === "true";
                else if (Gr.indexOf("ignoreTitle:") === 0)
                  Zr.ignoreTitle = Gr.substr(12) === "true";
                else if (Gr.indexOf("scroll:") === 0) {
                  var Kr = Gr.substr(7), en = Kr.split(":"), tn = en.pop(), rn = en.length > 0 ? en.join(":") : null;
                  Zr.scroll = tn, Zr.scrollTarget = rn;
                } else if (Gr.indexOf("show:") === 0) {
                  var nn = Gr.substr(5), en = nn.split(":"), on = en.pop(), rn = en.length > 0 ? en.join(":") : null;
                  Zr.show = on, Zr.showTarget = rn;
                } else if (Gr.indexOf("focus-scroll:") === 0) {
                  var gn = Gr.substr(13);
                  Zr.focusScroll = gn == "true";
                } else Yr == 0 ? Zr.swapStyle = Gr : b("Unknown modifier in hx-swap: " + Gr);
              }
          }
          return Zr;
        }
        function Sr(ze) {
          return ne(ze, "hx-encoding") === "multipart/form-data" || h(ze, "form") && ee(ze, "enctype") === "multipart/form-data";
        }
        function Er(ze, Qr, Jr) {
          var Zr = null;
          return R(Qr, function(Wr) {
            Zr == null && (Zr = Wr.encodeParameters(ze, Jr, Qr));
          }), Zr ?? (Sr(Qr) ? mr(Jr) : pr(Jr));
        }
        function T(ze) {
          return { tasks: [], elts: [ze] };
        }
        function Cr(ze, Qr) {
          var Jr = ze[0], Zr = ze[ze.length - 1];
          if (Qr.scroll) {
            var Wr = null;
            Qr.scrollTarget && (Wr = ue(Jr, Qr.scrollTarget)), Qr.scroll === "top" && (Jr || Wr) && (Wr = Wr || Jr, Wr.scrollTop = 0), Qr.scroll === "bottom" && (Zr || Wr) && (Wr = Wr || Zr, Wr.scrollTop = Wr.scrollHeight);
          }
          if (Qr.show) {
            var Wr = null;
            if (Qr.showTarget) {
              var Yr = Qr.showTarget;
              Qr.showTarget === "window" && (Yr = "body"), Wr = ue(Jr, Yr);
            }
            Qr.show === "top" && (Jr || Wr) && (Wr = Wr || Jr, Wr.scrollIntoView({ block: "start", behavior: Q.config.scrollBehavior })), Qr.show === "bottom" && (Zr || Wr) && (Wr = Wr || Zr, Wr.scrollIntoView({ block: "end", behavior: Q.config.scrollBehavior }));
          }
        }
        function Rr(ze, Qr, Jr, Zr) {
          if (Zr == null && (Zr = {}), ze == null)
            return Zr;
          var Wr = te(ze, Qr);
          if (Wr) {
            var Yr = Wr.trim(), Gr = Jr;
            if (Yr === "unset")
              return null;
            Yr.indexOf("javascript:") === 0 ? (Yr = Yr.substr(11), Gr = !0) : Yr.indexOf("js:") === 0 && (Yr = Yr.substr(3), Gr = !0), Yr.indexOf("{") !== 0 && (Yr = "{" + Yr + "}");
            var Kr;
            Gr ? Kr = Tr(ze, function() {
              return Function("return (" + Yr + ")")();
            }, {}) : Kr = E(Yr);
            for (var en in Kr)
              Kr.hasOwnProperty(en) && Zr[en] == null && (Zr[en] = Kr[en]);
          }
          return Rr(u(ze), Qr, Jr, Zr);
        }
        function Tr(ze, Qr, Jr) {
          return Q.config.allowEval ? Qr() : (fe(ze, "htmx:evalDisallowedError"), Jr);
        }
        function Or(ze, Qr) {
          return Rr(ze, "hx-vars", !0, Qr);
        }
        function qr(ze, Qr) {
          return Rr(ze, "hx-vals", !1, Qr);
        }
        function Hr(ze) {
          return le(Or(ze), qr(ze));
        }
        function Lr(ze, Qr, Jr) {
          if (Jr !== null)
            try {
              ze.setRequestHeader(Qr, Jr);
            } catch {
              ze.setRequestHeader(Qr, encodeURIComponent(Jr)), ze.setRequestHeader(Qr + "-URI-AutoEncoded", "true");
            }
        }
        function Ar(ze) {
          if (ze.responseURL && typeof URL < "u")
            try {
              var Qr = new URL(ze.responseURL);
              return Qr.pathname + Qr.search;
            } catch {
              fe(re().body, "htmx:badResponseUrl", { url: ze.responseURL });
            }
        }
        function O(ze, Qr) {
          return Qr.test(ze.getAllResponseHeaders());
        }
        function Nr(ze, Qr, Jr) {
          return ze = ze.toLowerCase(), Jr ? Jr instanceof Element || I(Jr, "String") ? he(ze, Qr, null, null, { targetOverride: p(Jr), returnPromise: !0 }) : he(ze, Qr, p(Jr.source), Jr.event, { handler: Jr.handler, headers: Jr.headers, values: Jr.values, targetOverride: p(Jr.target), swapOverride: Jr.swap, select: Jr.select, returnPromise: !0 }) : he(ze, Qr, null, null, { returnPromise: !0 });
        }
        function Ir(ze) {
          for (var Qr = []; ze; )
            Qr.push(ze), ze = ze.parentElement;
          return Qr;
        }
        function kr(ze, Qr, Jr) {
          var Zr, Wr;
          if (typeof URL == "function") {
            Wr = new URL(Qr, document.location.href);
            var Yr = document.location.origin;
            Zr = Yr === Wr.origin;
          } else
            Wr = Qr, Zr = g(Qr, document.location.origin);
          return Q.config.selfRequestsOnly && !Zr ? !1 : ce(ze, "htmx:validateUrl", le({ url: Wr, sameHost: Zr }, Jr));
        }
        function he(ze, Qr, Jr, Zr, Wr, Yr) {
          var Gr = null, Kr = null;
          if (Wr = Wr ?? {}, Wr.returnPromise && typeof Promise < "u")
            var en = new Promise(function(vn, wn) {
              Gr = vn, Kr = wn;
            });
          Jr == null && (Jr = re().body);
          var tn = Wr.handler || Mr, rn = Wr.select || null;
          if (!se(Jr))
            return ie(Gr), en;
          var nn = Wr.targetOverride || ye(Jr);
          if (nn == null || nn == pe)
            return fe(Jr, "htmx:targetError", { target: te(Jr, "hx-target") }), ie(Kr), en;
          var on = ae(Jr), gn = on.lastButtonClicked;
          if (gn) {
            var xn = ee(gn, "formaction");
            xn != null && (Qr = xn);
            var Cn = ee(gn, "formmethod");
            Cn != null && Cn.toLowerCase() !== "dialog" && (ze = Cn);
          }
          var Rn = ne(Jr, "hx-confirm");
          if (Yr === void 0) {
            var In = function(vn) {
              return he(ze, Qr, Jr, Zr, Wr, !!vn);
            }, On = { target: nn, elt: Jr, path: Qr, verb: ze, triggeringEvent: Zr, etc: Wr, issueRequest: In, question: Rn };
            if (ce(Jr, "htmx:confirm", On) === !1)
              return ie(Gr), en;
          }
          var Sn = Jr, mn = ne(Jr, "hx-sync"), pn = null, Fn = !1;
          if (mn) {
            var hn = mn.split(":"), un = hn[0].trim();
            if (un === "this" ? Sn = xe(Jr, "hx-sync") : Sn = ue(Jr, un), mn = (hn[1] || "drop").trim(), on = ae(Sn), mn === "drop" && on.xhr && on.abortable !== !0)
              return ie(Gr), en;
            if (mn === "abort") {
              if (on.xhr)
                return ie(Gr), en;
              Fn = !0;
            } else if (mn === "replace")
              ce(Sn, "htmx:abort");
            else if (mn.indexOf("queue") === 0) {
              var Ln = mn.split(" ");
              pn = (Ln[1] || "last").trim();
            }
          }
          if (on.xhr)
            if (on.abortable)
              ce(Sn, "htmx:abort");
            else {
              if (pn == null) {
                if (Zr) {
                  var fn = ae(Zr);
                  fn && fn.triggerSpec && fn.triggerSpec.queue && (pn = fn.triggerSpec.queue);
                }
                pn == null && (pn = "last");
              }
              return on.queuedRequests == null && (on.queuedRequests = []), pn === "first" && on.queuedRequests.length === 0 ? on.queuedRequests.push(function() {
                he(ze, Qr, Jr, Zr, Wr);
              }) : pn === "all" ? on.queuedRequests.push(function() {
                he(ze, Qr, Jr, Zr, Wr);
              }) : pn === "last" && (on.queuedRequests = [], on.queuedRequests.push(function() {
                he(ze, Qr, Jr, Zr, Wr);
              })), ie(Gr), en;
            }
          var an = new XMLHttpRequest();
          on.xhr = an, on.abortable = Fn;
          var dn = function() {
            if (on.xhr = null, on.abortable = !1, on.queuedRequests != null && on.queuedRequests.length > 0) {
              var vn = on.queuedRequests.shift();
              vn();
            }
          }, An = ne(Jr, "hx-prompt");
          if (An) {
            var Tn = prompt(An);
            if (Tn === null || !ce(Jr, "htmx:prompt", { prompt: Tn, target: nn }))
              return ie(Gr), dn(), en;
          }
          if (Rn && !Yr && !confirm(Rn))
            return ie(Gr), dn(), en;
          var sn = xr(Jr, nn, Tn);
          ze !== "get" && !Sr(Jr) && (sn["Content-Type"] = "application/x-www-form-urlencoded"), Wr.headers && (sn = le(sn, Wr.headers));
          var Nn = dr(Jr, ze), En = Nn.errors, yn = Nn.values;
          Wr.values && (yn = le(yn, Wr.values));
          var Vn = Hr(Jr), Un = le(yn, Vn), qn = yr(Un, Jr);
          Q.config.getCacheBusterParam && ze === "get" && (qn["org.htmx.cache-buster"] = ee(nn, "id") || "true"), (Qr == null || Qr === "") && (Qr = re().location.href);
          var Mn = Rr(Jr, "hx-request"), _n = ae(Jr).boosted, Qn = Q.config.methodsThatUseUrlParams.indexOf(ze) >= 0, cn = { boosted: _n, useUrlParams: Qn, parameters: qn, unfilteredParameters: Un, headers: sn, target: nn, verb: ze, errors: En, withCredentials: Wr.credentials || Mn.credentials || Q.config.withCredentials, timeout: Wr.timeout || Mn.timeout || Q.config.timeout, path: Qr, triggeringEvent: Zr };
          if (!ce(Jr, "htmx:configRequest", cn))
            return ie(Gr), dn(), en;
          if (Qr = cn.path, ze = cn.verb, sn = cn.headers, qn = cn.parameters, En = cn.errors, Qn = cn.useUrlParams, En && En.length > 0)
            return ce(Jr, "htmx:validation:halted", cn), ie(Gr), dn(), en;
          var Bn = Qr.split("#"), Jn = Bn[0], Dn = Bn[1], bn = Qr;
          if (Qn) {
            bn = Jn;
            var zn = Object.keys(qn).length !== 0;
            zn && (bn.indexOf("?") < 0 ? bn += "?" : bn += "&", bn += pr(qn), Dn && (bn += "#" + Dn));
          }
          if (!kr(Jr, bn, cn))
            return fe(Jr, "htmx:invalidPath", cn), ie(Kr), en;
          if (an.open(ze.toUpperCase(), bn, !0), an.overrideMimeType("text/html"), an.withCredentials = cn.withCredentials, an.timeout = cn.timeout, !Mn.noHeaders) {
            for (var Xn in sn)
              if (sn.hasOwnProperty(Xn)) {
                var $n = sn[Xn];
                Lr(an, Xn, $n);
              }
          }
          var ln = { xhr: an, target: nn, requestConfig: cn, etc: Wr, boosted: _n, select: rn, pathInfo: { requestPath: Qr, finalRequestPath: bn, anchor: Dn } };
          if (an.onload = function() {
            try {
              var vn = Ir(Jr);
              if (ln.pathInfo.responsePath = Ar(an), tn(Jr, ln), lr(kn, Pn), ce(Jr, "htmx:afterRequest", ln), ce(Jr, "htmx:afterOnLoad", ln), !se(Jr)) {
                for (var wn = null; vn.length > 0 && wn == null; ) {
                  var Hn = vn.shift();
                  se(Hn) && (wn = Hn);
                }
                wn && (ce(wn, "htmx:afterRequest", ln), ce(wn, "htmx:afterOnLoad", ln));
              }
              ie(Gr), dn();
            } catch (jn) {
              throw fe(Jr, "htmx:onLoadError", le({ error: jn }, ln)), jn;
            }
          }, an.onerror = function() {
            lr(kn, Pn), fe(Jr, "htmx:afterRequest", ln), fe(Jr, "htmx:sendError", ln), ie(Kr), dn();
          }, an.onabort = function() {
            lr(kn, Pn), fe(Jr, "htmx:afterRequest", ln), fe(Jr, "htmx:sendAbort", ln), ie(Kr), dn();
          }, an.ontimeout = function() {
            lr(kn, Pn), fe(Jr, "htmx:afterRequest", ln), fe(Jr, "htmx:timeout", ln), ie(Kr), dn();
          }, !ce(Jr, "htmx:beforeRequest", ln))
            return ie(Gr), dn(), en;
          var kn = or(Jr), Pn = sr(Jr);
          oe(["loadstart", "loadend", "progress", "abort"], function(vn) {
            oe([an, an.upload], function(wn) {
              wn.addEventListener(vn, function(Hn) {
                ce(Jr, "htmx:xhr:" + vn, { lengthComputable: Hn.lengthComputable, loaded: Hn.loaded, total: Hn.total });
              });
            });
          }), ce(Jr, "htmx:beforeSend", ln);
          var Zn = Qn ? null : Er(an, Jr, qn);
          return an.send(Zn), en;
        }
        function Pr(ze, Qr) {
          var Jr = Qr.xhr, Zr = null, Wr = null;
          if (O(Jr, /HX-Push:/i) ? (Zr = Jr.getResponseHeader("HX-Push"), Wr = "push") : O(Jr, /HX-Push-Url:/i) ? (Zr = Jr.getResponseHeader("HX-Push-Url"), Wr = "push") : O(Jr, /HX-Replace-Url:/i) && (Zr = Jr.getResponseHeader("HX-Replace-Url"), Wr = "replace"), Zr)
            return Zr === "false" ? {} : { type: Wr, path: Zr };
          var Yr = Qr.pathInfo.finalRequestPath, Gr = Qr.pathInfo.responsePath, Kr = ne(ze, "hx-push-url"), en = ne(ze, "hx-replace-url"), tn = ae(ze).boosted, rn = null, nn = null;
          return Kr ? (rn = "push", nn = Kr) : en ? (rn = "replace", nn = en) : tn && (rn = "push", nn = Gr || Yr), nn ? nn === "false" ? {} : (nn === "true" && (nn = Gr || Yr), Qr.pathInfo.anchor && nn.indexOf("#") === -1 && (nn = nn + "#" + Qr.pathInfo.anchor), { type: rn, path: nn }) : {};
        }
        function Mr(ze, Qr) {
          var Jr = Qr.xhr, Zr = Qr.target, Wr = Qr.etc;
          Qr.requestConfig;
          var Yr = Qr.select;
          if (ce(ze, "htmx:beforeOnLoad", Qr)) {
            if (O(Jr, /HX-Trigger:/i) && _e(Jr, "HX-Trigger", ze), O(Jr, /HX-Location:/i)) {
              er();
              var Gr = Jr.getResponseHeader("HX-Location"), Kr;
              Gr.indexOf("{") === 0 && (Kr = E(Gr), Gr = Kr.path, delete Kr.path), Nr("GET", Gr, Kr).then(function() {
                tr(Gr);
              });
              return;
            }
            var en = O(Jr, /HX-Refresh:/i) && Jr.getResponseHeader("HX-Refresh") === "true";
            if (O(Jr, /HX-Redirect:/i)) {
              location.href = Jr.getResponseHeader("HX-Redirect"), en && location.reload();
              return;
            }
            if (en) {
              location.reload();
              return;
            }
            O(Jr, /HX-Retarget:/i) && (Jr.getResponseHeader("HX-Retarget") === "this" ? Qr.target = ze : Qr.target = ue(ze, Jr.getResponseHeader("HX-Retarget")));
            var tn = Pr(ze, Qr), rn = Jr.status >= 200 && Jr.status < 400 && Jr.status !== 204, nn = Jr.response, on = Jr.status >= 400, gn = Q.config.ignoreTitle, xn = le({ shouldSwap: rn, serverResponse: nn, isError: on, ignoreTitle: gn }, Qr);
            if (ce(Zr, "htmx:beforeSwap", xn)) {
              if (Zr = xn.target, nn = xn.serverResponse, on = xn.isError, gn = xn.ignoreTitle, Qr.target = Zr, Qr.failed = on, Qr.successful = !on, xn.shouldSwap) {
                Jr.status === 286 && at(ze), R(ze, function(hn) {
                  nn = hn.transformResponse(nn, Jr, ze);
                }), tn.type && er();
                var Cn = Wr.swapOverride;
                O(Jr, /HX-Reswap:/i) && (Cn = Jr.getResponseHeader("HX-Reswap"));
                var Kr = wr(ze, Cn);
                Kr.hasOwnProperty("ignoreTitle") && (gn = Kr.ignoreTitle), Zr.classList.add(Q.config.swappingClass);
                var Rn = null, In = null, On = function() {
                  try {
                    var hn = document.activeElement, un = {};
                    try {
                      un = { elt: hn, start: hn ? hn.selectionStart : null, end: hn ? hn.selectionEnd : null };
                    } catch {
                    }
                    var Ln;
                    Yr && (Ln = Yr), O(Jr, /HX-Reselect:/i) && (Ln = Jr.getResponseHeader("HX-Reselect")), tn.type && (ce(re().body, "htmx:beforeHistoryUpdate", le({ history: tn }, Qr)), tn.type === "push" ? (tr(tn.path), ce(re().body, "htmx:pushedIntoHistory", { path: tn.path })) : (rr(tn.path), ce(re().body, "htmx:replacedInHistory", { path: tn.path })));
                    var fn = T(Zr);
                    if (je(Kr.swapStyle, Zr, ze, nn, fn, Ln), un.elt && !se(un.elt) && ee(un.elt, "id")) {
                      var an = document.getElementById(ee(un.elt, "id")), dn = { preventScroll: Kr.focusScroll !== void 0 ? !Kr.focusScroll : !Q.config.defaultFocusScroll };
                      if (an) {
                        if (un.start && an.setSelectionRange)
                          try {
                            an.setSelectionRange(un.start, un.end);
                          } catch {
                          }
                        an.focus(dn);
                      }
                    }
                    if (Zr.classList.remove(Q.config.swappingClass), oe(fn.elts, function(sn) {
                      sn.classList && sn.classList.add(Q.config.settlingClass), ce(sn, "htmx:afterSwap", Qr);
                    }), O(Jr, /HX-Trigger-After-Swap:/i)) {
                      var An = ze;
                      se(ze) || (An = re().body), _e(Jr, "HX-Trigger-After-Swap", An);
                    }
                    var Tn = function() {
                      if (oe(fn.tasks, function(yn) {
                        yn.call();
                      }), oe(fn.elts, function(yn) {
                        yn.classList && yn.classList.remove(Q.config.settlingClass), ce(yn, "htmx:afterSettle", Qr);
                      }), Qr.pathInfo.anchor) {
                        var sn = re().getElementById(Qr.pathInfo.anchor);
                        sn && sn.scrollIntoView({ block: "start", behavior: "auto" });
                      }
                      if (fn.title && !gn) {
                        var Nn = C("title");
                        Nn ? Nn.innerHTML = fn.title : window.document.title = fn.title;
                      }
                      if (Cr(fn.elts, Kr), O(Jr, /HX-Trigger-After-Settle:/i)) {
                        var En = ze;
                        se(ze) || (En = re().body), _e(Jr, "HX-Trigger-After-Settle", En);
                      }
                      ie(Rn);
                    };
                    Kr.settleDelay > 0 ? setTimeout(Tn, Kr.settleDelay) : Tn();
                  } catch (sn) {
                    throw fe(ze, "htmx:swapError", Qr), ie(In), sn;
                  }
                }, Sn = Q.config.globalViewTransitions;
                if (Kr.hasOwnProperty("transition") && (Sn = Kr.transition), Sn && ce(ze, "htmx:beforeTransition", Qr) && typeof Promise < "u" && document.startViewTransition) {
                  var mn = new Promise(function(hn, un) {
                    Rn = hn, In = un;
                  }), pn = On;
                  On = function() {
                    document.startViewTransition(function() {
                      return pn(), mn;
                    });
                  };
                }
                Kr.swapDelay > 0 ? setTimeout(On, Kr.swapDelay) : On();
              }
              on && fe(ze, "htmx:responseError", le({ error: "Response Status Error Code " + Jr.status + " from " + Qr.pathInfo.requestPath }, Qr));
            }
          }
        }
        var Xr = {};
        function Dr() {
          return { init: function(ze) {
            return null;
          }, onEvent: function(ze, Qr) {
            return !0;
          }, transformResponse: function(ze, Qr, Jr) {
            return ze;
          }, isInlineSwap: function(ze) {
            return !1;
          }, handleSwap: function(ze, Qr, Jr, Zr) {
            return !1;
          }, encodeParameters: function(ze, Qr, Jr) {
            return null;
          } };
        }
        function Ur(ze, Qr) {
          Qr.init && Qr.init(r), Xr[ze] = le(Dr(), Qr);
        }
        function Br(ze) {
          delete Xr[ze];
        }
        function Fr(ze, Qr, Jr) {
          if (ze == null)
            return Qr;
          Qr == null && (Qr = []), Jr == null && (Jr = []);
          var Zr = te(ze, "hx-ext");
          return Zr && oe(Zr.split(","), function(Wr) {
            if (Wr = Wr.replace(/ /g, ""), Wr.slice(0, 7) == "ignore:") {
              Jr.push(Wr.slice(7));
              return;
            }
            if (Jr.indexOf(Wr) < 0) {
              var Yr = Xr[Wr];
              Yr && Qr.indexOf(Yr) < 0 && Qr.push(Yr);
            }
          }), Fr(u(ze), Qr, Jr);
        }
        var Vr = !1;
        re().addEventListener("DOMContentLoaded", function() {
          Vr = !0;
        });
        function jr(ze) {
          Vr || re().readyState === "complete" ? ze() : re().addEventListener("DOMContentLoaded", ze);
        }
        function _r() {
          Q.config.includeIndicatorStyles !== !1 && re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>");
        }
        function zr() {
          var ze = re().querySelector('meta[name="htmx-config"]');
          return ze ? E(ze.content) : null;
        }
        function $r() {
          var ze = zr();
          ze && (Q.config = le(Q.config, ze));
        }
        return jr(function() {
          $r(), _r();
          var ze = re().body;
          zt(ze);
          var Qr = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
          ze.addEventListener("htmx:abort", function(Zr) {
            var Wr = Zr.target, Yr = ae(Wr);
            Yr && Yr.xhr && Yr.xhr.abort();
          });
          const Jr = window.onpopstate ? window.onpopstate.bind(window) : null;
          window.onpopstate = function(Zr) {
            Zr.state && Zr.state.htmx ? (ar(), oe(Qr, function(Wr) {
              ce(Wr, "htmx:restored", { document: re(), triggerEvent: ce });
            })) : Jr && Jr(Zr);
          }, setTimeout(function() {
            ce(ze, "htmx:load", {}), ze = null;
          }, 0);
        }), Q;
      }();
    });
  }(htmx_min$1)), htmx_min$1.exports;
}
var htmx_minExports = requireHtmx_min();
const htmx = /* @__PURE__ */ getDefaultExportFromCjs(htmx_minExports);
window.htmx = htmx;
