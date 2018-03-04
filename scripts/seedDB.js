const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/phoenixdb",
  {
    // useMongoClient: true
  }
);

const activitySeed = [
  {
    title: "Sky Diving",
    photo: "http://skydiveperris.com/first-time-skydiving-los-angeles/",
    plans:
      'Skydiving in the Raleigh area.  Need to look up different places that offer these services',
    user: "abreaw@hotmail.com",
    createDate: new Date(Date.now())
  },
  {
    title: "Learn to Swing Dance",
    photo: "http://www.swingornothing.com/wp-content/uploads/2017/09/Berkeley-Repertory-Theater-Gala-April-2-2016-team-cropped-1440x810.jpg",
    plans:
      'Learn to swing dance with a partner.',
    user: "abreaw@hotmail.com",
    createDate: new Date(Date.now())
  },
  {
    title: "See Halsey Live",
    photo: "https://cdn.viagogo.net/img/cat/34772/1/17.jpg",
    plans:
      'Go to a Halsey concert.  Need to check to see when she is in town',
    user: "abreaw@hotmail.com",
    createDate: new Date(Date.now())
  },
  {
    title: "Travel to the Grand Canyon",
    photo: "https://www.canyontours.com/wp-content/uploads/2013/08/pp.png",
    plans:
      'Take a trip to see the Grand Canyon.  Would love to travel down to the bottom or have a helicopter ride over the gorge.',
    user: "abreaw@hotmail.com",
    createDate: new Date(Date.now())
  },
];

db.Activity
  .remove({})
  .then(() => db.Activity.collection.insertMany(activitySeed))
  .then(data => {
    console.log(`${data.ninserted} records inserted!`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
