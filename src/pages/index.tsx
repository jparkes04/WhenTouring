import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main>
      <p className="lg:text-xl pb-10">
        Explore your favourite artists&apos; live concert history and estimate when they might return to your city.
      </p> 

      <SearchBar/>
    </main>
  )
}