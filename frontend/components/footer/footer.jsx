import React from 'react'
class Footer extends React.Component{

    render(){
        return(
            <div className= "footer-container">
                <div className="footer-tech-info">
                    <h2>Technologies:</h2>
                    <a target="blank" href="https://reactjs.org/" id="link">
                        React
                    </a>
                    <a target="blank" href="https://guides.rubyonrails.org/" id="link">
                        Rails
                    </a>
                    <a target="blank" href="https://www.postgresql.org/docs/" id="link">
                        PostgreSQL
                    </a>
                    <a target="blank" href="https://docs.aws.amazon.com/" id="link">
                        AWS
                    </a>
                </div>

                <div className="footer-support-info">
                    <h2>Contact Support: </h2>
                    <p id="link">lyhourlay1@gmail.com</p>
                </div>

                <div className="footer-about-info">
                    <h2>Developer:</h2>
                    <a target="_blank" href="https://lyhourlay1.github.io/portfolio/" id="link">
                        Lyhour Lay(Portfolio)
                    </a>
                </div>
            
                <a href="https://github.com/lyhourlay1" className="footer-images">
                    <img src="/images/github-logo.png" width="100px"/> 
                </a> 
                <a href="https://www.linkedin.com/in/lyhour/" className="footer-images">
                    <img src="/images/linkedin.png" width="100px"/> 
                </a> 
            </div>
        )
    }
}
export default Footer