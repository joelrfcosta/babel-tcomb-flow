import React from 'react';
import ReactDOM from 'react-dom';
import t from 'tcomb-form'

const FormSchema = t.struct({
  name: t.String,         // a required string
  age: t.maybe(t.Number), // an optional number
  rememberMe: t.Boolean   // a boolean
})

class App extends React.Component {
  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(evt) {
    evt.preventDefault()
    const value = this.refs.form.getValue()
    if (value) {
      console.log(value)
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <t.form.Form ref="form" type={FormSchema} />
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    )
  }
}

export default App
