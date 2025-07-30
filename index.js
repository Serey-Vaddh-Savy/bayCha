const logoMainPage = document.getElementById("logoMainPage");
const slogan = document.getElementById("slogan");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const sloganContainer = document.getElementById("sloganContainer")



window.onload = function(){
    setTimeout(() => {
        logoMainPage.style.transform = "translateX(-20px)";
        slogan.style.opacity = "1";
        slogan.style.fontSize = "3vw";
        line1.style.width = "60vw";
        line2.style.width = "5vw";
    }, 800);

    setTimeout(() =>{
        line2.style.transform = "rotate(120deg)"
        
        
    },900)

    setTimeout(() =>{
        line2.style.transform = "rotate(80deg)";
        
    },1100)

    setTimeout(() =>{
        line2.style.transform = "rotate(105deg)";
        
    },1300)

    setTimeout(() =>{
        line2.style.transform = "rotate(90deg)";
    },1500)
    
}

