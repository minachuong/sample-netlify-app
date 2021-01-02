import React, { Component } from 'react'
import MadlibForm from './MadlibForm'

class MadlibApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: null
    };
  }

  handleFormSubmit = (newMadlib) => {
    this.setState({
      form: newMadlib
    });
  }

  render() {
    const { form } = this.state;
    return (
      <React.Fragment>
        <MadlibForm formSubmit={this.handleFormSubmit}/>
        <div>
          { form 
          ? `Marriage Advice
          1. Never go to bed ${form.adjective1}.
          2. Always ${form.verb1} hello and goodbye.
          3. Go on a ${form.noun1} at least ${form.number1} times a month.
          4. Be the first to say, "I'm ${form.adjective2}."
          5. Tell them how much you ${form.verb2} when they ${form.verb3}.
          6. Help each other with the (noun)
          7. Leave (noun) for them in their lunch or on the (noun).
          8. Say "I (verb) you" at least once a (noun).
          9. (verb) for at least (number) seconds every day.
          10. Never say (adjective) words when having a(n) (noun) 
          11. When you're (adjective) put yourself in their (noun)
          12. Hold (noun) whenver you can.`
          : ''}
        </div>
      </React.Fragment>
    );
  }
}

export default MadlibApp;