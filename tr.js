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
    cellDivNode.onclick = selectCell
    cellContainerNode.appendChild(cellDivNode)
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




    function random() {
       randomnNumber = Math.floor(Math.random() * 76);
       console.log(randomnNumber)
    }


    

    
