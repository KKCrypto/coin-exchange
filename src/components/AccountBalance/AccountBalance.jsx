import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Section = styled.section`
    padding: 3vh 0;
    background-color: #61dafb;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 3vh;
    width: 80%;
    background-color: #61dafb;

`
const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    color: white;
    width: 250px;
    padding: 1vh 0;
    background-color: #333;
    border: 3px solid white;
    border-radius: 25px;
    cursor: pointer;
`


export default function AccountBalance (props) {

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance'
    let content = <Div>Balance: $ *****</Div>
    if ( props.showBalance ) {
        content = <Div>Balance: $ {props.amount}</Div>
    }
    return (
        <Section>     
            <Div>     
                {content}                  
                <Button onClick={props.handleBalanceVisibilityChange}>{buttonText}</Button>
            </Div>
        </Section>
    )

}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}