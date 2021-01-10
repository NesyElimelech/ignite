import React from 'react';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';
// Router
import { useHistory } from 'react-router-dom';

const GameDetail = () => {
  const history = useHistory();
  // Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <Rating>
                <h3>{game.name}</h3>
                <p> Rating: {game.rating}</p>
              </Rating>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt="Game Poster" />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screen.results.map((screenShot) => (
                <img
                  src={screenShot.image}
                  key={screenShot.id}
                  alt="Screenshot"
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(255, 250, 255, 0.8);
  position: fixed;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0;
  left: 0;
  top: 0;
  margin-bottom: 5rem;

  &::-webkit-scrollbar {
    width: 0.9rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #111111;
    background-image: linear-gradient(to top, #999999, #515151);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff22;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: #fff;
  position: absolute;
  color: #000;
  box-shadow: 2rem 1rem 4rem rgba(0, 0, 0, 0.4);
  img {
    width: 100%;
  }
`;

const Rating = styled(motion.div)`
  h3 {
    font-size: 2rem;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5ren=m;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 2rem;
`;

const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2rem;
`;

export default GameDetail;
