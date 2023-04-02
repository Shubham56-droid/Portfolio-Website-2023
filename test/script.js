let path = document.querySelector('path');

let scrolldown = document.getElementById('top');

let enter = document.getElementById('down');

let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
 
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', ()=>{
    var scrollPercentage = (document.documentElement.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    var drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;

    console.log(scrollPercentage);

   
    if(scrollPercentage > 0){
        scrolldown.style.visibility = "hidden";

    }else{
        scrolldown.style.visibility = "visible";
    }

    if(scrollPercentage >= 1.8){
        enter.style.visibility = "visible";
    }else{
        enter.style.visibility = "hidden";
    }

})

