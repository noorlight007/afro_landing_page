import { useEffect, useState } from "react";
import scissors from "../../assets/images/scissors.png";
import Container from "../../Components/Shared/Reusable/Container";
import FullBlogView from "../../Components/Blog/FullBlogView";
import LoadingSpinner from "../../Components/Shared/Reusable/LoadingSpinner";
import RecentBlogsCard from "../../Cards/RecentBlogsCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setSelectedBlog(data[2]);
      })
      .catch((err) => console.error("Failed to load blog data:", err));
  }, []);

  const recentBlogs = blogs.filter((blog) => blog.id !== selectedBlog?.id);

  return (
    <Container>
      <div className="  grid grid-cols-1 lg:grid-cols-4 gap-8 2xl:gap-16">
        {/* Left: Full Blog */}
        <div className="lg:col-span-3 ">
          {selectedBlog ? (
            <FullBlogView blog={selectedBlog} />
          ) : (
            <LoadingSpinner />
          )}
        </div>

        {/* Right: Recent Blogs */}
        <div className="space-y-4 ">
          <h2 className="text-xl pb-4 flex items-center gap-3 font-medium">
            <img src={scissors} alt="" /> Recent Blogs
          </h2>
          {recentBlogs.map((blog) => (
            <RecentBlogsCard
              key={blog.id}
              blog={blog}
              onClick={() => setSelectedBlog(blog)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Blog;
