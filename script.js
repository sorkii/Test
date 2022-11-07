//Javascript switch till footer//
const bodyHasClass = document.body.classList.contains('Persona');
if (bodyHasClass) {

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday!";
    break;
  case 1:
    day = "Monday!";
    break;
  case 2:
    day = "Tuesday!";
    break;
  case 3:
    day = "Wednesday!";
    break;
  case 4:
    day = "Thursday!";
    break;
  case 5:
    day = "Friday!";
    break;
  case  6:
    day = "Saturday!";
}
document.getElementById("demo").innerHTML = "Happy " + day;
}



//Lista i persona//
var ux = ["Personality", "Motivations", "Targets", "Frustrations", "Needs", "Channels & Platforms"];
var arrayLength = ux.length;
var myList = "<ol>";
for (var i = 0; i < arrayLength; i++) {
myList += "<li>" + ux[i] + "</li>";
}
myList += "</ol>";
document.getElementById("minArrayDiv").innerHTML = myList;