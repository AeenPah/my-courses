export const CourseBox = (props:any) => {
    return (
      <div className="each-course">
        <div className="course-name">
          {props.index + 1} ) {props.item}
        </div>
        <button
          className="save"
          onClick={() => props.clickSaveCourse(props.item)}
        >
          Save
        </button>
        <button
          className="delete"
          onClick={() => props.clickDeleteCourse(props.item)}
        >
          Delete
        </button>
      </div>
    );
  };
  