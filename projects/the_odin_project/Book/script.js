let getTitle = document.getElementById("title");
let getAuthor = document.getElementById("author");
let getPages = document.getElementById("pages");
let getPagesRead = document.getElementById("pagesRead");
let enterNewBookBtn = document.getElementById("enterBtn")

let myBooks = document.getElementById("myBooks");

let myLibrary = [];

const books1 = new book('O pequeno Principe', 'Antoine', '100', '100')
const books2 = new book('O homem que calculava', 'Malba Tahan', '280', '280')
const books3 = new book('Crônicas de Narnia', 'C.S. Lewis', '700', '327')
const books4 = new book('O Senhor dos Aneis', 'J.R.R. Tolkien', '3000', "0")

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
    //  Create Book Title
    let ptitle = document.createElement('h3');
    ptitle.textContent = myLibrary[i].title;
    newDiv.appendChild(ptitle);
    // Create author h4
    let pauthor = document.createElement('h4');
    pauthor.textContent = myLibrary[i].author;
    newDiv.appendChild(pauthor);
    // Create percentage read
    let percent = document.createElement('p');
    percent.textContent = `${Math.round((myLibrary[i].hasRead/myLibrary[i].pages)*100)}% of the book read`;
    newDiv.appendChild(percent);
    // Create nº of Pages read text
    let pagesRead = document.createElement('p');
    pagesRead.textContent = `${myLibrary[i].hasRead} of ${myLibrary[i].pages} pages`;
    newDiv.appendChild(pagesRead);
    //  Add book to library
    myBooks.appendChild(newDiv);
}

enterNewBookBtn.addEventListener("click", function() {
    let i = myLibrary.length;

    const newBook = new book(
        getTitle.value, 
        getAuthor.value, 
        getPages.value, 
        getPagesRead.value);

    // Add book to Library
    addBookToList(i)
})

// Add calculator to calc how much time to read with X pages per day
// Add calculator to calc how much pages to read per day with X time to read the full book


let newDiv = document.createElement('div')
newDiv.classList.add('opa')

for (let i = 0; i < myLibrary.length; i++) {
    addBookToList(i);
}