
function createCell(){
    const cell=document.createElement("div");
    cell.classList.add("cell");
    return cell;
}

function createRow(dimentions){
    const row=document.createElement("div");
    row.classList.add("row");
    for(let i=0;i<dimentions;i++){
        row.appendChild(createCell());
    }
    return row;
}

function createGrid(dimentions){
    const container=document.createElement("div");
    for(let i=0;i<dimentions;i++){
        container.appendChild(createRow(dimentions));
    }
    container.classList.add("inside-container");
    return container;
}





function takeInput(){
    let dimentions;
    while(true){
        dimentions=prompt("enter the dimnesions:");
        if(dimentions>100){
            alert("dimentions should not exceed 100");
        }
        else break;
    }
    return dimentions;
}

function createInsideGrid(){
    let dimentions=takeInput();
    
    const container=document.querySelector(".container");
    container.appendChild(createGrid(dimentions));

    doCells();
}

createInsideGrid();

function changeColor(){
    console.log("what");
    this.classList.add("change-color");
}


const reset=document.querySelector(".reset");
reset.addEventListener('click',resetAll);

function resetAll(){
    const cells=document.querySelectorAll(".cell");
    cells.forEach((cell)=>{
        cell.classList.remove("change-color");
    });
}



const editSize=document.querySelector(".edit-size");
editSize.addEventListener('click',editContainer);

function editContainer(){
    const container=document.querySelector(".container");
    const insideContainer=document.querySelector(".inside-container");
    container.removeChild(insideContainer);
    createInsideGrid();
}

function doCells(){
    const cells=document.querySelectorAll(".cell");
    cells.forEach((cell)=>{
        cell.addEventListener('mouseover',changeColor);
    });
}