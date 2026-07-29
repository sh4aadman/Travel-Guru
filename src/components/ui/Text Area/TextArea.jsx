import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

function TextArea({ heading, description }) {
  return (
    <section>
      <h1 className="font-primary text-8xl text-primary">{heading}</h1>
      <p className="font-secondary text-primary leading-6">{description}</p>
      <Link to={"/booking"}>
        <button className="px-7.5 py-3 mt-7 font-secondary font-medium text-accent rounded-sm bg-secondary flex items-center gap-2.5">
          Booking <FaArrowRightLong className="text-lg" />
        </button>
      </Link>
    </section>
  );
}

export default TextArea;
