"use strict";

const myLibrary = [];

function Book(title, author, pages, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = this.isread;
}

function addBookToLibrary(title, author, pages, isread) {
  const book = new Book(title, author, pages, isread);

  myLibrary.push(book);
}
