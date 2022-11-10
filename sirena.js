function validate(){
  var c = 0;

  var userfirst = document.getElementById("userfname").value;
  var userlast = document.getElementById("userlname").value;
  var usermail = document.getElementById("useremail").value;
  var usernum = document.getElementById("userphone").value;
  var usersub = document.getElementById("usersubject").value;
  var usermess = document.getElementById("usermessage").value;

  var e = document.getElementById("err");
  var nam = document.getElementById("name");
  var mail = document.getElementById("email");
  var sub = document.getElementById("subj");
  var mess = document.getElementById("message");

  if (userfirst == "" || userlast == "") {
    nam.style.color = "red";
    c++;
  } else {
    nam.style.color = "black"
  }
  if (usermail == "") {
    mail.style.color = "red";
    c++;
  } else {
    mail.style.color = "black"
  }
  if (usersub == "") {
    sub.style.color = "red";
    c++;
  } else {
    sub.style.color = "black"
  }
  if (usermess == "") {
    mess.style.color = "red";
    c++;
  } else {
    mess.style.color = "black"
  }

  if (c > 0) {
    e.style.color = "red";
    alert("Invalid input");
  }
  
}