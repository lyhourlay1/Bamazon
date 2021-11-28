import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'

class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.order

        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.fetchProduct(this.props.productId)
    }

    handleSubmit(e){
        e.preventDefault()
        debugger
        if(!this.props.currentUser){
            this.props.history.push('/login')
        }
        else{
            this.props.createOrder(this.state).then(() => this.props.history.push('/carts/'))
        }
    }

    update(field){
        return (e)=> {
            this.setState({[field]: e.target.value})
        }
    }
    render(){
        if(!this.props.product){
            return null
        }
        return(
            <div>
                <div>
                    <NavBarContainer/>
                </div>

                <div>
                    {this.props.product.product_name}: {this.props.product.description} 
                </div>
                <div>
                    <label> Quantity:</label>
                    <select name="quantity-button"  >
                        <option value={1} onChange={this.update('quantity')}>1</option>
                        <option value={2} onChange={this.update('quantity')} >2</option>
                        <option value={3} onChange={this.update('quantity')}>3</option>
                        <option value={4} onChange={this.update('quantity')} >4</option>
                    </select>
                    <button onClick={this.handleSubmit}>
                        Add to Cart
                    </button>
                </div>
            </div>
        )
    }
}

export default ProductShow