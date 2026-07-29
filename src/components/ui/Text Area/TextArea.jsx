function TextArea({ heading, description }) {
  return (
    <section>
      <h1 className="font-primary text-8xl text-primary">{heading}</h1>
      <p className="font-secondary text-primary leading-6">{description}</p>
    </section>
  );
}

export default TextArea;
