import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CarouselItem from 'components/shared/Carousel/CarouselItem';

class Carousel extends Component {
  render() {
    const id = this.props.id;
    const items = this.props.carouselItems;

    const renderIndicators = () => {
      return items.map((item, index) => {
        let isActive = index === 0;

        return <li key={index}
            data-target={'#' + id} 
            data-slide-to={index}
            className={isActive && 'active'}>
          </li>
      });
    };

    const renderItems = () => {
      return items.map((item, index) => {
        return <CarouselItem key={index}
          index={index}
          src={item.src}
          alt={item.alt}
          caption={item.caption} />
      })
    };

    return (
      <div id={id} 
        className="carousel slide" 
        data-ride="carousel">

        <ol className="carousel-indicators">
          {renderIndicators()}
        </ol>

        <div className="carousel-inner" 
          role="listbox"> 
          {renderItems()} 
        </div>

        <a className="carousel-control-prev" 
          href={'#' + id} 
          role="button" 
          data-slide="prev">
          <span className="carousel-control-prev-icon" 
            aria-hidden="true">
          </span>
          <span className="sr-only">
            Previous
          </span>
        </a>

        <a className="carousel-control-next" 
          href={'#' + id} 
          role="button" 
          data-slide="next">
          <span className="carousel-control-next-icon" 
          aria-hidden="true">
          </span>
          <span className="sr-only">
            Next
          </span>
        </a>

      </div>
    );
  }
}

Carousel.propTypes = {
  id: PropTypes.string.isRequired,
  carouselItems: PropTypes.array.isRequired
}

export default Carousel;