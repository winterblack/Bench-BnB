const React = require("react")
const ReactDOM = require("react-dom")
const BenchIndex = require("./components/bench_index")

$(function () {
  const content = document.getElementById("content")
  ReactDOM.render(<BenchIndex/>, content)
})
