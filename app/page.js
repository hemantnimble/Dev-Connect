import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link
        href={"/dashboard"}
        className="text-sm text-red-500 bg-green-400 p-2"
      >
        Go to Dashboard
      </Link>
    </>
  );
}
