function snake(time,callback){
  //effect last for 10 seconds
  setTimeout(function(){
    container.classList.toggle("hidden");
    callback();
  }, time);



  //get the dom element in which we want to draw
  var container = document.getElementById("snake");
  container.classList.toggle("hidden");

  HTMLElement.prototype.appendFirst=function(childNode){
    if(this.firstChild)this.insertBefore(childNode,this.firstChild);
    else this.appendChild(childNode);
};


var noise=[
  [1,-1],
  [0, -1],
  [-1, 0],
  [0, 1],
  [0, 1],
  [1,-1],
  [0, -1],
  [-1, 0],
  [0, 1],
  [0, 1],
  [1,-1],
  [0, -1],
  [-1, 0],
  [0, 1],
  [0, 1],

]


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
        horiz.setAttribute("scrollamount","8");
        horiz.setAttribute("scrolldelay","25");
        horiz.className ="snake-horiz";
        allthemarquee.lvlup();

        layer.appendChild(horiz);


        var vert = document.createElement("marquee");
        vert.setAttribute("direction","left");
        vert.setAttribute("behavior","alternate");
        vert.setAttribute("truespeed","");
        vert.setAttribute("scrollamount","8");
        vert.setAttribute("scrolldelay","25");
        vert.className ="snake-vert";
        allthemarquee.lvlup();

        horiz.appendChild(vert);

        var elem = document.createElement("div");
        elem.className = "snake-elem";

        vert.appendChild(elem); 


        var j = 0;
        setInterval(function(){
          vert.setAttribute("scrollamount", parseInt(vert.getAttribute("scrollamount")) + parseInt(noise[j][0])*3);
          horiz.setAttribute("scrollamount", parseInt(horiz.getAttribute("scrollamount")) + parseInt(noise[j][1])*3);
          j++;
        }, 1000)

      }, i*100);

    })(i);

    




  }


}