function check(time,callback){

  //get the dom element in which we want to draw
  var container = document.getElementById("check");
  container.classList.toggle("hidden");

  //effect last for 10 seconds
  setTimeout(function(){
    container.classList.toggle("hidden");
    callback();
  }, time);

  var sizes = ["xl","l","m"];
  var speeds = [15,10,5];

  //prepare the checkerboard first
  var checkers = document.createElement("div");
  checkers.className = "checkers";
  var rowTemplate = document.createElement("tr");

  for (var i = 0; i < 80; i++) {
    rowTemplate.appendChild(document.createElement("td"));
  }

  var tableTemplate = document.createElement("table");
  var tbodyTemplate = document.createElement("tbody");

  for (var i = 0; i < 80; i++) {
    tbodyTemplate.appendChild(rowTemplate.cloneNode(true));
  }
  tableTemplate.appendChild(tbodyTemplate);

  checkers.appendChild(tableTemplate);

  //for each size, append a new checker board
  sizes.map(function(size,i){

    var c = document.createElement("div");
    c.className = "container";

      //now place this in marquees
    var m1 = document.createElement("marquee");
    m1.setAttribute("direction","left");
    m1.setAttribute("behavior","alternate");
    m1.setAttribute("truespeed","");
    m1.setAttribute("scrollamount",speeds[i]);
    m1.setAttribute("scrolldelay","16");
    m1.className ="checker-horiz";
    allthemarquee.lvlup();

    var m2 = document.createElement("marquee");
    m2.setAttribute("direction","up");
    m2.setAttribute("behavior","alternate");
    m2.setAttribute("truespeed","");
    m2.setAttribute("scrollamount",speeds[i]);
    m2.setAttribute("scrolldelay","16");
    m2.className ="checker-vert";
    allthemarquee.lvlup();


    var checkersInstance = checkers.cloneNode(true);
    //console.log(""+checkersInstance, checkersInstance);

    checkersInstance.classList.toggle(size);

    m2.appendChild(checkersInstance);
    m1.appendChild(m2);

    c.appendChild(m1)

    container.appendChild(c);

  })

}