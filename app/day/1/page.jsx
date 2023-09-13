import Image from "next/image";
import localFont from "next/font/local";

const georgiaFont = localFont({
  src: "../../../public/fonts/Georgia-Bold.woff2",
  weight: "700",
});

const DayOnePage = () => {
  return (
    <section className="h-screen">
      <header className="px-8 py-6">
        <nav className="flex justify-between items-center">
          <div className={`${georgiaFont.className} font-bold text-lg`}>
            getaway
          </div>
          <ul className="flex gap-11">
            <li>about</li>
            <li>buy</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <section className="flex flex-col justify-center items-center md:flex-row max-w-screen-2xl m-auto px-8 md:p-0">
        <article className="w-full">
          <h1
            className={`${georgiaFont.className} text-xl md:text-4xl font-bold mb-8`}
          >
            Escape the City, <br /> Find Your{" "}
            <span className="text-[#B2B0A2]">Sanctuary Home</span>
          </h1>
          <h2 className="mb-8 text-base md:text-xl">
            Discover Your Dream Home In Tranquil Surrondings
          </h2>
          <button className="bg-orange-400 py-4 px-5 mb-8">
            Schedule A Call
          </button>
        </article>
        <Image
          src="/img/day-1-hero.jpg"
          alt="Two white and green houses with orange window frames next to each other"
          width={3195}
          height={4793}
          className="md:max-w-screen-md max-w-screen"
        />
      </section>
    </section>
  );
};

export default DayOnePage;
