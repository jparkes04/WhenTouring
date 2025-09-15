import SearchBar from "@/components/SearchBar";
import LoadingBar from "@/components/LoadingBar"
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch(artistName:string) {
    setIsLoading(true);
    router.push(`/artist/${encodeURIComponent(artistName)}`);
  }

  return (
    <main>
      <p className="lg:text-xl mb-10">
        Explore your favourite artists&apos; live concert history and estimate when they might return to your city.
      </p> 

      <SearchBar handleSearch={handleSearch} placeholder="Search artists..."/>

      {isLoading && <LoadingBar />}
    </main>
  )
}

