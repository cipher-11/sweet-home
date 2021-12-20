console.log("jkjk")

var bhkArr = document.querySelectorAll(".flats-options>div") ;

for(let i = 0; i < bhkArr.length; i++)
{
    bhkArr[i].addEventListener("click", displayHouse) ;
}

function displayHouse(e)
{
    var targetId = e.target.getAttribute("id") ;
    var house_main = document.querySelector(".house-main");
    console.log(targetId)

    if(targetId == "bhk1")
    {
        var windows = document.getElementsByClassName("windows")
        windows[0].style.display = "none"
        house_main.style.width = "175px";

        var side1 = document.getElementsByClassName("side1") ;
        var side2 = document.getElementsByClassName("side2") ;

        side1[0].style.display = "none"
        side2[0].style.display = "none"

    }
    else if(targetId == "bhk2")
    {
        var windows = document.getElementsByClassName("windows")
        windows[0].style.display = "none"
        house_main.style.width = "200px";


        var side1 = document.getElementsByClassName("side1") ;
        var side2 = document.getElementsByClassName("side2") ;

        side1[0].style.display = "block"
        side2[0].style.display = "none"
    }
    else if(targetId == "bhk3")
    {
        var windows = document.getElementsByClassName("windows")
        windows[0].style.display = "block"
        house_main.style.width = "225px";


        var side1 = document.getElementsByClassName("side1") ;
        var side2 = document.getElementsByClassName("side2") ;

        side1[0].style.display = "block"
        side2[0].style.display = "none"
    }
    else{
        var windows = document.getElementsByClassName("windows")
        windows[0].style.display = "block"
        house_main.style.width = "250px";


        var side1 = document.getElementsByClassName("side1") ;
        var side2 = document.getElementsByClassName("side2") ;

        side1[0].style.display = "block"
        side2[0].style.display = "block"
    }
}