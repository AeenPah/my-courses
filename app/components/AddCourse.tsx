import { useContext } from "react";
import { CourseContext } from "../page";

export const AddCourse = (props: any) => {
  const { course, setCourse, courseList, setCourseList } =
    useContext(CourseContext);

  const clickAddCourse = function () {
    if (course !== "") {
      setCourseList([...courseList, course]);
      setCourse("");
      document.querySelector<any>("#inputTag").value = "";
    }
  };

  return (
    <div className="add-course-part">
      <h3 className="title">Add Course Part</h3>
      <label>Write Course Name : </label>
      <input
        type="text"
        onChange={(event) => props.setCourse(event.target.value)}
        id="inputTag"
      ></input>
      <br />
      <button onClick={clickAddCourse}>Add course</button>
    </div>
  );
};
