const Dispatcher = require('../dispatcher/dispatcher');
const BenchApiUtil = require("../utils/bench_api_util")

const BenchActions = {
  fetchAllBenches(){
    BenchApiUtil.fetchAllBenches(BenchActions.receiveAllBenches)
  },
  receiveAllBenches(benches){
    Dispatcher.dispatch({
      type: "benches received",
      benches: benches
    });
  }
}

module.exports = BenchActions;
