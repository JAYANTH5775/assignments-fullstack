const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://jay:JdyBI9WXTfdWqdp7@cluster0.cavr9qe.mongodb.net/courses_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here

    username: String,
    password: String


});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,

    purchaseCourses: [{
        type: mongoose.Types.ObjectId,
        ref: "Course"
    }]

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number


});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}