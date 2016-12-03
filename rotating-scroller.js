function rotating(callback){
    //get the dom element in which we want to draw
  var container = document.getElementById("rotating");
  container.classList.toggle("hidden");

  //effect last for 10 seconds
  setTimeout(function(){
    container.classList.toggle("hidden");
    callback;
  }, 300000);

  

}