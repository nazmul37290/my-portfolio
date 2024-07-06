const SectionHeading = ({ heading, title }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <p className="text-main">{heading}</p>

      <h1 className="text-2xl w-[450px] mx-auto lg:text-4xl font-bold text-white">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeading;
