// import $ from "jquery";
import "bootstrap"; //breathecode dom for more explicit errors
// //import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

var who = [
  "My sister",
  "Three little pigs",
  "A green-eyed monster",
  "My best friend"
];
var what = [" married", " fought", " attacked", " ate"];
var which = [" a frog in a tux!", " a crying wolf!", " my child!", " my dog!"];

var excuse = myFunction(who, what, which);

window.onload = document.getElementById("excusetext").innerHTML = excuse;

function myFunction(a, b, c) {
  var x = a[Math.floor(Math.random() * a.length)];
  var y = b[Math.floor(Math.random() * b.length)];
  var z = c[Math.floor(Math.random() * c.length)];

  return x + y + z;
}
