let area=document.getElementById('area')
function changeBGcolor(color){
   // document.getElementById('area').style.backgroundColor=color
   area.style.changeBGcolor="none"
   area.style.backgroundColor=color
}
function changeTextcolor(color){
   // document.getElementById('area').style.color=color
   area.style.color=color
}
function changeFont(name){
  //  document.getElementById('area').style.fontFamily=name
area.style.fontFamily=name
}
function changeBGimage(bgname){
  //  area.style.background=`url(${bgname})`
  area.style.background=`url('${bgname}')`

}