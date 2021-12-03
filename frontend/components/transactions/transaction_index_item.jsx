import React from 'react'
import { Link } from 'react-router-dom'


class TransactionIndexItem extends React.Component{


    render(){
        // if (this.props.transaction){
        //     return null
        // }
        
        return(
            <div>
                <div className='transaction-product-name'>
                    <Link to={`/products/${this.props.transaction.product_id}`}>
                        {this.props.transaction.product_name}
                    </Link>:
                </div>
                <div className='transaction-image'>
                    <Link to={`/products/${this.props.transaction.product_id}`}>
                        <img src={this.props.transaction.photoUrls[0]} height='180px' />
                    </Link>
                </div>
                <Link to={`/reviewForm/${this.props.transaction.product_id}`}>
                    <button className='write-review-button'>
                        Write Review
                    </button>
                </Link>
            </div>
        )
    }
}
export default TransactionIndexItem