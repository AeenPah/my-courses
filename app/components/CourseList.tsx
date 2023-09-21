import { useContext } from "react";
import { CourseContext } from "../page";
import { CourseBox } from "./CourseBox";

export const CourseList = (props: any) => {
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
      {props.courseList.map((item: any, index: any) => {
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
  );
};
