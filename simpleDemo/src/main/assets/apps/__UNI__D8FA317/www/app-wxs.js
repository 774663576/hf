var __wxsModules={};
__wxsModules["790a5977"]=(()=>{var X=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var k=X((q,W)=>{var c=10,f=!1;typeof window=="object"&&(f=!0);function D(a,e,r,t){var i=t.getState();if(S(t,r),a&&a!=="none"){s(a,t,r);return}i.left&&s("none",t,r),b(t)}function v(a,e){var r=a.instance,t=r.getDataset().disabled,i=r.getState();S(r,e),t=(typeof t=="string"?JSON.parse(t):t)||!1,!t&&(r.requestAnimationFrame(function(){r.removeClass("ani"),e.callMethod("closeSwipe")}),i.x=i.left||0,C(a,e))}function g(a,e){var r=a.instance,t=r.getDataset().disabled,i=r.getState();t=(typeof t=="string"?JSON.parse(t):t)||!1,!t&&(x(a),i.direction==="horizontal"&&(a.preventDefault&&a.preventDefault(),p(i.x+i.deltaX,r,e)))}function m(a,e){var r=a.instance,t=r.getDataset().disabled,i=r.getState();t=(typeof t=="string"?JSON.parse(t):t)||!1,!t&&M(i.left,r,e)}function p(a,e,r){a=a||0;var t=e.getState(),i=t.leftWidth,n=t.rightWidth;t.left=Y(a,-n,i),e.requestAnimationFrame(function(){e.setStyle({transform:"translateX("+t.left+"px)","-webkit-transform":"translateX("+t.left+"px)"})})}function S(a,e){var r=a.getState(),t=e.selectComponent(".button-group--left"),i=e.selectComponent(".button-group--right"),n={width:0},o={width:0};n=t.getBoundingClientRect(),o=i.getBoundingClientRect(),r.leftWidth=n.width||0,r.rightWidth=o.width||0,r.threshold=a.getDataset().threshold}function Y(a,e,r){return Math.min(Math.max(a,e),r)}function M(a,e,r){var t=e.getState(),i=t.threshold,n=t.position,o=t.isopen||"none",h=t.leftWidth,d=t.rightWidth;if(t.deltaX===0){s("none",e,r);return}o==="none"&&d>0&&-a>i||o!=="none"&&d>0&&d+a<i?s("right",e,r):o==="none"&&h>0&&a>i||o!=="none"&&h>0&&h-a<i?s("left",e,r):s("none",e,r)}function s(a,e,r){var t=e.getState(),i=t.leftWidth,n=t.rightWidth,o="";switch(t.isopen=t.isopen?t.isopen:"none",a){case"left":o=i;break;case"right":o=-n;break;default:o=0}t.isopen!==a&&(t.throttle=!0,r.callMethod("change",{open:a})),t.isopen=a,e.requestAnimationFrame(function(){e.addClass("ani"),p(o,e,r)})}function A(a,e){return a>e&&a>c?"horizontal":e>a&&e>c?"vertical":""}function b(a){var e=a.getState();e.direction="",e.deltaX=0,e.deltaY=0,e.offsetX=0,e.offsetY=0}function C(a){var e=a.instance,r=e.getState();b(e);var t=a.touches[0];f&&u()&&(t=a),r.startX=t.clientX,r.startY=t.clientY}function x(a){var e=a.instance,r=e.getState(),t=a.touches[0];f&&u()&&(t=a),r.deltaX=t.clientX-r.startX,r.deltaY=t.clientY-r.startY,r.offsetY=Math.abs(r.deltaY),r.offsetX=Math.abs(r.deltaX),r.direction=r.direction||A(r.offsetX,r.offsetY)}function u(){for(var a=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],r=!0,t=0;t<e.length-1;t++)if(a.indexOf(e[t])>0){r=!1;break}return r}var l=!1;function N(a,e){!f||!u()||(v(a,e),l=!0)}function O(a,e){!f||!u()||!l||g(a,e)}function P(a,e){!f||!u()||(m(a,e),l=!1)}function T(a,e){!f||!u()||(l=!1)}W.exports={showWatch:D,touchstart:v,touchmove:g,touchend:m,mousedown:N,mousemove:O,mouseup:P,mouseleave:T}});return k();})();
