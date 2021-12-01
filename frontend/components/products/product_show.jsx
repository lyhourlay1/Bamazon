import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import ReviewIndexItem from '../reviews/review_index_item'

class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.order

        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.fetchProduct(this.props.productId);
        this.props.fetchReviews(this.props.productId);
    }

    handleSubmit(e){
        this.update()
        e.preventDefault()
        if(!this.props.currentUser){
            this.props.history.push('/login')
        }
        else{
            this.props.createOrder(this.state).then(() => this.props.history.push('/carts/'))
        }
    }
    
    update(){
        // let e = document.getElementById("quantity-button")   
        this.state.quantity = parseInt(document.getElementById("quantity-button").value)
        this.state.cart_id = parseInt(this.props.order.cart_id)
        this.state.product_name = this.props.product.product_name
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
                    {this.props.product.photoUrls.map(url=> 
                        <img src={url} />                        
                        )}
                </div>
                <div>
                    <label> Quantity:</label>
                    <select id="quantity-button">
                        <option value={1} >1</option>
                        <option value={2}  >2</option>
                        <option value={3} >3</option>
                        <option value={4}  >4</option>
                    </select>
                    <button onClick={this.handleSubmit}>
                        Add to Cart
                    </button>
                </div>
                <div>
                    Reviews:
                    <div>
                        {this.props.reviews.map(review=><ReviewIndexItem review={review} key={review.id}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductShow