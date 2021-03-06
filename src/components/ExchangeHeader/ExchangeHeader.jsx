import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`

const Header = styled.header`
    background-color: #333;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;ne;
`

const H1 = styled.h1`
    font-size: 4rem;
`
  

export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header className="App-header">
                <Img src={logo} alt="React logo" />
                <H1>
                    Coin Exchange
                </H1>
            </Header>
        )
    }
}
