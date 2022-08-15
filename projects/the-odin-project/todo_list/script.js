// Getting Variables ------>

let descriptionImg = document.getElementById('descriptionIMG');
let listImg = document.getElementById('listIMG');
let checkImg = document.getElementById('checkIMG');
let deleteImg = document.getElementById('deleteIMG');
let placeHolder = document.getElementById('placeHolder')
let titleInput = document.getElementById('titleInput');
let popbar = document.getElementById('popBar');
let projects = document.getElementById('projects');
let myArray = [] // Array for localStorage
let arrayOfList = []; // Array for Lists


// List or Description Toggle ------>

function toggleListAndDescription () {
    if (descriptionImg.classList.contains('hidden')) {
        descriptionImg.classList.toggle('hidden');
        descriptionImg.classList.toggle('active');
    } else {
        descriptionImg.classList.toggle('hidden');
        descriptionImg.classList.toggle('active');
    }
    if (listImg.classList.contains('hidden')) {
        listImg.classList.toggle('hidden');
        listImg.classList.toggle('active');
    } else {
        listImg.classList.toggle('hidden');
        listImg.classList.toggle('active');
    }
}


// Pop Bar and Checklist

function popTheBar () {
    if (popbar.classList.contains('hidden')) {
        popbar.classList.remove('hidden');
    }
    if (descriptionImg.classList.contains('active')) {
        let textAreaInput = document.createElement('textarea');
        textAreaInput.id = 'textArea';
        textAreaInput.cols = '30';
        textAreaInput.rows = '8';
        textAreaInput.maxLength = '420'
        textAreaInput.name = 'descriptionText';
        popbar.appendChild(textAreaInput);
    }
    if (listImg.classList.contains('active')) {
        let listDiv = document.createElement('div');
        listDiv.id = 'listDivId';
        popbar.appendChild(listDiv);
        newListItem(listDiv);
    }    
}

function checkEmpty () {
    if (descriptionImg.classList.contains('active')) {
        if (textArea.value == '' && titleInput.value == '') {
            removeTempItem();
            return true;
        }
    }
    
    if (listImg.classList.contains('active')) {   
        if (titleInput.value == '') {
            removeTempItem();
            return true;
        }
    }
}

// Creating the Items ------>

function createItem () {
    if (checkEmpty()) {
        return;
    }
    if (descriptionImg.classList.contains('active')) {
        createDescription();
    }
    if (listImg.classList.contains('active')) {
        createList();
    }
}

function createDescription () {
    factoryDescription('0'+new Date().getTime(), titleInput.value, textArea.value);
    // updateStorage(titleInput.value, textArea.value, '0'+new Date().getTime());
    removeTempItem();
}

function createEditButton (div, id, title, text) {
    let editBtn = document.createElement('img');
    editBtn.src = 'images/svg/edit.svg';
    editBtn.addEventListener('click', function () {
        editItem(id, title, text);
    });
    div.appendChild(editBtn);
}

function editItem (id, title, text) {
 if (id[0][0] == 0 ) {
    editTheDescription(id, title, text);
 }
 if (id[0][0] == 1 ) {
 }
}

function factoryDescription (id, title, text) {
    let tempTitle = title;
    let tempText = text;
    let newDiv = document.createElement('div');
    let H2 = document.createElement('h2');
    let p = document.createElement('p');
    
    addDeleteButton(newDiv, id, title, text);
    createEditButton(newDiv, id);

    newDiv.classList.add('project');
    newDiv.id = id;
    H2.textContent = tempTitle;
    p.textContent = tempText;

    newDiv.appendChild(H2);
    newDiv.appendChild(p);
    projects.appendChild(newDiv);
}

function editTheDescription (id, title, text) {
    if (popbar.classList.contains('hidden')) {
        popbar.classList.remove('hidden');
    }
    let textAreaInput = document.createElement('textarea');
    textAreaInput.id = 'textArea';
    textAreaInput.cols = '30';
    textAreaInput.rows = '8';
    textAreaInput.maxLength = '420'
    textAreaInput.name = 'descriptionText';

    textAreaInput.value = text;
    titleInput.value = title;
    popbar.appendChild(textAreaInput);
}

function createList () {
    createArrayOfList();
    factoryList(titleInput.value, arrayOfList,'1'+new Date().getTime());
    // updateStorage(titleInput.value, Array.from(arrayOfList),'1'+new Date().getTime());
    removeTempItem();
}

function createArrayOfList () {
    let listDiv = document.getElementById('listDivId');
    arrayOfList = []
    while (listDiv.firstChild) {
        if (listDiv.firstChild.classList.contains('listItem')) {
            if (listDiv.firstChild.value != '') {
                arrayOfList.push(listDiv.firstChild.value)
            }
            listDiv.removeChild(listDiv.firstChild);
        } else {
            listDiv.removeChild(listDiv.firstChild);
        }
    }
}

function newListItem (listDiv) {
    let listItem = document.createElement('input');
    listItem.type = 'text';
    listItem.classList.add('listItem');
    listDiv.appendChild(listItem);
    removeListItemButton(listItem, listDiv);
    clickNewListItemButton(listDiv);
}

function clickNewListItemButton (listDiv) {
    let newListItemButton = document.createElement('button');
    newListItemButton.textContent = '+';
    newListItemButton.id = 'newListItemBtn';
    newListItemButton.addEventListener('click', function () {    
        popbar.removeChild(newListItemBtn);
        newListItem(listDiv);
    } )
    popbar.appendChild(newListItemButton);
}

function factoryList (title, array, id) {
    let tempTitle = title;
    let newDiv = document.createElement('div');
    let H2 = document.createElement('h2');
    let listHolder = document.createElement('div');
    
    createEditButton(newDiv, id);
    addDeleteButton(newDiv, id);
    newDiv.classList.add('project');
    newDiv.id = id;
    H2.textContent = tempTitle;

    for (let i = 0; i < array.length; i++) {
        let tempListItem = document.createElement('p');
        tempListItem.textContent = array[i];
        listHolder.appendChild(tempListItem);
    }
    newDiv.appendChild(H2);
    newDiv.appendChild(listHolder);
    projects.appendChild(newDiv);
}

// Removing and Deleting

function addDeleteButton (newDiv, id) {
    let deleteBtn = document.createElement('input');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.type = 'button';
    deleteBtn.value = 'X';
    deleteBtn.addEventListener('click', function() {
        for (let index = 0; index < myArray.length; index++) {
            if (myArray[index][2] == id) {
                myArray.splice(index, 1);
                localStorage.setItem(`myArray`, myArray);
            }
        }
        newDiv.remove();
    });
    newDiv.appendChild(deleteBtn);
}

function removeTempItem () {
    titleInput.value = '';
    popbar.classList.add('hidden');
    if (descriptionImg.classList.contains('active')) {
        popbar.removeChild(textArea);
    }
    if (listImg.classList.contains('active')) {   
        popbar.removeChild(newListItemBtn);
        popbar.removeChild(listDivId);
    }
}

function removeListItemButton (lI, listDiv) {
    let rmvListItemButton = document.createElement('button');
    rmvListItemButton.textContent = 'X';
    rmvListItemButton.classList.add('rmvListItemBtnClass');
    rmvListItemButton.id = 'rmvListItemBtn';
    rmvListItemButton.addEventListener('click', function () {    
        lI.remove();
        rmvListItemButton.remove();
    } )
    listDiv.appendChild(rmvListItemButton);
}

// Local Storage

function checkStorage() {   
    if (!localStorage.getItem('toDoStorage')) {
        setDefault();
    } else {
        loadStorage();
    }
}

function setDefault() {
    factoryDescription('Seja bem vindo',
    'Ainda estamos trabalhando em atualizações no site para melhor atende-lo, por enquanto você pode criar e deletar novos itens apenas, vamos adicionar suporte a listas, datas e corrigir alguns bugs...'
    )
}

// function loadStorage () {
//     console.log('loadStorage function just been executed');

//     tempArray = localStorage.getItem('myArray');
//     splitedArray = tempArray.split(',');
//     makerArray = Array.from(splitedArray);
//     let loaderArray = []
//     for (let index = 0; index < makerArray.length; index++) {
//         let maker = [];
//         maker.push(makerArray[index], makerArray[++index], makerArray[++index]);
//         loaderArray.push(maker);
//     }

//     // Code 0 means Description
//     // Code 1 means List

//     for (let index = 0; index < loaderArray.length; index++) {
//         if (loaderArray[index][2][0] == '0') {
//             factoryDescription(loaderArray[index][0], loaderArray[index][1], loaderArray[index][2]);
//             console.log('zero');
//         }
//         if (loaderArray[index][2][0] == '1') {
//             factoryList(loaderArray[index][0], loaderArray[index][1], loaderArray[index][2]);
//             console.log('one');
//         }
//     }
//     myArray = loaderArray;
// }

// function updateStorage (title, text, id) {
//     myArray.push([title, text, id]);
//     localStorage.setItem(`toDoStorage`, 1);
//     localStorage.setItem(`myArray`, myArray);
// }


// Actual Code ------>

descriptionImg.addEventListener('click', toggleListAndDescription);
listImg.addEventListener('click', toggleListAndDescription);
placeHolder.addEventListener('click', popTheBar);
deleteImg.addEventListener('click', removeTempItem);
checkImg.addEventListener('click', createItem);
checkStorage();

// Functions to Add ------>



// Add editor for Items

// add date support

// Add Up and Down for Items

// Make localStorage Work