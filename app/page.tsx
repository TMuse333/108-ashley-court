import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import VirtualTour from "@/components/VirtualTour";
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
        {/* <VirtualTour /> */}
        <PhotoGallery />
        <VideoSection />
        <Floorplan />
        <LocationMap />
        <ContactForm />
      </main>
      <footer className="bg-slate-900 py-4" />
    </>
  );
}
