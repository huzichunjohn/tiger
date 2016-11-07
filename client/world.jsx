import React from 'react';
import  styles from './index.css';

class World extends React.Component {
  render() {
    /*
    const style = {
      fontSize: 25,
      color: "white",
      backgroundColor: "red"
    };
    */
    return <h1 className={ styles.world }>World.</h1>
  }
}

export default World;
