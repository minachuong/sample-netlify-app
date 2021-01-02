import { Component, Fragment } from 'react'
import Header from '../components/CatTinderApp/Header'
import Footer from '../components/CatTinderApp/Footer'

class CatIndex extends Component {
  render() {
    return(
      <Fragment>
        <Header />
        <div>catIndex</div>
        <Footer />
      </Fragment>
    );
  }
}

export default CatIndex;