const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const { createActivity, getActivity, getActivityById, deleteActivityById, updateActivityById } = require("./controllers/activityControllers");
const { register } = require("./controllers/registrationController");

const PORT = 8010;
const MONGODB_URI="mongodb+srv://deepak:Option1@cluster0.wrzjctb.mongodb.net/todoDB?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI).then(() => {
    console.log("Database is connected.");
}, (err) => {
    console.log("Database not connected", err);
});

// Activity routes
app.get("/", getActivity);
app.get("/:id", getActivityById);
app.post("/create", createActivity);
app.delete("/:id", deleteActivityById);
app.put("/:id", updateActivityById);

// Register routes
app.post("/register", register);

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})