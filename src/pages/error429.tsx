import InternalLink from "@/components/InternalLink";

export default function Error429() {
  return (
    <>
        <div className="mt-10"></div>
        <div className="flex justify-center">
            <div className="bg-zinc-700 rounded-2xl mt-5 p-6 lg:p-10 w-full">
                <h2 className="text-xl lg:text-3xl mb-4 lg:mb-7">
                    Rate Limit Exceeded                
                </h2>

                <p className="text-sm lg:text-lg mb-3 lg:mb-5">
                  This project uses a 3rd party API (SetlistFM) to gather artist&apos;s concert history data.
                  With non-commercial API access, the app can gather data for approximately 30 new artists a day.
                </p>

                <p className="text-sm lg:text-lg mb-7 lg:mb-10">
                  If you&apos;re seeing this error, the daily limit has been exceeded and you should try again tomorrow.
                  Sorry for the inconvenience!
                </p>

            <InternalLink label="Return to Home" href="/"/>
            <div className="mb-2"></div>
            </div>
        </div>
    </>
  )
}