import { useLoaderData, useParams } from "react-router";
import TextArea from "../../components/ui/Text Area/TextArea";
import { addDays, format } from "date-fns";
import date from "../../utils/date";
import { useState } from "react";
import DatePicker from "../../components/ui/Date Picker/DatePicker";

function Booking() {
  const places = useLoaderData();
  const { slug } = useParams();

  const tomorrow = addDays(date, 1);

  const [fromDate, setFromDate] = useState(date);
  const [toDate, setToDate] = useState(tomorrow);

  const destination = places.find((place) => place.slug === slug);

  const handleFromChange = (selected) => {
    setFromDate(selected);
    if (toDate <= selected) {
      setToDate(addDays(selected, 1));
    }
  };

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
                    name="origin"
                    id="origin"
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
                    name="destination"
                    id="destination"
                    placeholder={destination.place}
                  />
                </section>
                <section className="flex gap-4">
                  <DatePicker
                    label="From"
                    value={fromDate}
                    onChange={handleFromChange}
                    minDate={date}
                    placeholder={format(date, "dd/MM")}
                  />
                  <DatePicker
                    label="To"
                    value={toDate}
                    onChange={setToDate}
                    minDate={addDays(fromDate, 1)}
                    placeholder={format(tomorrow, "dd/MM")}
                  />
                </section>
                <button
                  className="py-5 font-secondary text-accent font-medium bg-secondary rounded-sm cursor-pointer hover:bg-accent hover:text-primary"
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
