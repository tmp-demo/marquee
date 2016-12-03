// init allthemarquee
allthemarquee.init(function(){
  document.getElementById('marquee-counter').innerHTML = this.count;
});

// add the starter marquee
allthemarquee.lvlup();

function keypresstamere(e){
  if(e.keyCode==13){
    document.getElementById('starter').classList.toggle('hidden');
    start();
    window.removeEventListener("keypress", keypresstamere);
  }
}

window.addEventListener("keypress", keypresstamere);

function thisistheend(){
  var marqueeCounter = document.getElementById('marquee-counter');
  marqueeCounter.style.right = "initial";
  marqueeCounter.style.left = "700px";
  marqueeCounter.style.top = "250px";
  marqueeCounter.style.fontSize = "2000%";
  document.getElementById('countertxt').classList.toggle('hidden');
}

function start(){
  disclaimer(function(){
    title(8000,function(){
      bottomScroller(function(){});
      rotating(30000,function(){
        snake(30000,function(){
          check(30000,function(){
            moire(20000,function(){
              greets(function(){
                starfield(20000,function(){
                  thisistheend();
                ;});
              });
            });
          });
        });
      });
    });
  });
}