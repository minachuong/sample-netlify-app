import { Component, Fragment } from 'react'
import Header from '../components/CatTinderApp/Header'
import Footer from '../components/CatTinderApp/Footer'

class Home extends Component {
  render() {
    return(
      <Fragment>
        <Header />
        <div>This is home</div>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;