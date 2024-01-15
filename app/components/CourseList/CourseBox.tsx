import "./CourseList.css";

interface ICourse {
  index: number;
  eachCourse: string;
  clickSaveCourse: (eachCourse: string) => void;
  clickDeleteCourse: (eachCourse: string) => void;
}

export const CourseBox = ({
  index,
  eachCourse,
  clickDeleteCourse,
  clickSaveCourse,
}: ICourse) => {
  return (
    <div className="each-course">
      <div className="course-name">
        {index + 1} ) {eachCourse}
      </div>
      <button className="save" onClick={() => clickSaveCourse(eachCourse)}>
        Save
      </button>
      <button className="delete" onClick={() => clickDeleteCourse(eachCourse)}>
        Delete
      </button>
    </div>
  );
};
