/**
 * Electron renderer process
 */
const React = require("react");
const ReactDOM = require("react-dom");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World!"
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.greeting}</h1>
        <textarea
          value={this.state.greeting}
          onChange={event => this.setState({greeting: event.target.value})}
        />
      </React.Fragment>
    );
  }
}

// You can export the App root component and then require it in another module
// module.exports = App;
// Or just render it right here
app = ReactDOM.render(<App/>, document.querySelector("#body"));