





let price, crust_price, topping_price;
let total=0;

function getYourpizza(name, size, crust, total){
   this.name=name;
   this.size=size;
   this.crust=crust;
   this.toppings=topping;
   this.total=total;

}


$(function(){
    $('.summary').hide();
    $('.customer_data').hide();

    $("#checkout").click(function(){
        let pizzasize=$("#pizza-size option:selected").val();
        let pizzacrust=$("#pizza-crust option:selected").val();
        let pizzatopping=[];
        let pizzanumber=$("#pizza-number option:selected").val();
        $.each($("input[name='toppings']:checked"),function(){
            pizzatopping.push($(this).val());
        });
        
       
        let order=(s, c, t, n, total)=>{
            return {s, c, t, n, total};
        };
        console.log(order);
        let price, totalprice;
        switch(pizzasize){
            case size="normal":
                price= 280;
                if(pizzacrust=== "Thin crust"){
                    totalprice=(price*number)+150;
                }else if(pizzacrust==="Neapolitan crust"){
                    totalprice=(price*number)+200;
                }else if(pizzacrust==="Chicago Deep Dish"){
                    totalprice=(price*number)+250;
                }
               
              
                break;
            case size="medium":
                price=380;
                if(pizzacrust=== "Thin crust"){
                    totalprice=(price*number)+150;
                }else if(pizzacrust==="Neapolitan crust"){
                    totalprice=(price*number)+200;
                }else if(pizzacrust==="Chicago Deep Dish"){
                    totalprice=(price*number)+250;
                }
               
                break;
            case size="large":
                price=450;
                if(pizzacrust=== "Thin crust"){
                    totalprice=(price*number)+150;
                }else if(pizzacrust==="Neapolitan crust"){
                    totalprice=(price*number)+200;
                }else if(pizzacrust==="Chicago Deep Dish"){
                    totalprice=(price*number)+250;
                }
                
                break;   
        }
        switch(pizzatopping){
            case pizzatopping="Fresh basil":
                totalprice=topping + 80;
                break;
        case pizzatopping="Sausage":
                totalprice=topping + 80;
                break; 
        case pizzatopping="black Olives":
                totalprice=topping + 80;
                break;  
        }
        
        let topping_value=pizzatopping.length*50;

        if((pizzasize=="0") && (pizzacrust=="0")){
           
             alert("Please select pizza size and crust")
        }else{
             $('.summary').slideDown(2000);
             $('.customer_data').slideUp();
             $('#list').slideDown();
             $('.deliver').show(1000);
             $('.delivernot').show(1000);
        }
        total=price + crust_price + topping_value;

        // console.log(total);

        let checkoutTotal=0;
        checkoutTotal=checkoutTotal+total;


        let newOrder = order(pizzasize, pizzacrust, pizzatopping, pizzanumber, total);

        // console.log(newOrder);


        $('#list').text(" ");
        $("#list").append("<br>"   + "<br>" + "pizzasize :   "
            + newOrder.s + "<br>" + "pizzacrust :     "
            + newOrder.c + "<br>" + "pizzatopping :     "
            + newOrder.t + "<br>" + "pizzanumber :    "
            + newOrder.n + "<br>" + "total  :  "
            + newOrder.total + "<br><br>").css('background-color', 'white').css('font-size', '24px');


    });

    //Deliver
    let deliveryamount=200;
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.customer_data').slideDown();
        $(".Finalbill").append("Your bill plus delivery fee is:"  +deliveryamount).css('background-color', 'white');
    });


    //Pick Up
    $(".delivernot").click(function () {

    });
  
    event.preventDefault();
})


// Validating the Delivery form
function Validation(){
    let name=document.getElementById("username").value;
    let location=document.getElementById("userlocation").value;
    let phone=document.getElementById("userphone").value;
    let DeliveranceNote=document.getElementById("DeliveranceNote");
    let text;
    //  DeliveranceNote.style.padding="10px";
    if(name.length <2){
       alert("Please enter valid Name");
        
     
    }
   
    if(location.length <2){
     alert("Please enter valid location");
     
   }
   if(isNaN(phone)|| phone.length !=10){
     alert("Please enter valid Phone Number");
    
 }
 else {
     alert("Thank you your Pizza will be delivered to you");

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
   return true;
}

}