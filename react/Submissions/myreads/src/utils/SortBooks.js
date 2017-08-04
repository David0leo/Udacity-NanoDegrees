import sortBy from "sort-by"

// Lets sort the books in the shelves alphabetically for ease of finding books!
function sortBooksAlphabeticallyByTitle(books) {
    return books.sort(sortBy("title"))
}

export default sortBooksAlphabeticallyByTitle