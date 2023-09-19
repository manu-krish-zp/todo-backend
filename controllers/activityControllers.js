const Activity = require("../models/activity");


const createActivity = (req, res) => {
    Activity
        .create({ 
            activity_id: req.body.activity_id, 
            todo_description: req.body.todo_description })
        .then((data) => {
            res.status(200).send("new Activity Created");
        }).catch((err) => {
            res.send(err);
        });
};

const getActivity = (req, res) => {
    Activity.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.send(err);
    });
}

const getActivityById = (req, res) => {
    Activity.findById(req.params.id).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.send(err);
    });
}

const deleteActivityById = (req, res) => {
    Activity.findOneAndDelete({ activity_id: req.params.id}).then((data) => {
        res.send("Deleted");
    }).catch((err) => {
        res.send(err);
    })
};

const updateActivityById = () => {}

module.exports = { createActivity, getActivity, getActivityById, deleteActivityById, updateActivityById };