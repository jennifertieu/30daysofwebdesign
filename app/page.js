import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="py-8 max-w-screen-xl m-auto flex flex-col h-screen px-4">
      <h1 className="text-center text-2xl font-bold my-8">
        #30DaysOfWebDesign Challenges
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 auto-rows-min grow ">
        <article className="p-4 border rounded">
          <Link
            className="font-bold hover:underline text-blue-600"
            href="/day/1"
          >
            Day 1
          </Link>
          <p>
            Design a hero section for a website that helps you find your new
            home, away from the stress of the city or you can always get a
            random image from Unsplash and make your design based on the image.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
