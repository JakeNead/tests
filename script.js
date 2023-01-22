function Book (title, author, pages, hasRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.hasRead = hasRead
  this.info = function () {
     return `${title} by ${author}, ${pages} pages, ${hasRead ? 'previously read' : 'has not been read yet'}`
    }
}
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '304', true)


console.log(theHobbit.info())