import { useEffect } from "react";
import { useLoaderData, useOutletContext, useParams } from "react-router";

function Hotels() {
  const { setShowSearch, setMain } = useOutletContext();

  const data = useLoaderData();
  const { slug } = useParams();

  const destination = data.find((item) => item.slug === slug);
  const hotels = destination.hotels;

  const numberOfGuests = 2;

  useEffect(() => {
    setShowSearch(false);
    setMain(false);
  }, [setShowSearch, setMain]);

  return (
    <section>
      <section className="fixed inset-0 -z-10 bg-primary bg-cover bg-center"></section>
      <hr className="my-5 text-base-200" />
      <section className="grid grid-cols-12">
        <section className="col-span-6">
          <section className="font-secondary text-base-300 flex items-center gap-4">
            <p>Date</p>
            <p>{numberOfGuests} Guests</p>
          </section>
          <h2 className="mt-2 font-secondary font-bold text-2xl text-accent">
            Stay in {destination.place}
          </h2>
          <section className="mt-8 space-y-10">
            {hotels.map((hotel) => (
              <section key={hotel.id} className="flex items-center gap-8">
                <figure className="w-2/5">
                  <img
                    className="object-cover rounded-sm"
                    src={hotel.image}
                    alt={`image-of-${hotel.name}`}
                  />
                </figure>
                <section className="grow">
                  <h3 className="font-secondary font-medium text-lg text-accent leading-6">
                    {hotel.name}
                  </h3>
                  <section className="my-2 font-secondary text-info-content flex items-center gap-4">
                    <p>{hotel.guests} Guests</p>
                    <p>{hotel.beds}</p>
                    <p>{hotel.bathroom} Baths</p>
                  </section>
                  <section className="space-y-1 font-secondary text-info-content">
                    {hotel.features.slice(0, 3).map((feature, idx) => (
                      <p key={idx}>{feature}</p>
                    ))}
                  </section>
                  <section className="mt-3 font-secondary font-bold text-sm text-accent flex items-center gap-7">
                    <p>{hotel.rating}</p>
                    <p>{hotel.pricePerNight}/Night</p>
                    <p>Total</p>
                  </section>
                </section>
              </section>
            ))}
          </section>
        </section>
        <section className="col-span-6">map</section>
      </section>
    </section>
  );
}

export default Hotels;
