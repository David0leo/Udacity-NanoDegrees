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
        if (query == "") {
            console.log("empty query")
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
                    this.setState({
                        searchedBooks: books
                    })
                }
            })
        }
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