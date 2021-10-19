import { TextField } from '@mui/material';
import React, { useState } from 'react'

const Search = () => {
    const [state, setstate] = useState(0);
    return (
        <div>
            <TextField 
             style={{ flex: 1 }}
             className="searchBox"
             label="Search"
             variant="filled"
            //  onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    )
}

export default Search
