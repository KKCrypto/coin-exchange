import React from 'react'
import CoinList from './components/CoinList/CoinList'
import AccountBalance from './components/AccountBalance/AccountBalance'
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader'
import styled from 'styled-components'

const Div = styled.div`
	text-align: center;
	background-color: lightgray;
`

class App extends React.Component {
	state = {
		balance: 10000,
		showBalance: true,
		coinData: [
			{
				/* key: uuidv4() */
				name: 'Bitcoin',
				ticker: 'BTC',
				balance: 0.5,
				price: 9999.99
			},
			{
				name: 'Ethereum',
				ticker: 'ETH',
				balance: 32.0,
				price: 299.99
			},
			{
				name: 'Theter',
				ticker: 'USDT',
				balance: 0,
				price: 1.00
			},
			{
				name: 'Ripple',
				ticker: 'XRP',
				balance: 1000,
				price: 0.99
			},
			{
				name: 'Bitcoin Chash',
				ticker: 'BCH',
				balance: 0,
				price: 298.99
			}
		]
	}
	

	/*
	[1, 2, 3, 4, 5].map( x => `<Coin>${x}</Coin>` )

	key: uuidv4()
	npm i uuidv4
	unique keys


	this.state.coinData.map( value => 
		<Coin key={value.ticker} name={value.name} ticker={value.ticker} price={value.price} />
	)



	[1, 2, 3, 4, 5].find( x => x === 4 )
	[1, 2, 3, 4, 5].find( x => x > 4 )
	*/

	handleBalanceVisibilityChange = () => {
		this.setState( function(oldState) {
			return {
				...oldState,
				showBalance: !oldState.showBalance
			}
		})
	}

	/*
	handleRefresh = (valueChangeTicker) => {
		const newCoinsData = this.state.coinData.map( function( {ticker, name, balance, price} ) {
			let newPrice = price
			if ( valueChangeTicker === ticker ) {
				const randomPercentage = 0.995 + Math.random() * 0.01
				newPrice = newPrice * randomPercentage
			}
			return {
				ticker,
				name,
				balance,
				price: newPrice
			}
		} )

		this.setState({ coinData: newCoinsData })
	}
	*/

	handleRefresh = (valueChangeTicker) => {
		const newCoinsData = this.state.coinData.map( function( values ) {
			let newValues = { ...values }
			if ( valueChangeTicker === values.ticker ) {
				const randomPercentage = 0.995 + Math.random() * 0.01
				newValues.price *= randomPercentage
			}
			return newValues
		} )

		this.setState({ coinData: newCoinsData })
	}

	render() {
		return (
			<Div className="App">
				<ExchangeHeader />
				<AccountBalance 
					amount={this.state.balance} 
					showBalance={this.state.showBalance} 
					handleBalanceVisibilityChange={this.handleBalanceVisibilityChange} 
				/>
				<CoinList 
					coinData={this.state.coinData} 
					showBalance={this.state.showBalance}
					handleRefresh={this.handleRefresh} 
				/>
			</Div>
		)
	}
}

export default App;
