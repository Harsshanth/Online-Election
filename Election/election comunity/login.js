var loginno;
var password;



function validate() 
{
    loginno = document.getElementById("loginno").value;
    password = document.getElementById("password").value;
   
    if(loginno=="1234" && password=="password")
    {
     
       window.location.href="http://localhost:8080/d6c86bae-98ef-4726-a649-5407a29f481f";
        return false;
    }
    else if (loginno=="" || password=="" ){
        alert("Aadhaar or Voter Id are empty");
    }
    else{
        alert("login Failed");
    }
    
}












