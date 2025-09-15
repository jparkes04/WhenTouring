import InternalLink from "@/components/InternalLink";

export default function Error429() {
  return (
    <main>
      <h1 className="text-2xl lg:text-3xl mb-4">Artist Not Found</h1>

      <p className="text-md lg:text-lg mb-5 lg:mb-7">
        We were unable to find the artist that you searched for.
      </p> 

      <InternalLink label="Return to Home" href="/"/>
    </main>
  )
}