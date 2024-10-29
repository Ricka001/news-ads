import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="flex flex-col items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Chats</Link>
      </nav>
    </>
  );
}
