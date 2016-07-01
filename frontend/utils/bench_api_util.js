const BenchApiUtil = {
  fetchAllBenches(success){
    $.ajax({
      url: "/api/benches",
      success: function(response){
        success(response)
      }
    })
  }
}

module.exports = BenchApiUtil
