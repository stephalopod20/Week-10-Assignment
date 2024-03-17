/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
    A Bootstrap styled table representing your choice of data.
    A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
*/


let id = 0; //refers to each addition uniquely

document.getElementById('add-game').addEventListener('click', () => {  //does something on click
    let gameTable = document.getElementById('games-list');
    let row = gameTable.insertRow(1); //the header of the table is considered row 0, so we start at 1 here.
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerText = document.getElementById('new-game').value;   //grabbed from user input
    row.insertCell(1).innerText = document.getElementById('new-start-date').value;

    let completion = row.insertCell(2);                 //adding the completion/finished button
    completion.appendChild(createFinishedButton(id++)); // id++ ensures the individuality of each row

    row.setAttribute('id', `item-${id}`);   //adding a second instance here cleared up my weird delete button issue??
    let remove = row.insertCell(3);                        //adding the delete button
    remove.appendChild(createRemoveButton(id++));

    document.getElementById('new-game').value = '';   //clears the Game Name field after entries
    document.getElementById('new-start-date').value = '';
}); 

function createFinishedButton(id) {             //programming the button functionality
    let btn = document.createElement('checkbox');
    btn.className = 'btn btn-success';
    btn.id = id;
    btn.innerText = 'Not yet! Mama mia!'
    btn.onclick = () => {                   //what happens when the button is clicked
        btn.className = 'btn btn-warning';
        btn.innerText = "Yahoo, we're done! Let's-a go!"
    };
    return btn;
}

function createRemoveButton(id) {           //programming the button functionality
    let redBtn = document.createElement('button');
    redBtn.className = 'btn btn-danger';
    redBtn.id = id;
    redBtn.innerText = 'Delete';
    redBtn.onclick = () => {                //what happens when the button is clicked
        let gameToDelete = document.getElementById(`item-${id}`);
        gameToDelete.parentNode.removeChild(gameToDelete);
    };
    return redBtn;
}



//silly joke :)
document.getElementById('delete-button').addEventListener('click', () =>  {
    let deleteButton = document.getElementById('delete-button');
    deleteButton.parentNode.removeChild(deleteButton);
});