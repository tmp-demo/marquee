

    var scrollText = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588...";
    //"No animals were harmed during the making of this demo. We cannot guarantee that your eyes or sensibility won't be, though.",
//"Mozilla Developer Network states about marquee that : This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. Try to avoid using it.",
//"Please note that this demo may not work correctly on Netscape.",
//"What about IE though?",
//"Don't know. Don't care.",
//"Congratulations, you read the scroller this far, you won a penis enlargment kit, please claim your reward at the end of the demo party.",
//"Always wondered what was the last decimal of Pi?",
//"Let's find out:",
//"3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588...",
//"Just joking. Please do inform us if you do though.",
//"Do you like do far? If you do, please imitate Chewbacca's scream right now.",
//"Wow. Please stop, that was weird.",
//"Talking about Pi, as you may know, there's absolutely no pattern in the decimals of Pi, so if you make a conversion table to unicode characters, you'll be able to find any text that has been written, or will ever be written. Including this demo.",
//"You still there?",
//"Oh good.",
//"Any minute now."

    var subs = [];
    var footer = document.getElementById("bottom-footer");
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
    for(line in scrollText)

    for(i in line){
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
