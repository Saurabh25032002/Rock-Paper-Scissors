

let btn=document.querySelector(".bt");
 let curr="light";
 let x=document.querySelector("body");
 btn.addEventListener("click",()=>{
    if(curr=="light")
    {
        curr="dark";
        x.style.backgroundColor="black";
    }
    else
    {
        curr="light";
        x.style.backgroundColor="white";
    }
 });




