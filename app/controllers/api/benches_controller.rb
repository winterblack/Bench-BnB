class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.find(params[:id])
  end
end
