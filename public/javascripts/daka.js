
var data = new Date();
var weekday = data.getDay();
var hours = data.getHours();
var minute = data.getMinutes();


var isWorkDay = function(){
   return weekday >=1 && weekday <= 5;
}

if(isWorkDay()){
  //setInterval(,2000);
  var hours = data.getHours();
  var minute = data.getMinutes();


}

function daka(){
  $.post('/xxx',{name:'',pwd:''},function(data){
    console.log(data);
  })
}

daka();
