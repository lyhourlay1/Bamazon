import React from 'react'
import { Link } from 'react-router-dom'

// const options =[
//     {value: 1, label: '1'},
//     {value: 2, label: '2'},
//     {value: 3, label: '3'},
//     {value: 4, label: '4'},
//     { value: 5, label: '5' },
//     { value: 6, label: '6' },
//     { value: 7, label: '7' },
//     { value: 8, label: '8' },
// ]

class OrderIndexItem extends React.Component {

    constructor(props){
        super(props)

        this.state = this.props.order
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        // this.handleChange= this.handleChange.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value }, ()=>{
                this.props.updateOrder(this.state)
                // .then(window.location.reload())
                // console.log(this.state)
            })
        }
    }

    // componentDidMount(){
    //     this.props.fetchOrder(this.state.id)
    // }

    // componentDidUpdate(){
    //     if(this.props.order !== this.state){
    //         this.props.fetchOrder(this.state.id)
    //     }
    // }

    // handleChange(){
    //     this.update('quantity')
    //     console.log(this.setState)

    // }

    handleDeleteClick(e) {
        e.preventDefault()
        this.props.deleteOrder(this.state.id)
        //.then(window.location.reload())
        //.then(() => this.props.history.push('/carts/'))
    }
    
    render() {
        // let index=0
        // for(let i=0; i <options.length ;i++ ){
        //     if(options[i].value === this.props.order.quantity){
        //         index= i
        //     }
        // }

        // if(this.props.order){
        //     return null
        // }
        let options=[]
        for (let i = 1; i < this.props.order.quantity+ 5; i++) {
            if (i === this.props.order.quantity) {
                options.push(<option value={i} key={i} defaultValue>{i}</option>)
            }else{
                options.push(<option value={i} key={i}>{i}</option>)
            }
        }
        return (
            <div>
                <ul>
                    <Link to={`/products/${this.props.order.product_id}`}> 
                        {this.props.order.product_name}
                    </Link>: 
                    <div>
                        <label> Quantity:</label>
                        <select onChange={this.update('quantity')} value={this.state.quantity} id="quantity-button">
                        {/* <select onChange={this.handleChange(value)} value={this.state.quantity} id="quantity-button"> */}

                            {/* <option value={1} >1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option> */}
                            
                            
                            {options.map(option=> (
                                option
                            ))}
                        </select>
                    </div>
                    <div>
                        <button onClick={this.handleDeleteClick}>
                            Delete
                        </button>
                    </div>
                </ul>
            </div>
        )
    }
}

export default OrderIndexItem