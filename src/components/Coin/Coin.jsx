import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Tr = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const TdL = styled.div`
    border: 1px solid gray;
    width: 15%;
    text-align: left;
    padding:1vh;
    padding-left: 1vh;
    margin: .3vh;
`

const TdR = styled.div`
    border: 1px solid gray;
    width: 15%;
    text-align: right;
    padding:1vh;
    padding-right: 1vh;
    margin: .3vh;
`
const TdA = styled.div`
    // border: 1px solid gray;
    width: 15%;
    text-align: center;
    padding:1vh;
    padding-right: 1vh;
    margin: .3vh;
`
export default function Coin(props) {


    const handleClick = (event) => {
        event.preventDefault()

        props.handleRefresh(props.tickerId)
    }


    return (
        <Tr>
            <TdL>{props.name}</TdL>
            <TdL>{props.ticker}</TdL>
            <TdR>{props.percent_change}</TdR>
            <TdR>${props.price}</TdR>
            {props.showBalance ? <TdR>{props.balance}</TdR> : <TdR>*****</TdR>}
            <TdA>
                <form action="#" method="POST">
                    <button onClick={handleClick}>Refresh</button>
                </form>
            </TdA>
        </Tr>
    )

}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    percent_change: PropTypes.number.isRequired
}