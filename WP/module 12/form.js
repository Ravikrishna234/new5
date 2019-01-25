// function validate() {
// 	var text;
// 	var str = document.getElementById("textname").value;
// 	if(str.equals("")) {
// 		text = "Enter your name";
// 	}
// 	document.getElementById("demo").innerHtml = text;
// }
var arr = [];
var i = 0;

function myFunction() {
  var x, text,secrettext,flag;
  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;
  y = document.getElementById("context").value;
  var secret = "password";
  z = document.getElementById("password").value;
  var frm = document.querySelector("#form");
  // console.log(secret)

  // If x is Not a Number or less than one or greater than 10
  console.log(x);
  if (x != "" && y != "" && z == secret) {
   arr.push(x,y);

   flag = true;
   form.reset();
   document.getElementById("context").value = "";
}
// if(y === "") {
// 	text = "Input not valid";
// 	document.getElementById("demo1").innerHTML = text;}
 else {

	 text = "Input not valid";
    document.getElementById("demo").innerHTML = text;
}
if(z != secret) {
secrettext = "secretkey doesn't match";
document.getElementById("demo2").innerHTML = secrettext;
}
var length = arr.length;
var text = "";
if(flag) {
for(var i = length - 1; i > 0; i = i - 2)
 {

	text = text   + "<h2>" +arr[i]+ "</h2>" + " " + arr[i - 1] +  "</br>"
}
document.getElementById("demo3").innerHTML = text;

// }
}
}