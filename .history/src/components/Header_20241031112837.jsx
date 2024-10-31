import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="flex justify-center items-center space-x-80 text-black">
        <Link href={"/"}>Home </Link>
        <Link href={"/about"}>About </Link>
      </nav>
    </>
  );
}
