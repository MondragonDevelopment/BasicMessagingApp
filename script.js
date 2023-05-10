var messages=document.getElementById("msg");
var textbox=document.getElementById("textbox");
var button=document.getElementById("button");

button.addEventListener("click", function(){
    var newMessage=document.createElement("li");
    newMessage.innerHTML=textbox.value;
    messages.appendChild(newMessage);
    textbox.value="";
});

textbox.addEventListener("keydown", function(event){ // Don't use keypress, it's deprecated in 10% of browsers
    if(event.key==="Enter"){
        var newMessage=document.createElement("li");
        newMessage.innerHTML=textbox.value;
        messages.appendChild(newMessage);
        textbox.value="";
    }
});