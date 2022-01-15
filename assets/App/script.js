

function getYourPizza(pizza_size, pizza_crust, pizza_toppings, pizza_number){
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.number=number;
}


// Validating the contact form
function validation(){
   let name=document.getElementById("name").value;
   let email=document.getElementById("email").value;
   let phone=document.getElementById("phone").value;
   let error_message=document.getElementById("error_message");
   var text;
   error_message.style.padding="10px";
   if(name.length <2){
       text="Please enter valid Name";
       error_message.innerHTML=text;
       return false;
   }
   if(email.indexOf("@gmail.com") ==-1 || email.length <6){
    text="Please enter valid Email";
    error_message.innerHTML=text;
    return false;
  }
  if(isNaN(phone)|| phone.length !=10){
    text="Please enter valid Phone Number";
    error_message.innerHTML=text;
    return false;
}else{
    alert("Thank you for contacting us!");
   return false;
}

}