import CourseRating from "../../../common/CourseRating";

const Introduction = ({ courseData, cleanDescription }) => {
  return (
    <>
      <h1 className="text-[40px] font-semibold leading-[50px]">
        {courseData.courseTitle}
      </h1>
      <p
        className="mt-5 text-gray-500"
        dangerouslySetInnerHTML={{ __html: cleanDescription.slice(0, 200) }}
      ></p>
      <div className="mb-3 mt-5 flex items-center gap-2 text-sm">
        <CourseRating courseRatings={courseData.courseRatings} />
        <p className="text-gray-600">
          {courseData.enrolledStudents.length}{" "}
          {courseData.enrolledStudents.length > 1 ? "students" : "student"}
        </p>
      </div>
      <p className="text-sm text-gray-500">
        Course by{" "}
        <span className="text-blue-600 underline">{courseData.educator}</span>
      </p>
    </>
  );
};

export default Introduction;
