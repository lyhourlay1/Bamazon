import { connect } from "react-redux"
import { fetchTransactions } from "../../actions/transaction_action"
import Transaction from "./transaction"

const mSTP = state=>({
    transactions: Object.values(state.entities.transactions)
})

const mDTP = dispatch=>{
    
    return{
        fetchTransactions: ()=> dispatch(fetchTransactions()) 
    }
}

export default connect(mSTP, mDTP)(Transaction)