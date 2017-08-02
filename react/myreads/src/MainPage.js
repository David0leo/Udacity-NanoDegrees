import React from 'react'
import { Link } from 'react-router-dom'
import './BooksApp.css'
import BookShelf from "./BookShelf.js"

const MainPage = ({books, onUpdateBook}) => {
    const bookShelfTitles = {
            currentlyReading: "Currently Reading",
            wantToRead: "Want to Read",
            read: "Read"
        }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {Object.keys(books).map((bookshelf) =>
                    <BookShelf 
                        key={bookshelf}
                        title={bookShelfTitles[bookshelf]}
                        books={books[bookshelf]}
                        onUpdateBook={onUpdateBook}
                    />
                )}
            </div>
            <div className="open-search">
                <Link to="/search">
                Add a book
                </Link>
            </div>
        </div>
    )
}

export default MainPage