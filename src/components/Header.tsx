import Link from "next/link";

export default function Header() {
  return (
    <header className="my-8 text-6xl lg:text-9xl text-center">
      <Link href={'/'} >
        <h1 >WhenTouring</h1>
      </Link>
    </header>
  )
}