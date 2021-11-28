import React from 'react'
import { Link } from 'react-router-dom'

class OrderIndexItem extends React.Component {
    render() {

        return (
            <div>
                <ul>
                    <Link to={`/products/${this.props.order.product_id}`}> {this.props.order.product_name}</Link>: {this.props.order.quantity}
                </ul>
            </div>
        )
    }
}

export default OrderIndexItem