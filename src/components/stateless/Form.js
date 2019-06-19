import React from 'react'

function Form(props){
    return (
        <div>
            <div className="mainhead">Read Up</div>
            <div className="container mainform" >
                <div >
                    <form onSubmit={props.handleSearch}>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <div className="form-group">
                                    <label >Book/Author Name</label>
                                    <input type="text" className="form-control" id="bookname" name='bookName' placeholder="Search..." />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn" id='srch-btn'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form