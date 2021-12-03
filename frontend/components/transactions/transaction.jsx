import React from 'react'
import TransactionIndexItem from './transaction_index_item'
import NavBarContainer from '../nav_bar/nav_bar_container'

class Transaction extends React.Component{

    componentDidMount(){
        this.props.fetchTransactions()
    }
    render(){
        
        return(
            <div>
                <div>
                    <NavBarContainer/>
                </div>
                <div className='transaction-flex'>
                    {this.props.transactions.map(transaction=> <TransactionIndexItem transaction={transaction} key={transaction.id}/>)}
                </div>

            </div>
        )
    }
}
export default Transaction