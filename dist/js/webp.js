window.onload=function(){var e,t=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),a=t?parseInt(t[1]):0;if(!(e=document.createElement("canvas")).getContext||!e.getContext("2d")||0!=e.toDataURL("image/webp").indexOf("data:image/webp")||t&&!(a>=65))for(var n=document.querySelectorAll("div"),o=0;o<n.length;o++){var r=n[o].currentStyle||window.getComputedStyle(n[o],!1);n[o].style.backgroundImage=r.backgroundImage.replace(/.webp/gi,".png")||r.backgroundImage}};