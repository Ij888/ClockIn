
var wRite = function(){
    var dateTime = new Date();
    var day = dateTime.getDate();
    var month = dateTime.getMonth() + 1;
    var year = dateTime.getFullYear();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second= dateTime.getSeconds();
    
    var myDate = day+"."+month+"."+year+" @ "+hour+":"+minute+":"+second;

    document.getElementById("shell").innerHTML = myDate;
}

//var eVent = function(){
// alert(3445);
//}

var addComponent = function(){
    document.createElement("table");
    
}