import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="py-8 max-w-screen-xl m-auto flex flex-col h-screen">
      <h1 className="text-center text-2xl font-bold my-8">
        #30DaysOfWebDesign Challenges
      </h1>
      <section className="grid grid-cols-3 auto-rows-min grow">
        <Link className="p-4 border rounded" href="/day/1">
          <h2 className="font-bold">Day 1</h2>
          <p>
            Design a hero section for a website that helps you find your new
            home, away from the stress of the city or you can always get a
            random image from Unsplash and make your design based on the image.
          </p>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
