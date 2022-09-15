import React from "react"

function Search({searchBooks}) {
    return(
        <div onChange={searchBooks}>
            <input type="text" placeholder="Search books..." />
        </div>
    );
}

export default Search;