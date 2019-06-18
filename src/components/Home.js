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
        console.log(data)
        console.log(btnName)
        if (btnName === 'read') {
            let id = JSON.parse(localStorage.getItem('read')).id
            console.log(id)
            let confirm = window.confirm('Add To Read?')
            if (confirm === true) {
                let read = this.state.books.find(item => item.id === data);
                let readArray = JSON.parse(localStorage.getItem('read')) || []
                readArray.push(read)
                localStorage.setItem('read', JSON.stringify(readArray))
            }

        }
        else if (btnName === 'reading') {
            let confirm = window.confirm('Add To Reading?')
            if (confirm === true) {
                let reading = this.state.books.find(item => item.id === data);
                let readingArray = JSON.parse(localStorage.getItem('reading')) || []
                readingArray.push(reading)
                localStorage.setItem('reading', JSON.stringify(readingArray))
            }
        }
        else {
            let confirm = window.confirm('Add To WishList?')
            if (confirm === true) {
                let wish = this.state.books.find(item => item.id === data);
                console.log(wish)
                let wishArray = JSON.parse(localStorage.getItem('wish')) || []
                console.log(wishArray)
                wishArray.push(wish)
                console.log(wishArray)
                localStorage.setItem('wish', JSON.stringify(wishArray))
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