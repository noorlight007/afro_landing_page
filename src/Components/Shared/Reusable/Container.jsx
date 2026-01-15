const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`container mx-auto pt-8 lg:pt-10 px-6 md:px-8 xl:px-16
         ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
