const Feed = ({ title, link, date }) => {
  let formatted = { day: "numeric", month: "long", year: "numeric" };
  let articleDate = new Date(date).toLocaleDateString("en-GB", formatted);
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 hover:text-blue-500"
      >
        <h3 className="text-xl mb-1 underline">{title}</h3>
        <p>{articleDate}</p>
      </a>
    </div>
  );
};

export default Feed;
