// init allthemarquee
allthemarquee.init(function(){
  document.getElementById('marquee-counter').innerHTML = this.count;
});

// add the starter marquee
allthemarquee.lvlup();

document.addEventListener("keypress", function(e){
  if(e.keyCode==13){
    document.getElementById('starter').classList.toggle('hidden');
    start();
  }
});

function start(){
  //disclaimer(function(){
    //title(function(){
      //bottomScroller(function(){});
      //snake(function(){
        check(function(){
          moire(function(){
            greets(function(){
              starfield(function(){console.log('END');});
            });
          });
        });
      //});
    //});
  //});
}