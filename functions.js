// init allthemarquee
allthemarquee.init(function(){
  document.getElementById('marquee-counter').innerHTML = this.count;
});

//disclaimer(function(){
  title(function(){
    console.log('finish title');
    bottomScroller(function(){
      console.log("finish bottomScroller");
    })
  });
//});