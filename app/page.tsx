'use client'

import React,{ useState } from "react";
import { CourseBox } from "./components/CourseBox";

export default function Home() {
  let [course, setCourse] = useState<string>("");
  let [courseList, setCourseList] = useState<string[]>([]);

  
  // add course part
  const clickAddCourse = function () {
    if (course !== "") {
      setCourseList([...courseList, course]);
      setCourse("");
      document.querySelector<any>("#inputTag").value = "";
    }
  };

  // course list part
  const clickDeleteCourse = (test:string) => {
    setCourseList(courseList.filter((res) => res !== test));
  };
  const clickSaveCourse = function (test:string) {
    setCourseList(
      courseList.map((res) => {
        if (test == res && !test.includes("(saved)")) {
          return (res += "(saved)");
        }
        return res;
      })
    );
  };
  return (<div className="App">
  <h1>Course App</h1>
  {/* addCourse part  */}
  <div className="add-course-part">
    <h3 className="title">Add Course Part</h3>
    <label>Write Course Name :</label>
    <input
      type="text"
      onChange={(event) => setCourse(event.target.value)}
      id="inputTag"
    ></input>
    <br />
    <button onClick={clickAddCourse}>Add course</button>
  </div>
  {/* courseList part  */}
  <div className="course-list">
    <h3>Course List Part</h3>
    {courseList.map((item, index) => {
      return (
        <CourseBox
          key={index}
          index={index}
          item={item}
          clickSaveCourse={clickSaveCourse}
          clickDeleteCourse={clickDeleteCourse}
        />
      );
    })}
  </div>
</div>
  
  )
}
