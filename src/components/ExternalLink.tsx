export default function ExternalLink({ label, href }: { label: string, href: string }) {
  return (
    <a type="button" href={href} target="_blank" className="text-zinc-800 bg-zinc-50 hover:bg-zinc-200 focus:ring-4 focus:ring-zinc-400 rounded-xl text-base lg:text-xl px-3.5 py-2 lg:px-5 lg:py-2.5">{label} ↗</a>
  )
}