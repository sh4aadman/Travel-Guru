import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Carousel({ pictures }) {
  return (
    <section>
      <section className="carousel carousel-center bg-transparent space-x-8 p-2">
        {pictures.map((item, idx) => (
          <section
            key={idx}
            className="carousel-item hover:outline-2 hover:outline-secondary rounded-2xl"
          >
            <img
              className="w-72 object-cover rounded-2xl"
              src={item}
              alt="carousel-item"
            />
          </section>
        ))}
      </section>
      <section className="mt-10 p-2 flex items-center gap-3">
        <button className="p-0.5 bg-primary rounded-full">
          <MdKeyboardArrowLeft className="text-3xl text-accent" />
        </button>
        <button className="p-0.5 bg-primary rounded-full">
          <MdKeyboardArrowRight className="text-3xl text-accent" />
        </button>
      </section>
    </section>
  );
}

export default Carousel;
