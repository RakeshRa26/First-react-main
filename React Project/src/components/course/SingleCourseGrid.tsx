interface SingleCourseGridProps {
  image: string;
  title: string;
  duration: string;
}

export const SingleCourseGrid = ({ image, title, duration }: SingleCourseGridProps) => {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-3 flex flex-col gap-2 hover:shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md object-cover"
      />

      <h4 className="text-md font-semibold text-gray-600">
        {title}
      </h4>

      <p className="text-sm text-blue-700">
        📆 {duration}
      </p>
    </div>
  );
};
