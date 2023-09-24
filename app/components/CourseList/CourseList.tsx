import "./CourseList.css";
import { useContext } from "react";
import { CourseContext } from "../../context/myContext";
import { CourseBox } from "./CourseBox";

export const CourseList = () => {
  const { courseList, setCourseList } = useContext(CourseContext);

  const clickDeleteCourse = (test: string) => {
    setCourseList(courseList.filter((res: string) => res !== test));
  };
  const clickSaveCourse = function (test: string) {
    setCourseList(
      courseList.map((res: string) => {
        if (test == res && !test.includes("(saved)")) {
          return (res += "(saved)");
        }
        return res;
      })
    );
  };

  return (
    <div className="course-list">
      <h3>Course List Part</h3>
      {courseList.map((eachCourse: string, index: number) => {
        return (
          <CourseBox
            key={eachCourse}
            index={index}
            eachCourse={eachCourse}
            clickSaveCourse={clickSaveCourse}
            clickDeleteCourse={clickDeleteCourse}
          />
        );
      })}
    </div>
  );
};
