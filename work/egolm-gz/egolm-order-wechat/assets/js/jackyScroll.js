var jackyScroll=(function(){var _upSupportTouch=!((window.DocumentTouch&&document instanceof window.DocumentTouch)||"ontouchstart" in window)*1,_event={start:["touchstart","mousedown"][_upSupportTouch],move:["touchmove","mousemove"][_upSupportTouch],end:["touchend","mouseup"][_upSupportTouch]};var _scroller=function(container,direction,params){var key="top",Key="Top",size="height",Size="Height",pageKey="pageY";if(direction=="horizontal"){key="left";Key="Left";size="width";Size="Width";pageKey="pageX"}var scroller=null;if(params.hideScrollBar==false){scroller=document.createElement("div");scroller.className="scroller_"+direction;params.container.appendChild(scroller)}var sizeContainer=container["client"+Size],sizeContainerWithScroll=0;var fnPosScroll=function(){if(scroller==null){return}var sizeScroller=scroller.style[size].replace("px",""),keyScroller=container["scroll"+Key]/(sizeContainerWithScroll-sizeContainer)*(sizeContainer-sizeScroller);if(sizeContainer-sizeScroller-keyScroller<=0){keyScroller=sizeContainer-sizeScroller}scroller.style[key]=keyScroller+"px"};var pos={};container.addEventListener(_event.start,function(event){sizeContainerWithScroll=this["scroll"+Size];pos[pageKey]=event.touches?event.touches[0][pageKey]:event[pageKey];pos[key]=this["scroll"+Key];document.moveFollow=true;if(scroller&&sizeContainerWithScroll>sizeContainer){scroller.style.opacity=1;scroller.style[size]=(sizeContainer*sizeContainer/sizeContainerWithScroll)+"px";fnPosScroll()}});container.addEventListener(_event.move,function(event){if(_upSupportTouch==false||(document.moveFollow==true)){this["scroll"+Key]=pos[key]+(pos[pageKey]-(event.touches?event.touches[0][pageKey]:event[pageKey]));fnPosScroll();params.onScroll.call(this,event)}event.preventDefault()});container.addEventListener(_event.end,function(event){scroller&&(scroller.style.opacity=0)});if(_upSupportTouch==true){document.addEventListener("mouseup",function(){this.moveFollow=false})}};return function(container,options){options=options||{};var params=new Object({verticalScroll:true,horizontalScroll:false,hideScrollBar:false,onScroll:function(){}}),key;for(key in options){params[key]=options[key]}if(window.getComputedStyle(container).position=="static"){container.style.position="relative"}var childerns=container.childNodes,fragment=document.createDocumentFragment();[].slice.call(childerns).forEach(function(child){fragment.appendChild(child)});var wrap=document.createElement("div");wrap.style.height="100%";wrap.style.width="100%";wrap.style.overflow="hidden";container.appendChild(wrap);wrap.appendChild(fragment);params.container=container;if(params.verticalScroll==true){_scroller(wrap,"vertical",params)}if(params.horizontalScroll==true){_scroller(wrap,"horizontal",params)}}})();