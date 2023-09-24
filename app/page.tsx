"use client";

import React from "react";

//components
import { AddCourse } from "./components/AddCourse";
import { CourseList } from "./components/CourseList";

export default function Home() {
  return (
    <div className="App">
      <h1>Course App</h1>

      {/* addCourse part  */}
      <AddCourse />
      {/* courseList part  */}
      <CourseList />
    </div>
  );
}
