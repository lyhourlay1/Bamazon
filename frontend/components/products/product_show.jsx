import React from 'react'

class ProductShow extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.product.product_name}: {this.props.product.description}
            </div>
        )
    }
}

export default ProductShow