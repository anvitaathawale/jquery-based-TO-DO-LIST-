//checkof the specific todo by cicking

//after u click on that li ,it will turn gray

//$("li").click(function(){
//$(this).css("color","gray");
//for strike through
//$(this).css("text-decoration","line-through");
//instead of doing in 2 lines , we can do by passing an object
//});

//if li is gray
//turn it black
//else
//turn it gray

/*$("li").click(function(){
if($(this).css("color")==="rgb(128, 128, 128)"){

$(this).css({
color:"black",
textDecoration:"none"
});
}

else{ 

$(this).css({
color:"gray",
textDecoration:"line-through"
});
}

});
*/


//as its too much work  better create a class in CSS and include TOGGLE CLASS 

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

//click on X to delete todo
 //$("span").click(function(event){
 $(document).on("click", "span", function(event){
 $(this).parent().fadeOut(500,function(){
 $(this).remove();
 });
 event.stopPropagation();
 });

$("input[type='text']").keypress(function(event){
if(event.which===13){
//grabbing new todo text from input
var todoText=$(this).val();
//to clear out the input in input field after u entered the new li
$(this).val("");
//create new li and add to ul
$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
}


});





 