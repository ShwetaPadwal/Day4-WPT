"use strict";

import authentication from "./library.js";


document.querySelector("button").onclick = function () {
  //alert("Hello, World!");

  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;

//   console.log(data1);
    //   console.log(data2);
    
    var authObj = new authentication();
    console.log(authObj);
    
    var ans1 = authObj.checkemail(data1);
    console.log(ans1);
    var ans2 =authObj.checkpassword(data2);
    console.log(ans2);

    if (ans1 && ans2) {
        document.getElementById("p").innerHTML = "Valid Email and Password";
    }
        document.getElementById("p").innerHTML = "Invalid Email or Password";

}; 
