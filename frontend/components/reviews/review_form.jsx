import React from 'react'
// import Select from 'react-select'

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
                    Create Review for {this.props.product.product_name}
                </div>
                {this.renderErrors()}
                <form>
                    <label>Rating:
                        <div>
                            <select onChange={this.update('rating')} value={this.state.rating}>
                                <option value={1} >1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                    </label>

                    <label>Headline
                        <input type="text" value={this.state.headline} onChange={this.update('headline')} />
                    </label>

                    <label>Written Review
                        <textarea name="comment" cols="30" rows="10" value={this.state.comment} onChange={this.update('comment')}> </textarea>
                    </label>


                    <button onClick={this.handleSubmitReview}>
                        Submit
                    </button>

                </form>
            </div>
        )
    }
}
export default ReviewForm