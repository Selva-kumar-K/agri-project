import { blogData } from "../utils/blogdata";
export default function BlogSection() {
  return (
    <div className="lg:w-1/3 my-5 lg:my-0">
      <h1 className="text-2xl font-semibold">Latest Posts</h1>

      <div className="flex flex-col space-y-5 my-3">
        {blogData.map((blog, index) => (
          <div key={index} className="flex gap-2">
            <img
              src={blog.userImg}
              alt=""
              className="rounded-lg w-20 h-20 object-cover"
            />
            <div>
              <h2 className="font-semibold text-[18px]">{blog.username}</h2>
              <p className="text-sm">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
