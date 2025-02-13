const CourseDescription = ({ cleanDescription }) => {
  return (
    <div className="pb-96">
      <h2 className="pt-16 text-xl font-semibold">Course Description</h2>
      <p
        className="rich-text mt-5 text-gray-500"
        dangerouslySetInnerHTML={{ __html: cleanDescription }}
      ></p>
    </div>
  );
};

export default CourseDescription;
