import Link from "next/link";

const Blogs = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
      {posts.slice(0, 12).map((post, i) => (
        <Link
          href={`/blog/${post.id}`}
          key={i}
          className="p-6 rounded-md border border-black shadow-md"
        >
          <h1 className="text-2xl">{post.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
