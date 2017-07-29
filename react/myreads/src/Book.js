import React, { Component } from "react"
import './BooksApp.css'

class Book extends Component {

    render() {
        const { bookDetails, onUpdateBook } = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={
                            {   
                                width: 128, 
                                height: 193, 
                                backgroundImage: `url(${bookDetails.imageLinks.thumbnail})`
                            }
                        }
                    ></div>
                    <BookShelfChanger bookData={bookDetails} onUpdateBook={onUpdateBook}></BookShelfChanger>
                </div>
                <div className="book-title">{bookDetails.title}</div>
                 <div className="book-authors">{
                    //bookDetails.authors.join(', ')
                }
                </div> 
            </div>
        )

    }
}

class BookShelfChanger extends Component {
    state = {
        options: [
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
    }
        
    
    render(){
        const { bookData, onUpdateBook } = this.props

        return (
            <div className="book-shelf-changer">
                <select 
                    defaultValue={bookData.shelf}
                    onChange={(event) => {
                        console.log("changing")
                        onUpdateBook(bookData, event.target.value)
                    }}
                >
                    {this.state.options.map((option, index) =>
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
}

export default Book