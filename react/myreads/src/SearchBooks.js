import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI.js'
import sortBooksAlphabeticallyByTitle from './utils/SortBooks.js'
import Book from './Book.js'


class SearchBooks extends Component {
    state = {
        searchedBooks: [],
        query: ""
    }

    searchBooks(query=this.state.query, max_results=50) {
        if (query === "") {
            //console.log("empty query")
            this.setState({
                searchedBooks: []
            })
        } else{
            BooksAPI.search(query.trim(), max_results).then(books => {
                if ("error" in books){
                    this.setState({
                        searchedBooks: []
                    })
                } else{
                    const searchedBooks = this.processSearchedBooks(books)
                    this.setState({searchedBooks})
                }
            })
        }
    }

    processSearchedBooks(books) {
        // consult books on main page for shelves
        const mainBooks = this.props.books
        for (let book of books) {
            let inMain = false
            for (let mainShelf of Object.keys(mainBooks)) {
                if (book['id'] in mainBooks[mainShelf]){
                    inMain = true
                    book = mainBooks[mainShelf][book['id']]
                }
            }
            if (!inMain) {
                // set default shelf to 'none'
                book['shelf'] = 'none'
            }

            // some data retrieved is incomplete, patch it up
            if (!('authors' in book)) {
                book['authors'] = ['']
            }
            if (!('imageLinks' in book)) {
                book['imageLinks'] = {'thumbnail':'', 'smallThumbnail':''}
            }
        }
        return sortBooksAlphabeticallyByTitle(books)
    }

    updateQuery = (query) => {
        this.setState({ 
            query: query
        })
        this.searchBooks(query)
    }

    // updateNewQuery = newQuery => {
    //     this.setState({ newQuery })
    // }

    // clearOldQuery = oldQuery => {
    //     this.setState({ oldQuery: "" })
    // }

    // clearNewQuery = newQuery => {
    //     this.setState({ newQuery: "" })
    // }

    render() {
        const {searchedBooks, query} = this.state
        const {onUpdateBook} = this.props

        

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search"></Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange={event => {
                                this.updateQuery(event.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {searchedBooks.map((book, index) =>
                    <li key={index}>
                        <Book 
                            bookDetails={book}
                            onUpdateBook={onUpdateBook}
                        >
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