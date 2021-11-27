import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'

class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.order

        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.fetchProduct(this.props.product.id)
    }

    handleSubmit(e){
        e.preventDefault()
        
        this.props.createOrder(this.state).then(()=> this.props.history.push('/cart'))
    }

    update(){

    }
    render(){
        return(
            <div>
                <div>
                    <NavBarContainer/>
                </div>

                <div>
                    {this.props.product.product_name}: {this.props.product.description} 
                    <button onClick={this.handleSubmit}>
                        Add to Cart
                    </button>
                </div>
            </div>
        )
    }
}

export default ProductShow