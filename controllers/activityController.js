const db = require("../models");

// Defining methods for the activityController
module.exports = {
  findAll: function(req, res) {
    db.Activity.find(req.query)
      .sort({ createDate: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUser: function(req, res) {
    db.Activity.find({ user: req.params.user })
      .sort({ completeDate: 1 })
      .then(dbModel => {
        console.log("findByUser query completed");
        console.log(dbModel);
        return res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Activity.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Activity.create(req.body)
      .then(dbModel => {
        console.log("create completed");
        return res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Activity.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Activity.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
