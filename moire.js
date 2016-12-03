function moire(time,callback){
    //get the dom element in which we want to draw
  var container = document.getElementById("moire");
  container.classList.toggle("hidden");

  //effect last for 10 seconds
  setTimeout(function(){
    container.classList.toggle("hidden");
    callback();
  }, time);



  var fix=document.createElement("div");
  fix.className = "fix";
  var template = document.createElement("div");
  template.className = "moiree-line";

  for (var i = 0; i <  200 ; i++){
    var line = template.cloneNode();
    line.style.width = i*20+"px";
    line.style.height = i*20+"px";
    line.style.borderRadius = "100000px";
    line.style.top = (1080/2 - i*20/2)+"px";
    line.style.left = (1920/2 - i*20/2)+"px";
    
    fix.appendChild(line);
  }

  container.appendChild(fix);

  var move = fix.cloneNode(true);
  move.className="move";

  var m1=document.createElement("marquee");
  m1.setAttribute("direction","left");
  m1.setAttribute("behavior","alternate");
  m1.setAttribute("truespeed","");
  m1.setAttribute("scrollamount",2);
  m1.setAttribute("scrolldelay","30");
  m1.className ="moire-horiz";

  var m2=document.createElement("marquee");
  m2.setAttribute("direction","down");
  m2.setAttribute("behavior","alternate");
  m2.setAttribute("truespeed","");
  m2.setAttribute("scrollamount",2);
  m2.setAttribute("scrolldelay","30");
  m2.className ="moire-vert";




  m2.appendChild(move);
  m1.appendChild(m2);

  container.appendChild(m1);


}