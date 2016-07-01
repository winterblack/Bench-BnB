const Store = require('flux/utils').Store
const Dispatcher = require('../dispatcher/dispatcher')
let _benches = []
const BenchStore = new Store(Dispatcher)

BenchStore.all = function () {
  let benches = _benches
  return benches
}

BenchStore.__onDispatch = function(action) {
  switch(action.type) {
    case "benches received": resetAllBenches(action.benches); break;
  }
}

function resetAllBenches (benches) {
  _benches = benches
  BenchStore.__emitChange()
}

module.exports = BenchStore
