(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{109:function(e,n,t){e.exports={parse:t(161),stringify:t(164)}},161:function(e,n,t){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,c=t(162),i=Object.create?Object.create(null):{};function o(e,n,t,r,c){var i=n.indexOf("<",r),o=n.slice(r,-1===i?void 0:i);/^\s*$/.test(o)&&(o=" "),(!c&&i>-1&&t+e.length>=0||" "!==o)&&e.push({type:"text",content:o})}e.exports=function(e,n){n||(n={}),n.components||(n.components=i);var t,a=[],s=-1,u=[],p={},h=!1;return e.replace(r,(function(r,i){if(h){if(r!=="</"+t.name+">")return;h=!1}var l,d="/"!==r.charAt(1),f=0===r.indexOf("\x3c!--"),g=i+r.length,m=e.charAt(g);d&&!f&&(s++,"tag"===(t=c(r)).type&&n.components[t.name]&&(t.type="component",h=!0),t.voidElement||h||!m||"<"===m||o(t.children,e,s,g,n.ignoreWhitespace),p[t.tagName]=t,0===s&&a.push(t),(l=u[s-1])&&l.children.push(t),u[s]=t),(f||!d||t.voidElement)&&(f||s--,!h&&"<"!==m&&m&&o(l=-1===s?a:u[s].children,e,s,g,n.ignoreWhitespace))})),!a.length&&e.length&&o(a,e,0,0,n.ignoreWhitespace),a}},162:function(e,n,t){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,c=t(163);e.exports=function(e){var n,t=0,i=!0,o={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return i=!0,void t++;i?0===t?((c[r]||"/"===e.charAt(e.length-2))&&(o.voidElement=!0),o.name=r):(o.attrs[n]=r.replace(/^['"]|['"]$/g,""),n=void 0):(n&&(o.attrs[n]=n),n=r),t++,i=!1})),o}},164:function(e,n){function t(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(t,"")+"</"+n.name+">"}}e.exports=function(e){return e.reduce((function(e,n){return e+t("",n)}),"")}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbC1wYXJzZS1zdHJpbmdpZnkyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sLXBhcnNlLXN0cmluZ2lmeTIvbGliL3BhcnNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sLXBhcnNlLXN0cmluZ2lmeTIvbGliL3BhcnNlLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbC1wYXJzZS1zdHJpbmdpZnkyL2xpYi9zdHJpbmdpZnkuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInBhcnNlIiwic3RyaW5naWZ5IiwidGFnUkUiLCJwYXJzZVRhZyIsImVtcHR5IiwiT2JqZWN0IiwiY3JlYXRlIiwicHVzaFRleHROb2RlIiwibGlzdCIsImh0bWwiLCJsZXZlbCIsInN0YXJ0IiwiaWdub3JlV2hpdGVzcGFjZSIsImVuZCIsImluZGV4T2YiLCJjb250ZW50Iiwic2xpY2UiLCJ1bmRlZmluZWQiLCJ0ZXN0IiwibGVuZ3RoIiwicHVzaCIsInR5cGUiLCJvcHRpb25zIiwiY29tcG9uZW50cyIsImN1cnJlbnQiLCJyZXN1bHQiLCJhcnIiLCJieVRhZyIsImluQ29tcG9uZW50IiwicmVwbGFjZSIsInRhZyIsImluZGV4IiwibmFtZSIsInBhcmVudCIsImlzT3BlbiIsImNoYXJBdCIsImlzQ29tbWVudCIsIm5leHRDaGFyIiwidm9pZEVsZW1lbnQiLCJjaGlsZHJlbiIsInRhZ05hbWUiLCJhdHRyUkUiLCJ2b2lkRWxlbWVudHMiLCJrZXkiLCJpIiwiZXhwZWN0aW5nVmFsdWVBZnRlckVxdWFscyIsInJlcyIsImF0dHJzIiwibWF0Y2giLCJidWZmIiwiZG9jIiwiam9pbiIsImF0dHJTdHJpbmciLCJyZWR1Y2UiLCJ0b2tlbiIsInJvb3RFbCJdLCJtYXBwaW5ncyI6IjZFQUFBQSxFQUFPQyxRQUFVLENBQ2JDLE1BQU8sRUFBUSxLQUNmQyxVQUFX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LE1BQ1osSUFBSyxPQUNELE9BQU80QixFQUFPQyxFQUFJbkMsUUFDdEIsSUFBSyxNQUVELE9BREFrQyxHQUFRLElBQU1DLEVBQUlsQixNQUFRa0IsRUFBSUgsTUFoQnRDLFNBQW9CQSxHQUNoQixJQUFJRSxFQUFPLEdBQ1gsSUFBSyxJQUFJTixLQUFPSSxFQUNaRSxFQUFLN0IsS0FBS3VCLEVBQU0sS0FBT0ksRUFBTUosR0FBTyxLQUV4QyxPQUFLTSxFQUFLOUIsT0FHSCxJQUFNOEIsRUFBS0UsS0FBSyxLQUZaLEdBVStCQyxDQUFXRixFQUFJSCxPQUFTLEtBQU9HLEVBQUlaLFlBQWMsS0FBTyxLQUMxRlksRUFBSVosWUFDR1csRUFFSkEsRUFBT0MsRUFBSVgsU0FBU2MsT0FBT3BELEVBQVcsSUFBTSxLQUFPaUQsRUFBSWxCLEtBQU8sS0FJN0VsQyxFQUFPQyxRQUFVLFNBQVVtRCxHQUN2QixPQUFPQSxFQUFJRyxRQUFPLFNBQVVDLEVBQU9DLEdBQy9CLE9BQU9ELEVBQVFyRCxFQUFVLEdBQUlzRCxLQUM5QiIsImZpbGUiOiJucG0uaHRtbC1wYXJzZS1zdHJpbmdpZnkyLjgyYWUzODZjZjEwZGJmYzdjZDEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcGFyc2U6IHJlcXVpcmUoJy4vbGliL3BhcnNlJyksXG4gICAgc3RyaW5naWZ5OiByZXF1aXJlKCcuL2xpYi9zdHJpbmdpZnknKVxufTtcbiIsIi8qanNoaW50IC1XMDMwICovXG52YXIgdGFnUkUgPSAvKD86PCEtLVtcXFNcXHNdKj8tLT58PCg/OlwiW15cIl0qXCJbJ1wiXSp8J1teJ10qJ1snXCJdKnxbXidcIj5dKSs+KS9nO1xudmFyIHBhcnNlVGFnID0gcmVxdWlyZSgnLi9wYXJzZS10YWcnKTtcbi8vIHJlLXVzZWQgb2JqIGZvciBxdWljayBsb29rdXBzIG9mIGNvbXBvbmVudHNcbnZhciBlbXB0eSA9IE9iamVjdC5jcmVhdGUgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4vLyBjb21tb24gbG9naWMgZm9yIHB1c2hpbmcgYSBjaGlsZCBub2RlIG9udG8gYSBsaXN0XG5mdW5jdGlvbiBwdXNoVGV4dE5vZGUobGlzdCwgaHRtbCwgbGV2ZWwsIHN0YXJ0LCBpZ25vcmVXaGl0ZXNwYWNlKSB7XG4gICAgLy8gY2FsY3VsYXRlIGNvcnJlY3QgZW5kIG9mIHRoZSBjb250ZW50IHNsaWNlIGluIGNhc2UgdGhlcmUnc1xuICAgIC8vIG5vIHRhZyBhZnRlciB0aGUgdGV4dCBub2RlLlxuICAgIHZhciBlbmQgPSBodG1sLmluZGV4T2YoJzwnLCBzdGFydCk7XG4gICAgdmFyIGNvbnRlbnQgPSBodG1sLnNsaWNlKHN0YXJ0LCBlbmQgPT09IC0xID8gdW5kZWZpbmVkIDogZW5kKTtcbiAgICAvLyBpZiBhIG5vZGUgaXMgbm90aGluZyBidXQgd2hpdGVzcGFjZSwgY29sbGFwc2UgaXQgYXMgdGhlIHNwZWMgc3RhdGVzOlxuICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNC9zdHJ1Y3QvdGV4dC5odG1sI2gtOS4xXG4gICAgaWYgKC9eXFxzKiQvLnRlc3QoY29udGVudCkpIHtcbiAgICAgICAgY29udGVudCA9ICcgJztcbiAgICB9XG4gICAgLy8gZG9uJ3QgYWRkIHdoaXRlc3BhY2Utb25seSB0ZXh0IG5vZGVzIGlmIHRoZXkgd291bGQgYmUgdHJhaWxpbmcgdGV4dCBub2Rlc1xuICAgIC8vIG9yIGlmIHRoZXkgd291bGQgYmUgbGVhZGluZyB3aGl0ZXNwYWNlLW9ubHkgdGV4dCBub2RlczpcbiAgICAvLyAgKiBlbmQgPiAtMSBpbmRpY2F0ZXMgdGhpcyBpcyBub3QgYSB0cmFpbGluZyB0ZXh0IG5vZGVcbiAgICAvLyAgKiBsZWFkaW5nIG5vZGUgaXMgd2hlbiBsZXZlbCBpcyAtMSBhbmQgbGlzdCBoYXMgbGVuZ3RoIDBcbiAgICBpZiAoKCFpZ25vcmVXaGl0ZXNwYWNlICYmIGVuZCA+IC0xICYmIGxldmVsICsgbGlzdC5sZW5ndGggPj0gMCkgfHwgY29udGVudCAhPT0gJyAnKSB7XG4gICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZShodG1sLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICBvcHRpb25zLmNvbXBvbmVudHMgfHwgKG9wdGlvbnMuY29tcG9uZW50cyA9IGVtcHR5KTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGN1cnJlbnQ7XG4gICAgdmFyIGxldmVsID0gLTE7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIHZhciBieVRhZyA9IHt9O1xuICAgIHZhciBpbkNvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgaHRtbC5yZXBsYWNlKHRhZ1JFLCBmdW5jdGlvbiAodGFnLCBpbmRleCkge1xuICAgICAgICBpZiAoaW5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICh0YWcgIT09ICgnPC8nICsgY3VycmVudC5uYW1lICsgJz4nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5Db21wb25lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpc09wZW4gPSB0YWcuY2hhckF0KDEpICE9PSAnLyc7XG4gICAgICAgIHZhciBpc0NvbW1lbnQgPSB0YWcuaW5kZXhPZignPCEtLScpID09PSAwO1xuICAgICAgICB2YXIgc3RhcnQgPSBpbmRleCArIHRhZy5sZW5ndGg7XG4gICAgICAgIHZhciBuZXh0Q2hhciA9IGh0bWwuY2hhckF0KHN0YXJ0KTtcbiAgICAgICAgdmFyIHBhcmVudDtcblxuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0NvbW1lbnQpIHtcbiAgICAgICAgICAgIGxldmVsKys7XG5cbiAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJzZVRhZyh0YWcpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gJ3RhZycgJiYgb3B0aW9ucy5jb21wb25lbnRzW2N1cnJlbnQubmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnR5cGUgPSAnY29tcG9uZW50JztcbiAgICAgICAgICAgICAgICBpbkNvbXBvbmVudCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY3VycmVudC52b2lkRWxlbWVudCAmJiAhaW5Db21wb25lbnQgJiYgbmV4dENoYXIgJiYgbmV4dENoYXIgIT09ICc8Jykge1xuICAgICAgICAgICAgICAgIHB1c2hUZXh0Tm9kZShjdXJyZW50LmNoaWxkcmVuLCBodG1sLCBsZXZlbCwgc3RhcnQsIG9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ5VGFnW2N1cnJlbnQudGFnTmFtZV0gPSBjdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBpZiB3ZSdyZSBhdCByb290LCBwdXNoIG5ldyBiYXNlIG5vZGVcbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJlbnQgPSBhcnJbbGV2ZWwgLSAxXTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnJbbGV2ZWxdID0gY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0NvbW1lbnQgfHwgIWlzT3BlbiB8fCBjdXJyZW50LnZvaWRFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWlzQ29tbWVudCkge1xuICAgICAgICAgICAgICAgIGxldmVsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWluQ29tcG9uZW50ICYmIG5leHRDaGFyICE9PSAnPCcgJiYgbmV4dENoYXIpIHtcbiAgICAgICAgICAgICAgICAvLyB0cmFpbGluZyB0ZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSdyZSBhdCB0aGUgcm9vdCwgcHVzaCBhIGJhc2UgdGV4dCBub2RlLiBvdGhlcndpc2UgYWRkIGFzXG4gICAgICAgICAgICAgICAgLy8gYSBjaGlsZCB0byB0aGUgY3VycmVudCBub2RlLlxuICAgICAgICAgICAgICAgIHBhcmVudCA9IGxldmVsID09PSAtMSA/IHJlc3VsdCA6IGFycltsZXZlbF0uY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgcHVzaFRleHROb2RlKHBhcmVudCwgaHRtbCwgbGV2ZWwsIHN0YXJ0LCBvcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgXCJodG1sXCIgcGFzc2VkIGlzbid0IGFjdHVhbGx5IGh0bWwsIGFkZCBpdCBhcyBhIHRleHQgbm9kZS5cbiAgICBpZiAoIXJlc3VsdC5sZW5ndGggJiYgaHRtbC5sZW5ndGgpIHtcbiAgICAgICAgcHVzaFRleHROb2RlKHJlc3VsdCwgaHRtbCwgMCwgMCwgb3B0aW9ucy5pZ25vcmVXaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBhdHRyUkUgPSAvKFtcXHctXSspfD18KFsnXCJdKShbLlxcc1xcU10qPylcXDIvZztcbnZhciB2b2lkRWxlbWVudHMgPSByZXF1aXJlKCd2b2lkLWVsZW1lbnRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhZykge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHZhciBleHBlY3RpbmdWYWx1ZUFmdGVyRXF1YWxzID0gdHJ1ZTtcbiAgICB2YXIgcmVzID0ge1xuICAgICAgICB0eXBlOiAndGFnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHZvaWRFbGVtZW50OiBmYWxzZSxcbiAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW11cbiAgICB9O1xuXG4gICAgdGFnLnJlcGxhY2UoYXR0clJFLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgaWYgKG1hdGNoID09PSAnPScpIHtcbiAgICAgICAgICAgIGV4cGVjdGluZ1ZhbHVlQWZ0ZXJFcXVhbHMgPSB0cnVlO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFleHBlY3RpbmdWYWx1ZUFmdGVyRXF1YWxzKSB7XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmVzLmF0dHJzW2tleV0gPSBrZXk7IC8vIGJvb2xlYW4gYXR0cmlidXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXk9bWF0Y2g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh2b2lkRWxlbWVudHNbbWF0Y2hdIHx8IHRhZy5jaGFyQXQodGFnLmxlbmd0aCAtIDIpID09PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnZvaWRFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzLm5hbWUgPSBtYXRjaDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLmF0dHJzW2tleV0gPSBtYXRjaC5yZXBsYWNlKC9eWydcIl18WydcIl0kL2csICcnKTtcbiAgICAgICAgICAgICAgICBrZXk9dW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgICAgZXhwZWN0aW5nVmFsdWVBZnRlckVxdWFscyA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcztcbn07XG4iLCJmdW5jdGlvbiBhdHRyU3RyaW5nKGF0dHJzKSB7XG4gICAgdmFyIGJ1ZmYgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgYnVmZi5wdXNoKGtleSArICc9XCInICsgYXR0cnNba2V5XSArICdcIicpO1xuICAgIH1cbiAgICBpZiAoIWJ1ZmYubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGJ1ZmYuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYnVmZiwgZG9jKSB7XG4gICAgc3dpdGNoIChkb2MudHlwZSkge1xuICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICByZXR1cm4gYnVmZiArIGRvYy5jb250ZW50O1xuICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgIGJ1ZmYgKz0gJzwnICsgZG9jLm5hbWUgKyAoZG9jLmF0dHJzID8gYXR0clN0cmluZyhkb2MuYXR0cnMpIDogJycpICsgKGRvYy52b2lkRWxlbWVudCA/ICcvPicgOiAnPicpO1xuICAgICAgICBpZiAoZG9jLnZvaWRFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gYnVmZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmZiArIGRvYy5jaGlsZHJlbi5yZWR1Y2Uoc3RyaW5naWZ5LCAnJykgKyAnPC8nICsgZG9jLm5hbWUgKyAnPic7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgICByZXR1cm4gZG9jLnJlZHVjZShmdW5jdGlvbiAodG9rZW4sIHJvb3RFbCkge1xuICAgICAgICByZXR1cm4gdG9rZW4gKyBzdHJpbmdpZnkoJycsIHJvb3RFbCk7XG4gICAgfSwgJycpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=