function check(callback){

  //get the dom element in which we want to draw
  var container = document.getElementById("check");
  container.classList.toggle("hidden");

  //effect last for 10 seconds
  setTimeout(function(){
    container.classList.toggle("hidden");
    callback;
  }, 30000);



  var sizes = ["xl,l,m"];


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
  sizes.forEach(function(size){

    var checkersInstance = checkers.cloneNode(true);
    console.log(""+checkersInstance, checkersInstance);

    checkersInstance.classList.toggle(size);

    container.appendChild(checkersInstance);


  })







}