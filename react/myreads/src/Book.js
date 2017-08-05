import React from "react"
import './BooksApp.css'

const Book = ({bookDetails, onUpdateBook}) => {
    return (
        <div className="book">
            <div className="book-top">
                <div 
                    className="book-cover" 
                    style={
                        {   
                            backgroundImage: `url(${bookDetails.imageLinks.thumbnail})`
                        }
                    }
                ></div>
                <BookShelfChanger bookData={bookDetails} onUpdateBook={onUpdateBook}></BookShelfChanger>
            </div>
            <div className="book-title">{bookDetails.title}</div>
            <div className="book-authors">{bookDetails.authors.join(', ')}</div> 
        </div>
    )
}

const BookShelfChanger = ({bookData, onUpdateBook}) => {
    const options = [
        {
            value: "none",
            disabled: true,
            text: "Move to..."
        },
        {
            value: "currentlyReading",
            disabled: false,
            text: "Currently Reading"
        },
        {
            value: "wantToRead",
            disabled: false,
            text: "Want to Read"
        },
        {
            value: "read",
            disabled: false,
            text: "Read"
        },
        {
            value: "none",
            disabled: false,
            text: "None"
        }
    ]

    return (
        <div className="book-shelf-changer">
            <select 
                value={bookData.shelf}
                onChange={(event) => {
                    onUpdateBook(bookData, event.target.value)
                }}
            >
                {options.map((option, index) =>
                <option 
                    key={index} 
                    value={option.value} 
                    disabled={option.disabled}
                >
                {option.text}
                </option>
                )}
            </select>
        </div>
    )
}

export default Book