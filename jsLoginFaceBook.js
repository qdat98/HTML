
function checklogin(){
    var accout="qdat18@gmail.com";
    var password="123456";
    var accoutInput=document.getElementById("tk").value;
    var passwordInput=document.getElementById("mk").value;
    if ((accout==accoutInput)&(password==passwordInput)) {
        alert("Đăng nhập thành công. Chào mừng "+ accoutInput);
    }
    else {
        alert("Đăng nhập thất bại")
    }
}