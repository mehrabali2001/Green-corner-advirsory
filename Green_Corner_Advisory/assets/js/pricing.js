var modals=document.getElementsByClassName("modal"),btns=document.getElementsByClassName("openmodal"),spans=document.getElementsByClassName("close");for(let s=0;s<btns.length;s++)btns[s].onclick=function(){modals[s].style.display="block"};for(let s=0;s<spans.length;s++)spans[s].onclick=function(){modals[s].style.display="none"};window.onclick=function(s){s.target==modals&&(modals.style.display="none")};