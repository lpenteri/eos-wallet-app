import React, {Component} from 'react'
// import validation
// import mutation

class SearchForm extends Component {
	render() {
		return (
			<form>
				<fieldset className="form-group">
					<input
						required
						type="text"
						className="form-control form-control-lg"
						name="search"
						aria-describedby="search"></input>
				</fieldset>
			</form>
		)
	}
}

export default SearchForm

