import { useLoaderData, useParams } from "react-router";
import TextArea from "../../components/ui/Text Area/TextArea";
import { format } from "date-fns";
import today from "../../utils/date";

function Booking() {
  const places = useLoaderData();
  const { slug } = useParams();

  const destination = places.find((place) => place.slug === slug);

  return (
    <>
      <section
        style={{ backgroundImage: `url(${destination.image})` }}
        className="fixed inset-0 -z-10 bg-cover bg-center ease-in opacity-80"
      />
      <section
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.55) 85%)",
        }}
        className="fixed inset-0 -z-10 pointer-events-none"
      />
      <section>
        <section className="mt-32 grid grid-cols-12 gap-32">
          <section className="mt-10 col-span-6">
            <TextArea
              heading={destination.place}
              description={destination.details}
            />
          </section>
          <section className="col-span-6">
            <form className="w-full p-6 bg-primary rounded-sm">
              <fieldset className="flex flex-col gap-5">
                <section className="flex flex-col gap-2">
                  <label className="font-secondary font-medium text-neutral">
                    Origin
                  </label>
                  <input
                    className="p-5 bg-neutral-content rounded-sm font-secondary font-bold placeholder:text-accent"
                    type="text"
                    name=""
                    id=""
                    placeholder="Dhaka"
                  />
                </section>
                <section className="flex flex-col gap-1">
                  <label className="font-secondary font-medium text-neutral">
                    Destination
                  </label>
                  <input
                    className="p-5 bg-neutral-content rounded-sm font-secondary font-bold placeholder:text-accent"
                    type="text"
                    name=""
                    id=""
                    placeholder={destination.place}
                  />
                </section>
                <section className="flex gap-4">
                  <section className="w-1/2 flex flex-col gap-1">
                    <label className="font-secondary font-medium text-neutral">
                      From
                    </label>
                    <input
                      className="p-5 bg-neutral-content rounded-sm font-secondary font-bold placeholder:text-accent"
                      type="text"
                      name=""
                      id=""
                      // placeholder={format(today), "dd/MM"}
                    />
                  </section>
                  <section className="w-1/2 flex flex-col gap-1">
                    <label className="font-secondary font-medium text-neutral">
                      To
                    </label>
                    <input
                      className="p-5 bg-neutral-content rounded-sm font-secondary font-bold placeholder:text-accent"
                      type="text"
                      name=""
                      id=""
                    />
                  </section>
                </section>
                <button
                  className="py-5 font-secondary text-accent font-medium bg-secondary rounded-sm"
                  type="submit"
                >
                  Start Booking
                </button>
              </fieldset>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default Booking;
