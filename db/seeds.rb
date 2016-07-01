# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.create([
  {description: "Presidio of San Francisco", lat: 37.7989733, lng: -122.4836963},
  {description: "Golden Gate Park", lat: 37.7694208, lng: -122.4884025},
  {description: "Lake Merced Park", lat: 37.7226724, lng: -122.4970271}
  ])
