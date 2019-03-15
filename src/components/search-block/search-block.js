import React from 'react'

import './search-block.css'


const SearchBlock = () => {
    const val = 'Search something here';
    const styleInput = {
        fontSize: '15px',
        color: 'blue',
    };
    return (
        <div className='search-block'>
            <input style={styleInput} type="search" placeholder={val}
                   tabIndex={2}
                   className='moi form-control'
                   id='moi'
            />
            <div className="search-btn-group btn-group">
                <button className='btn btn-outline-info active'>All</button>
                <button className='btn btn-outline-secondary'>Active</button>
                <button className='btn btn-outline-secondary'>Done</button>
            </div>
        </div>
    )
};

export default SearchBlock;