import Image from "next/image";

export default function SearchBar() {
  return (
    <form className="max-w-sm lg:max-w-3xl mx-auto">   

        <label htmlFor="artistSearch" className="mb-2 text-sm font-medium text-zinc-800 sr-only">Search</label>
        <div className="relative">
            <input type="search" id="artistSearch" className="block w-full p-4 text-lg lg:text-3xl text-zinc-800 placeholder-zinc-500 rounded-2xl bg-zinc-50 py-3.5 lg:py-5" placeholder="Search artists..." required />
            <button type="submit" className="absolute w-12 h-12 end-3.5 bottom-1 lg:w-15 lg:h-15 lg:end-4 lg:bottom-2 flex items-center justify-center bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-300 rounded-full">
                <Image
                    width={40}
                    height={40}
                    className="w-8 h-8 lg:w-10 lg:h-10"
                    src="/search_chevron.png"
                    alt="Search button"
                >    
                </Image>
            </button>
        </div>
    </form>
  )
}