function ConteoRegresivo()
{
var fecha=new Date('2019','8','23','00','00','00')
var hoy=new Date()
var dias=0
var horas=0
var minutos=0
var segundos=0
if (fecha>hoy)
{
 var diferencia=(fecha.getTime()-hoy.getTime())/1000
 dias=Math.floor(diferencia/86400)
 diferencia=diferencia-(86400*dias)
 horas=Math.floor(diferencia/3600)
 diferencia=diferencia-(3600*horas)
 minutos=Math.floor(diferencia/60)
 diferencia=diferencia-(60*minutos)
 segundos=Math.floor(diferencia)
 document.getElementById('contador').innerHTML = '' + dias + ' : ' + horas + ' : ' + minutos + ' : ' + segundos;
  if (dias>0 || horas>0 || minutos>0 || segundos>0)
  {
   setTimeout("ConteoRegresivo()",1000)
  }
}
else
 {
 document.getElementById('contador').innerHTML = 'YA LLEGO LA PRIMAVERA!';
 }
}

var audio = new Audio('cronicamus.mp3');
audio.play();
