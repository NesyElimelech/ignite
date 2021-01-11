import React, { useState } from 'react';
// Styles and Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { fadeIn } from '../animations';
// Redux and Routes
import { fetchSearch } from '../store/actions/gamesActions';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };
  return (
    <StyledNav variants={fadeIn} animate="show" initial="hidden">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    border: none;
    border-radius: 1rem;
    margin: 1.5rem;
    padding: 0.5rem;
    background-color: #ffffff33;
    color: #f3f3f3;
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    &:focus {
      outline: none;
      background-color: #ffffff98;
    }
  }
  button {
    border: none;
    padding: 0.7rem 1.2rem;
    box-shadow: 1px 0px 30px rgba(255, 255, 255, 0.3);
    outline: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0.2rem;
    transition: all 0.2s ease;
    background-color: #e33e3e;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #f3f3f3;
      color: #232323;
    }
    &:active {
      font-size: 0.95rem;
      padding: 0.5rem 1rem;
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
