import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = (props) => { 
  let isActive = props.index === 0;
  let hasCaption = props.caption.heading && props.caption.body;

  return (
    <div className={'carousel-item' + (isActive ? ' active' : '')}>

      <img className="d-block w-100" src={props.src} alt={props.alt} /> 

      { 
        (hasCaption) &&
        <div className="carousel-caption d-none d-md-block">
          <h3>{props.caption.heading}</h3>
          <p>{props.caption.body}</p>
        </div>
      } 
    </div>
  );
};

CarouselItem.propTypes = {
  index: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.shape({
    heading: PropTypes.string,
    body: PropTypes.string
  })
}

export default CarouselItem;