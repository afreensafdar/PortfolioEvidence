//we need to target all our classes and id from the HTML inside the JavaScript

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

//store the classes and id inside these variables 
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  //add the submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

/*we will create a function named engine which will do all sorts of form validation work .3 args
id will target our id
serial will target our classes [error class, success and failure icons]
message will print a message inside our .error class
*/
let engine = (id, serial, message) => {
  if (id.value.trim() === "") { //id.value.trim() will remove all the extra white spaces from the value which the user inputs.
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
