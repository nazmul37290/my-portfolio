const SectionHeading = ({ heading, title }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <p className="text-main">{heading}</p>

      <h3 className="text-2xl w-auto lg:w-[450px] mx-auto lg:text-4xl font-bold text-white">
        {title}
      </h3>
    </div>
  );
};

export default SectionHeading;
