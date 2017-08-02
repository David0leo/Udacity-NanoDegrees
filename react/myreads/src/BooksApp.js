import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI.js'
import './BooksApp.css'
import MainPage from './MainPage.js'
import SearchBooks from './SearchBooks.js'
import sortBooksAlphabeticallyByTitle from './utils/SortBooks.js'

class BooksApp extends Component {
    state = {
        books: []
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

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ 
                books: this.groupBooksByShelf(sortBooksAlphabeticallyByTitle(books)) 
            })
        })
    }

    updateBookState = (bookToUpdate, shelf) => {
        this.setState( state => {
            state.books[shelf][bookToUpdate.id] = bookToUpdate
            delete state.books[bookToUpdate.shelf][bookToUpdate.id]
            books: state.books[shelf][bookToUpdate.id].shelf = shelf
        })
    }

    updateBook = (bookToUpdate, shelf) => {
        BooksAPI.update(bookToUpdate, shelf).then((res) => {
            console.log(bookToUpdate.id)
            console.log(shelf)
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
                            onUpdateBook={this.updateBook}
                        />
                    }
                />
                <Route
                    path="/search"
                    render={({ history }) =>
                        <SearchBooks onUpdateBook={this.updateBook}/>
                    }
                />
            </div>
        )
    }
}

export default BooksApp