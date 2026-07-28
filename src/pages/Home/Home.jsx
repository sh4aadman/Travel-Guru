import { useLoaderData } from "react-router";
import Carousel from "../../components/ui/Carousel/Carousel";

function Home() {
  const places = useLoaderData();

  const pictures = places.map((place) => place.image);

  return (
    <>
      <Carousel pictures={pictures} />
    </>
  );
}

export default Home;
