import React from 'react'

function Search(props) {
    return(
        <form className="search">
            <div className="form-group">
                <input className="form-control" 
                    type="text"
                    placeholder="Search..."
                    {...props}
                    ></input>

            </div>
        </form>
    )
}

export default Search;