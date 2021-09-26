//variables
var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH"); 
var currentHourInt = parseInt(currentHour); 

//data attributes for each hour so function can assign color depending on time of day
$("#9hour").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10hour").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#11hour").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#12hour").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#1hour").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2hour").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3hour").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4hour").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5hour").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));


//Start JQuery
$(document).ready(function () {

    //store inserted data
    renderPlans();

    //show current date and time in header
    $("#todayDay").append();

    function addDate() {
        $("#todayDay").html(moment().format('MMMM Do YYYY, h:mm a'));
    } setInterval(addDate, 1000);

    // Change row color depending on current hour
    for (var i = 0; i <= 12; i++) {
        var inputHour = $("#" + i + "hour").attr("data-time"); 
        var inputHourInt = parseInt(inputHour); 

        if (currentHourInt === inputHourInt) {
            $("#" + i + "hour").addClass("present"); 
        }
        if (currentHourInt > inputHourInt) { 
            $("#" + i + "hour").addClass("past");
        }
        if (currentHourInt < inputHourInt) {
            $("#" + i + "hour").addClass("future");
        }
    };

    // inserted data saved to local storage with button click
    saveBtn.on("click", function () { 

        var rowHour = $(this).attr("hour-row"); 
        var input = $("#" + rowHour + "hour").val(); 
        localStorage.setItem(rowHour, input); 
    });

        // retrieve stored input 
        function renderPlans() {
            for (var i = 0; i <= 12; i++) {
            $("#" + i + "hour").val(localStorage.getItem(i));
            }
        }
});