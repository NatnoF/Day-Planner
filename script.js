// Global Variables
var date = $("#currentDay");
var time = moment().hour();
var timeBlock1 = $("#9am");
var timeBlock2 = $("#10am");
var timeBlock3 = $("#11am");
var timeBlock4 = $("#12pm");
var timeBlock5 = $("#1pm");
var timeBlock6 = $("#2pm");
var timeBlock7 = $("#3pm");
var timeBlock8 = $("#4pm");
var timeBlock9 = $("#5pm");

var button1 = $("#btn1");
var button2 = $("#btn2");
var button3 = $("#btn3");
var button4 = $("#btn4");
var button5 = $("#btn5");
var button6 = $("#btn6");
var button7 = $("#btn7");
var button8 = $("#btn8");
var button9 = $("#btn9");

var text1 = $("#text1");
var text2 = $("#text2");
var text3 = $("#text3");
var text4 = $("#text4");
var text5 = $("#text5");
var text6 = $("#text6");
var text7 = $("#text7");
var text8 = $("#text8");
var text9 = $("#text9");

var text = ["", "", "", "", "", "", "", "", ""];

// Displaying the current date on the page
date.text(moment().format("dddd, MMMM Do"));

// Calling the function to assign whether the time on the agenda is in the past, present, or future
compareTime(timeBlock1, 9);
compareTime(timeBlock2, 10);
compareTime(timeBlock3, 11);
compareTime(timeBlock4, 12);
compareTime(timeBlock5, 13);
compareTime(timeBlock6, 14);
compareTime(timeBlock7, 15);
compareTime(timeBlock8, 16);
compareTime(timeBlock9, 17);
renderPage();

// Buttons to save the text for each hour
button1.on("click", function()
{
    text[0] = text1.val();
    localStorage.setItem("text", JSON.stringify(text));
});

button2.on("click", function()
{
    text[1] = text2.val();
    localStorage.setItem("text", JSON.stringify(text));
});

button3.on("click", function()
{
    text[2] = text3.val();
    localStorage.setItem("text", JSON.stringify(text));
});

button4.on("click", function()
{
    text[3] = text4.val();
    localStorage.setItem("text", JSON.stringify(text));
});

button5.on("click", function()
{
    text[4] = text5.val();
    localStorage.setItem("text", JSON.stringify(text));
});

button6.on("click", function()
{
    text[5] = text6.val();
    localStorage.setItem("text", JSON.stringify(text));
});

button7.on("click", function()
{
    text[6] = text7.val();
    localStorage.setItem("text", JSON.stringify(text));
});

button8.on("click", function()
{
    text[7] = text8.val();
    localStorage.setItem("text", JSON.stringify(text));
});

button9.on("click", function()
{
    text[8] = text9.val();
    localStorage.setItem("text", JSON.stringify(text));
});

// Compares the user's current time with the time of the time blocks
function compareTime(x, y)
{
    if (y < time)
    {
        x.addClass("past");
    }
    else if (y == time)
    {
        x.addClass("present");
    }
    else
    {
        x.addClass("future");
    }
}

function renderPage()
{
    // Retrieving data from local storage and updating the text array
    var storedText = JSON.parse(localStorage.getItem("text"));
    if (storedText !== null) 
    {
        text = storedText;
    }
    
    text1.val(text[0]);
    text2.val(text[1]);
    text3.val(text[2]);
    text4.val(text[3]);
    text5.val(text[4]);
    text6.val(text[5]);
    text7.val(text[6]);
    text8.val(text[7]);
    text9.val(text[8]);
}