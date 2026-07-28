import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

function TextArea() {
  return (
    <section>
      <h1 className="font-primary text-8xl text-primary">Heading</h1>
      <p className="font-secondary text-primary leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In numquam at
        maxime soluta rem consequatur quo error tempora qui, voluptates tempore
        dolor dolorem praesentium accusantium ab accusamus suscipit, odio, earum
        iure nostrum adipisci pariatur ut voluptatem temporibus! Sapiente est
        delectus optio consectetur harum quas ut adipisci veritatis dolore
        commodi odio sint aliquam necessitatibus, id eligendi eos eveniet ea
        vero exercitationem tempore accusantium praesentium repudiandae. Vel
        sint temporibus eligendi libero sed. Dolores iusto eligendi quae,
        accusamus nesciunt ipsum, temporibus maxime ea omnis autem qui, nihil
        aperiam cum saepe nemo! Dignissimos officia tempora dolor quia assumenda
        illum sunt laborum aliquid facilis error.
      </p>
      <Link to={"/booking"}>
        <button className="px-7.5 py-3 mt-7 font-secondary font-medium text-accent rounded-sm bg-secondary flex items-center gap-2.5">
          Booking <FaArrowRightLong className="text-lg" />
        </button>
      </Link>
    </section>
  );
}

export default TextArea;
