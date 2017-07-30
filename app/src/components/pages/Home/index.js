import React, {Component} from 'react';
import Carousel from 'components/shared/Carousel';
import api from 'api';

class Home extends Component { 
  constructor() {
    super();
    this.carousel = api.getCarousel();
  }

  render() { 
    return (
      <div>

        <div className="mb-3">
          <Carousel id={this.carousel.id}
            carouselItems={this.carousel.carouselItems} />
        </div>

        <div className="container-fluid p-0"> 
          <div className="row no-gutters">

            <div className="col mr-3">
              <h3>
                Calendar
              </h3>
              <p>
                Schedule of events goes here.
              </p>
            </div>

            <div className="col">
              <h3>
                Stats
              </h3>
              <p>
                Stats will go here. 
                <br />
                (User count, pet count, message count, IDK.)
              </p>
            </div>

          </div>

          <div className="row no-gutters">
            <div className="col">
              <h3>
                Contests
              </h3>
              <p>
                Contests will go here. 
              </p>
            </div>
          </div>

        </div>
        
      </div>
    )
  }
}

export default Home;