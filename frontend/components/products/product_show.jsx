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
        let ratings = this.props.reviews.map(review=> review.rating)
        let overallRating
        if(ratings.length ===0){
            overallRating=0
        }else{

            overallRating = ratings.reduce((a, b)=> a + b, 0)/ (ratings.length *1.0)
        }
        let rating = overallRating
        let i=0;
        let stars = []
        while(i<5){
            if(overallRating<0.5){
                stars.push("black-star")
            }
            else if(overallRating>=0.5 && overallRating<1){
                stars.push("half-star")
                overallRating--;

            }
            else if(overallRating >=1){
                overallRating--;
                stars.push("gold-star")
            }
            i++;
        }
        return(
            <div>
                <div>
                    <NavBarContainer/>
                </div>
                <div className= 'product-show-flex'>
                    <div className='product-show-image'>
                        {this.props.product.photoUrls.map((url, index)=> 
                            <img src={url} height='380px' key={index}/>                        
                            )}
                    </div>
                    <div className='details' >
                        <h2 className='product-show-name' id='row'>
                            {this.props.product.product_name}: 
                            <div className='show-price'>
                                Now: ${this.props.product.price}
                            </div>
                        </h2>
                        <h2 className='static-description' id='row'>
                            About this item 
                        </h2>
                        <h2 className='product-show-description' id='row'>
                            {this.props.product.description} 
                        </h2>
                    </div>
                    <div className='add-to-cart'>
                        <div className='show-price'>
                            ${this.props.product.price}
                        </div>  
                        <h3 className='static-stock'>
                            In Stock Now
                        </h3>

                        <h3 className ='static-order'>
                            Order it now.
                        </h3>
                        <div className='static-quantity'>
                            <label> Quantity: </label>
                            <select id="quantity-button">
                                <option value={1} >1</option>
                                <option value={2}  >2</option>
                                <option value={3} >3</option>
                                <option value={4}  >4</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={this.handleSubmit} className='add-to-cart-button'>
                                Add to Cart
                            </button>
                        </div>
                        <div className='static-ship-sold'>
                            <div className='static-padding'>
                                Ships from   
                                <br />
                                Sold by   
                            </div>
                            <div>
                                Amazon.com  
                                <br />
                                {this.props.product.seller_name}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-show-review'>
                    <div className='overall-review'>
                        <div className='overall-customer'>Overall Rating From Customer</div>
                        <div className='overall-stars'>
                            {stars.map((ele,index)=> <div className={ele} key={index}></div>)}
                            {rating} out of 5
                            <br />
                        </div>
                        <div className='total-ratings'>
                            {ratings.length} global ratings
                        </div>
                

                    </div>
                    <div className='review-index'>
                        <div className='review-heading'>
                            Recent Reviews
                        </div>
                        
                        <div className='show-reviews'>
                            {this.props.reviews.map(review=><ReviewIndexItem review={review} key={review.id}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductShow