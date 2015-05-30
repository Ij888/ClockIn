/*function my_curr_date() {      
    var currentDate = new Date()
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var my_date = month+"-"+day+"-"+year;
    document.getElementById("shell").value = my_date;    
}
*/

var wRite = function(){
    var dateTime = new Date();
    var day = dateTime.getDate();
    var month = dateTime.getMonth() + 1;
    var year = dateTime.getFullYear();
    var hour = dateTime.getHour();
    var minute = dateTime.getMinute();
    var second= dateTime.getSecond();
    
    var myDate = day+"-"+month+"-"+year;

    document.getElementById("").innerHTML = myDate;
}