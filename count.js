var allthemarquee = {
  count: null,
  callback:null,
  lvlup: function(i = 1){
    this.count+=i;
    callback();
  },
  init:function(cb){
    this.callback = cb;
    this.count = 0;
  }
};