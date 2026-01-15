import CountUp from "react-countup";

const StatCard = ({ title, count, icon: Icon }) => (
  <div
    className="border-accent border-b-3 border-l shadow-lg rounded-lg p-6 flex-1 text-center
  bg-gradient-to-br from-white via-gray-50 to-gray-100 flex justify-between items-center"
  >
    <span>
      {/* count  */}
      <p className="text-3xl font-bold text-accent">
        <CountUp end={count} duration={1.5} />
      </p>
      {/* title  */}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
    </span>
    {/* icon */}
    {Icon && (
      <div className="text-7xl text-accent opacity-80">
        <Icon />
      </div>
    )}
  </div>
);

export default StatCard;
