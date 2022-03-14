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
    cellDivNode.onclick = selectCell 
    cellDivNode.classList.add("cell")
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

        
        displayselectednumber()

  
    }

function displayselectednumber() {
    let selectedNode = document.querySelector(".selected")
    let selectedNumber = parseInt(selectedNode.innerText)
    
    
    

    let pickedDivNode = document.getElementById("picked")
    
    
    for (let i = 0; i < 1; i++) {
        let pickedNumber = document.createElement('p')
        pickedNumber.innerText = selectedNumber
        pickedDivNode.appendChild(pickedNumber)
        
        
    }
    

}

    function randomClick(){

    let cellsContainer = document.querySelectorAll('.cell')
    

    function random() {
        return Math.floor(Math.random() * 76) + 1;
    }
    

    for (let i = 0; i < cellsContainer.length; i++){
    if (random() === parseInt(cellsContainer[i].innerText)){

        (cellsContainer[i].classList.add('selected'))

        displayselectednumber()

    }
    
        
}
    
}
    

    
    




    

    
