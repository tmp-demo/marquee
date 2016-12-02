var allthemarquee = {
  count: null,
  callback:null,
  lvlup: function(i = 1){
    this.count+=i;
    if(!this.callback){
      console.log('callback not set');
    }else{
      this.callback();
    }
  },
  init:function(cb){
    this.callback = cb;
    this.count = 0;
  }
};