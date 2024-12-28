"use strict";

const addBook = document.querySelector(".add-book");
const modal = document.querySelector("#modal");
const dialogForm = document.querySelector("#bookForm");

const closeModal = document.querySelector(".close");
const confirm = document.querySelector(".confirm");

// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const pages = document.querySelector("#pages");
// const isRead = document.querySelector("#isRead");

const myLibrary = [];

// Book prototype
function Book(title, author, pages, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = isread;
}

// creates original object and store that object in myLibrary.
function addBookToLibrary(title, author, pages, read) {
  // original object
  const book = new Book(title, author, pages, read);

  myLibrary.push(book);

  displayBook();
}

function createBookCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");

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

  const read = document.createElement("button");
  read.classList.add("read");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages}`;
  read.textContent = `${book.isread == true ? "Read" : "Not Read"}`;
  deleteBtn.textContent = `Delete`;

  bottomBtns.appendChild(read);
  bottomBtns.appendChild(deleteBtn);
  cardBottom.appendChild(pages);
  cardBottom.appendChild(bottomBtns);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(cardBottom);

  return card;
}

function displayBook() {
  const booksContainer = document.querySelector(".cards");

  const newBookCard = createBookCard(myLibrary[myLibrary.length - 1]);
  booksContainer.appendChild(newBookCard);
}

function clearInputs() {
  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.value = false;
}

addBook.addEventListener("click", () => {
  // event.preventDefault();
  modal.showModal();
});

confirm.addEventListener("click", () => {
  const Title = document.querySelector("#title");
  const Author = document.querySelector("#author");
  const Pages = document.querySelector("#pages");
  const Read = document.querySelector("#isRead");

  addBookToLibrary(Title.value, Author.value, Pages.value, Read.value);

  clearInputs();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
