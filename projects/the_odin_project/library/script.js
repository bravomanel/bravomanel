let getTitle = document.getElementById("title");
let getAuthor = document.getElementById("author");
let getPages = document.getElementById("pages");
let getPagesRead = document.getElementById("pagesRead");
let enterNewBookBtn = document.getElementById("enterBtn")
let finishedBtn = document.getElementById('finishedBtn');
let noneBtn = document.getElementById('noneBtn');

let myBooks = document.getElementById("myBooks");

let myLibrary = [];

const books1 = new book('O pequeno Principe', 'Antoine', '100', '100')
const books2 = new book('O homem que calculava', 'Malba Tahan', '280', '280')
const books3 = new book('Crônicas de Narnia', 'C.S. Lewis', '700', '327')
const books4 = new book('O Senhor dos Aneis', 'J.R.R. Tolkien', '3000', "0")

// Add date to page
let today = new Date();
let date = `${+today.getDate()}-${today.getMonth()+1}-${today.getFullYear()} - DD/MM/YYYY`;
let formulario = document.getElementsByClassName('form');
let dateHolder = document.createElement('p');
dateHolder.classList.add('todayDate');
dateHolder.textContent = date;
// formulario.appendChild(dateHolder);

//  Function that Creates a Book
function book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    myLibrary.push(this);
}

// Function that add the book to the Library
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
    // Create percentage of reading
    let percent = document.createElement('p');
    percent.textContent = `${Math.round((myLibrary[i].hasRead/myLibrary[i].pages)*100)}% of the book read`;
    newDiv.appendChild(percent);
    // Create nº of pages read text
    let pagesRead = document.createElement('p');
    pagesRead.textContent = `${myLibrary[i].hasRead} of ${myLibrary[i].pages} pages`;
    newDiv.appendChild(pagesRead);
    
    // Add button to remove the book
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = "Remove this book";
    removeBtn.addEventListener('click', function () {
        document.getElementById(`book${i}`).remove();
    });
    newDiv.appendChild(removeBtn);
    
    // Reading Now button
    readingFunction(newDiv)

    //  Add book to library
    myBooks.appendChild(newDiv);
}

// Function that add Reading Now class
function readingFunction(newDiv) {
    let readingNowBtn = document.createElement('button');
    readingNowBtn.innerHTML = 'Reading it Now'
    readingNowBtn.addEventListener('click', function() {
        removeReadingFunction(newDiv);
        newDiv.classList.add('readingNow');
        readingNowBtn.remove();
    });
    newDiv.appendChild(readingNowBtn);
}

// Function that removes Reading Now class
function removeReadingFunction(newDiv) {
    let removeReadingBtn = document.createElement('button');
    removeReadingBtn.textContent = "Not really reading it";
    removeReadingBtn.addEventListener('click', function() {
        newDiv.classList.remove('readingNow');
        readingFunction(newDiv)
        removeReadingBtn.remove();
    })
    newDiv.appendChild(removeReadingBtn);
}

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
        
        // Add book to Library
        addBookToList(i)
    });

// Add preexistent books to library
for (let i = 0; i < myLibrary.length; i++) {
    addBookToList(i);
}


    // Add calculator to calc how much time to read with X pages per day
    // Add calculator to calc how much pages to read per day with X time to read the full book
    // Button to add book