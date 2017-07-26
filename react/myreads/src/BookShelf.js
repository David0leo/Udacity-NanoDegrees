import React, { Component } from "react"
import './BooksApp.css'
import Book from './Book.js'

class BookShelf extends Component {
    render() {
        const { title, books } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <div className="books-grid">
                        {books.map((book, index) => 
                        <li key={index}>
                            <Book bookDetails={book}>
                            </Book>
                        </li>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default BookShelf