import React from 'react'
import { Link } from 'react-router-dom'


class Category extends React.Component {

    render() {
        return (
            <div className= 'flex-box'>
                <div className='flex-category'>
                    <Link className="food-category" to="/search/food">
                        <p className='category-word'>Food</p>
                    </Link>
                </div>
                <div className='flex-category'>
                    <Link className="electronics-category" to="/search/electronics">
                        <p className='category-longword'>Electronics</p>
                    </Link>
                </div>
                <div className='flex-category'>
                    <Link className="clothes-category" to="/search/clothes">
                        <p className='category-word'>Clothes</p>
                    </Link>
                </div>
                <div className='flex-category'>
                    <Link className="house-category" to="/search/house">
                        <p className='category-longword'>House Supplies</p>
                    </Link>
                </div>
                <div className='flex-category'>
                    <Link className="music" to="/search/entertainment">
                        <p className='category-word'>Music</p>
                    </Link>
                </div>
                <div className='flex-category'>
                    <Link className="movie" to="/search/house">
                        <p className='category-word'>Movie</p>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Category