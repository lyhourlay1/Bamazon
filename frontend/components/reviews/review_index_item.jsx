import React from 'react'
import { Link } from 'react-router-dom'

class ReviewIndexItem extends React.Component {
    render() {
        let overallRating = this.props.review.rating;
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
        return (
            <div className='review-item'>
                <div className='review-description'>
                    "{this.props.review.comment}"" By
                </div>
                <div className='review-rating'>
                    <div className='ratings-stars'>
                            {stars.map((ele,index)=> <div className={ele} key={index}></div>)}
                    </div>
                </div>
            
                <div className= 'review-headline'>
                    {this.props.review.headline}
                </div>     
            </div>
        )
    }
}

export default ReviewIndexItem