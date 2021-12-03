import React from 'react'
// import Select from 'react-select'
import NavBarContainer from '../nav_bar/nav_bar_container'


const options =[
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
]

class ReviewForm extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            rating: 1,
            headline: "",
            comment: "",
            product_id: this.props.productId,
            user_id: this.props.currentUser.id
        }
        this.handleSubmitReview = this.handleSubmitReview.bind(this)
    }
    componentDidMount(){
        this.props.fetchProduct(this.props.productId)
    }

    handleSubmitReview(e){
        e.preventDefault()
        this.props.createReview(this.state).then(()=>this.props.history.push('/transactions'))

    }
    update(field){
        return (e)=>{
            
            this.setState({[field]: e.target.value})
        }
    }

    renderErrors() {
        return (
            <div className="review-form-errors">
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
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
                <div className='review-flex-container'>
                    <div className ='review-form-container'>
                        <div className='review-header'>
                            Create Review for {this.props.product.product_name}
                        </div>
                        <div>
                            {this.renderErrors()}
                        </div>
                        <div>
                            <form>
                                <div>
                                    Overall Rating:
                                    <div>
                                        <select onChange={this.update('rating')} value={this.state.rating}>
                                            <option value={1} >1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        Add a Headline
                                    </div>
                                    <input type="text" value={this.state.headline} onChange={this.update('headline')} id='text-box'/>
                                </div>
                                <div>
                                    <div>
                                        Written Review
                                    </div>
                                    <textarea name="comment" cols="30" rows="10" value={this.state.comment} onChange={this.update('comment')} id='text-box-area'> </textarea>
                                </div>

                                <div className='review-submit-butt'>
                                    <button onClick={this.handleSubmitReview}>
                                        Submit
                                    </button>

                                </div>

                            </form>
                        </div>
                    </div>                
                </div>
            </div>
        )
    }
}
export default ReviewForm