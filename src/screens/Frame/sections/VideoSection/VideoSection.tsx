import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { cn } from "../../../../lib/utils";
import InfoCard from "../../../../components/InfoCard";
import AppHeader from "../../../../components/AppHeader";

export const VideoSection = ({
  isPaymentCard = false,
}: {
  isPaymentCard?: boolean;
}): JSX.Element => {
  return (
    <>
      <div className="relative w-full bg-white lg:hidden">
        <div className="relative w-full">
          {/* Header */}

          {/* Main Content */}
          <div className="relative w-full">
            <img
              className="w-full h-[400px] sm:h-[500px] md:h-[665px] object-cover"
              alt="Freepik the style is"
              src="/Slide 4_3 - 1.png"
            />

            <div className=" inset-0 rounded-t-xl [background:rgba(255,255,255,1)]">
              {isPaymentCard ? (
                <InfoCard />
              ) : (
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent
                    className={cn(
                      "p-4 text-2xl sm:p-6 rounded-xl flex flex-col gap-6 sm:gap-6 md:gap-8",
                      "text-[2rem]",
                    )}
                  >
                    <div className="font-extrabold text-xl sm:text-2xl leading-[30px] sm:leading-[35px] [font-family:'Inter',Helvetica]">
                      <span className="text-[#da612b] text-[2rem] leading-9">
                        தமிழக அரசின் ஏற்றுமதி தொழில் முனைவோருக்கான பயிற்சி
                        திட்டம்
                        <br />
                      </span>
                      <span className="text-[#1a1a1a] text-[1.5rem] sm:text-xl">
                        (முதலமைச்சரின் வீட்டுக்கு ஒரு தொழிலதிபர் திட்டம்)
                      </span>
                    </div>

                    <Button
                      onClick={() => {
                        const element =
                          document.getElementById("zoho-form-section");
                        if (element) {
                          const yOffset = -56; // Negative offset
                          const y =
                            element.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;
                          window.scrollTo({
                            top: y,
                            behavior: "smooth",
                          });
                        }
                      }}
                      className="w-full h-10 sm:h-12 bg-[#da612b] hover:bg-[#c55625] rounded-[10px] font-extrabold text-base lg:text-lg text-white [font-family:'Inter',Helvetica]"
                    >
                      இப்போதே பதிவு செய்யுங்கள்
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative hidden justify-center lg:flex">
        <div className="pt-36 absolute flex flex-col items-center justify-center">
          {/* <div className='border border-[#FFFFFF78] bg-[rgba(0,_0,_0,_0.08)] backdrop-filter backdrop-blur-[12.3px] border-solid py-11 px-28 rounded-lg w-2/3'> */}
          <div className="max-w-[70%]">
            <p className="text-[#FBF01D] font-extrabold text-4xl text-center leading-normal">
              தமிழக அரசின் ஏற்றுமதி தொழில் முனைவோருக்கான பயிற்சி திட்டம்
            </p>
            <p className="text-white text-2xl font-bold text-center mt-5">
              (முதலமைச்சரின் வீட்டுக்கு ஒரு தொழிலதிபர் திட்டம்)
            </p>
            <div className="flex justify-center mt-10">
              <Button
                onClick={() => {
                  const element = document.getElementById("zoho-form-section");
                  if (element) {
                    const yOffset = -56; // Negative offset
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({
                      top: y,
                      behavior: "smooth",
                    });
                  }
                }}
                className="w-fit h-10 sm:h-12 bg-[#da612b] hover:bg-[#c55625] rounded-[10px] font-extrabold text-base lg:text-lg text-white [font-family:'Inter',Helvetica]"
              >
                இப்போதே பதிவு செய்யுங்கள்
              </Button>
            </div>
          </div>
        </div>
        <img
          className="lg:h-[calc(100vh-40px)] lg:w-screen object-cover"
          src="/home-banner.jpg"
          alt="homeBanner"
        />
        <img
          className="bottom-10 absolute left-5 max-h-80 z-20"
          src="/joseph-vijay-1.png"
          alt="joseph-vijay"
        />
        <img
          className="bottom-10 absolute right-5 max-h-80 z-20"
          src="/image-5.png"
          alt="embelem"
        />
      </div>
    </>
  );
};
