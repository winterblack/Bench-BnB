var React = require('react');
var BenchStore = require("../stores/bench_store")
var BenchActions = require("../actions/bench_actions")

var BenchIndex = React.createClass({
  getInitialState: function() {
    return {
      benches: BenchStore.all()
    };
  },

  componentDidMount: function() {
    BenchStore.addListener(this._handleChange)
    BenchActions.fetchAllBenches()
  },

  _handleChange: function() {
    this.setState({
      benches: BenchStore.all()
    })
  },

  render: function() {
    return (
      <ul>
        {this.state.benches.map((bench) => {
          return <li key={bench.lat}>{bench.description}</li>
        })}
      </ul>
    );
  }

});

module.exports = BenchIndex;
