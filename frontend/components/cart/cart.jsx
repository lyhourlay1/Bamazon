
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
        window.location.reload()
    }

    update(order){
        this.state.user_id= this.props.currentUser.id
        this.state.product_id= order.product_id
        this.state.quantity= order.quantity
        this.state.product_name= order.product_name
        
        // this.setState({user_id: `${this.props.currentUser.id}`, 
        //     product_id: {order.product_id}, product_name: order.product_name, 
        //     quantity: order.quantity})
    }

    render(){
        
        // if (this.props.orders.length ===0) {
        //     const display = 
        //     <div>
        //         The Cart is empty.
        //     </div>
        // }else{
        //     const display=
        //     <div>
        //         { this.props.currentUser.username } 's cart:
        //     </div>
        // }            
        return(
            <div>
                <div>
                    <NavBarContainer/>
                </div>
                <div>
                    {this.props.currentUser.username} 's cart:
                    <ul>
                        {/* {this.props.orders.map(order => <OrderIndexItemContainer order={order} key={order.id}/>)} */}


                        {this.props.orders.map(order => <OrderIndexItem order={order} 
                        key={order.id} deleteOrder = {this.props.deleteOrder} updateOrder = {this.props.updateOrder} fetchOrder={this.props.fetchOrder}/>)}


                        {/* history= {this.props.history}/>)} */}
                    </ul>
                </div>
                <div>
                    <button onClick={this.handleSubmitCheckOut}>
                        Check Out
                    </button>
                </div>
            </div>
        )
    }
}
export default Cart