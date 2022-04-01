const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/CodeWorksStudents');
  console.log('im connected')
}
 const StudentSchema = new mongoose.Schema({
  name: {String, required: false},
  id: {type: Number, required: false},
  campus: String,
  junior: Boolean,
  age: Number
});

const students = mongoose.model("Students", StudentSchema)

module.exports = {main, students}
