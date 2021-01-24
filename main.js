const submitInput = document.getElementById('todoSubmit').addEventListener('click',addClick);
//remove item event
let itemList = document.getElementById('items');
itemList.addEventListener('click',removeItem);



////// Add an item to the to-do list when button is clicked //////
function addClick(e){
    e.preventDefault();
    // created li and button elements
    li = document.createElement('li');
    button = document.createElement('button');
    //setting class name for li
    li.className = 'item';
    //button with x as content
    button.textContent = 'X';
    //setting class name for button
    button.className = 'itemButton';
    // get input from text field form
    let inputValue = document.getElementById('todoInputText').value;
    //add text node with input value
    let inputText = document.createTextNode(inputValue);
    //add text to li element
    li.append(inputText);
    //add button to li
    //putting button and li into div
    li.appendChild(button);
    //add li and button to page.
    let groupList = document.getElementById('items');
    groupList.appendChild(li);

    //clear text field
    let userInput = document.getElementById('todoInputText');
    return userInput.value = '', userInput.focus();
    
}


////// Remove list item from list group when 'x' button is clicked
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('itemButton')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
