function rotating(time,callback){
    //get the dom element in which we want to draw
  var container = document.getElementById("rotating");
  container.classList.toggle("hidden");

  //effect last for 10 seconds
  setTimeout(function(){
    container.classList.toggle("hidden");
    callback();
  }, time);


  var text = "Behold ! You are currently viewing the one and only CSS animation, and it's only a rotation !";


  var circle = document.getElementById("circle");
  console.log(circle);


    allthemarquee.lvlup();
    
    allthemarquee.lvlup();


  var spinInterval = 2;

  for(var i in text){
    var letterSpan = document.createElement("span");
    letterSpan.appendChild(document.createTextNode(text[i]));
    letterSpan.style.transform = "rotate("+(i%10)*36+"deg)";
    letterSpan.style.visibility = "hidden";
    circle.appendChild(letterSpan);
    
    var delay = i * spinInterval * 1000 / 10;
    
    window.setTimeout(function(letterSpan){
      return function(){
        letterSpan.style.visibility = "visible";
      }
    }(letterSpan), delay );
    
    window.setTimeout(function(letterSpan){
      return function(){
        letterSpan.style.visibility = "hidden";
      }
    }(letterSpan), delay + spinInterval*1000 * 9 / 10 );
    
    
  }

}