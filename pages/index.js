import Header from '../components/Header'
import Navbar from '../components/Navbar'


const IndexPage = () => (
  <div>
    <Header/>
    <Navbar/>
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            <div className="container">
              HomePage
            </div>
          </h1>
        </div>
      </div>
    </section>
  </div>
)

IndexPage.getInitialProps = async function() {

  return {
  }
}

export default IndexPage
