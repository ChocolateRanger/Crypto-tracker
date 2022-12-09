import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Cryptos from './Cryptos';

function Coins() {

    const [coins, setCoins] = useState([]);

    const updateCoins = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cda7bbc256mshb2326284ab5f134p1c10b2jsn4e03c149a805',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };

        fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
            .then(response => response.json())
            .then((response => {
                console.log(response)
                setCoins(response.data.coins)
            }))
            .catch(err => console.error(err));
  
    }

    useEffect(() => {
        updateCoins();
    }, [])


    return (
        <>
            <div className='col' style={{ marginTop: "12vh" }}>
                {coins.map((element) => {
                    return <div key={element.uuid}>
                        <Cryptos image={element.iconUrl} symbol={element.symbol} name={element.name} price={Number.parseFloat(element.price).toFixed(2)} change={element.change} marketcap={element.marketCap} DetailedWebsite={element.coinrankingUrl} />
                    </div>
                })}
            </div>
        </>
    )
}

export default Coins