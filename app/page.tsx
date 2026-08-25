import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VirtualTour from "@/components/VirtualTour";
import PhotoGallery from "@/components/PhotoGallery";
import VideoSection from "@/components/VideoSection";
import Floorplan from "@/components/Floorplan";
import LocationMap from "@/components/LocationMap";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VirtualTour />
        <PhotoGallery />
        <VideoSection />
        <Floorplan />
        <LocationMap />
        <ContactForm />
      </main>
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">
            Property Tour Template
          </p>
        </div>
      </footer>
    </>
  );
}
