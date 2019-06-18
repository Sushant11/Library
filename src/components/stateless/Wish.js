import React from 'react';
// import '.../App.css'


class Read extends React.Component {
    handleWish =(e) =>{
        let data = e.target.getAttribute('id')
        let list = JSON.parse(localStorage.getItem('wish')) || []
        let read = list.find(item => item.id === data);
        console.log(read)
        let confirm = window.confirm('Are you reading this book?')
        if(confirm === true){
            list.pop(read)
            localStorage.setItem('wish', JSON.stringify(list))
            alert('Added To READING')
            document.location.reload()
            let readingArray = JSON.parse(localStorage.getItem('reading')) || []
            readingArray.push(read)
            localStorage.setItem('reading', JSON.stringify(readingArray))
        }
        
    }
    render() {
        const wishData = JSON.parse(localStorage.getItem('wish'))
        if (wishData !== null) {
            return (
                <div>
                    <div className='compheading'>
                        <h3>WishList</h3>
                    </div>
                    <div className='card-columns container' >
                        {wishData.map(book => {
                            return (
                                <div key={book.id} className=' card books-results'>
                                    {book.volumeInfo.imageLinks ? <a href={book.volumeInfo.infoLink} target='_blank' rel="noopener noreferrer"><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} className='book-cover' /></a> : null}
                                    <div className='card-body'>
                                        {book.volumeInfo.title}
                                        {book.volumeInfo.subtitle ? <h6>- {book.volumeInfo.subtitle}</h6> : null}
                                        <h6>{book.volumeInfo.authors}</h6>
                                        <hr />
                                        <div className='row'>
                                            <div className='col-sm-12 col-lg-12'><button type="button" className="btn book-button" id='read' name='read' id={book.id} onClick={this.handleWish}><i className="fas fa-check btn-icon"></i> Reading</button></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className='compheading'>
                        <h3>WishList</h3>
                    </div>
                    <div style={{ textAlign: 'center', color: '#b51a1a' }}>No Books</div>
                </div>
            )
        }

    }

}

export default Read