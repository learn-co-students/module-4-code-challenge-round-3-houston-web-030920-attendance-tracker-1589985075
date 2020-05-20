import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {
  state={
    courses:[],
    copyCourses:[],
    students:[],
    copyStudents:[],
    attending: false
  }

  componentDidMount(){
  this.fetchCourses()
  this.fetchStudents()
  }
  fetchCourses = ()=>{
    fetch("http://localhost:6001/courses")
    .then(resp=>resp.json())
    .then(courses=>this.setState({courses, copyCourses:courses}))
  }
  fetchStudents = ()=>{
    fetch("http://localhost:6001/students")
    .then(resp=>resp.json())
    .then(students=>this.setState({students, copyStudents: students}))
  }
  handleClick = () =>{
    let bool = !this.state.attending 
    this.setState({
      attending: bool
    })
  }
  filterCourses = (e)=>{
    console.log("Filter courses runs",e.target.value)
    this.setState({
      copyCourses: this.state.courses.filter(course=> course.id)
    })
    this.filterStudents()
  }
filterStudents = ()=>{
console.log("Shows filter students")
// this.setState({
//   copyStudents: this.state.students.filter(student=> student.course)
// })
}
  render() {
    return (
      <div className="ui grid container">
        <CourseDetails />
        <CourseSelector courses={this.state.copyCourses} filterCourses={this.filterCourses}/>
        <StudentsList students={this.state.copyStudents} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default CourseContainer;
