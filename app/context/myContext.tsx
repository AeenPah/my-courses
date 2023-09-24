"use client";

import React, { createContext, useState } from "react";

export const CourseContext = createContext({
  course: "",
  setCourse: (course: string) => {},
  courseList: [""],
  setCourseList: (courseList: string[]) => {},
});

export default function MyContext({ children }: any) {
  let [course, setCourse] = useState<string>("");
  let [courseList, setCourseList] = useState<string[]>([]);

  return (
    <CourseContext.Provider
      value={{ course, setCourse, courseList, setCourseList }}
    >
      {children}
    </CourseContext.Provider>
  );
}
