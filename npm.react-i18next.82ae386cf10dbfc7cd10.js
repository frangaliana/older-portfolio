(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{34:function(e,n,t){"use strict";t(33);var r=t(28),o=t.n(r),a=(t(46),t(0)),i=t.n(a),c=(t(109),t(110)),s=t.n(c),u=t(111),f=t.n(u);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d,g,b={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},y=i.a.createContext();function v(){return g}function O(){return b}var h=function(){function e(){s()(this,e),this.usedNamespaces={}}return f()(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function w(){return d}var m={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b=l({},b,{},e)}(e.options.react),function(e){d=e}(e)}};function j(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var N={};function P(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&N[n[0]]||("string"==typeof n[0]&&(N[n[0]]=new Date),j.apply(void 0,n))}function S(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}var k=t(37),C=t.n(k);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=Object(a.useContext)(y),i=v()&&r||{},c=i.i18n,s=i.defaultNS,u=t||c||w();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new h),!u){P("You will need pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[f,{},!1];return p.t=f,p.i18n={},p.ready=!1,p}var l=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},O(),{},u.options.react,{},n),d=l.useSuspense,g=e||s||u.options&&u.options.defaultNS;g="string"==typeof g?[g]:g||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(g);var b=(u.isInitialized||u.initializedStoreOnce)&&g.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return P("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],o=!!n.options&&n.options.fallbackLng,a=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!i(r,e)||o&&!i(a,e))))}(e,u,l)}));function m(){return{t:u.getFixedT(null,"fallback"===l.nsMode?g:g[0])}}var j=Object(a.useState)(m()),N=C()(j,2),k=N[0],D=N[1];Object(a.useEffect)((function(){var e=!0,n=l.bindI18n,t=l.bindI18nStore;function r(){e&&D(m())}return b||d||S(u,g,(function(){e&&D(m())})),n&&u&&u.on(n,r),t&&u&&u.store.on(t,r),function(){e=!1,n&&u&&n.split(" ").forEach((function(e){return u.off(e,r)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,r)}))}}),[g.join()]);var I=[k.t,u,b];if(I.t=k.t,I.i18n=u,I.ready=b,b)return I;if(!b&&!d)return I;throw new Promise((function(e){S(u,g,(function(){D(m()),e()}))}))}function I(e){var n=e.i18n,t=e.defaultNS,r=e.children;return g=!0,i.a.createElement(y.Provider,{value:{i18n:n,defaultNS:t}},r)}t.d(n,"c",(function(){return D})),t.d(n,"a",(function(){return I})),t.d(n,"b",(function(){return m}))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9lcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2VzL3VzZVRyYW5zbGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvSTE4bmV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvZXMvaW5kZXguanMiXSwibmFtZXMiOlsib3duS2V5cyIsIm9iamVjdCIsImVudW1lcmFibGVPbmx5Iiwia2V5cyIsIk9iamVjdCIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJmb3JFYWNoIiwia2V5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsImkxOG5JbnN0YW5jZSIsImhhc1VzZWRJMThuZXh0UHJvdmlkZXIiLCJkZWZhdWx0T3B0aW9ucyIsImJpbmRJMThuIiwiYmluZEkxOG5TdG9yZSIsInRyYW5zRW1wdHlOb2RlVmFsdWUiLCJ0cmFuc1N1cHBvcnRCYXNpY0h0bWxOb2RlcyIsInRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yIiwidXNlU3VzcGVuc2UiLCJJMThuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJnZXRIYXNVc2VkSTE4bmV4dFByb3ZpZGVyIiwiZ2V0RGVmYXVsdHMiLCJSZXBvcnROYW1lc3BhY2VzIiwidGhpcyIsInVzZWROYW1lc3BhY2VzIiwidmFsdWUiLCJuYW1lc3BhY2VzIiwiX3RoaXMiLCJucyIsImdldEkxOG4iLCJpbml0UmVhY3RJMThuZXh0IiwidHlwZSIsImluaXQiLCJpbnN0YW5jZSIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJzZXREZWZhdWx0cyIsInJlYWN0Iiwic2V0STE4biIsIndhcm4iLCJjb25zb2xlIiwiX2NvbnNvbGUiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbmNhdCIsImFscmVhZHlXYXJuZWQiLCJ3YXJuT25jZSIsIl9sZW4yIiwiX2tleTIiLCJEYXRlIiwibG9hZE5hbWVzcGFjZXMiLCJpMThuIiwiY2IiLCJpc0luaXRpYWxpemVkIiwib24iLCJpbml0aWFsaXplZCIsInNldFRpbWVvdXQiLCJvZmYiLCJ1c2VUcmFuc2xhdGlvbiIsInByb3BzIiwiaTE4bkZyb21Qcm9wcyIsIlJlYWN0STE4bkNvbnRleHQiLCJfcmVmIiwiaTE4bkZyb21Db250ZXh0IiwiZGVmYXVsdE5TRnJvbUNvbnRleHQiLCJkZWZhdWx0TlMiLCJyZXBvcnROYW1lc3BhY2VzIiwibm90UmVhZHlUIiwiayIsImlzQXJyYXkiLCJyZXROb3RSZWFkeSIsInQiLCJyZWFkeSIsImkxOG5PcHRpb25zIiwiYWRkVXNlZE5hbWVzcGFjZXMiLCJpbml0aWFsaXplZFN0b3JlT25jZSIsImV2ZXJ5IiwibiIsImxhbmd1YWdlcyIsImxuZyIsImZhbGxiYWNrTG5nIiwibGFzdExuZyIsInRvTG93ZXJDYXNlIiwibG9hZE5vdFBlbmRpbmciLCJsIiwibG9hZFN0YXRlIiwic2VydmljZXMiLCJiYWNrZW5kQ29ubmVjdG9yIiwic3RhdGUiLCJpbmRleE9mIiwiYmFja2VuZCIsImlzTGFuZ3VhZ2VDaGFuZ2luZ1RvIiwiaGFzUmVzb3VyY2VCdW5kbGUiLCJoYXNMb2FkZWROYW1lc3BhY2UiLCJnZXRUIiwiZ2V0Rml4ZWRUIiwibnNNb2RlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInNldFQiLCJpc01vdW50ZWQiLCJib3VuZFJlc2V0Iiwic3RvcmUiLCJzcGxpdCIsImUiLCJqb2luIiwicmV0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJJMThuZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciJdLCJtYXBwaW5ncyI6IjBMQUlBLFNBQVNBLEVBQVFDLEVBQVFDLEdBQWtCLElBQUlDLEVBQU9DLE9BQU9ELEtBQUtGLEdBQVMsR0FBSUcsT0FBT0Msc0JBQXVCLENBQUUsSUFBSUMsRUFBVUYsT0FBT0Msc0JBQXNCSixHQUFhQyxJQUFnQkksRUFBVUEsRUFBUUMsUUFBTyxTQUFVQyxHQUFPLE9BQU9KLE9BQU9LLHlCQUF5QlIsRUFBUU8sR0FBS0UsZUFBZ0JQLEVBQUtRLEtBQUtDLE1BQU1ULEVBQU1HLEdBQVksT0FBT0gsRUFFOVUsU0FBU1UsRUFBY0MsR0FBVSxJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFBSUMsVUFBVUMsT0FBUUYsSUFBSyxDQUFFLElBQUlHLEVBQXlCLE1BQWhCRixVQUFVRCxHQUFhQyxVQUFVRCxHQUFLLEdBQVFBLEVBQUksRUFBS2YsRUFBUWtCLEdBQVEsR0FBTUMsU0FBUSxTQUFVQyxHQUFPLElBQWdCTixFQUFRTSxFQUFLRixFQUFPRSxPQUFzQmhCLE9BQU9pQiwwQkFBNkJqQixPQUFPa0IsaUJBQWlCUixFQUFRVixPQUFPaUIsMEJBQTBCSCxJQUFtQmxCLEVBQVFrQixHQUFRQyxTQUFRLFNBQVVDLEdBQU9oQixPQUFPbUIsZUFBZVQsRUFBUU0sRUFBS2hCLE9BQU9LLHlCQUF5QlMsRUFBUUUsT0FBZSxPQUFPTixFQUc3ZixJQVVJVSxFQUNBQyxFQVhBQyxFQUFpQixDQUNuQkMsU0FBVSxrQkFDVkMsY0FBZSxHQUVmQyxvQkFBcUIsR0FDckJDLDRCQUE0QixFQUM1QkMsMkJBQTRCLENBQUMsS0FBTSxTQUFVLElBQUssS0FFbERDLGFBQWEsR0FJSkMsRUFBYyxJQUFNQyxnQkFJeEIsU0FBU0MsSUFDZCxPQUFPVixFQU1G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QyxFQUFlQyxFQUFNM0IsR0FBWSxXQUMzQjRFLEdBQVdELEVBQUtMLFFBU3BCcEYsR0FBWXlDLEdBQU1BLEVBQUtHLEdBQUc1QyxFQUFVMkYsR0FDcEMxRixHQUFpQndDLEdBQU1BLEVBQUttRCxNQUFNaEQsR0FBRzNDLEVBQWUwRixHQUVqRCxXQUNMRCxHQUFZLEVBQ1IxRixHQUFZeUMsR0FBTXpDLEVBQVM2RixNQUFNLEtBQUtyRyxTQUFRLFNBQVVzRyxHQUMxRCxPQUFPckQsRUFBS00sSUFBSStDLEVBQUdILE1BRWpCMUYsR0FBaUJ3QyxHQUFNeEMsRUFBYzRGLE1BQU0sS0FBS3JHLFNBQVEsU0FBVXNHLEdBQ3BFLE9BQU9yRCxFQUFLbUQsTUFBTTdDLElBQUkrQyxFQUFHSCxTQUc1QixDQUFDN0UsRUFBV2lGLFNBRWYsSUFBSUMsRUFBTSxDQUFDbkMsRUFBRUEsRUFBR3BCLEVBQU1xQixHQUt0QixHQUpBa0MsRUFBSW5DLEVBQUlBLEVBQUVBLEVBQ1ZtQyxFQUFJdkQsS0FBT0EsRUFDWHVELEVBQUlsQyxNQUFRQSxFQUVSQSxFQUFPLE9BQU9rQyxFQUVsQixJQUFLbEMsSUFBVXpELEVBQWEsT0FBTzJGLEVBRW5DLE1BQU0sSUFBSUMsU0FBUSxTQUFVQyxHQUMxQjFELEVBQWVDLEVBQU0zQixHQUFZLFdBQy9CMkUsRUFBS0wsS0FDTGMsVUN2R0MsU0FBU0MsRUFBZ0IvQyxHQUM5QixJQUFJWCxFQUFPVyxFQUFLWCxLQUNaYyxFQUFZSCxFQUFLRyxVQUNqQjZDLEVBQVdoRCxFQUFLZ0QsU0FFcEIsT0hnQkF0RyxHR2pCb0IsRUFDYixJQUFNdUcsY0FBYy9GLEVBQVlnRyxTQUFVLENBQy9DekYsTUFBTyxDQUNMNEIsS0FBTUEsRUFDTmMsVUFBV0EsSUFFWjZDLEdDWkwiLCJmaWxlIjoibnBtLnJlYWN0LWkxOG5leHQuODJhZTM4NmNmMTBkYmZjN2NkMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGJpbmRJMThuOiAnbGFuZ3VhZ2VDaGFuZ2VkJyxcbiAgYmluZEkxOG5TdG9yZTogJycsXG4gIC8vIG5zTW9kZTogJ2ZhbGxiYWNrJyAvLyBsb29wIHRocm91Z2ggYWxsIG5hbWVzcGFjZXMgZ2l2ZW4gdG8gaG9vaywgSE9DLCByZW5kZXIgcHJvcCBmb3Iga2V5IGxvb2t1cFxuICB0cmFuc0VtcHR5Tm9kZVZhbHVlOiAnJyxcbiAgdHJhbnNTdXBwb3J0QmFzaWNIdG1sTm9kZXM6IHRydWUsXG4gIHRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yOiBbJ2JyJywgJ3N0cm9uZycsICdpJywgJ3AnXSxcbiAgLy8gaGFzaFRyYW5zS2V5OiBrZXkgPT4ga2V5IC8vIGNhbGN1bGF0ZSBhIGtleSBmb3IgVHJhbnMgY29tcG9uZW50IGJhc2VkIG9uIGRlZmF1bHRWYWx1ZVxuICB1c2VTdXNwZW5zZTogdHJ1ZVxufTtcbnZhciBpMThuSW5zdGFuY2U7XG52YXIgaGFzVXNlZEkxOG5leHRQcm92aWRlcjtcbmV4cG9ydCB2YXIgSTE4bkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZnVuY3Rpb24gdXNlZEkxOG5leHRQcm92aWRlcih1c2VkKSB7XG4gIGhhc1VzZWRJMThuZXh0UHJvdmlkZXIgPSB1c2VkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEhhc1VzZWRJMThuZXh0UHJvdmlkZXIoKSB7XG4gIHJldHVybiBoYXNVc2VkSTE4bmV4dFByb3ZpZGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRzKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIGRlZmF1bHRPcHRpb25zID0gX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMsIHt9LCBvcHRpb25zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0cygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IHZhciBSZXBvcnROYW1lc3BhY2VzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVwb3J0TmFtZXNwYWNlcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVwb3J0TmFtZXNwYWNlcyk7XG5cbiAgICB0aGlzLnVzZWROYW1lc3BhY2VzID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVwb3J0TmFtZXNwYWNlcywgW3tcbiAgICBrZXk6IFwiYWRkVXNlZE5hbWVzcGFjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkVXNlZE5hbWVzcGFjZXMobmFtZXNwYWNlcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgbmFtZXNwYWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChucykge1xuICAgICAgICBpZiAoIV90aGlzLnVzZWROYW1lc3BhY2VzW25zXSkgX3RoaXMudXNlZE5hbWVzcGFjZXNbbnNdID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRVc2VkTmFtZXNwYWNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRVc2VkTmFtZXNwYWNlcygpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnVzZWROYW1lc3BhY2VzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVwb3J0TmFtZXNwYWNlcztcbn0oKTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRJMThuKGluc3RhbmNlKSB7XG4gIGkxOG5JbnN0YW5jZSA9IGluc3RhbmNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEkxOG4oKSB7XG4gIHJldHVybiBpMThuSW5zdGFuY2U7XG59XG5leHBvcnQgdmFyIGluaXRSZWFjdEkxOG5leHQgPSB7XG4gIHR5cGU6ICczcmRQYXJ0eScsXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoaW5zdGFuY2UpIHtcbiAgICBzZXREZWZhdWx0cyhpbnN0YW5jZS5vcHRpb25zLnJlYWN0KTtcbiAgICBzZXRJMThuKGluc3RhbmNlKTtcbiAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlSW5pdGlhbFByb3BzKEZvckNvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGN0eCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgdmFyIGkxOG5Jbml0aWFsUHJvcHMgPSBnZXRJbml0aWFsUHJvcHMoKTtcblxuICAgICAgaWYgKEZvckNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgRm9yQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpLnRoZW4oZnVuY3Rpb24gKGNvbXBvbmVudHNJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICByZXNvbHZlKF9vYmplY3RTcHJlYWQoe30sIGNvbXBvbmVudHNJbml0aWFsUHJvcHMsIHt9LCBpMThuSW5pdGlhbFByb3BzKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShpMThuSW5pdGlhbFByb3BzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTsgLy8gQXZvaWQgYXN5bmMgZm9yIG5vdyAtIHNvIHdlIGRvIG5vdCBuZWVkIHRvIHB1bGwgaW4gcmVnZW5lcmF0b3JcbiAgLy8gcmV0dXJuIGFzeW5jIGN0eCA9PiB7XG4gIC8vICAgY29uc3QgY29tcG9uZW50c0luaXRpYWxQcm9wcyA9IEZvckNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gICAgID8gYXdhaXQgRm9yQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gIC8vICAgICA6IHt9O1xuICAvLyAgIGNvbnN0IGkxOG5Jbml0aWFsUHJvcHMgPSBnZXRJbml0aWFsUHJvcHMoKTtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgLi4uY29tcG9uZW50c0luaXRpYWxQcm9wcyxcbiAgLy8gICAgIC4uLmkxOG5Jbml0aWFsUHJvcHMsXG4gIC8vICAgfTtcbiAgLy8gfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoKSB7XG4gIHZhciBpMThuID0gZ2V0STE4bigpO1xuICB2YXIgbmFtZXNwYWNlcyA9IGkxOG4ucmVwb3J0TmFtZXNwYWNlcyA/IGkxOG4ucmVwb3J0TmFtZXNwYWNlcy5nZXRVc2VkTmFtZXNwYWNlcygpIDogW107XG4gIHZhciByZXQgPSB7fTtcbiAgdmFyIGluaXRpYWxJMThuU3RvcmUgPSB7fTtcbiAgaTE4bi5sYW5ndWFnZXMuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgIGluaXRpYWxJMThuU3RvcmVbbF0gPSB7fTtcbiAgICBuYW1lc3BhY2VzLmZvckVhY2goZnVuY3Rpb24gKG5zKSB7XG4gICAgICBpbml0aWFsSTE4blN0b3JlW2xdW25zXSA9IGkxOG4uZ2V0UmVzb3VyY2VCdW5kbGUobCwgbnMpIHx8IHt9O1xuICAgIH0pO1xuICB9KTtcbiAgcmV0LmluaXRpYWxJMThuU3RvcmUgPSBpbml0aWFsSTE4blN0b3JlO1xuICByZXQuaW5pdGlhbExhbmd1YWdlID0gaTE4bi5sYW5ndWFnZTtcbiAgcmV0dXJuIHJldDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gd2FybigpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgdmFyIF9jb25zb2xlO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIGFyZ3NbMF0gPSBcInJlYWN0LWkxOG5leHQ6OiBcIi5jb25jYXQoYXJnc1swXSk7XG5cbiAgICAoX2NvbnNvbGUgPSBjb25zb2xlKS53YXJuLmFwcGx5KF9jb25zb2xlLCBhcmdzKTtcbiAgfVxufVxudmFyIGFscmVhZHlXYXJuZWQgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiB3YXJuT25jZSgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiBhbHJlYWR5V2FybmVkW2FyZ3NbMF1dKSByZXR1cm47XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIGFscmVhZHlXYXJuZWRbYXJnc1swXV0gPSBuZXcgRGF0ZSgpO1xuICB3YXJuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG59IC8vIG5vdCBuZWVkZWQgcmlnaHQgbm93XG4vL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZWQoLi4uYXJncykge1xuLy8gICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzLmVudiAmJiAoIXByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSkge1xuLy8gICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIGFyZ3NbMF0gPSBgZGVwcmVjYXRpb24gd2FybmluZyAtPiAke2FyZ3NbMF19YDtcbi8vICAgICB3YXJuT25jZSguLi5hcmdzKTtcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5hbWVzcGFjZXMoaTE4biwgbnMsIGNiKSB7XG4gIGkxOG4ubG9hZE5hbWVzcGFjZXMobnMsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBkZWxheSByZWFkeSBpZiBub3QgeWV0IGluaXRpYWxpemVkIGkxOG4gaW5zdGFuY2VcbiAgICBpZiAoaTE4bi5pc0luaXRpYWxpemVkKSB7XG4gICAgICBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5pdGlhbGl6ZWQgPSBmdW5jdGlvbiBpbml0aWFsaXplZCgpIHtcbiAgICAgICAgLy8gZHVlIHRvIGVtaXR0ZXIgcmVtb3ZpbmcgaXNzdWUgaW4gaTE4bmV4dCB3ZSBuZWVkIHRvIGRlbGF5IHJlbW92ZVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpMThuLm9mZignaW5pdGlhbGl6ZWQnLCBpbml0aWFsaXplZCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgICBjYigpO1xuICAgICAgfTtcblxuICAgICAgaTE4bi5vbignaW5pdGlhbGl6ZWQnLCBpbml0aWFsaXplZCk7XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNMb2FkZWROYW1lc3BhY2UobnMsIGkxOG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gIGlmICghaTE4bi5sYW5ndWFnZXMgfHwgIWkxOG4ubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgIHdhcm5PbmNlKCdpMThuLmxhbmd1YWdlcyB3ZXJlIHVuZGVmaW5lZCBvciBlbXB0eScsIGkxOG4ubGFuZ3VhZ2VzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBsbmcgPSBpMThuLmxhbmd1YWdlc1swXTtcbiAgdmFyIGZhbGxiYWNrTG5nID0gaTE4bi5vcHRpb25zID8gaTE4bi5vcHRpb25zLmZhbGxiYWNrTG5nIDogZmFsc2U7XG4gIHZhciBsYXN0TG5nID0gaTE4bi5sYW5ndWFnZXNbaTE4bi5sYW5ndWFnZXMubGVuZ3RoIC0gMV07IC8vIHdlJ3JlIGluIGNpbW9kZSBzbyB0aGlzIHNoYWxsIHBhc3NcblxuICBpZiAobG5nLnRvTG93ZXJDYXNlKCkgPT09ICdjaW1vZGUnKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgbG9hZE5vdFBlbmRpbmcgPSBmdW5jdGlvbiBsb2FkTm90UGVuZGluZyhsLCBuKSB7XG4gICAgdmFyIGxvYWRTdGF0ZSA9IGkxOG4uc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5zdGF0ZVtcIlwiLmNvbmNhdChsLCBcInxcIikuY29uY2F0KG4pXTtcbiAgICByZXR1cm4gbG9hZFN0YXRlID09PSAtMSB8fCBsb2FkU3RhdGUgPT09IDI7XG4gIH07IC8vIGJvdW5kIHRvIHRyaWdnZXIgb24gZXZlbnQgbGFuZ3VhZ2VDaGFuZ2luZ1xuICAvLyBzbyBzZXQgcmVhZHkgdG8gZmFsc2Ugd2hpbGUgd2UgYXJlIGNoYW5naW5nIHRoZSBsYW5ndWFnZVxuICAvLyBhbmQgbmFtZXNwYWNlIHBlbmRpbmcgKGRlcGVuZHMgb24gaGF2aW5nIGEgYmFja2VuZClcblxuXG4gIGlmIChvcHRpb25zLmJpbmRJMThuICYmIG9wdGlvbnMuYmluZEkxOG4uaW5kZXhPZignbGFuZ3VhZ2VDaGFuZ2luZycpID4gLTEgJiYgaTE4bi5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLmJhY2tlbmQgJiYgaTE4bi5pc0xhbmd1YWdlQ2hhbmdpbmdUbyAmJiAhbG9hZE5vdFBlbmRpbmcoaTE4bi5pc0xhbmd1YWdlQ2hhbmdpbmdUbywgbnMpKSByZXR1cm4gZmFsc2U7IC8vIGxvYWRlZCAtPiBTVUNDRVNTXG5cbiAgaWYgKGkxOG4uaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHJldHVybiB0cnVlOyAvLyB3ZXJlIG5vdCBsb2FkaW5nIGF0IGFsbCAtPiBTRU1JIFNVQ0NFU1NcblxuICBpZiAoIWkxOG4uc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5iYWNrZW5kKSByZXR1cm4gdHJ1ZTsgLy8gZmFpbGVkIGxvYWRpbmcgbnMgLSBidXQgYXQgbGVhc3QgZmFsbGJhY2sgaXMgbm90IHBlbmRpbmcgLT4gU0VNSSBTVUNDRVNTXG5cbiAgaWYgKGxvYWROb3RQZW5kaW5nKGxuZywgbnMpICYmICghZmFsbGJhY2tMbmcgfHwgbG9hZE5vdFBlbmRpbmcobGFzdExuZywgbnMpKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAodHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZycgJiYgQ29tcG9uZW50Lmxlbmd0aCA+IDAgPyBDb21wb25lbnQgOiAnVW5rbm93bicpO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRJMThuLCBnZXREZWZhdWx0cywgUmVwb3J0TmFtZXNwYWNlcywgZ2V0SGFzVXNlZEkxOG5leHRQcm92aWRlciwgSTE4bkNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHsgd2Fybk9uY2UsIGxvYWROYW1lc3BhY2VzLCBoYXNMb2FkZWROYW1lc3BhY2UgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VUcmFuc2xhdGlvbihucykge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAvLyBhc3NlcnQgd2UgaGF2ZSB0aGUgbmVlZGVkIGkxOG5JbnN0YW5jZVxuICB2YXIgaTE4bkZyb21Qcm9wcyA9IHByb3BzLmkxOG47XG4gIHZhciBSZWFjdEkxOG5Db250ZXh0ID0gdXNlQ29udGV4dChJMThuQ29udGV4dCk7XG5cbiAgdmFyIF9yZWYgPSBnZXRIYXNVc2VkSTE4bmV4dFByb3ZpZGVyKCkgPyBSZWFjdEkxOG5Db250ZXh0IHx8IHt9IDoge30sXG4gICAgICBpMThuRnJvbUNvbnRleHQgPSBfcmVmLmkxOG4sXG4gICAgICBkZWZhdWx0TlNGcm9tQ29udGV4dCA9IF9yZWYuZGVmYXVsdE5TO1xuXG4gIHZhciBpMThuID0gaTE4bkZyb21Qcm9wcyB8fCBpMThuRnJvbUNvbnRleHQgfHwgZ2V0STE4bigpO1xuICBpZiAoaTE4biAmJiAhaTE4bi5yZXBvcnROYW1lc3BhY2VzKSBpMThuLnJlcG9ydE5hbWVzcGFjZXMgPSBuZXcgUmVwb3J0TmFtZXNwYWNlcygpO1xuXG4gIGlmICghaTE4bikge1xuICAgIHdhcm5PbmNlKCdZb3Ugd2lsbCBuZWVkIHBhc3MgaW4gYW4gaTE4bmV4dCBpbnN0YW5jZSBieSB1c2luZyBpbml0UmVhY3RJMThuZXh0Jyk7XG5cbiAgICB2YXIgbm90UmVhZHlUID0gZnVuY3Rpb24gbm90UmVhZHlUKGspIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGspID8ga1trLmxlbmd0aCAtIDFdIDogaztcbiAgICB9O1xuXG4gICAgdmFyIHJldE5vdFJlYWR5ID0gW25vdFJlYWR5VCwge30sIGZhbHNlXTtcbiAgICByZXROb3RSZWFkeS50ID0gbm90UmVhZHlUO1xuICAgIHJldE5vdFJlYWR5LmkxOG4gPSB7fTtcbiAgICByZXROb3RSZWFkeS5yZWFkeSA9IGZhbHNlO1xuICAgIHJldHVybiByZXROb3RSZWFkeTtcbiAgfVxuXG4gIHZhciBpMThuT3B0aW9ucyA9IF9vYmplY3RTcHJlYWQoe30sIGdldERlZmF1bHRzKCksIHt9LCBpMThuLm9wdGlvbnMucmVhY3QsIHt9LCBwcm9wcyk7XG5cbiAgdmFyIHVzZVN1c3BlbnNlID0gaTE4bk9wdGlvbnMudXNlU3VzcGVuc2U7IC8vIHByZXBhcmUgaGF2aW5nIGEgbmFtZXNwYWNlXG5cbiAgdmFyIG5hbWVzcGFjZXMgPSBucyB8fCBkZWZhdWx0TlNGcm9tQ29udGV4dCB8fCBpMThuLm9wdGlvbnMgJiYgaTE4bi5vcHRpb25zLmRlZmF1bHROUztcbiAgbmFtZXNwYWNlcyA9IHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IFtuYW1lc3BhY2VzXSA6IG5hbWVzcGFjZXMgfHwgWyd0cmFuc2xhdGlvbiddOyAvLyByZXBvcnQgbmFtZXNwYWNlcyBhcyB1c2VkXG5cbiAgaWYgKGkxOG4ucmVwb3J0TmFtZXNwYWNlcy5hZGRVc2VkTmFtZXNwYWNlcykgaTE4bi5yZXBvcnROYW1lc3BhY2VzLmFkZFVzZWROYW1lc3BhY2VzKG5hbWVzcGFjZXMpOyAvLyBhcmUgd2UgcmVhZHk/IHllcyBpZiBhbGwgbmFtZXNwYWNlcyBpbiBmaXJzdCBsYW5ndWFnZSBhcmUgbG9hZGVkIGFscmVhZHkgKGVpdGhlciB3aXRoIGRhdGEgb3IgZW1wdHkgb2JqZWN0IG9uIGZhaWxlZCBsb2FkKVxuXG4gIHZhciByZWFkeSA9IChpMThuLmlzSW5pdGlhbGl6ZWQgfHwgaTE4bi5pbml0aWFsaXplZFN0b3JlT25jZSkgJiYgbmFtZXNwYWNlcy5ldmVyeShmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBoYXNMb2FkZWROYW1lc3BhY2UobiwgaTE4biwgaTE4bk9wdGlvbnMpO1xuICB9KTsgLy8gYmluZGluZyB0IGZ1bmN0aW9uIHRvIG5hbWVzcGFjZSAoYWN0cyBhbHNvIGFzIHJlcmVuZGVyIHRyaWdnZXIpXG5cbiAgZnVuY3Rpb24gZ2V0VCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdDogaTE4bi5nZXRGaXhlZFQobnVsbCwgaTE4bk9wdGlvbnMubnNNb2RlID09PSAnZmFsbGJhY2snID8gbmFtZXNwYWNlcyA6IG5hbWVzcGFjZXNbMF0pXG4gICAgfTtcbiAgfVxuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShnZXRUKCkpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICB0ID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFQgPSBfdXNlU3RhdGUyWzFdOyAvLyBzZWVtcyB3ZSBjYW4ndCBoYXZlIGZ1bmN0aW9ucyBhcyB2YWx1ZSAtPiB3cmFwIGl0IGluIG9ialxuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXNNb3VudGVkID0gdHJ1ZTtcbiAgICB2YXIgYmluZEkxOG4gPSBpMThuT3B0aW9ucy5iaW5kSTE4bixcbiAgICAgICAgYmluZEkxOG5TdG9yZSA9IGkxOG5PcHRpb25zLmJpbmRJMThuU3RvcmU7IC8vIGlmIG5vdCByZWFkeSBhbmQgbm90IHVzaW5nIHN1c3BlbnNlIGxvYWQgdGhlIG5hbWVzcGFjZXNcbiAgICAvLyBpbiBzaWRlIGVmZmVjdCBhbmQgZG8gbm90IGNhbGwgcmVzZXRUIGlmIHVubW91bnRlZFxuXG4gICAgaWYgKCFyZWFkeSAmJiAhdXNlU3VzcGVuc2UpIHtcbiAgICAgIGxvYWROYW1lc3BhY2VzKGkxOG4sIG5hbWVzcGFjZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTW91bnRlZCkgc2V0VChnZXRUKCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYm91bmRSZXNldCgpIHtcbiAgICAgIGlmIChpc01vdW50ZWQpIHNldFQoZ2V0VCgpKTtcbiAgICB9IC8vIGJpbmQgZXZlbnRzIHRvIHRyaWdnZXIgY2hhbmdlLCBsaWtlIGxhbmd1YWdlQ2hhbmdlZFxuXG5cbiAgICBpZiAoYmluZEkxOG4gJiYgaTE4bikgaTE4bi5vbihiaW5kSTE4biwgYm91bmRSZXNldCk7XG4gICAgaWYgKGJpbmRJMThuU3RvcmUgJiYgaTE4bikgaTE4bi5zdG9yZS5vbihiaW5kSTE4blN0b3JlLCBib3VuZFJlc2V0KTsgLy8gdW5iaW5kaW5nIG9uIHVubW91bnRcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgIGlmIChiaW5kSTE4biAmJiBpMThuKSBiaW5kSTE4bi5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGkxOG4ub2ZmKGUsIGJvdW5kUmVzZXQpO1xuICAgICAgfSk7XG4gICAgICBpZiAoYmluZEkxOG5TdG9yZSAmJiBpMThuKSBiaW5kSTE4blN0b3JlLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gaTE4bi5zdG9yZS5vZmYoZSwgYm91bmRSZXNldCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbbmFtZXNwYWNlcy5qb2luKCldKTsgLy8gcmUtcnVuIGVmZmVjdCB3aGVuZXZlciBsaXN0IG9mIG5hbWVzcGFjZXMgY2hhbmdlc1xuXG4gIHZhciByZXQgPSBbdC50LCBpMThuLCByZWFkeV07XG4gIHJldC50ID0gdC50O1xuICByZXQuaTE4biA9IGkxOG47XG4gIHJldC5yZWFkeSA9IHJlYWR5OyAvLyByZXR1cm4gaG9vayBzdHVmZiBpZiByZWFkeVxuXG4gIGlmIChyZWFkeSkgcmV0dXJuIHJldDsgLy8gbm90IHlldCBsb2FkZWQgbmFtZXNwYWNlcyAtPiBsb2FkIHRoZW0gLT4gYW5kIHJldHVybiBpZiB1c2VTdXNwZW5zZSBvcHRpb24gc2V0IGZhbHNlXG5cbiAgaWYgKCFyZWFkeSAmJiAhdXNlU3VzcGVuc2UpIHJldHVybiByZXQ7IC8vIG5vdCB5ZXQgbG9hZGVkIG5hbWVzcGFjZXMgLT4gbG9hZCB0aGVtIC0+IGFuZCB0cmlnZ2VyIHN1c3BlbnNlXG5cbiAgdGhyb3cgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBsb2FkTmFtZXNwYWNlcyhpMThuLCBuYW1lc3BhY2VzLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUKGdldFQoKSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJMThuQ29udGV4dCwgdXNlZEkxOG5leHRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCc7XG5leHBvcnQgZnVuY3Rpb24gSTE4bmV4dFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIGkxOG4gPSBfcmVmLmkxOG4sXG4gICAgICBkZWZhdWx0TlMgPSBfcmVmLmRlZmF1bHROUyxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdXNlZEkxOG5leHRQcm92aWRlcih0cnVlKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSTE4bkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZToge1xuICAgICAgaTE4bjogaTE4bixcbiAgICAgIGRlZmF1bHROUzogZGVmYXVsdE5TXG4gICAgfVxuICB9LCBjaGlsZHJlbik7XG59IiwiZXhwb3J0IHsgVHJhbnMgfSBmcm9tICcuL1RyYW5zJztcbmV4cG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi91c2VUcmFuc2xhdGlvbic7XG5leHBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuL3dpdGhUcmFuc2xhdGlvbic7XG5leHBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4vVHJhbnNsYXRpb24nO1xuZXhwb3J0IHsgSTE4bmV4dFByb3ZpZGVyIH0gZnJvbSAnLi9JMThuZXh0UHJvdmlkZXInO1xuZXhwb3J0IHsgd2l0aFNTUiB9IGZyb20gJy4vd2l0aFNTUic7XG5leHBvcnQgeyB1c2VTU1IgfSBmcm9tICcuL3VzZVNTUic7XG5leHBvcnQgeyBJMThuQ29udGV4dCwgaW5pdFJlYWN0STE4bmV4dCwgc2V0RGVmYXVsdHMsIGdldERlZmF1bHRzLCBzZXRJMThuLCBnZXRJMThuLCBjb21wb3NlSW5pdGlhbFByb3BzLCBnZXRJbml0aWFsUHJvcHMgfSBmcm9tICcuL2NvbnRleHQnOyJdLCJzb3VyY2VSb290IjoiIn0=