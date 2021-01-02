import { Component } from 'react'
import MadlibInput from './MadlibInput'

class MadlibForm extends Component {

  Adjective1Key = 'adjective1';
  Verb1Key = 'verb1';
  Noun1Key = 'noun1';
  Number1Key = 'number1';
  Adjective2Key = 'adjective2';
  Verb2Key = 'verb2';
  Verb3Key = 'verb3';

  constructor(props) {
    super(props);
    this.state = {
      form: {
        adjective1Key: '',
        verb1: '',
        noun1: '',
        number1: '',
        adjective2: '',
        verb2: '',
        verb3: ''
      }
    };
  }

  handleChange = (e) => {
    const { form } = this.state;
    form[e.target.name] = e.target.value
    this.setState({ form: form });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.formSubmit(this.state.form);
  }

  render() {
    return(
      <form>
        <MadlibInput 
          label="Adjective 1"
          name={this.Adjective1Key}
          value={this.state.form[this.Adjective1Key]}
          onChange={ this.handleChange }
        />

        <MadlibInput 
          label="Verb 1"
          name={this.Verb1Key}
          value={this.state.form[this.Verb1Key]}
          onChange={ this.handleChange }
        />

        <MadlibInput 
          label="Noun 1"
          name={this.Noun1Key}
          value={this.state.form[this.Noun1Key]}
          onChange={ this.handleChange }
        />

        <MadlibInput 
          label="Number 1"
          name={this.Number1Key}
          value={this.state.form[this.Number1Key]}
          onChange={ this.handleChange }
        />

       <MadlibInput 
          label="Adjective 2"
          name={this.Adjective2Key}
          value={this.state.form[this.Adjective2Key]}
          onChange={ this.handleChange }
        />

        <MadlibInput 
          label="Verb 2"
          name={this.Verb2Key}
          value={this.state.form[this.Verb2Key]}
          onChange={ this.handleChange }
        />

        <MadlibInput 
          label="Verb 3"
          name={this.Verb3Key}
          value={this.state.form[this.Verb3Key]}
          onChange={ this.handleChange }
        />

        <input
          type="submit"
          value="Submit Form"
          onClick={ this.handleSubmit }
        />
      </form>
    );
  }
}

export default MadlibForm;