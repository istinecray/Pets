import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from 'api';

class ActivePet extends Component {
  constructor(props){
    super(props); 
    this.pet = api.getActivePet(props.owner);
  }
  render() {
    const pet = this.pet;
    return (
      <div>
        <div className="text-left bg-inverse text-white">
          <div className="container-fluid p-0 text-center">

            <div className="row no-gutters">
              <div className="col p-3">
                {pet.name}
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col">
              <img src="http://via.placeholder.com/800x800" 
                className="img-fluid"
                alt={pet.name} />
              </div>
            </div>  

          </div>
        </div> 
      </div>
    )
  }
}

ActivePet.propTypes = {
  owner: PropTypes.string.isRequired
}

export default ActivePet;