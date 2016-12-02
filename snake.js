function snake(callback){
  //effect last for 10 seconds
  setTimeout(callback, 10000);



  //get the dom element in which we want to draw
  var container = document.getElementById("snake");
  container.classList.toggle("hidden");


  for(var i = 0; i < 5; i++){

    var horiz = document.createElement("marquee");
    horiz.setAttribute("direction","left");
    horiz.setAttribute("behavior","alternate");
    horiz.setAttribute("truespeed","");
    horiz.setAttribute("scrollamount","2");
    horiz.setAttribute("scrolldelay","16");
    horiz.className ="snake-horiz";
    allthemarquee.lvlup();

    

    var vert = document.createElement("marquee");
    vert.setAttribute("direction","up");
    vert.setAttribute("behavior","alternate");
    vert.setAttribute("truespeed","");
    vert.setAttribute("scrollamount","2");
    vert.setAttribute("scrolldelay","16");
    vert.className ="snake-vert";
    allthemarquee.lvlup();

    var elem = document.createElement("div");
    elem.className = "snake-elem";





  }


}