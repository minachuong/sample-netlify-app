import { Component, Fragment } from 'react'
import Header from '../components/CatTinderApp/Header'
import Footer from '../components/CatTinderApp/Footer'

class CatShow extends Component {
  render() {
    return(
      <Fragment>
        <Header />
        <div>catshow</div>
        <Footer />
      </Fragment>
    );
  }
}

export default CatShow;