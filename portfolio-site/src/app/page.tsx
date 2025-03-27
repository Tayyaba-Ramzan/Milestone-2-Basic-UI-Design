import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Achievement from "@/components/Achievement"
export default function Home(){
  return(
    <>
    <main className="flex min-h-screen flex-col bg-[#121212] container">
      <div className="container mx-auto px-12 py-4">
      <HeroSection/>
      <Achievement/>

      </div>

    </main>
    </>
  )
}
