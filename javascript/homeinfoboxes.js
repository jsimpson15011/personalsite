var scrollPosition;!function(){for(var e,o=document.getElementsByClassName("home-animation-container"),t=document.getElementsByClassName("more-info-box"),i=document.getElementById("grey-out"),n=0;n<o.length;n++)o[n].addEventListener("click",s,!1);function s(){var o=0,n=this;for(scrollPosition=window.pageYOffset;null!=(n=n.previousSibling);)o++;t[e=(o-3)/2].classList.remove("hidden"),i.classList.remove("hidden"),$("html, body").css({overflow:"hidden",height:"100%"})}i.addEventListener("click",function(o){!function(o){'<div id="grey-out" class="hidden"></div>'==o.target&&console.log("its grey");console.log($(o.target).attr("id")),t[e].classList.add("hidden"),$("html, body").css({overflow:"auto",height:"auto"}),window.scrollBy(0,scrollPosition)}(o)},!1)}();