function title(callback){
  document.getElementById('title').classList.toggle('hidden');

  var titleMarqueeH = document.createElement('marquee');
  titleMarqueeH.id = 'titleH';
  titleMarqueeH.setAttribute("direction", "down");
  titleMarqueeH.setAttribute("behavior", "alternate");
  titleMarqueeH.setAttribute("truespeed","");
  titleMarqueeH.setAttribute("scrollamount", "5");
  titleMarqueeH.setAttribute("scrolldelay", "16");
  var titleMarqueeV = document.createElement('marquee');
  titleMarqueeV.id = 'titleV';
  titleMarqueeV.setAttribute("direction", "left");
  titleMarqueeV.setAttribute("behavior", "alternate");
  titleMarqueeV.setAttribute("truespeed","");
  titleMarqueeV.setAttribute("scrollamount", "3");
  titleMarqueeV.setAttribute("scrolldelay", "16");
  titleMarqueeV.innerHTML = "&lt;marquee&gt;";
  titleMarqueeH.appendChild(titleMarqueeV);
  allthemarquee.lvlup();
  document.getElementById('title').appendChild(titleMarqueeH);
  allthemarquee.lvlup();

  setTimeout(function(){
    document.getElementById('title').classList.toggle('hidden');
    callback();
  }, 5000);
}