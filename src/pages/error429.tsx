export default function Error429() {
  return (
    <main>
      <h1 className="text-2xl lg:text-3xl mb-4">Rate Limit Exceeded</h1>

      <h3 className="text-xl lg:text-2xl mb-3">Why am I seeing this?</h3>

      <p className="text-md lg:text-lg mb-2">
        This hobby project uses a non-commercial 3rd party API (SetlistFM) to gather artist&apos;s concert history data.
        With this level of API access, the app can gather data for approximately 30 new artists a day.
      </p> 

      <p className="text-md lg:text-lg mb-2">
        If you&apos;re seeing this error, the daily limit has been exceeded and you should try again tomorrow.
        Sorry for the inconvenience!
      </p> 
    </main>
  )
}

