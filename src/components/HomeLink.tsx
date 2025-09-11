import Link  from "next/link";

export default function HomeLink() {
  return (
    <Link type="button" href='/' className="text-zinc-800 bg-zinc-50 hover:bg-zinc-200 focus:ring-4 focus:ring-zinc-400 rounded-2xl text-lg lg:text-xl px-5 py-2.5">Return to Home</Link>
  )
}