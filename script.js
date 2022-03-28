var callBackGetSuccess = function(data){
    
    var dataParse = JSON.parse(data)

    var id = dataParse.slip.id

    var advice = dataParse.slip.advice

    var elementId = document.getElementById("Id")

    elementId.innerHTML = id;

    var elementAdvice = document.getElementById("QuotesBis")

    elementAdvice.innerHTML = advice;
}

function myFunction() {

   console.log("Hello World");
 
   var url = "	https://api.adviceslip.com/advice";


   $.get(url,callBackGetSuccess).done(function(){
    // make callBackGetSuccess if API done
   })
   .fail(function(){
       alert( "error" );
   })
   .always(function(){

   });


}