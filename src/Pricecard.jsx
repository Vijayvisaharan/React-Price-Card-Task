import React from 'react'

function Pricecard({ name, 
    price, 
    user, 
    storage, 
    publicProjects, 
    access, 
    privateProjects, 
    phoneSupport, 
    subdomain, 
    reports }) {
    const renderFeature = (feature, isAvailable) => (
        <p className={isAvailable ? 'available' : 'dim'}>{isAvailable ? '✓' : '✘'} {feature}</p>
    );
    return (
        <div>
            <div className="card">
                <div className="card-head">
                    <h5 className="cardTop">{name}</h5>
                    <h1>{price}</h1>
                    <p className="outline">_______________________________________________</p>
                </div>
                <div className="card-body">
                    {renderFeature(user.feature, user.isAvailable)}
                    {renderFeature(storage.feature, storage.isAvailable)}
                    {renderFeature(publicProjects.feature, publicProjects.isAvailable)}
                    {renderFeature(access.feature, access.isAvailable)}
                    {renderFeature(privateProjects.feature, privateProjects.isAvailable)}
                    {renderFeature(phoneSupport.feature, phoneSupport.isAvailable)}
                    {renderFeature(subdomain.feature, subdomain.isAvailable)}
                    {renderFeature(reports.feature, reports.isAvailable)}
                    <button className="btn">BUTTON</button>
                </div>
            </div>
        </div>
    )
}

export default Pricecard
