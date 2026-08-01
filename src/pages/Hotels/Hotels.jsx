import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData, useOutletContext, useParams } from "react-router";

function Hotels() {
  const { setShowSearch, setMain } = useOutletContext();

  const data = useLoaderData();
  const { slug } = useParams();

  const destination = data.find((item) => item.slug === slug);

  const destinationCenter = [
    destination.location.latitude,
    destination.location.longitude,
  ];

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
                  <section className="mt-3 font-secondary flex items-center gap-7">
                    <p className="font-medium text-sm text-accent flex items-center gap-1">
                      <FaStar className="text-secondary" /> {hotel.rating}
                    </p>
                    <p className="font-medium text-lg text-accent">
                      ${hotel.pricePerNight}
                      <span className="font-thin">/Night</span>
                    </p>
                    <p>Total</p>
                  </section>
                </section>
              </section>
            ))}
          </section>
        </section>
        <section className="col-span-6">
          <MapContainer
            center={destinationCenter}
            zoom={11}
            scrollWheelZoom={true}
            className="w-full h-[calc(100vh-200px)] rounded-sm"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {hotels.map((hotel) => (
              <Marker
                key={hotel.id}
                position={[hotel.location.latitude, hotel.location.longitude]}
              >
                <Popup>
                  <div className="space-y-1">
                    <h3 className="font-bold font-secondary text-accent">
                      {hotel.name}
                    </h3>
                    <p className="font-medium font-secondary text-accent text-sm">
                      ${hotel.pricePerNight} / night
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </section>
    </section>
  );
}

export default Hotels;
