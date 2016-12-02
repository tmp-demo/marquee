// init allthemarquee
allthemarquee.init(function(){
  document.getElementById('marquee-counter').innerHTML = this.count;
});

// disclaimer marquee
allthemarquee.lvlup();

var disclaimer = document.querySelector('#disclaimer marquee');

var accelerateDisclaimer = function(){
  var scrollamount = parseInt(disclaimer.getAttribute('scrollamount')) + 1;
  disclaimer.setAttribute('scrollamount', scrollamount);
};

setTimeout(function(){
  setInterval(accelerateDisclaimer,160*3);
},1000);

disclaimer.addEventListener("finish",function(){
  clearInterval(accelerateDisclaimer);
});