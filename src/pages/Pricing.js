import React from 'react';
import './Pricing.css';
// const PricingContainer = styled.div`
//   padding: 4rem 2rem;
// `;

// const CardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 2rem;
// `;

    // <PricingContainer>
    //   <h1>Pricing Plans</h1>
    //   <CardGrid>
    //     <Card title="Basic" description="$10 per month" />
    //     <Card title="Pro" description="$20 per month" />
    //     <Card title="Enterprise" description="$50 per month" />
    //   </CardGrid>
    // </PricingContainer>
  

const Pricing = () => {
    return (
        <div className="pricing-container">
            <h1 className="pricing-title">Pricing</h1>
            <div className="pricing-table">
                <div className="pricing-card">
                    <h2>Free</h2>
                    <p className="price">$0/month</p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button className="choose-plan">Choose Plan</button>
                </div>

                <div className="pricing-card">
                    <h2>Pro</h2>
                    <p className="price">$15/month</p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button className="choose-plan">Choose Plan</button>
                </div>

                <div className="pricing-card">
                    <h2>Enterprise</h2>
                    <p className="price">Contact us</p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button className="choose-plan">Choose Plan</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;


