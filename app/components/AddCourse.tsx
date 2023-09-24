import { useContext } from "react";
import { CourseContext } from "../context/myContext";

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
        onChange={(event) => setCourse(event.target.value)}
        id="inputTag"
      ></input>
      <br />
      <button onClick={clickAddCourse}>Add course</button>
    </div>
  );
};
