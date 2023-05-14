function notice(){
    alert("hello dear! you did not Login to your card. first Login your card then you can shop");
}
function validate(){
    var uname = document.getElementById("username").value;
    var upass = document.getElementById("userpass").value;
        
    if(uname == ""){
        alert("Enter your information please !");
        return false;
    }
    else if(upass == ""){
        alert("Enter your password please !");
        return false;
    }
    else{
        return true;
    }
}