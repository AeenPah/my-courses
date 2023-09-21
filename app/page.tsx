"use client";

import React, { createContext, useState } from "react";

//components
import { AddCourse } from "./components/AddCourse";
import { CourseList } from "./components/CourseList";

export const CourseContext = createContext();

export default function Home() {
  let [course, setCourse] = useState<string>("");
  let [courseList, setCourseList] = useState<string[]>([]);

  return (
    <div className="App">
      <h1>Course App</h1>
      <CourseContext.Provider
        value={{ course, setCourse, courseList, setCourseList }}
      >
        {/* addCourse part  */}
        <AddCourse setCourse={setCourse} />
        {/* courseList part  */}
        <CourseList courseList={courseList} />
      </CourseContext.Provider>
    </div>
  );
}
