import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from "react-router-dom";
import banner from '../images/3.jpg'
import '../Styles/Homestyle.css'


const Home = () => {
  return (
    <Layout>
      <div className="home " style={{ backgroundImage: `url(${banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In Pakistam</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home