import React from 'react';
import {Route} from 'react-router';
import CurrencySidebar from './CurrencySidebar';
import Currency from './Currency';
import './Currencies.scss';

class Root extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currencies: []
        };
        /* using coinmarketcap API here to fetch cryptocurrencies data. */
        this.api_url = 'https://api.coinmarketcap.com/v1/ticker/?limit=20';
    }

    /*
    In componentDidMount()  lifecycle method, I’m fetching top 20 cryptocurrencies from API and updating Root component’s currencies state.  CurrencySidebar  component takes currencies prop and renders them.
    */
    componentDidMount() {
        $.ajax({
            type: 'GET',
            url: this.api_url,
            dataType: 'json',
            crossDomain: true,
            success: function(response) {
                this.setState({
                    currencies: response
                });
            }.bind(this)
        });
    }

    render() {
        return (
            <div>
                <Route path="/" render={(props) => (
                    <CurrencySlider
                        currencies={this.state.currencies}
                        {...props}
                        />
                )} />
                <Route exact path="/currency/:id" render={(props) => (
                    <Currency {...props} />
                )} />
            </div>
        );
    }
}

export default Root;
