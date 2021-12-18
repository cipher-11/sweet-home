console.log("jkjk")

var bhkArr = document.querySelectorAll(".flats-options>div") ;

for(let i = 0; i < bhkArr.length; i++)
{
    bhkArr[i].addEventListener("click", displayHouse) ;
}

function displayHouse(e)
{
    var targetId = e.target.getAttribute("id") ;
    console.log(targetId)

    if(targetId == "bhk1")
    {
        var windows = document.getElementsByClassName("windows")
        windows[0].style.display = "none"

        var side1 = document.getElementsByClassName("side1") ;
        var side2 = document.getElementsByClassName("side2") ;

        side1[0].style.display = "none"
        side2[0].style.display = "none"

    }
    else if(targetId == "bhk2")
    {
        var windows = document.getElementsByClassName("windows")
        windows[0].style.display = "none"

        var side1 = document.getElementsByClassName("side1") ;
        var side2 = document.getElementsByClassName("side2") ;

        side1[0].style.display = "block"
        side2[0].style.display = "none"
    }
    else if(targetId == "bhk3")
    {
        var windows = document.getElementsByClassName("windows")
        windows[0].style.display = "block"

        var side1 = document.getElementsByClassName("side1") ;
        var side2 = document.getElementsByClassName("side2") ;

        side1[0].style.display = "block"
        side2[0].style.display = "none"
    }
    else{
        var windows = document.getElementsByClassName("windows")
        windows[0].style.display = "block"

        var side1 = document.getElementsByClassName("side1") ;
        var side2 = document.getElementsByClassName("side2") ;

        side1[0].style.display = "block"
        side2[0].style.display = "block"
    }
}