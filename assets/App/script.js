

$(function(){
    $('.summary').hide();
    $('.customer_data').hide();

    $("#checkout").click(function(){
        let size=$("#pizza-size option:selected").val();
        let crust=$("#pizza-crust option:selected").val();
        let topping=$("#pizza-topping option:selected").val();
        let number=$("#pizza-number option:selected").val();
       
        // console.log(size); testing the function

        let order=(s, c, t, n, total)=>{
            return {s, c, t, n, total};
        };
         
        let price, totalPrice;
        switch(size){
            case size="normal":
                price= 280;
                if(crust=== "Thin crust"){
                    totalPrice=(price*number)+150;
                }else if(crust==="Neapolitan crust"){
                    totalPrice=(price*number)+200;
                }else if(crust==="Chicago Deep Dish"){
                    totalPrice=(price*number)+250;
                }else{
                    totalPrice=(price*number)+300;
                }
                break;
            case size="medium":
                price=380;
                if(crust=== "Thin crust"){
                    totalPrice=(price*number)+150;
                }else if(crust==="Neapolitan crust"){
                    totalPrice=(price*number)+200;
                }else if(crust==="Chicago Deep Dish"){
                    totalPrice=(price*number)+250;
                }else{
                    totalPrice=(price*number)+300;
                }
                break;
            case size="large":
                price=450;
                if(crust=== "Thin crust"){
                    totalPrice=(price*number)+150;
                }else if(crust==="Neapolitan crust"){
                    totalPrice=(price*number)+200;
                }else if(crust==="Chicago Deep Dish"){
                    totalPrice=(price*number)+250;
                }else{
                    totalPrice=(price*number)+300;
                }
                break;   
        }
        switch(topping){
            case topping="Fresh basil":
                totalPrice=topping + 80;
                break;
        case topping="Sausage":
                totalPrice=topping + 120;
                break; 
        case topping="black Olives":
                totalPrice=topping + 180;
                break;  
        }
        
        let newOrder = order(size, crust, topping, number, totalPrice);

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