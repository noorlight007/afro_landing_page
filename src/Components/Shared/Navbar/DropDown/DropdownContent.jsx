import { Link } from "react-router-dom";

const DropdownContent = ({ menuData }) => {
  return (
    <div
      className="absolute left-1/2 top-full transform -translate-x-1/2 lg:rounded-b-md
    w-full max-w-4xl xl:max-w-5xl bg-white shadow-xl rounded-md p-6  z-10 mt-1 lg:mt-0"
    >
      <div
        className={`grid grid-cols-1 sm:grid-cols-2  
          ${
            menuData?.length === 3
              ? " lg:grid-cols-3 lg:ml-10"
              : "lg:grid-cols-2 lg:ml-16"
          }     
          max-h-[300px] sm:max-h-[400px] lg:max-h-full overflow-y-auto`}
      >
        {menuData?.map((section, index) => (
          <div className="w-10/12 sm:w-full lg:w-10/12 " key={index}>
            {/* title of the column*/}
            <h4 className="font-bold text-base lg:text-lg ">{section.title}</h4>
            <hr className="mb-3 mt-2  opacity-50" />
            {/* item list */}
            <ul className="text-sm xl:text-base space-y-3">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Link to={item?.to}>
                    {/* item title */}
                    <div
                      className="font-semibold 
                    hover:text-primary hover:underline hover:underline-offset-4
                     block"
                    >
                      {item?.name}
                    </div>
                    {/* description */}
                    <div className="text-[11px] opacity-90 mt-1">
                      {item?.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownContent;
