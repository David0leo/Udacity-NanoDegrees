import React, { Component } from "react"
import './BooksApp.css'
import Book from './Book.js'

class BookShelf extends Component {
    render() {
        const { title, books, onUpdateBook } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <div className="books-grid">
                        {Object.keys(books).map((bookID) => 
                        <li key={bookID}>
                            <Book 
                                bookDetails={books[bookID]}
                                onUpdateBook={onUpdateBook}
                            >
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