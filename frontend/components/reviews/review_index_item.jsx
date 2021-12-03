import React from 'react'
import { Link } from 'react-router-dom'

class ReviewIndexItem extends React.Component {
    render() {
        
        return (
            <div>
                <div className='review-author'>
                    By: 
                </div>
                <div className='review-rating'>
                    Rating: {this.props.review.rating} Stars
                </div>
                <div className= 'review-headline'>
                    {this.props.review.headline}
                </div>
                <div className='review-description'>
                    {this.props.review.description}
                </div>
                
            </div>
        )
    }
}

export default ReviewIndexItem