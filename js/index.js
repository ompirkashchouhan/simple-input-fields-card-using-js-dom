var body = document.getElementById("body");

var main = document.createElement("div");
main.setAttribute("id", "mainDiv");
body.appendChild(main);

var uploadBtn = document.createElement("button");
uploadBtn.innerHTML = "Upload Logo";
uploadBtn.setAttribute("id", "uploadBtn");
main.appendChild(uploadBtn);

var TextBottomBtn = document.createElement("span");
TextBottomBtn.innerHTML = "Customized Text";
main.appendChild(TextBottomBtn);

var firstInp = document.createElement("input");
firstInp.setAttribute("class", "inputFields");
firstInp.setAttribute("type", "text");
firstInp.setAttribute("placeholder", "Enter Your Name :");
main.appendChild(firstInp);

var secondInp = document.createElement("input");
secondInp.setAttribute("class", "inputFields");
secondInp.setAttribute("type", "email");
secondInp.setAttribute("placeholder", "Enter Your Email Address :");
main.appendChild(secondInp);

var thirdInp = document.createElement("input");
thirdInp.setAttribute("class", "inputFields");
thirdInp.setAttribute("type", "password");
thirdInp.setAttribute("placeholder", "Enter Your Password :");
main.appendChild(thirdInp);

var submitBtn = document.createElement("input");
submitBtn.value = "Submit";
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("id", "submitBtn");
main.appendChild(submitBtn);