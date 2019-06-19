import React from 'react';
// import '.../App.css'


class Read extends React.Component {
    render() {
        const handleRemove = (e) => {
            let confirm = window.confirm('Delete?')
            if (confirm === true) {
                let data = e.target.getAttribute('id')
                let list = JSON.parse(localStorage.getItem('read')) || []
                let read = list.find(item => item.id === data);
                list.pop(read)
                localStorage.setItem('read', JSON.stringify(list))
                window.location.reload()
            }
        }
        const readData = JSON.parse(localStorage.getItem('read'))
        if (readData !== null) {
            return (
                <div>
                    <div className='compheading'>
                        <h3>Read</h3>
                    </div>
                    <div className='card-columns container' >
                        {readData.map(book => {
                            return (
                                <div key={book.id} className=' card books-results'>
                                    {book.volumeInfo.imageLinks ? <a href={book.volumeInfo.infoLink} target='_blank' rel="noopener noreferrer"><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} className='book-cover' /></a> : null}
                                    <div className='card-body'>
                                        {book.volumeInfo.title}
                                        {book.volumeInfo.subtitle ? <h6>- {book.volumeInfo.subtitle}</h6> : null}
                                        <h6>{book.volumeInfo.authors}</h6>
                                        <hr />
                                        <div className='row'>
                                            <div className='col-sm-12 col-lg-6'>
                                                <a href={book.volumeInfo.infoLink} target='_blank' rel="noopener noreferrer">
                                                    <button type="button" className="btn book-button"><i className="fas fa-info btn-icon"></i>Info</button>
                                                </a></div>
                                            <div className='col-sm-12 col-lg-6'>
                                                <button type="button" className="btn book-button" name='remove' id={book.id} onClick={handleRemove}><i className="fas fa-book-dead" ></i> Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
        else if (readData === [] || readData === null) {
            return (
                <div>
                    <div className='compheading'>
                        <h3>Read</h3>
                    </div>
                    <div style={{ textAlign: 'center', color: '#b51a1a' }}>No Books</div>
                </div>
            )
        }

    }

}

export default Read