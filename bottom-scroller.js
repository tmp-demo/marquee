function bottomScroller(calback){

  var scrollText = ["No animals were harmed during the making of this demo.",
    "Mozilla Developer Network states about <marquee> that :",
    "This feature is obsolete.",
    "Although it may still work in some browsers, [...] Try to avoid using it.",
    "For you pleasure, coded by Gruck and Sascha, sound by Nekozilla."
    "Please note that this demo may not work correctly on Netscape.",
    "Congratulations, you read the scroller this far, you won a penis enlargment kit,",
    "Do you like it so far? If you do, please imitate Chewbacca's scream right now."
    ];

  var footer = document.getElementById("footer");
  footer.classList.toggle("hidden");

  var j= 0;

  var stopMe = function(i){
    return function(){
      //console.log(this);
      var sub = this;
      setTimeout(function(){
        sub.stop();
        sub.removeEventListener("start", stopMe);

        setTimeout(function(){
          sub.start();
        },(i+1)*10); 

      },0);
    };      
  }

  var removeMe = function(){
    if(j < scrollText.length){
      showLine(++j);
    }else{
      //done scrolling
      calback();
    }
    this.parentNode.removeChild(this);
    //add the next line if not the last
    
  }

  var showLine = function(lineIndex){

    i = 0;

    var horiz = document.createElement("marquee");
    horiz.setAttribute("direction","left");
    horiz.setAttribute("behavior","scroll");
    horiz.setAttribute("truespeed","");
    horiz.setAttribute("scrollamount","8");
    horiz.setAttribute("scrolldelay","18");
    horiz.setAttribute("loop","1");
    horiz.className ="scroller-horiz";
    horiz.addEventListener("finish", removeMe);
    allthemarquee.lvlup();

    for(i in scrollText[lineIndex]){
      //i, scrollText[i]
      //create another vertical marquee
      //stop it
      //append it to the content of scroll
      //start it after a certain time.

        var sub = document.createElement("marquee");
        var t = document.createTextNode(scrollText[lineIndex][i]); 
        sub.setAttribute("direction","down");
        sub.setAttribute("behavior","alternate");
        sub.setAttribute("truespeed","");
        sub.setAttribute("scrollamount","3");
        sub.setAttribute("scrolldelay","16");
        sub.className ="scroller-letter";
        sub.addEventListener("start",stopMe(i));
        allthemarquee.lvlup();
        sub.appendChild(t);   
        horiz.appendChild(sub);

    }

    footer.appendChild(horiz);


  }

  showLine(0);
}

    




