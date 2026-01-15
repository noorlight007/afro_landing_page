import underConstruction from "../../../assets/images/under-construction.svg";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen pt-10 p-4">
      <img
        src={underConstruction}
        alt=" Page Under Construction"
        className="w-full max-h-[700px] mx-auto mb-6 object-contain"
      />
    </div>
  );
};

export default UnderConstruction;
