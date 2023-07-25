/* --------------- Menu list (Naima) --------------- */


// On whichever button the user clicks, he will be able to see the page corresponding to that button.
// For instance, if he clicks on Dessert button, then he will be able to see the page corresponding to Dessert.

// Starter
$(".starter").on("click",function(){
    $(".btn").removeClass("clicked-btn");
    $(".starter").addClass("clicked-btn");
    $(".slide").hide();
    $(".slide1").show();
})

// Salad
$(".salad").on("click",function(){
    $(".btn").removeClass("clicked-btn");
    $(".salad").addClass("clicked-btn");
    $(".slide").hide();
    $(".slide2").show();
})

// Dessert
$(".dessert").on("click",function(){
    $(".btn").removeClass("clicked-btn");
    $(".dessert").addClass("clicked-btn");
    $(".slide").hide();
    $(".slide3").show();
})

// Soup
$(".soup").on("click",function(){
    $(".btn").removeClass("clicked-btn");
    $(".soup").addClass("clicked-btn");
    $(".slide").hide();
    $(".slide4").show();
})

// Drinks
$(".drinks").on("click",function(){
    $(".btn").removeClass("clicked-btn");
    $(".drinks").addClass("clicked-btn");
    $(".slide").hide();
    $(".slide5").show();
})

// Spaghetti
$(".spaghetti").on("click",function(){
    $(".btn").removeClass("clicked-btn");
    $(".spaghetti").addClass("clicked-btn");
    $(".slide").hide();
    $(".slide6").show();
})

// Dinner
$(".dinner").on("click",function(){
    $(".btn").removeClass("clicked-btn");
    $(".dinner").addClass("clicked-btn");
    $(".slide").hide();
    $(".slide7").show();
})