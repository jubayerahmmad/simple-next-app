import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="text-xl font-bold">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <div>
        <Link
          className="px-3 py-2 border border-black rounded-md my-2"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
