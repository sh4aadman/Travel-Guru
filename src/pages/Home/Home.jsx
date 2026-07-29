import { useLoaderData } from "react-router";
import Carousel from "../../components/ui/Carousel/Carousel";
import TextArea from "../../components/ui/Text Area/TextArea";
import { useState } from "react";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const places = useLoaderData();

  const active = places[activeIndex];

  const pictures = places.map((place) => place.image);

  return (
    <>
      <section
        style={{ backgroundImage: `url(${active.image})` }}
        className="fixed inset-0 -z-10 bg-cover bg-center ease-in opacity-80"
      />

      <section
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.55) 85%)",
        }}
        className="fixed inset-0 -z-10 pointer-events-none"
      />

      <section className="h-[calc(100vh-120px)] flex items-center">
        <section className="grid grid-cols-12 gap-12">
          <section className="mt-10 col-span-4">
            <TextArea heading={active.place} description={active.description} />
          </section>
          <section className="col-span-8">
            <Carousel pictures={pictures} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </section>
        </section>
      </section>
    </>
  );
}

export default Home;
