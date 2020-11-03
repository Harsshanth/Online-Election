var aadhaar;
var migrate;
var voterId;
var Party1;
var Party2;
var Party3;


function validate() 
{
    aadhaar = document.getElementById("aadhaar").value;
    localStorage.setItem("aadhaar",aadhaar);
    voterId = document.getElementById("voterId").value;
    localStorage.setItem("voterid",voterId);
    voterCode = document.getElementById("voterCode").value;
    if(aadhaar=="1234" && voterId=="5678" && voterCode=="9000" )
    {
        window.location.href="map.html";
        return false;
    }
    else if (aadhaar==""||voterId==""|| voterCode==""){
        alert("Aadhaar or Voter Id are empty");
    }
    else{
        alert("login Failed");
    }
    
}

function check(){

  migrate = document.getElementById("migrate").value;

    if(migrate==""){
        alert("Location is empty");
        return false;
    }
    else{
        
        window.location.href="http://localhost:8080/8af910c5-3ceb-4392-918c-7d7ec2effa5c";
        return false;
        

}
}

function party1(){

    alert("voted");

     }












