import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BooksApp.css'
import BookShelf from "./BookShelf.js"


class MainPage extends Component {
    render() {
        const { books, onUpdateBook } = this.props

        const bookTitles = {
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
                            title={bookTitles[bookshelf]}
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
}

export default MainPage