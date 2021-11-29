import React from 'react'
import { Link } from 'react-router-dom'

class ReviewIndexItem extends React.Component {
    render() {
        
        return (
            <div>
                <ul>
                    {this.props.review.headline}
                </ul>
            </div>
        )
    }
}

export default ReviewIndexItem