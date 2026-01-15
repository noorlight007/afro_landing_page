const VideoSection = ({ title, subtitle, buttonAction }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center gap-6 lg:gap-16 mt-10
      shadow-md rounded-md bg-white w-full xl:max-w-[1200px] mx-auto p-6 lg:p-10"
    >
      {/* YouTube Video */}
      <div className="w-full md:w-1/2 aspect-video">
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/-FnrCZJw6TE?si=qhorbnHPYiMkImKy"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className=" font-bold mb-2 lg:mb-4 text-[28px] lg:text-[32px]">
          {title}
        </h2>
        <p className=" mb-4 lg:mb-8 text-sm lg:text-base">{subtitle}</p>
        <button
          onClick={buttonAction}
          className="self-start px-5 py-2 bg-blue-600 text-white rounded-full"
        >
          View Demo
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
