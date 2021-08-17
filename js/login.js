
document.getElementById("login-submit").addEventListener('click',function(){
  const emailFeild = document.getElementById("user-email");
  const userEmail = emailFeild.value;

  // Password value

  const passField = document.getElementById("user-password");
  const userPass = passField.value;

  if (userEmail == "test@.com" && userPass == 'password') {
    window.location.href = 'banking.html';
  }else {
    alert("Your Password Or UserId is not correct")
  }

});
