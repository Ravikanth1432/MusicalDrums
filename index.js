for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makingsound(this.innerHTML);
        makinganimation(this.innerHTML); //to call through class name first word which same as innerHTML
    });
}

document.addEventListener("keypress",function(event)
{
    makingsound(event.key);
    makinganimation(event.key); //to call through class name first word which same as innerHTML
});

function makingsound(z)
{
    switch (z) {
        case "r":
            var k=new Audio("sounds/tom-1.mp3");
            k.play();
            break;
        case "a":
            var k=new Audio("sounds/tom-2.mp3");
            k.play();
            break;
        case "v":
            var k=new Audio("sounds/tom-3.mp3");
            k.play();
            break;
        case "i":
            var k=new Audio("sounds/tom-4.mp3");
            k.play();
            break;
        case "k":
            var k=new Audio("sounds/snare.mp3");
            k.play();
            break;
        case "n":
            var k=new Audio("sounds/kick-bass.mp3");
            k.play();
            break;
        case "t":
            var k=new Audio("sounds/crash.mp3");
            k.play();
            break;
    }
}

function makinganimation(i)
{
    document.querySelector("."+i).classList.add("pressed"); // "."+i is added because innerHTML and it's class first name is same by adding pressed to its existing class name .pressed styles are also being added which created in style.css

    setTimeout(function(){
        document.querySelector("."+i).classList.remove("pressed");
    },100); //100ms equals to 0.1 second
}