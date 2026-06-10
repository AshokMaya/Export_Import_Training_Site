export const AppHeader = (): JSX.Element => {
  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between w-full h-14 sm:h-16 bg-white backdrop-blur-[5.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.9px)_brightness(100%)] px-4 sm:px-6 lg:px-8 shadow-sm lg:hidden">
        <div className="flex items-center">
          <img
            className="w-8 h-10 sm:w-11 sm:h-[55px] object-cover"
            alt="Joseph Vijay"
            src="/joseph-vijay-1.png"
          />
        </div>

        <div className="flex items-center justify-center gap-[9px]">
          <img
            className="w-5 h-5 sm:w-[21px] sm:h-6 object-cover"
            alt="Image"
            src="/image-5.png"
          />
          <span className="font-semibold text-xs sm:text-sm [font-family:'Inter',Helvetica] text-[#1a1a1a]">
            தமிழ்நாடு அரசு
          </span>
        </div>

        <div>
          <img
            className="w-10 h-12 sm:w-[49px] sm:h-14 object-cover"
            alt="Embelem"
            src="/image-5.png"
          />
        </div>
      </header>
      <div className=" hidden sticky top-0 z-50 bg-[#FFFFFF] py-4 flex justify-center items-center gap-4 lg:flex">
        <img
          src="/govt-emblem.svg"
          alt="tn-govt-emblem"
          className="w-[35px] h-[32px]"
        />
        <p className="text-2xl font-semibold text-[#1A1A1A]">தமிழ்நாடு அரசு</p>
      </div>
    </>
  );
};

export default AppHeader;
