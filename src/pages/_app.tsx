import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-red-500 to-amber-500 from-20%"> {/* background div: full width */}
      <div className="w-sm lg:w-3xl">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
