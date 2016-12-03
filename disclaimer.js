function disclaimer(callback){
  document.getElementById('disclaimer').classList.toggle('hidden');
  var intervalDisclaimer;

  var disclaimer = document.querySelector('#disclaimer');
  var disclaimerMarquee = document.createElement('marquee');
  disclaimerMarquee.setAttribute("direction", "left");
  disclaimerMarquee.setAttribute("behavior", "scroll");
  disclaimerMarquee.setAttribute("truespeed","");
  disclaimerMarquee.setAttribute("scrollamount", "7");
  disclaimerMarquee.setAttribute("scrolldelay", "16");
  disclaimerMarquee.setAttribute("loop", "1");
  disclaimerMarquee.innerHTML = "If you suffer from epilepsy, please note that this demo may not be suitable for you, so turn around and refer on other people face's reactions to judge what's on the screen.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Viewer discretion is advised, every animation and motion in this demo is based on a single piece of technology, or shall we say, on a single piece of retrology.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ladies, gentlemen, and all the folks in between or apart, we present you tonight a demo only based on:";
  disclaimer.appendChild(disclaimerMarquee);
  // disclaimer marquee
  allthemarquee.lvlup();

  var accelerateDisclaimer = function(){
    var scrollamount = parseInt(disclaimerMarquee.getAttribute('scrollamount')) + 1;
    disclaimerMarquee.setAttribute('scrollamount', scrollamount);
  };

  setTimeout(function(){
    intervalDisclaimer = setInterval(accelerateDisclaimer,160*3);
  },1000);

  disclaimerMarquee.addEventListener("finish",function(){
    clearInterval(intervalDisclaimer);
    document.getElementById('disclaimer').classList.toggle('hidden');
    callback();
  });

}