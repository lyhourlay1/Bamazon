import React from 'react'
import { Link } from 'react-router-dom'


class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        // e.preventDefault()
        // this.update()
        this.props.fetchSearchProducts(this.state.query)
            .then(() => this.props.history.push(`/search/${this.state.query}`))
    }
    update(field) {
        return () => {
            this.setState({query: field}, ()=> {
                this.handleSubmit(this.state)
            }) 
        }
    }

    render() {
        return (
            <div className= 'flex-box'>
                <div className='flex-category'>
                    <Link className="food-category" onClick={this.update('food')} to='/search/food'>
                        <p className='category-word'>Food</p>
                    </Link>
                </div>
                <div className='flex-category'>
                    <Link className="electronics-category" onClick={this.update('electronics')} to='/search/electronics'>
                        <p className='category-longword'>Electronics</p>
                    </Link>
                </div>
                <div className='flex-category'>
                    <Link className="clothes-category" onClick={this.update('clothes')} to="/search/clothes">
                        <p className='category-word'>Clothes</p>
                    </Link>
                </div>
                <div className='flex-category'>
                    <Link className="house-category" onClick={this.update('house')} to="/search/house">
                        <p className='category-longword'>House Supplies</p>
                    </Link>
                </div>
                <div className='flex-category'>
                    <Link className="music" onClick={this.update('entertainment')} to="/search/entertainment">
                        <p className='category-word'>Music</p>
                    </Link>
                </div>
                <div className='flex-category'>
                    <Link className="movie" onClick={this.update('movie')} to="/search/movie">
                        <p className='category-word'>Movie</p>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Category