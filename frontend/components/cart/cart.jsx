
import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'

class Cart extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount() {
    //     this.props.fetchCart(this.props.currentUser.id)
    // }

    render(){
        
        return(
            <div>
                <div>
                    <NavBarContainer/>
                </div>
                <div>
                    {this.props.currentUser.username}
                </div>
            </div>
        )
    }
}
export default Cart