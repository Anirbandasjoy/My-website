import React from 'react'
import { Link } from 'react-router-dom';







import "./pricingCardstyle.css";








const PricingCard = () => {
  return (
    <div>
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>- Basic - </h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>- 3 Days - </p>
                    <p>- 3 Pages - </p>
                    <p>- Feature - </p>
                    <p>- Responsive Design - </p>
                    <p>- 3 Days - </p>
                    <Link to="/contact" className='btn pbtn'>PURCHASE NOW</Link>
                </div>

                <div className="card">
                    <h3>- Basic - </h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>- 3 Days - </p>
                    <p>- 3 Pages - </p>
                    <p>- Feature - </p>
                    <p>- Responsive Design - </p>
                    <p>- 3 Days - </p>
                    <Link to="/contact" className='btn pbtn'>PURCHASE NOW</Link>
                </div>

                <div className="card">
                    <h3>- Basic - </h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>- 3 Days - </p>
                    <p>- 3 Pages - </p>
                    <p>- Feature - </p>
                    <p>- Responsive Design - </p>
                    <p>- 3 Days - </p>
                    <Link to="/contact" className='btn pbtn'>PURCHASE NOW</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingCard