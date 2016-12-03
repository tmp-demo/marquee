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

function start(){

  rotating(function(){});

/*
  disclaimer(function(){
    title(function(){
      bottomScroller(function(){});
      rotating(function(){
        snake(function(){
          check(function(){
            moire(function(){
              greets(function(){
                starfield(function(){console.log('END');});
              });
            });
          });
        });
      });
    });
  });
*/
}
