

    var scrollText = "Here is some text for my scroller. It has to be pretty long as in every fucking scroller demo...."

    var subs = [];
    var scroll = document.getElementById("bottom-scroller");
    var i = 0;

    var stopMe = function(i){
      return function(){
        //console.log(this);
        var sub = this;
        setTimeout(function(){
          sub.stop();
          sub.removeEventListener("start", stopMe);

          setTimeout(function(){
            sub.start();
          },(i+1)*20); 

        },0);
      };      
    }

    for(i in scrollText){
      //i, scrollText[i]
      //create another vertical marquee
      //stop it
      //append it to the content of scroll
      //start it after a certain time.

        var sub = document.createElement("marquee");
        var t = document.createTextNode(scrollText[i]); 
        sub.setAttribute("direction","down");
        sub.setAttribute("behavior","alternate");
        sub.setAttribute("truespeed","");
        sub.setAttribute("scrollamount","1");
        sub.setAttribute("scrolldelay","15");
        sub.className ="scroller-letter";
        sub.addEventListener("start",stopMe(i));
        
        sub.appendChild(t);   
        scroll.appendChild(sub);
        subs.push(sub);

    }


 //       subs.forEach(function(elem, index){
//
//
 //         (function(elem,index){
 //           return function(){
 //             setTimeout(function(){
 //             console.log("started", index);
 //             elem.start();
 //           },(index+1)*60);
 //         }})(elem, index);
//
//
 //       });
