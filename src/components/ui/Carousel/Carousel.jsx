import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Carousel({ pictures, activeIndex, setActiveIndex }) {
  const goPrev = () => {
    setActiveIndex((id) => (id === 0 ? pictures.length - 1 : id - 1));
  };

  const goNext = () => {
    setActiveIndex((id) => (id === pictures.length - 1 ? 0 : id + 1));
  };

  const order = pictures.map((_, idx) => (activeIndex + idx) % pictures.length);

  return (
    <section>
      <section className="flex overflow-hidden bg-transparent space-x-8 p-2">
        <AnimatePresence>
          {order.map((idx) => (
            <motion.section
              key={idx}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={() => setActiveIndex(idx)}
              className={`carousel-item cursor-pointer rounded-2xl hover:outline-2 hover:outline-secondary ${idx === activeIndex ? "outline-2 outline-secondary" : ""}`}
            >
              <img
                className="w-72 object-cover rounded-2xl"
                src={pictures[idx]}
                alt="carousel-item"
                loading="lazy"
                decoding="async"
              />
            </motion.section>
          ))}
        </AnimatePresence>
      </section>
      <section className="mt-10 p-2 flex items-center gap-3">
        <button
          onClick={goPrev}
          className="p-0.5 bg-secondary rounded-full cursor-pointer hover:bg-accent"
        >
          <MdKeyboardArrowLeft className="text-3xl text-accent hover:text-secondary" />
        </button>
        <button
          onClick={goNext}
          className="p-0.5 bg-secondary rounded-full cursor-pointer hover:bg-accent"
        >
          <MdKeyboardArrowRight className="text-3xl text-accent hover:text-secondary" />
        </button>
      </section>
    </section>
  );
}

export default Carousel;
