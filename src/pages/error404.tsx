import InternalLink from "@/components/InternalLink";

export default function Error429() {
  return (
    <>
        <div className="mt-10"></div>
        <div className="flex justify-center">
            <div className="bg-zinc-700 rounded-2xl mt-5 p-6 lg:p-10 w-full">
                <h2 className="text-xl lg:text-3xl mb-4 lg:mb-7">
                    Artist Not Found             
                </h2>

                <p className="text-sm lg:text-lg mb-7 lg:mb-10">
                  We were unable to find the artist that you searched for.
                </p>

            <InternalLink label="Return to Home" href="/"/>
            <div className="mb-2"></div>
            </div>
        </div>
    </>
  )
}