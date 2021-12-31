import React from "react"
import ProductIndexItem from "./product_index_item"
import NavBarContainer from '../nav_bar/nav_bar_container'
// import {connect} from 'react-redux'

// const mSTP = ({ errors }) => {
    
//     return {
//         errors: errors.products
//         // formType: 'signup',
//         //navLink: <Link to="/login">log in instead</Link>,
//     };
// };

class Product extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchSearchProducts(this.props.query)
    }

    // renderErrors() {
    //     return (
    //         <div className="session-errors">
    //             <ul>
    //                 {this.props.errors.map((error, i) => (
    //                     <li key={`error-${i}`}>
    //                         {error}
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     );
    // }

    render(){ 
        return(
            <div>
                <NavBarContainer />

                {/* {this.renderErrors() ? (<div className="no-product"> Sorry There is no products that you are looking for</div>):  */}
                
                <div className='products-flex'>
                    {this.props.products.map(product => <ProductIndexItem product={product} key={product.id} />)}
                </div>
           
            </div>
        )
    }
}
// connect(mSTP,null)(Product)
export default Product