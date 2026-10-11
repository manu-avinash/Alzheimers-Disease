var home=document.querySelector(".home_tab");
home.addEventListener("click",()=>{
    open("/app/html/home.html","_self");
});
var test=document.querySelector(".test_tab");
test.addEventListener("click",()=>{
    open("/app/html/test.html","_self");
});
var contact=document.querySelector(".contact_tab");
contact.addEventListener("click",()=>{
    open("/app/html/contact.html","_self");
});