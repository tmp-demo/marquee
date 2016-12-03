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

];

var removeLayer = function(){
    
    var that = this.parentNode
      while(!that.classList.contains("snake-layer")){
        that = that.parentNode;
      }
    that.parentNode.removeChild(that);
    
  }

var NBlayers = 30
var layersDone = 0
var layerDone = function(){
  layersDOne++;
  if (layersDone >= NBlayers){
    console.log("done");
  }
}


  for(var i = 0; i < NBlayers; i++){

    (function(i){

      setTimeout(function(){


        var layer = document.createElement("div");
        layer.className = "snake-layer";
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
        var noiseIntervalId = setInterval(function(){
          vert.setAttribute("scrollamount", parseInt(vert.getAttribute("scrollamount")) + parseInt(noise[j][0])*3);
          horiz.setAttribute("scrollamount", parseInt(horiz.getAttribute("scrollamount")) + parseInt(noise[j][1])*3);
          j++;
          if(j >= noise.length){
            console.log("clearing interval" +noiseIntervalId);
            clearInterval(noiseIntervalId);
          }
        }, 1000)
        console.log("setting inteval :" + noiseIntervalId);

        setTimeout(function(){
          //vert.setAttribute("scrollamount",10+10*Math.random());
          //vert.setAttribute("direction", Math.random() < 0.5 ? "left" : "right" );
          vert.setAttribute("behavior","scroll");
          vert.setAttribute("loop","1");
          vert.addEventListener("finish", removeLayer);

          //horiz.setAttribute("scrollamount",10+10*Math.random());
          //horiz.setAttribute("direction", Math.random() < 0.5 ? "up": "down" );
          horiz.setAttribute("behavior","scroll");
          horiz.setAttribute("loop","1");
          horiz.addEventListener("finish", removeLayer);

        }, time-6000); 

      }, i*100);

    })(i);

    




  }


}