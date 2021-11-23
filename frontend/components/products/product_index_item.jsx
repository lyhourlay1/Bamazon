import React from 'react'

class ProductIndexItem extends React.Component{
    render(){
        return(
            <div>
                {this.props.product.product_name}
                {/* <Link to={`/posts/${this.props.product.id}`}>{this.props.product.product_name}</Link> */}
            </div>
        )
    }
}

export default ProductIndexItem