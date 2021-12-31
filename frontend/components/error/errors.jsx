import React from "react"
import NavBarContainer from '../nav_bar/nav_bar_container'


class Errors extends React.Component{
    render(){ 
        return(
            <div>
                <NavBarContainer />                
                <div className=".search-errors">
                    <div className="error-text">Sorry we do have the product that you are searching for. 
                    Try to search "apple" as a demo. Thanks</div>
                    
                </div>
           
            </div>
        )
    }
}

export default Errors