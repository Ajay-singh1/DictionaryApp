import React from 'react';
import './Header.css';
import { TextField , MenuItem } from '@mui/material';
import categories from '../../data/category';

const Header = ({setCategory , category , word ,setWord}) => {
    
    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    };

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Word Hunt"}</span>
            <div className='inputs'>
                <TextField id="standard-basic" className='search' label="Search for a Word" variant="standard" value={word} onChange={(e) => setWord(e.target.value)}/>
                <TextField
                    className='select'
                    select
                    value={category}
                    onChange={(e) => handleChange(e.target.value)}
                    helperText="Please select your language"
                >
                {categories.map((option) => (
                    <MenuItem key={option.label} value={option.label}>
                        {option.value}
                    </MenuItem>
                ))};
                    
                </TextField>
            </div>
        </div>
    )
}

export default Header