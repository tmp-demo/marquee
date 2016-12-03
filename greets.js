function greets(callback){
  var greetz = [
    "aaaaaaaaa",
    "bbbbbbbbbbbb",
    "ccccc",
    "dddddddd",
    "eeeee eeeeee",
    "fffffff fffffff",
    "ggggggg",
    "hhhhhhhhh",
    "iiiiiiiiiii iiii",
    "hhhhhhhhh hhhhhhh"
  ];

  document.getElementById('greets').classList.toggle('hidden');

  greetz.map(function(greet, i){
    var marqueeContainer = document.createElement('div');
    marqueeContainer.className = 'marquee-container';
    marqueeContainer.style.top = "10px";
    var marquee = document.createElement('marquee');
    marquee.setAttribute("direction", "left");
    marquee.setAttribute("behavior", "scroll");
    marquee.setAttribute("truespeed", "");
    marquee.setAttribute("loop", "1");

    var scrollamountrand = 5; //Math.floor(Math.random() * (7 - 5) + 5);
    //console.log(scrollamountrand);
    marquee.setAttribute("scrollamount", scrollamountrand);
    var scrolldelayrand = 16; //Math.floor(Math.random() * (22 - 16) + 22);
    //console.log(scrolldelayrand);
    marquee.setAttribute("scrolldelay", scrolldelayrand);

    var marqueeDiv = document.createElement('div');
    marqueeDiv.innerHTML = greet;
    marquee.appendChild(marqueeDiv);
    marqueeContainer.appendChild(marquee);

    setTimeout(function(){
      document.getElementById('greets').appendChild(marqueeContainer);
      allthemarquee.lvlup();
    },800 * (i+1));

  });

  var greetended = 0;

  function bye(){
    greetended++;
    if(greetended = greetz.length){
      document.getElementById('greets').classList.toggle('hidden');
      callback();
    }
  }

  document.getElementById('greets').addEventListener("finish",function(){
    bye();
  });

}