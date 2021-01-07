import React, { Component, Fragment } from 'react'
import Header from '../components/CatTinderApp/Header'
import Footer from '../components/CatTinderApp/Footer'

class CatIndex extends Component {
  render() {
    return(
      <Fragment>
        <Header />
        <h2>All about cats</h2>
        <button></button>
        <Footer />
      </Fragment>
    );
  }
}

export default CatIndex;