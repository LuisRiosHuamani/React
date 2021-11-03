import React from 'react';
import './Navbar.css';
import  img1 from '../img/imagen01.jpg';

class Navbar extends React.Component {
	render( ) {
		return (
			<div classNameName="container">
			<div className="container">
    <div className="row">
      <div className="col-sm-2">
        <span class="material-icons-outlined">
score
</span>
      </div>
      <div className="col-sm-2">
        <h2>LITHO</h2>
      </div>
    </div>
  </div>
	<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" id="banner">
      <img src={img1} className="d-block w-100" alt="..." />
    </div>
  </div>
</div>			
	</div>
		)
	}
};

export default Navbar;