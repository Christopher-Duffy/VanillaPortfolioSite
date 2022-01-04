document.getElementById("navigationMenu").style.top="0%";

function toggleMenu(){
    var navMenu=document.getElementById("navigationMenu");
    if(navMenu.style.top=="0%"){
        moveNavUp();
    }else if(navMenu.style.top=="-30%"){
        moveNavDown();
    }
}
function moveNavUp(){
    var navMenu=document.getElementById("navigationMenu");
    if(navMenu.style.top!="-30%"){
        var newTop=parseInt(navMenu.style.top)-1;
        navMenu.style.top=newTop+"%";
        setTimeout(moveNavUp,10);
    }
}
function moveNavDown(){
    var navMenu=document.getElementById("navigationMenu");
    if(navMenu.style.top!="0%"){
        var newTop=parseInt(navMenu.style.top)+1;
        navMenu.style.top=newTop+"%";
        setTimeout(moveNavDown,10);
    }
    
}