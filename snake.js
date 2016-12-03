function snake(callback){
  //effect last for 10 seconds
  setTimeout(function(){
    container.classList.toggle("hidden");
    callback();
  }, 30000);



  //get the dom element in which we want to draw
  var container = document.getElementById("snake");
  container.classList.toggle("hidden");

  HTMLElement.prototype.appendFirst=function(childNode){
    if(this.firstChild)this.insertBefore(childNode,this.firstChild);
    else this.appendChild(childNode);
};


  for(var i = 0; i < 30; i++){

    (function(i){

      setTimeout(function(){


        var layer = document.createElement("div");
        layer.className = "snake-layer"
        container.appendFirst(layer);

        var horiz = document.createElement("marquee");
        horiz.setAttribute("direction","up");
        horiz.setAttribute("behavior","alternate");
        horiz.setAttribute("truespeed","");
        horiz.setAttribute("scrollamount","6");
        horiz.setAttribute("scrolldelay","16");
        horiz.className ="snake-horiz";
        allthemarquee.lvlup();

        layer.appendChild(horiz);


        var vert = document.createElement("marquee");
        vert.setAttribute("direction","left");
        vert.setAttribute("behavior","alternate");
        vert.setAttribute("truespeed","");
        vert.setAttribute("scrollamount","6");
        vert.setAttribute("scrolldelay","16");
        vert.className ="snake-vert";
        allthemarquee.lvlup();

        horiz.appendChild(vert);

        var elem = document.createElement("div");
        elem.className = "snake-elem";

        vert.appendChild(elem); 

      }, i*70);

    })(i);

    




  }


}