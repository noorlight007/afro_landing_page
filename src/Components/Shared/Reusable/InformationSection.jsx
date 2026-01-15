const InformationSection = ({ description, data }) => {
  return (
    <div className="text-sm lg:text-base space-y-5 lg:space-y-8">
      {description && <p className="mb-10 lg:mb-16">{description}</p>}

      {data.map((section, index) => (
        <div key={index}>
          <h2 className="text-lg lg:text-xl font-semibold title">
            {section.title}
          </h2>
          <p className="opacity-80">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default InformationSection;
