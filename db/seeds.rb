# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Photo.delete_all

i = 1
while i < 13
    temp = Photo.create(name: "sample_#{i}", description: "sample_#{i}")
    file = open("app/assets/images/sample_#{i}.jpg")

    temp.photo.attach(io: file, filename: "sample_#{i}.jpg")

    p temp.photo.attached?
    i += 1
end