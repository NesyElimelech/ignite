import React from 'react';
import { smallerImage } from '../util';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';
// Router
import { useHistory } from 'react-router-dom';
//Images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
// Star images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      history.push('/');
    }
  };

  // Get Platform Images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };

  // Display stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i < 6; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <Rating>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p> Rating: {game.rating}</p>
                <p>{getStars()}</p>
              </Rating>
              <Info>
                <motion.h3 layoutId={`platform ${pathId}`}>Platforms</motion.h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                loading="lazy"
                src={smallerImage(game.background_image, 1280)}
                alt="Game Poster"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screen.results.map((screenShot) => (
                <img
                  src={smallerImage(screenShot.image, 640)}
                  key={screenShot.id}
                  alt="Screenshot"
                  loading="lazy"
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
  z-index: 10;

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
  flex-wrap: wrap;

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
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
