function greets(callback){
  var greetz = [
    "maman",
    "bière",
    "satan",
    "bière",
    "netscape",
    "cookie<3",
    "rm -rf /",
    "die()",
    "how do I stop this shit?",
    "kill *"
  ];

  var greetended = 0;

  function bye(){
    greetended++;
    if(greetended == greetz.length){
      document.getElementById('greets').classList.toggle('hidden');
      callback();
    }
  }

  document.getElementById('greets').classList.toggle('hidden');

  greetz.map(function(greet, i){
    var marqueeContainer = document.createElement('div');
    marqueeContainer.className = 'marquee-container';
    var marquee = document.createElement('marquee');
    marquee.setAttribute("direction", "left");
    marquee.setAttribute("behavior", "scroll");
    marquee.setAttribute("truespeed", "");
    marquee.setAttribute("loop", "1");
    marquee.setAttribute("scrolldelay", 16);
    var marqueetoprand = Math.round(Math.random() * (800 - 10) + 10);
    var scrollamountrand = Math.floor(Math.random() * (15 - 5) + 5);

    marquee.setAttribute("scrollamount", scrollamountrand);
    marquee.style.fontSize = 250*scrollamountrand+"%";
    marqueeContainer.style.top = marqueetoprand+"px";

    var marqueeDiv = document.createElement('div');
    marqueeDiv.innerHTML = greet;
    marquee.appendChild(marqueeDiv);
    marqueeContainer.appendChild(marquee);

    setTimeout(function(){
      document.getElementById('greets').appendChild(marqueeContainer);
      allthemarquee.lvlup();
    },1000 * (i+1));

    marquee.addEventListener("finish",function(){
      bye();
    });

  });

}