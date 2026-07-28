import { useLoaderData } from "react-router";
import Carousel from "../../components/ui/Carousel/Carousel";
import TextArea from "../../components/ui/Text Area/TextArea";

function Home() {
  const places = useLoaderData();

  const headings = places.map((place) => place.place);
  const descriptions = places.map((place) => place.description);
  console.log(headings, descriptions);

  const pictures = places.map((place) => place.image);

  return (
    <section className="h-[calc(100vh-120px)] flex items-center">
      <section className="grid grid-cols-12 gap-12">
        <section className="mt-2 col-span-6">
          <TextArea />
        </section>
        <section className="col-span-6">
          <Carousel pictures={pictures} />
        </section>
      </section>
    </section>
  );
}

export default Home;
