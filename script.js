// // validation
var suser = document.getElementById("user_id");
var spswd = document.getElementById("pswrd");

function validateForm()
{
    if(   document.getElementById("user_id").value == "admin"
       && document.getElementById("pswrd").value == "12345" )
    {
        alert( "validation succeeded" );
        return true;
    }
    else
    {
        alert( "validation failed" );
        
        return false;
    }
    
};
var x = username.value;
  var y = password.value;
  check(x,y,approved);
  function check(a,b,done){
    if(x=="admin" && y=="12345"){
     
      done();
      }
    
      reject();
  }
  function reject(){
    console.log("rejected");
    verify.innerHTML="Username/Password Error";
    verify.style.color= "red";
    alert("Wrong Username or Password");
}

function approved(){
  console.log("approved");
  document.write("Redirecting....."); 
  setTimeout(function(){window.location = "todolist.html";}, 500); 
}




  




