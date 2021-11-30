import React from 'react'
import { Link } from 'react-router-dom'


class TransactionIndexItem extends React.Component{


    render(){
        return(
            <div>
                <Link to={`/products/${this.props.transaction.product_id}`}>
                    {this.props.transaction.product_name}
                </Link>:
                <Link to={`/reviewForm/${this.props.transaction.product_id}`}>
                   Write Review
                </Link>
            </div>
        )
    }
}
export default TransactionIndexItem