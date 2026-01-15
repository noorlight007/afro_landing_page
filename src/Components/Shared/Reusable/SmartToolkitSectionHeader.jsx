const SmartToolkitSectionHeader = ({ title, subtitle }) => {
  return (
    <span className="text-white">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-4">
        {title}
      </h2>
      <p className="text-sm lg:text-base text-center">{subtitle}</p>
    </span>
  );
};

export default SmartToolkitSectionHeader;
