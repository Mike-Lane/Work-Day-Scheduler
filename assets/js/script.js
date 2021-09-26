
//Pulls current date and time and writes it to DATE paragraph
var currentDate  = new Date(),
    currentDay   = currentDate.getDate() < 10 
                ? '0' + currentDate.getDate() 
                : currentDate.getDate(),
    currentMonth = currentDate.getMonth() < 9 
                ? '0' + (currentDate.getMonth() + 1) 
                : (currentDate.getMonth() + 1);

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

document.getElementById("date").innerHTML = day + ' - ' + currentMonth + '/' + currentDay + '/' +  currentDate.getFullYear();


var timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var currentTime = moment().format("h A");

var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH"); 
var currentHourInt = parseInt(currentHour); 


$("#9hour").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10hour").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11hour").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12hour").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1hour").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2hour").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3hour").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4hour").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5hour").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

