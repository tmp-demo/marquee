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
                starfield(1000,function(){
                  thisistheend();
                ;});
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
