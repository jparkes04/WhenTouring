import Link from "next/link";

export default function InternalLink({ label, href }: { label: string, href: string }) {
  return (
    <Link type="button" href={href} className="text-zinc-800 bg-zinc-50 hover:bg-zinc-200 focus:ring-4 focus:ring-zinc-400 rounded-xl text-lg lg:text-xl px-5 py-2.5">{label}</Link>
  )
}