
import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import OrderIndexItem from '../order/order_index_item'

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            user_id: "",
            product_id: "",
            quantity: "",
            product_name: ""
        }
        this.handleSubmitCheckOut = this.handleSubmitCheckOut.bind(this)
        // this.caluculateTotal = this.caluculateTotal.bind(this)

    }

    // componentDidMount() {
    //     this.props.fetchCart(this.props.currentUser.id)
    // }

    componentDidMount(){
        this.props.fetchOrders()

    }

    handleSubmitCheckOut(e){
        e.preventDefault()
        console.log(this.state)
        let orders = this.props.orders
        for(let i=0; i< orders.length; i++){
            this.update(orders[i])
            this.props.deleteOrder(orders[i].id)
            this.props.createTransaction(this.state)
        }
    }

    update(order){
        this.state.user_id= this.props.currentUser.id
        this.state.product_id= order.product_id
        this.state.quantity= order.quantity
        this.state.product_name= order.product_name
    }
    calculateTotal(arr){
        
        let total = 0
        for(let i=0; i<arr.length; i++){
            total += arr[i]
        }
        return total;
    }

    render(){ 
        let display = 0
        if(this.props.orders.length!==0){
            display = this.calculateTotal(this.props.orders.map(order => order.quantity * order.price))
        }
        return(
            <div className='cart-page'>
                <div>
                    <NavBarContainer/>
                </div>
                <div className='cart-flex-container' >
                    <div className='col1'>

                        <h1 className='cart-username'>
                            {this.props.currentUser.username}'s cart:
                        </h1>
                        <p className='cart-price'>Price</p>
                        <div className='cart-orders'>
                            {this.props.orders.map(order => <OrderIndexItem order={order} 
                            key={order.id} deleteOrder = {this.props.deleteOrder} updateOrder = {this.props.updateOrder} fetchOrder={this.props.fetchOrder}/>)}
                        </div>
                        <div className='total-col1'>
                            Total:$ {display}
                        </div>
                    </div>
                    <div className='col2'>
                        <div className='total-col2'>
                            Total:$ {display}
                        </div>
                        <button onClick={this.handleSubmitCheckOut} className='checkout-button'>
                            Check Out
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart