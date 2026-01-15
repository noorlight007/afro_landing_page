const RecentBlogsCard = ({ blog, onClick }) => {
  const { title = "No Title", date = "No Date" } = blog || {};

  return (
    <div onClick={onClick} className="cursor-pointer">
      {/*  title*/}
      <h3 className="font-semibold opacity-80 my-2 hover:text-primary">
        {title}
      </h3>

      {/* date */}
      <p className="text-sm opacity-50">{date}</p>

      <hr className="my-3 opacity-50" />
    </div>
  );
};

export default RecentBlogsCard;
