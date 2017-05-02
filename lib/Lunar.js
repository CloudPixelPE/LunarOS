//Lunar.js Library:

//getElement(ID)
//Returns the context of an element.
//Example:
//var title getElement(title);
//title.innerHTML = "Hello World";
function getElement(ID) {
    var elementContext = document.getElementById(ID);
    return elementContext;
}

//getTime():
//Returns the current date and time.
//Example:
//var currentTime = getTime();
//alert("The time is: entTime);
function getTime() {
    var time = new Date();
    return time;
}

//setTabTitle(text):
//Sets the title of the tab.
//Example:
//setTabTitle("This is my new title");
function setTabTitle(text) {
    document.title = text;
}

//logger(text)
//Logs text into the developer console.
//Example:
//logger("Hello World");
function logger(text) {
    console.log(text);
}

//redirect(URL)
//Redirects the user to a new URL.
//Example:
//redirect("https://www.google.com");
function redirect(URL) {
    window.location = URL;
}

//changeInnerHTML (ID, text)
//Changes the text of an element.
//Example:
//changeInnerHTML("title", "Hello World!");
function changeInnerHTML(ID, text) {
    var element = document.getElementById(ID);
    element.innerHTML = text;
}

//popup(text)
//Displays a JavaScript popup.
//Example:
//popup("Hello World!");
function popup(text) {
    alert(text);
}

//searchWeb(keywords)
//Searches Google for passed keywords.
//Example:
//searchWeb("What is the weather like today?");
function searchWeb(keywords) {
    window.location = "https://www.google.com/#q=" + keywords;
}

//logTime()
//Logs the current time in the developer console every second:
//Example:
//logTime();
function logTime() {
    window.setInterval(timeLogger, 1000);
}
function timeLogger() {
    var time = getTime();
    console.log(time);
}