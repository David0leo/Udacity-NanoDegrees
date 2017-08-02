import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI.js'
import './BooksApp.css'
import MainPage from './MainPage.js'
import SearchBooks from './SearchBooks.js'
import sortBooksAlphabeticallyByTitle from './utils/SortBooks.js'

class BooksApp extends Component {
    state = {
        books: {},
        shelves: []
    }

    groupBooksByShelf(books) {
        //param books// Array of objects of book information 
        let groupedBooks = {}
        for (const book of books) {
            if (book.shelf in groupedBooks) {
                groupedBooks[book.shelf][book.id] = book
            } else {
                groupedBooks[book.shelf] = {}
                groupedBooks[book.shelf][book.id] = book
            }
        }
        return groupedBooks
    }

    getSortedShelves(books) {
        let shelves = new Set()
        for (const book of books) {
            if (!(shelves.has(book.shelf))) {
                shelves.add(book.shelf)
            }
        }
        // maybe might want a different order, but alphabetical
        // makes it easy to find things
        return [...shelves].sort()
    }
    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ 
                books: this.groupBooksByShelf(sortBooksAlphabeticallyByTitle(books)),
                shelves: this.getSortedShelves(books)
            })
        })
    }

    updateBookState = (bookToUpdate, shelf) => {
        let books = this.state.books
        // if the old shelf is one of the shelves being displayed
        if (bookToUpdate.shelf in books) {
            // remove book from old shelf
            delete books[bookToUpdate.shelf][bookToUpdate.id]
        }
        // if the shelf being moved to is not 'None', or not in use
        if (shelf in books) {    
            // add book to new shelf
            books[shelf][bookToUpdate.id] = bookToUpdate
            // change book's shelf value to the new shelf
            books[shelf][bookToUpdate.id].shelf = shelf
        }
        //delete books[bookToUpdate.shelf][bookToUpdate.id]

        this.setState({books})
    }

    updateBook = (bookToUpdate, shelf) => {
        BooksAPI.update(bookToUpdate, shelf).then((res) => {
            // console.log(bookToUpdate.id)
            // console.log(shelf)
            this.updateBookState(bookToUpdate, shelf)
        })
    }

    render() {
        return (
            <div>
                <Route
                    exact
                    path='/'
                    render={() =>
                        <MainPage
                            books={this.state.books}
                            shelves={this.state.shelves}
                            onUpdateBook={this.updateBook}
                        />
                    }
                />
                <Route
                    path="/search"
                    render={({ history }) =>
                        <SearchBooks 
                            books={this.state.books}
                            onUpdateBook={(book, shelf) => {
                                // not really necessary structure, but if we want
                                // to navigate back after changing a book's shelf
                                // we want this code
                                this.updateBook(book, shelf)
                                // go back to main page if you want uncomment line below
                                // history.push("/")
                            }}
                        />
                    }
                />
            </div>
        )
    }
}

export default BooksApp