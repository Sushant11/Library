import React from 'react';
// import '.../App.css'


class Reading extends React.Component {
    handleRead =(e) =>{
        let data = e.target.getAttribute('id')
        let list = JSON.parse(localStorage.getItem('reading')) || []
        let reading = list.find(item => item.id === data);
        console.log(reading)
        let confirm = window.confirm('Send to READ?')
        if(confirm === true){
            list.pop(reading)
            localStorage.setItem('reading', JSON.stringify(list))
            // alert('Added To READ')
            document.location.reload()
            let readingArray = JSON.parse(localStorage.getItem('read')) || []
            readingArray.push(reading)
            localStorage.setItem('read', JSON.stringify(readingArray))
        }
        
    }
    render() {
        const readingData = JSON.parse(localStorage.getItem('reading'))
        if (readingData !== null) {
            return (
                <div>
                    <div className='compheading'>
                        <h3>Reading</h3>
                    </div>
                    <div className='card-columns container' >
                        {readingData.map(book => {
                            return (
                                <div key={book.id} className=' card books-results'>
                                    {book.volumeInfo.imageLinks ? <a href={book.volumeInfo.infoLink} target='_blank' rel="noopener noreferrer"><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} className='book-cover' /></a> : null}
                                    <div className='card-body'>
                                        {book.volumeInfo.title}
                                        {book.volumeInfo.subtitle ? <h6>- {book.volumeInfo.subtitle}</h6> : null}
                                        <h6>{book.volumeInfo.authors}</h6>
                                        <hr />
                                        <div className='row'>
                                            <div className='col-sm-12 col-lg-12'><button type="button" className="btn book-button" id='read' name='read' id={book.id} onClick={this.handleRead}><i className="fas fa-check btn-icon"></i> READ</button></div>
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
                        <h3>Reading</h3>
                    </div>
                    <div style={{ textAlign: 'center', color: '#b51a1a' }}>No Books</div>
                </div>
            )
        }
    }

}

export default Reading