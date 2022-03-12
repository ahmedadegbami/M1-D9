const onLoad = function() {
    createCells()
}
window.onload = onLoad


// let create the cells
const createCells = function(){
    let numberOfCells = 76
    let cellContainerNode = document.getElementById('cells-container')
    for (let cellNumber = 1; cellNumber <= numberOfCells; cellNumber++) {

    let cellDivNode = document.createElement('div')
    cellDivNode.innerText = cellNumber
    cellDivNode.classList.add("cell")
    cellContainerNode.appendChild(cellDivNode)
    cellDivNode.onclick = selectCell  // adding event listener

}
}




const selectCell = function(event) {
    let currentlySelectedcellNode = document.querySelector(".selected")
    if(currentlySelectedcellNode !== null) {
        currentlySelectedcellNode.classList.remove('selected')
    }
    let clickedCellNode = event.target 

        clickedCellNode.classList.add('selected')

  
    }


    function randomClick(){

    let cellsContainer = document.getElementsByClassName('cell')
    console.log(cellsContainer)

    function random() {
       Math.floor(Math.random() * 76) + 1;
    }
    let rand = random()

    for (let i = 0; i < cellsContainer.length; i++){
    if (rand === parseInt(cellsContainer[i].innerText)){

        cellsContainer[i].classList.add('selected')

    }
    
        
}
    
}
    

    
    




    

    
