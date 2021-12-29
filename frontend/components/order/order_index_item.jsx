import React from 'react'
import { Link } from 'react-router-dom'


class OrderIndexItem extends React.Component {

    constructor(props){
        super(props)

        this.state = this.props.order
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        // this.handleChange= this.handleChange.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value }, ()=>{
                this.props.updateOrder(this.state)
            })
        }
    }

    handleDeleteClick(e) {
        e.preventDefault()
        this.props.deleteOrder(this.state.id)
        
    }
    
    render() {

        let options=[]
        for (let i = 1; i < this.props.order.quantity+ 5; i++) {
            if (i === this.props.order.quantity) {
                options.push(<option value={i} key={i} defaultValue>{i}</option>)
            }else{
                options.push(<option value={i} key={i}>{i}</option>)
            }
        }
        return (
            <div className='order-item'>
                <div className='order-col' id='order-image'>
                    <Link to={`/products/${this.props.order.product_id}`}>
                        <img src={this.props.order.photoUrls[0]} height='180px' />
                    </Link>
                </div>
                <div className='order-col-details'>
                    
                    <div className="product-middle">
                        <div className='cart-product-name'>
                            <Link to={`/products/${this.props.order.product_id}`}> 
                                {this.props.order.product_name}
                            </Link>: 
                        </div>
                        <div className='additional-actions'>
                            <label> Quantity:</label>
                            <select onChange={this.update('quantity')} value={this.state.quantity} id="quantity-button">            
                                {options.map(option=> (option))}
                            </select>
                            <button onClick={this.handleDeleteClick}>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className='item-price'>
                        $ {this.props.order.price}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default OrderIndexItem