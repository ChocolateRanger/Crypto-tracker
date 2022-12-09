import React from 'react'

function Cryptos(props) {
  return (
    <>
      <div>
        <div className="card mx-auto" style={{ width: "18rem", margin: "5vh 0" }}>
          <img style={{ padding: "3vh" }} src={props.image} className="card-img-top" alt="..." />
          <div className="card-body" style={{ padding: "0 10px" }}>
            <h5 className="card-title">{props.name}</h5>
            <p>Symbol - {props.symbol}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price  - {props.price} $</li>
            <li className="list-group-item">Change - ( {props.change} )</li>
            <li className="list-group-item">MarketCap - {props.marketcap}</li>
          </ul>
          <div className="card-body">
            <a href={props.DetailedWebsite} target="_blank" className="card-link" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "1vh" }}>Details</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cryptos