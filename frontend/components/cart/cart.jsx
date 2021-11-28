
import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import OrderIndexItem from '../order/order_index_item'
import OrderIndexItemContainer from '../order/order_index_item_container'

class Cart extends React.Component{
    constructor(props){
        super(props)

    }

    // componentDidMount() {
    //     this.props.fetchCart(this.props.currentUser.id)
    // }

    componentDidMount(){
        this.props.fetchOrders()
    }


    render(){
        
        if (this.props.orders.lenght ===0) {
            return null
        }    
            
        return(
            <div>
                <div>
                    <NavBarContainer/>
                </div>
                <div>
                    {this.props.currentUser.username}'s cart:
                    <ul>
                        {/* {this.props.orders.map(order => <OrderIndexItemContainer order={order} key={order.id}/>)} */}


                        {this.props.orders.map(order => <OrderIndexItem order={order} 
                        key={order.id} deleteOrder = {this.props.deleteOrder} 
                        history= {this.props.history}/>)}
                    </ul>
                </div>
                <div>
                    <button onClick={this.handleSubmit}>
                        Check Out
                    </button>
                </div>
            </div>
        )
    }
}
export default Cart