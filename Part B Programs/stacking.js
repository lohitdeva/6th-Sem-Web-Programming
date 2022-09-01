var oldtop = 'c1';

function toTop(newtop){
  document.getElementById(oldtop).style.zIndex = 0;
  document.getElementById(newtop).style.zIndex = 10;
  oldtop = newtop;
}
