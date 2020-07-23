import React from 'react'
import Coin from '../Coin/Coin'
import styled from 'styled-components'


const Table = styled.div`

    margin: 50px auto;
    display: inline-block;
    font-size: 1rem;
    width: 80%
    
`
const THeadDiv = styled.div`
    display: flex;
    margin-bottom: 1vh;
    width: 100%;
    justify-content: center
        
`
const HeadingDiv = styled.div`
    width: 16.66%;
    font-size: 1.5rem;
    border: 1px solid gray;
    margin: .3vh;
`

export default function CoinList (props) {

    return (
        <Table>
        
            <THeadDiv>
                <HeadingDiv>Name</HeadingDiv>
                <HeadingDiv>Ticker</HeadingDiv>
                <HeadingDiv>% 15m</HeadingDiv>
                <HeadingDiv>Price</HeadingDiv>
                <HeadingDiv>Balance</HeadingDiv>
                {/* {props.showBalance ? <div>Balance</div> : null} */}
                <HeadingDiv>Actions</HeadingDiv>
            </THeadDiv>
          
            
            <div>

                {
                    props.coinData.map( ({key, name, ticker, percent_change, price, balance}) => 
                        <Coin 
                            key={key} 
                            handleRefresh={props.handleRefresh} 
                            name={name} 
                            ticker={ticker} 
                            percent_change={percent_change}
                            showBalance={props.showBalance}
                            balance={balance}
                            price={price}
                            tickerId={key}
                        />
                    )
                }

            </div>
        </Table>
    )

}
