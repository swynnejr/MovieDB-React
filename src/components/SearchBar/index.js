import React, { useState, useEffect, useRef } from 'react';
// Image
import searchIcon from '../../images/search-icon.svg';
import { Content, Wrapper } from '../HeroImage/HeroImage.styles';

const SearchBar = ({ setSearchTerm }) => {

    

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input type="text" placeholder="Search Movie" />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;