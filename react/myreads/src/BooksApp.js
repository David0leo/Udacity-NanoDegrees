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
                groupedBooks[book.shelf].push(book)
            } else {
                groupedBooks[book.shelf] = [book]
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

    render() {
        return (
            <div>
                <Route
                    exact
                    path='/'
                    render={() =>
                        <MainPage
                            books={this.state.books}
                        />
                    }
                />
                <Route
                    path="/search"
                    render={({ history }) =>
                        <SearchBooks/>
                    }
                />
            </div>
        )
    }
}

export default BooksApp