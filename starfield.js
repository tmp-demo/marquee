function starfield(callback){
  function blackHolehoriz(){
    var eventHoriz = this.parentNode;
    eventHoriz.parentNode.removeChild(eventHoriz);
  }

  function blackHoleverti(){
    var eventHoriz = this.parentNode.parentNode;
    eventHoriz.parentNode.removeChild(eventHoriz);
  }

  function bigBang(){
  i = (i + 1) % k;

    var sub = quarters[i].cloneNode(true);
    sub.setAttribute('style','display:block')
  var scrollAmountHoriz = Math.round(Math.random() * 16 + 3);
  var scrollAmountVerti = Math.round(16 - scrollAmountHoriz + 4);
  var subHoriz = sub.querySelector('.horiz');
  var subVerti = sub.querySelector('.verti');
  subHoriz.setAttribute('scrollamount',scrollAmountHoriz);
  subVerti.setAttribute('scrollamount',scrollAmountVerti);
    document.getElementById('universe').appendChild(sub);
    sub.querySelector('marquee').addEventListener('finish', blackHolehoriz);
    sub.querySelector('marquee marquee').addEventListener('finish', blackHoleverti);
    window.setTimeout(bigBang,Math.round(Math.random() * 150));
  }

  var quarters = document.querySelectorAll('.quarter');
  
  for(var i = 0; i < quarters.length; i++){
  quarters[i].parentNode.removeChild(quarters[i]);
  }

  var k = quarters.length;
  var i = Math.floor((Math.random() * 4) + 0);

  window.setTimeout(bigBang, 50);
  window.setTimeout(bigBang, 70);
  window.setTimeout(bigBang, 150);

  window.setInterval(function(){
    var marquees = document.querySelectorAll(".quarter marquee");
    Array.prototype.forEach.call(marquees, function(elem){
      var scrollamountelem = Math.round(elem.getAttribute("scrollamount") * 
      1.1);
      elem.setAttribute('scrollamount', scrollamountelem);
    })
    
    var stars = document.querySelectorAll(".star");
    Array.prototype.forEach.call(stars, function(elem){
      var starssize = elem.style.width;
      var speedh = elem.parentNode.parentNode.getAttribute('scrollamount');
      var speedv = elem.parentNode.getAttribute('scrollamount');
      var speed = Math.sqrt(speedh * speedh + speedv * speedv);
      
      var growth = 1.01;
      if(speed < 15){growth = 1.00001;}else
      if(speed < 20){growth = 1.0001;}else
      if(speed < 35){growth = 1.001;}
      else{growth = 1.01;}
      starssize = Math.ceil(parseFloat(starssize) * growth);
      elem.style.width = starssize + 'px';
      elem.style.height = starssize + 'px';
    })
  },100);
  
  window.setTimeout(function(){
    callback();
  },8000);
}