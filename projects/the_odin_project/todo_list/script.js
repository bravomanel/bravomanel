let descriptionImg = document.getElementById('descriptionIMG');
let listImg = document.getElementById('listIMG');
let checkImg = document.getElementById('checkIMG');
let deleteImg = document.getElementById('deleteIMG');
let placeHolder = document.getElementById('placeHolder')
let titleInput = document.getElementById('titleInput');
let popbar = document.getElementById('popBar');
let projects = document.getElementById('projects');


// <------ Getting Variables

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

function clickListAndDescription () {
    toggleListAndDescription()
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
        let underConstruction = document.createElement('p');
        underConstruction.textContent = 'Ainda estamos trabalhando nessa função';
        underConstruction.id = 'underconstrct'
        popbar.appendChild(underConstruction);
    }    
}

function removeTempItem () {
    titleInput.value = '';
    popbar.classList.add('hidden');
    if (descriptionImg.classList.contains('active')) {
        popbar.removeChild(textArea);
    }
    if (listImg.classList.contains('active')) {   
        popbar.removeChild(underconstrct);
    }
}

function checkEmpty () {
    if (descriptionImg.classList.contains('active')) {
        if (textArea.value == '' && titleInput.value == '') {
            removeTempItem();
        }
     }

    if (listImg.classList.contains('active')) {   
        removeTempItem()    
    }
}

function createItem () {
    checkEmpty();
    if (descriptionImg.classList.contains('active')) {
        createDescription();
    }
}

function factoryFunction (title, text, id) {
    let tempTitle = title;
    let tempText = text;
    let newDiv = document.createElement('div');
    let H2 = document.createElement('h2');
    let p = document.createElement('p');
    
    addDeleteButton(newDiv, id);
    // let deleteBtn = document.createElement('input');
    // deleteBtn.classList.add('deleteBtn');
    // deleteBtn.type = 'button';
    // deleteBtn.value = 'X';
    // deleteBtn.addEventListener('click', function() {
    //     newDiv.remove();
    // });
    // newDiv.appendChild(deleteBtn);

    newDiv.classList.add('project');
    H2.textContent = tempTitle;
    p.textContent = tempText;

    newDiv.appendChild(H2);
    newDiv.appendChild(p);
    projects.appendChild(newDiv);
}


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

function createDescription () {
    factoryFunction(titleInput.value, textArea.value)
    updateStorage(titleInput.value, textArea.value, new Date().getTime());
    removeTempItem();
}


// Local Storage

let myArray = []

if (!localStorage.getItem('toDoStorage')) {
    setDefault();
} else {
    loadStorage();
}

function setDefault() {
    factoryFunction('Seja bem vindo',
    'Ainda estamos trabalhando em atualizações no site para melhor atende-lo, por enquanto você pode criar e deletar novos itens apenas, vamos adicionar suporte a listas, datas e salvar seus itens nos dispositivos'
    )
}


function loadStorage () {
    console.log('loadStorage function just been executed');

    tempArray = localStorage.getItem('myArray');
    splitedArray = tempArray.split(',');
    makerArray = Array.from(splitedArray);
    let loaderArray = []
    for (let index = 0; index < makerArray.length; index++) {
        let maker = [];
        maker.push(makerArray[index], makerArray[++index], makerArray[++index]);
        loaderArray.push(maker);
    }

    for (let index = 0; index < loaderArray.length; index++) {
        factoryFunction(loaderArray[index][0], loaderArray[index][1], loaderArray[index][2]);
    }
    myArray = loaderArray;
}

function updateStorage (title, text, id) {
    myArray.push([title, text, id]);
    localStorage.setItem(`toDoStorage`, 1);
    localStorage.setItem(`myArray`, myArray);
}


// Actual Code ------>

descriptionImg.addEventListener('click', clickListAndDescription);
listImg.addEventListener('click', clickListAndDescription);
placeHolder.addEventListener('click', popTheBar);
deleteImg.addEventListener('click', removeTempItem);
checkImg.addEventListener('click', createItem);