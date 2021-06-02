import React from 'react';
import { Link } from '@reach/router';

const HomePage = () => {
  
  return(
    <div>
      <h1>Welcome To SneakerSaga!</h1>
      <br />
      <br />
      <h3>The only place you need to look for the history of any sneaker you could ever dream of.</h3>
      <h3>To get started, please <Link to='/signin'>login</Link>  or <Link to='/signup'>signup</Link> to enter.</h3>
      <img src="https://media.istockphoto.com/photos/pile-of-new-sports-shoes-picture-id925677656?k=6&m=925677656&s=612x612&w=0&h=A_YJCY10bV5U6_nqY_ViugB4MM4tDePpifyXh4GVfRY=" alt="sneaker-background" />
      <br />
    </div>
  )
}

export default HomePage; 