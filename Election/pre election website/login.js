var aadhaar;
var migrate;
var voterId;
var uniqueNumber;

function validate() 
{
    

    aadhaar = document.getElementById("aadhaar").value;
    localStorage.setItem("aadhaar",aadhaar);
    voterId = document.getElementById("voterId").value;
    localStorage.setItem("voterid",voterId);
    if(aadhaar=="1234" && voterId=="5678" )
    {
        window.location.href="loc.html";
        return false;
    }
    else if (aadhaar==""||voterId==""){
        alert("Aadhaar or Voter Id are empty");
    }
    else{
        alert("login Failed");
    }

    return false;
    
}

function check()
{
    migrate = document.getElementById("migrate").value;

    if(migrate==""){
        alert("Location is empty");
    }
    else{
        alert("success");
        uniqueNumber = Math.round(Math.random()*10000000000);
        console.log(uniqueNumber);
        alert("Your Online voting Code:"+uniqueNumber);
        alert("Your Online voting Code:"+uniqueNumber);
        alert("Your Online voting Code:"+uniqueNumber);
        window.location.href="Over.html";
        return false;
        
    }
}








