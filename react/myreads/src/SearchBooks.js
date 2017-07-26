import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI.js'
import sortBooksAlphabeticallyByTitle from './utils/SortBooks.js'
import Book from './Book.js'


class SearchBooks extends Component {
    state = {
        searchedBooks: []
    }

    searchBooks(query, max_results=50) {
        BooksAPI.search(query, max_results).then(books => {
            this.setState({
                searchedBooks: sortBooksAlphabeticallyByTitle(books)
            })
        })
    }
//test
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search"></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {this.state.searchedBooks.map((book, index) =>
                    <li key={index}>
                        <Book bookDetails={book}>
                        </Book>
                    </li>
                    )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks