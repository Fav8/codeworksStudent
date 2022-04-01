const {students} = require('./db')

async function getStudents() {
  return await students.find();
}

async function getStudent(id){
  return await students.findOne({id: id})
}

async function createStudent(student){
  return await students.create(student)
}

async function deleteStudent(id){
  return await students.deleteOne({id: id})
}

async function updateStudent(id, newInfo){
  console.log(newInfo)
  const res = await students.findOneAndUpdate({id: id}, newInfo)
  console.log(res)
  return res
}


module.exports = {getStudents, createStudent, deleteStudent, updateStudent, getStudent}