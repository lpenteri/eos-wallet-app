import React, {Component} from 'react'
// import validation
// import mutation

class TransferForm extends Component {
 static defaultProps = {
   balance: '0.000'
 }

 constructor (props, context) {
   super(props, context)

   this.state = {
     amount: 0,
     emailAddress: '',
     memo: ''
   }
 }

 onChange (e) {
   const {name, pattern, value} = e.target

   if (pattern && !(new RegExp(pattern).test(value))) {
     return
   }

   this.setState({ [name]: value })
 }

 clearInputs () {
   this.setState({
     amount: '',
     emailAddress: '',
     memo: ''
   })
 }

 render () {
   const {amount, emailAddress, memo} = this.state
   const {balance} = this.props

   return (
     <form>
       <fieldset className="form-group">
         <label htmlFor="to">To</label>
         <input
           aria-describedby="to"
           className="form-control form-control-lg"
           id="to"
           name="emailAddress"
           onChange={this.onChange.bind(this)}
           type="email"
           value={emailAddress}
         />
       </fieldset>

       <fieldset className="form-group">
         <label htmlFor="amount">Amount</label>
         <input
           aria-describedby="amount"
           className="form-control form-control-lg"
           id="amount"
           name="amount"
           onChange={this.onChange.bind(this)}
           pattern="^[0-9.]*$"
           required
           type="text"
           value={amount}
         />

         <small className="form-text text-muted"><a>Balance: {balance} EOS</a></small>
       </fieldset>

       <fieldset className="form-group">
         <label htmlFor="memo">Memo</label>
         <input
           aria-describedby="emailHelp"
           className="form-control form-control-lg"
           id="memo"
           name="memo"
           onChange={this.onChange.bind(this)}
           placeholder="Memo here"
           type="text"
           value={memo}
         />
       </fieldset>

       <button
         className="btn btn-primary btn-lg"
         type="submit"
       >Submit
       </button>
       <button
         className="btn btn-secondary btn-lg"
         onClick={this.clearInputs.bind(this)}
         type="button"
       >Clear
       </button>
     </form>
   )
 }
}

export default TransferForm
