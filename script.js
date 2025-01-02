"use strict";

const Title = document.querySelector("#title");
const Author = document.querySelector("#author");
const Pages = document.querySelector("#pages");
const Read = document.querySelector("#isRead");

const addBook = document.querySelector(".add-book");
const modal = document.querySelector("#modal");
const dialogForm = document.querySelector("#bookForm");

const closeModal = document.querySelector(".close");
const confirm = document.querySelector(".confirm");

const myLibrary = [];

// Book prototype
function Book(title, author, pages, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = isread;
}

// creates original object and store that object in myLibrary array.
function addBookToLibrary(title, author, pages, read) {
  // original object
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBook(library) {
  const booksContainer = document.querySelector(".cards");
  booksContainer.innerHTML = "";

  library.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-index", index);

    const title = document.createElement("h1");
    title.classList.add("title");

    const author = document.createElement("p");
    author.classList.add("author");

    const cardBottom = document.createElement("div");
    cardBottom.classList.add("card-bottom");

    const pages = document.createElement("p");
    pages.classList.add("pages");

    const bottomBtns = document.createElement("div");
    bottomBtns.classList.add("bottom-btns");

    const readBtn = document.createElement("button");
    readBtn.classList.add("read");
    readBtn.textContent = `${book.isread == "true" ? "Read" : "Not Read"}`;

    readBtn.addEventListener("click", () => {
      if (readBtn.textContent == "Read") {
        readBtn.textContent = "Not Read";
      } else {
        readBtn.textContent = "Read";
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = `Delete`;

    deleteBtn.addEventListener("click", () => {
      const cardIndex = card.dataset.index;

      myLibrary.splice(cardIndex, 1);
      displayBook(myLibrary);
    });

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;

    bottomBtns.appendChild(readBtn);
    bottomBtns.appendChild(deleteBtn);
    cardBottom.appendChild(pages);
    cardBottom.appendChild(bottomBtns);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(cardBottom);
    booksContainer.appendChild(card);
  });
}

addBookToLibrary("Atomic Habits", "James Clear", 306, false);
addBookToLibrary(
  "The 7 Habits of Highly Effective People",
  "Stephen R. Covey",
  250,
  false
);
addBookToLibrary("Rich Dad, Poor Dad", "Robert T. Kiyosaki", 345, false);

function handleNewBookFormSubmit(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;

  addBookToLibrary(title, author, pages, read);
  displayBook(myLibrary);

  clearInputs();
}

function clearInputs() {
  Title.value = "";
  Author.value = "";
  Pages.value = "";
  Read.value = false;
}

addBook.addEventListener("click", () => {
  // event.preventDefault();
  modal.showModal();
});

confirm.addEventListener("click", () => {
  addBookToLibrary(Title.value, Author.value, Pages.value, Read.value);
  displayBook(myLibrary);
  clearInputs();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

displayBook(myLibrary);
