import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="text-black">
        <Link href={"/"}>Home </Link>
        <Link href={"/about"}>About </Link>
      </nav>
    </>
  );
}
