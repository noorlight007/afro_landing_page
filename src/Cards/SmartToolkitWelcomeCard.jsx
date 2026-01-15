const SmartToolkitWelcomeCard = ({ title, content }) => {
  return (
    <div className="bg-white w-full xl:max-w-[1200px] mx-auto p-6 lg:p-10 rounded-md shadow ">
      <h2 className="text-2xl font-semibold mb-8">{title}</h2>
      <p className="">{content}</p>
    </div>
  );
};

export default SmartToolkitWelcomeCard;
