import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            query: '',
            errors: props.errors
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.fetchSearchProducts(this.state.query)
        .then(()=> this.props.history.push(`/search/${this.state.query}`),()=> this.props.history.push(`/errors`))
        // .catch(this.props.history.push(`/errors`))
    }
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }
 
    render(){ 
        return (
            <div className= 'search-bar'>
                <form className='formSearch'>
                    <input type="search" onChange={this.update('query')} className='search-box'/>
                    <button onClick={this.handleSubmit} className='search-button'>
                        <img src="images/searchBar.jpeg" className= 'search-icon'/>
                    </button>
                </form>

            </div>
        )
    }
}

export default SearchBar