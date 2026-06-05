// Les variables dont on a besoins  
var sp, btn_start, btn_stop, t, m, ms, s, h, mn;

// Les fonctions pour l'initialiser les variables 
window.onload = function(){
  sp = document.getElementsByTagName("span");
  btn_start = document.getElementById("start");
  btn_stop = document.getElementById("stop");
  t; 
  ms = 0, s= 0, mn = 0, h = 0;
} 
//mettre en place le compteur 
 function update_chrono(){
  ms+=1;
  if( ms==100 ){
    ms=1;
    s+=1;
 }
 if( s==60 ){
    s=0;
    mn+=1;
 }
 if( mn==60 ){
    mn=0;
    h+=1;
 } 
 }
 //Insertion des valeurs dans les span 
 // [0] pour les heures, [1] pour les minutes, [2] pour les secondes et [3] pour les millisecondes
 sp[0].innerHTML = h + " h";
 sp[1].innerHTML = mn + " min";
 sp[2].innerHTML = s + " s";
  sp[3].innerHTML = ms + " ms";