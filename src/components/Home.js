import React from 'react';
import Form from './stateless/Form'
import Results from './stateless/Results';
import Err from './stateless/Error';
const API_KEY = 'AIzaSyCx3ptNCGXddNQJFU-dbrwHJxXHuTdYAZg'


class Home extends React.Component {
    state = {
        books: [],
    }
    handleSearch = async (e) => {
        e.preventDefault()

        const bookName = e.target.elements.bookName.value
        if (bookName === '') {
            alert('Please enter the Book/Author Name')
        }
        else {
            const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${API_KEY}`)
            const data = await api_call.json()
            this.setState({
                books: data.items
            })
            console.log(this.state.books)
        }

    }
    handleClick = (e) => {
        let data = e.target.getAttribute('id')
        let btnName = e.target.getAttribute('name')
        let read = this.state.books.find(item => item.id === data);
        let readArray = JSON.parse(localStorage.getItem('read')) || []
        let reading = this.state.books.find(item => item.id === data);
        let readingArray = JSON.parse(localStorage.getItem('reading')) || []
        let wish = this.state.books.find(item => item.id === data);
        let wishArray = JSON.parse(localStorage.getItem('wish')) || []
        console.log(data)
        console.log(btnName)
        if (btnName === 'read') {
            let confirm = window.confirm('Add To Read?')
            if (confirm === true) {
                if (read === [] || read === null) {
                    return null
                }
                else {
                    const check = readArray.find(book => book.id == read.id)
                    const checkReading = readingArray.find(book => book.id == reading.id)
                    const checkWish = wishArray.find(book => book.id == wish.id)
                    if (check === undefined && checkReading === undefined && checkWish === undefined) {
                        readArray.push(read)
                        localStorage.setItem('read', JSON.stringify(readArray))
                    }
                    else {
                        alert('Sorry! Book Already in the one of the Shelves')
                    }
                }

            }

        }
        else if (btnName === 'reading') {
            let confirm = window.confirm('Add To Reading?')
            if (confirm === true) {
                if (reading === [] || reading === null) {
                    return null
                }
                else {
                    const check = readArray.find(book => book.id == read.id)
                    const checkReading = readingArray.find(book => book.id == reading.id)
                    const checkWish = wishArray.find(book => book.id == wish.id)
                    if (check === undefined && checkReading === undefined && checkWish === undefined) {
                        readingArray.push(reading)
                        localStorage.setItem('reading', JSON.stringify(readingArray))
                    }
                    else {
                        alert('Sorry! Book Already in the one of the Shelves')
                    }
                }

            }
        }
        else {
            let confirm = window.confirm('Add To WishList?')
            if (confirm === true) {
                if (wish === [] || wish === null) {
                    return null
                }
                else {
                    const check = readArray.find(book => book.id == read.id)
                    const checkReading = readingArray.find(book => book.id == reading.id)
                    const checkWish = wishArray.find(book => book.id == wish.id)
                    if (check === undefined && checkReading === undefined && checkWish === undefined) {
                        wishArray.push(wish)
                        localStorage.setItem('wish', JSON.stringify(wishArray))
                    }
                    else {
                        alert('Sorry! Book Already in the one of the Shelves')
                    }
                }

            }
        }

    }

    render() {
        return (
            <div>
                <Form handleSearch={this.handleSearch} />
                {Response === 503 ? <Err /> : <Results bookData={this.state.books} handleClick={this.handleClick} />}
            </div>
        )
    }
}

export default Home