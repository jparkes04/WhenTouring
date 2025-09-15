import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] text-center">
      <div className="py-5">
        <Link href={"/about"}>About</Link>
      </div>
    </footer>
  )
}
