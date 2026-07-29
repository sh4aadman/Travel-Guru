import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Carousel({ pictures, activeIndex, setActiveIndex }) {
  const goPrev = () => {
    setActiveIndex((id) => (id === 0 ? pictures.length - 1 : id - 1));
  };

  const goNext = () => {
    setActiveIndex((id) => (id === pictures.length - 1 ? 0 : id + 1));
  };

  return (
    <section>
      <section className="carousel carousel-center bg-transparent space-x-8 p-2">
        {pictures.map((item, idx) => (
          <section
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`carousel-item cursor-pointer rounded-2xl hover:outline-2 hover:outline-secondary ${idx === activeIndex ? "outline-2 outline-secondary" : ""}`}
          >
            <img
              className="w-72 object-cover rounded-2xl"
              src={item}
              alt="carousel-item"
              loading="lazy"
              decoding="async"
            />
          </section>
        ))}
      </section>
      <section className="mt-10 p-2 flex items-center gap-3">
        <button onClick={goPrev} className="p-0.5 bg-primary rounded-full">
          <MdKeyboardArrowLeft className="text-3xl text-accent" />
        </button>
        <button onClick={goNext} className="p-0.5 bg-primary rounded-full">
          <MdKeyboardArrowRight className="text-3xl text-accent" />
        </button>
      </section>
    </section>
  );
}

export default Carousel;
