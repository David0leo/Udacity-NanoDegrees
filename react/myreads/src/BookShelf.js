import React from "react"
import './BooksApp.css'
import Book from './Book.js'

const BookShelf = ({title, books, onUpdateBook}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <div className="books-grid">
                    {Object.keys(books).map((bookID) => 
                    <li key={bookID + '-' + books[bookID].title + '-' + books[bookID].shelf}>
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
    )
}

export default BookShelf