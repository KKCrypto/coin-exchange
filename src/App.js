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
	constructor(props) {
		super(props)
		this.state = {
			balance: 10000,
			coinData: [
				{
					/* key: uuidv4() */
					name: 'Bitcoin',
					ticker: 'BTC',
					price: 9999.99
				},
				{
					name: 'Ethereum',
					ticker: 'ETH',
					price: 299.99
				},
				{
					name: 'Theter',
					ticker: 'USDT',
					price: 1.00
				},
				{
					name: 'Ripple',
					ticker: 'XRP',
					price: 0.99
				},
				{
					name: 'Bitcoin Chash',
					ticker: 'BCH',
					price: 298.99
				}
			]
		}
	}
	

/*
	[1, 2, 3, 4, 5].map( x => `<Coin>${x}</Coin>` )

	key: uuidv4()
	npm i uuidv4
	unique keys


	this.state.coinData.map( value => 
		<Coin key={value.ticker} name={value.name} ticker={value.ticker} price={value.price} />
	)

*/

	render() {
		return (
			<Div className="App">
				<ExchangeHeader />
				<AccountBalance amount={this.state.balance} />
				<CoinList coinData={this.state.coinData} />
			</Div>
		)
	}
}

export default App;
