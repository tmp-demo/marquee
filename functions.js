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

  snake(20000,function(){});
  /*
  disclaimer(function(){
    title(5000,function(){
      bottomScroller(function(){});
      rotating(20000,function(){
        snake(5000,function(){
          check(5000,function(){
            moire(5000,function(){
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 0ec680f... sdhgsoifhg
