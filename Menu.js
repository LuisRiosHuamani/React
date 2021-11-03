import React from 'react';
import './Menu.css';

class Menu extends React.Component {
	render ( ) {
		return (
			<div classNameName="container">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#"><b>Corporate</b></a></li>
            <li><a class="dropdown-item" href="#"><b>Specialized</b></a></li>
            <li><a class="dropdown-item" href="#"><b>Portafolio</b></a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#"><b>Other</b></a></li>
          </ul>
        </li>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Pages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portafolio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Elements
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> 
    </div>
  </div>
</nav>
	</div>

		)
	}
};

export default Menu;