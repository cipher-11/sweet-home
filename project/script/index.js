var draggagleGrass = document.querySelector(".grass-draggable img") ;
var dropGrass = document.querySelector(".grass-container") ;

draggagleGrass.addEventListener("dragstart", dragStart)
dropGrass.addEventListener("dragover", dragOver)
dropGrass.addEventListener("drop", dropGrassFn)


function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
} 

function dragOver(event) {
            
    event.preventDefault();
}



function dropGrassFn(event)
    {
        event.preventDefault();
        const draggableElementData = event.dataTransfer.getData("text");
        

        const droppableElementData = event.target.getAttribute("data-draggable-id");

        console.log(draggableElementData, droppableElementData)
        const isCorrectMatching = draggableElementData === droppableElementData;
        if(isCorrectMatching) {
            const draggableElement = document.getElementById(draggableElementData);
        
            event.target.appendChild(document.getElementById(draggableElementData))
           
            var grassSide = document.querySelector(".grass-draggable")
            console.log(grassSide)
            grassSide.innerHTML = `
            <img src="images/grass-with-no-background-1154972115063g7t5hjpt-removebg-preview-removebg-preview.png" alt="" id="grass-image" draggable="true">
                                    `

             var draggagleGrass = document.querySelector(".grass-draggable img")
             draggagleGrass.addEventListener("dragstart", dragStart)

        }

    }


    var draggableTree = document.querySelector(".tree-draggable img")
    var dropTree = document.querySelectorAll(".tree-container")

    draggableTree.addEventListener("dragstart", dragStart)
    for(let i = 0; i < dropTree.length; i++)
    {
        dropTree[i].addEventListener("dragover", dragOver)
        dropTree[i].addEventListener("drop", dropTreeFn)
    }


    function dropTreeFn(event)
    {
        event.preventDefault() ;
        const draggableElementData = event.dataTransfer.getData("text");
        

        const droppableElementData = event.target.getAttribute("data-draggable-id");

        console.log(draggableElementData, droppableElementData)
        const isCorrectMatching = draggableElementData === droppableElementData;

        if(isCorrectMatching) {
            const draggableElement = document.getElementById(draggableElementData);
        
            event.target.appendChild(document.getElementById(draggableElementData))

            var treeSide = document.querySelector(".tree-draggable")
            treeSide.innerHTML = `
                    <img src="images/download-removebg-preview.png" alt="" id="tree-image" draggable="true">
                `

            var draggableTree = document.querySelector(".tree-draggable img") 
            draggableTree.addEventListener("dragstart", dragStart)
        }
    }

    
