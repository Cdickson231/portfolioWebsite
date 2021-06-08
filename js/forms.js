function validation(){
    var name= document.getElementById("name").value;
    var subject= document.getElementById("subject").value;
    var phone= document.getElementById("phone").value;
    var email= document.getElementById("email").value;
    var message= document.getElementById("Message").value;
    var error_message = document.getElementById("error_message");
    var text;
    
   error_message.style.padding = "10px";

   if (name.length <5){
       text="Please enter a valid name";
       error_message.innerHTML = text;
       return false;
   }
   if (subject.length <6){
    text="Please enter correct subject matter";
    error_message.innerHTML = text;
    return false;
}
if (isNaN(phone)||phone.length != 11){
    text="Please enter correct phone number";
    error_message.innerHTML = text;
    return false;
}
if (email.indexOf("@")==-1 || email.length< 6){
    text="Please enter correct Email";
    error_message.innerHTML = text;
    return false;
}

if (message.length <= 10){
    text= "please Enter atleast 10 characters";
    error_message.innerHTML =text;
    return false;
}
alert("Form Submitted Successfully")
   return true;
}