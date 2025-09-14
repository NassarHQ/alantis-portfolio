import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
// import FeaturedProject from "@/components/FeaturedProject";
// import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      {/* <FeaturedProject /> */}
      {/* <Certifications /> */}
      <Contact />
      <footer className="py-10 text-center text-xs opacity-60 bg-offwhite">
        © {new Date().getFullYear()} Alantis Ma
      </footer>
    </main>
  );
}
