import React, { useEffect } from 'react';
import { smallerImage } from '../util';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popup } from '../animations';
// Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../store/actions/detailAction';
// Router
import { Link, useHistory } from 'react-router-dom';

const Game = ({ name, released, image, id }) => {
  const history = useHistory();
  // Fixing animation transition bug
  const stringPathId = id.toString();

  // Load detail handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  useEffect(() => {
    if (history.location.pathname === '/') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [history.location]);

  return (
    <StyledGames
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/games/${id}`}>
        <motion.h3 layoutId={`title${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallerImage(image, 640)}
          alt={name}
          loading="lazy"
        />
      </Link>
    </StyledGames>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 8px 9px 20px rgba(250, 123, 137, 0.2),
    -6px -8px 20px rgba(0, 0, 0, 0.5);
  padding: 3rem 0 0 0;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
