

$(function(){
    $('.summary').hide();
    $('.customer_data').hide();

    $("#checkout").click(function(){
        let Size=$("#pizza-size option:selected").val();
        let Crust=$("#pizza-crust option:selected").val();
        let Topping=$("#pizza-topping option:selected").val();
        let Number=$("#pizza-number option:selected").val();
       
        // console.log(size); testing the function

        let order=(S, C, T, N, Total)=>{
            return {S, C, T, N, Total};
        };
         
        let price, TotalPrice;
        switch(Size){
            case Size="normal":
                price= 280;
                if(Crust=== "Thin crust"){
                    TotalPrice=(price*number)+150;
                }else if(Crust==="Neapolitan crust"){
                    TotalPrice=(price*number)+200;
                }else if(Crust==="Chicago Deep Dish"){
                    TotalPrice=(price*number)+250;
                }
                // else{
                //     TotalPrice=(price*number)+300;
                // }
                break;
            case Size="medium":
                price=380;
                if(Crust=== "Thin crust"){
                    TotalPrice=(price*number)+150;
                }else if(Crust==="Neapolitan crust"){
                    TotalPrice=(price*number)+200;
                }else if(Crust==="Chicago Deep Dish"){
                    TotalPrice=(price*number)+250;
                }
                // else{
                //     TotalPrice=(price*number)+300;
                // }
                break;
            case Size="large":
                price=450;
                if(Crust=== "Thin crust"){
                    totalPrice=(price*number)+150;
                }else if(Crust==="Neapolitan crust"){
                    TotalPrice=(price*number)+200;
                }else if(Crust==="Chicago Deep Dish"){
                    TotalPrice=(price*number)+250;
                }
                // else{
                //     TotalPrice=(price*number)+300;
                // }
                break;   
        }
        switch(Topping){
            case Topping="Fresh basil":
                TotalPrice=Topping + 80;
                break;
        case Topping="Sausage":
                TotalPrice=Topping + 120;
                break; 
        case Topping="black Olives":
                TotalPrice=Topping + 180;
                break;  
        }
        
        let newOrder = order(Size, Crust, Topping, Number, TotalPrice);

        console.log(newOrder);
        //Write to the order
        $('.summary').slideDown(2000);
        $('.customer_data').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>"   + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + "Number :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('background-color', 'white').css('font-size', '24px');
    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.customer_data').slideDown();
    });


    //Pick Up
    $(".delivernot").click(function () {

    });
  
    
})


// Validating the Delivery form
function validate(){
    let name=document.getElementById("username").value;
    let location=document.getElementById("userlocation").value;
    let phone=document.getElementById("userphone").value;
    let DeliveranceNote=document.getElementById("DeliveranceNote");
    var text;
    //  DeliveranceNote.style.padding="10px";
    if(name.length <2){
        alert("Please enter valid Name");
        
    }
    if(location.length <2){
     alert("Please enter valid location");
     
   }
   if(isNaN(phone)|| phone.length !=10){
     alert("Please enter valid Phone Number")
     
 }else{
     alert("Thank you your Pizza will be delivered to you!");
    return false;
 }
  document.getElementById("deliverlocation").reset();
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