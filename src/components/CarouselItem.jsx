import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { setFavorite } from '../actions';
import '../assets/style/components/CarouselItem.scss';
import imgPlay from '../assets/static/play-icon.png';
import imgPlus from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover, title, year, contentRating, duration
    });
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={imgPlay} alt="Play Icon" />
          <img
            className="carousel-item__details--img"
            src={imgPlus}
            alt="Plus Icon"
            onClick={handleSetFavorite}
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propType = {
  cover: PropType.string,
  title: PropType.string,
  year: PropType.number,
  contentRating: PropType.string,
  duration: PropType.number
};
const mapDispatchToProps = {
  setFavorite
};
export default connect(null, mapDispatchToProps)(CarouselItem);
