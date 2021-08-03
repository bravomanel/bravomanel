let getTitle = document.getElementById("title");
let getAuthor = document.getElementById("author");
let getPages = document.getElementById("pages");
let getPagesRead = document.getElementById("pagesRead");
let enterNewBookBtn = document.getElementById("enterBtn")
let finishedBtn = document.getElementById('finishedBtn');
let noneBtn = document.getElementById('noneBtn');
let myBooks = document.getElementById("myBooks");
let myLibrary = [];


// Add date to page
let today = new Date();
let date = `${+today.getDate()}-${today.getMonth()+1}-${today.getFullYear()} - DD/MM/YYYY`;
let formulario = document.getElementsByClassName('form');
let dateHolder = document.createElement('p');
dateHolder.classList.add('todayDate');
dateHolder.textContent = date;


//  Book Object Constructor
function book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    myLibrary.push(this);
}

// Display Book on the page
function addBookToList(i) {
    // Create Book Div
    let newDiv = document.createElement('div');
    newDiv.classList.add(`book`);
    newDiv.id = `book${i}`;
    //  Create Book Title
    let ptitle = document.createElement('h3');
    ptitle.textContent = myLibrary[i].title;
    newDiv.appendChild(ptitle);
    // Create author h4
    let pauthor = document.createElement('h4');
    pauthor.textContent = myLibrary[i].author;
    newDiv.appendChild(pauthor);
    // Create nº of pages read text
    let pagesRead = document.createElement('p');
    pagesRead.textContent = `${myLibrary[i].hasRead} of ${myLibrary[i].pages} pages`;
    newDiv.appendChild(pagesRead);
    // Create percentage of reading
    let percent = document.createElement('p');
    percent.textContent = `${Math.round((myLibrary[i].hasRead/myLibrary[i].pages)*100)}% of the book read`;
    newDiv.appendChild(percent);
    
    // Update Pages function
    function updatePages() {
        pagesRead.textContent = `${myLibrary[i].hasRead} of ${myLibrary[i].pages} pages`;
        newDiv.appendChild(pagesRead);
        percent.textContent = `${Math.round((myLibrary[i].hasRead/myLibrary[i].pages)*100)}% of the book read`;
        newDiv.appendChild(percent);
    }

    // Add button to remove the book
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('btn')
    removeBtn.innerHTML = "Remove this book";
    removeBtn.addEventListener('click', function () {
        myLibrary.splice(i, 1);
        document.getElementById(`book${i}`).remove();
        setMyLibrary();
    });
    newDiv.appendChild(removeBtn);
    
    // Add buttons to pages read
    
    let plusPage = document.createElement('button');
    plusPage.classList.add('btn')
    plusPage.innerHTML = "+";
    plusPage.addEventListener('click', function() {
        myLibrary[i].hasRead++;
        updatePages();
    })
    let minusPage = document.createElement('button');
    minusPage.classList.add('btn')
    minusPage.innerHTML = "-";
    minusPage.addEventListener('click', function() {
        myLibrary[i].hasRead--;
        updatePages();
    })

    // let calcPage = document.createElement('button');
    // calcPage.classList.add('btn')
    // calcPage.innerHTML = `Add {x} pages`;
    // newDiv.appendChild(calcPage)
    
    newDiv.appendChild(plusPage)
    newDiv.appendChild(minusPage)
    
    // Reading Now button
    // readingFunction(newDiv)

    //  Add book to library
    myBooks.appendChild(newDiv);
}

// // Function that add Reading Now class
// function readingFunction(newDiv) {
//     let readingNowBtn = document.createElement('button');
//     readingNowBtn.classList.add('btn')
//     readingNowBtn.innerHTML = 'Reading it Now'
//     readingNowBtn.addEventListener('click', function() {
//         removeReadingFunction(newDiv);
//         newDiv.classList.add('readingNow');
//         readingNowBtn.remove();
//     });
//     newDiv.appendChild(readingNowBtn);
// }

// // Function that removes Reading Now class
// function removeReadingFunction(newDiv) {
//     let removeReadingBtn = document.createElement('button');
//     removeReadingBtn.classList.add('btn')
//     removeReadingBtn.textContent = "Not really reading it";
//     removeReadingBtn.addEventListener('click', function() {
//         newDiv.classList.remove('readingNow');
//         readingFunction(newDiv)
//         removeReadingBtn.remove();
//     })
//     newDiv.appendChild(removeReadingBtn);
// }


// Validate Form Required
function validateForm() {
    if (getTitle.value == "") {
        alert('Please enter a Title for the book!')
        return true;
    } else if (getPages.isInteger || getPages.value == "") {
        alert('Please enter the total number of pages of the Book.')
        return true;
    } else if (getPagesRead.isInteger || getPagesRead.value == "") {        
        alert('Please enter the total number of pages you already read.')
        return true;
    } else if (getPagesRead.value > getPages.value) {
        alert("You've read more pages than the book has!")
    } else {return false;}
}

// Didn't Read and Finished Reading buttons
noneBtn.addEventListener('click', function() {
    getPagesRead.value = 0;
})

finishedBtn.addEventListener('click', function() {
    getPagesRead.value = getPages.value;
})


//  Enter New Book Event Listener
enterNewBookBtn.addEventListener("click", function() {
    let i = myLibrary.length;
    if (validateForm() == false) {
    } else {
        return;
    }
    const newBook = new book(
        getTitle.value, 
        getAuthor.value, 
        getPages.value, 
        getPagesRead.value);

        // Display book and add to Library
        addBookToList(i)
        // addBookToList(i)
        setMyLibrary();
    });



// Creates Standard Library for new users
function createStandardLibrary() {
    // const books1 = new book('O pequeno Principe', 'Antoine', '100', '100')
    // const books2 = new book('O homem que calculava', 'Malba Tahan', '280', '280')
    // const books3 = new book('Crônicas de Narnia', 'C.S. Lewis', '700', '327')
    const books1 = new book('Título do Livro', 'Autor', '100', "10")
    const books2 = new book('A Culpa É das Estrelas', 'John Green', '313', "0")
    // const books4 = new book('O Senhor dos Aneis', 'J.R.R. Tolkien', '3000', "0")

    for (let i = 0; i < myLibrary.length; i++) {
        addBookToList(i);
    }
}

// Update local storage - setMyLibrary
function setMyLibrary() {
    let storedLibrary = JSON.stringify(myLibrary);
    localStorage.setItem('booksArray', storedLibrary);
}

// Get the books from localStorage and Display
function getMyLibrary() {
    let storedLibrary = localStorage.getItem('booksArray');
    myLibrary = JSON.parse(storedLibrary);
    for (let i = 0; i < myLibrary.length; i++) {
        addBookToList(i);
    }
}

// <---- Only Scopes before here ----> //

// <---- Actual code down here ----> //

// Check if there is any Local Storage, then get it/create a new one

if(localStorage.getItem('booksArray')) {
        getMyLibrary();
    } else {
        createStandardLibrary();
  }

// localStorage.clear();


// <---- Things to do next ----> //

    // Finish Web Storage API implementation
        // is missing a standard storage creator function, to new Users on the site
        // is missing remove the book button to update the localStorage

    // Add calculator to calc how much time to read with X pages per day
    // Add calculator to calc how much pages to read per day with X time to read the full book
    // Button to add book