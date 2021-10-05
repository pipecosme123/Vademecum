import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import '../css/SearchBar.css';

const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <AiOutlineSearch />
            <input type="search" name="" id="" placeholder="¿Que desea buscar?" />
        </div>
    );
};

export default SearchBar;