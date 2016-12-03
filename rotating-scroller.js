function rotating(callback){
    //get the dom element in which we want to draw
  var container = document.getElementById("rotating");
  container.classList.toggle("hidden");

  //effect last for 10 seconds
  setTimeout(function(){
    container.classList.toggle("hidden");
    callback();
  }, 30000);


  var text = "Behold ! You are currently viewing the one and only CSS animation, and it's only a rotation !";

}