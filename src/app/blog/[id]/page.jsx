const BlogPosts = async ({ params }) => {
  const id = (await params).id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return (
    <div className="p-10">
      <h1 className="text-3xl text-center font-bold">Blog Details</h1>
      <div className="max-w-2xl mx-auto p-6 rounded-md border border-black shadow-md my-12 space-y-3">
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default BlogPosts;
