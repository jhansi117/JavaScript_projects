//pure javascript
// document.querySelector("h1").style.color = "red";

//jquery

// $("h1").css("color","blue");

//SELECTING ELEMENTS USING JQUERY
// $("h1");

// console.log($("button")[1]);


//MANIPULATING STYLES USING JQUERY
// $("h1").css("color","red");
// console.log($("h1").css("color"));
// console.log($("h1").css("font-size","5rem"));
// console.log($("h1").css("font-family"));

// $("h1").addClass("big-title margin-50");

//MANIPULATING  TEXT WITH JQUERY

//way-1
// $("h1").text("Bye");
// $("button").text("Don't click");

//way-2
// $("h1").html("<em>Jhansi</em>");

// console.log($("img").attr("src"));
// $("a").attr("href","https://www.youtube.com");


//ADDING EVENT LISTENER USING JQUERY

// $(".btn-1").click(function(){
//     // alert("Button 1 is clicked.")
//     $("h1").css("color","purple");
// })

//vannila javascript
// for(var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="red";
//     });
// }

//same using jquery
// $("button").click(function(){
//     $("h1").css("color","purple");
// })

// $("input").keydown(function(event){
//     console.log(event.key);
// });

// $(document).keydown(function(event){
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover",function (){
//     $("h1").css("color","yellow");
// })
// $("h1").on("click",function (){
//     $("h1").css("color","purple");
// })

// $("button").click(function(){
//     $("h1").slideToggle();
// })
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})