document.getElementById("navigationMenu").style.top="-30%";

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
    }else{
        document.getElementById("menuButton").innerHTML="&#9660; Menu &#9660;";
    }
}
function moveNavDown(){
    var navMenu=document.getElementById("navigationMenu");
    if(navMenu.style.top!="0%"){
        var newTop=parseInt(navMenu.style.top)+1;
        navMenu.style.top=newTop+"%";
        setTimeout(moveNavDown,10);
    }else{
        document.getElementById("menuButton").innerHTML="&#9650; Menu &#9650;";
    }
    
}
function animatedScroll(divId){
    document.getElementById(divId).scrollIntoView({behavior:"smooth"});
}
function unCapturedClick(e){
    var elementType= e.target.nodeName.toLowerCase();
    console.log(e.target);
    if (elementType!='a' && elementType!='button' && elementType!='ul' && elementType!='li'){
        moveNavUp();
    }
}


document.onclick=unCapturedClick;
//window.scrollTo({ top: 0, behavior: 'smooth' });