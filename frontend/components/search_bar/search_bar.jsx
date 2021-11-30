import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            query: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.fetchSearchProducts(this.state.query)
        .then(()=> this.props.history.push(`/search/${this.state.query}`))
    }
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render(){    
        return (
            <div>
                <form>
                    <input type="search" onChange={this.update('query')} />
                    <button onClick={this.handleSubmit}>
                        <img src="images/searchBar.jpeg" className= 'search-icon'/>
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar