function Carousel({ pictures }) {
  return (
    <section>
      <section className="carousel carousel-center bg-transparent rounded-box space-x-8 p-4">
        {pictures.map((item, idx) => (
          <section key={idx} className="carousel-item">
            <img className="w-72 object-cover rounded-box" src={item} alt="carousel-item" />
          </section>
        ))}
      </section>
    </section>
  );
}

export default Carousel;
