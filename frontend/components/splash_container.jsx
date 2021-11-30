import { connect } from "react-redux";
import Splash from "./splash";

const mSTP = state=>({
    errors: state.errors.review
})

export default connect(mSTP, null)(Splash)