/* eslint-disable react/no-unescaped-entities */
import ButtomBottons from "~/components/ButtomBottons";
import Header from "~/components/Header";
import Image from "next/image";
import useScreen from "~/hooks/isMobile";

export default function Halfway() {
  const { isMobile } = useScreen();
  return (
    <div className={!isMobile ? "w-[42rem]" : ""}>
      <Header hasProgressBar={false} />
      <div
        className={
          isMobile ? "grid-row-2 grid space-y-8" : "grid grid-cols-2 space-x-8"
        }
      >
        <div className="w-full">
          <Image
            className="w-full"
            src="/assets/woman-crepe-halfway-there.png"
            alt="halfway pic"
            objectFit="contain"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="text-xl font-semibold tracking-wider">
            Halfway there!
          </div>
          <div className="text-2xl font-semibold tracking-wider">
            Why do people give up protecting and hydrating their skin?
          </div>
          <div className="text-sm font-semibold tracking-wider">
            The No. 1 reason is using the wrong products that just aren't
            effective
          </div>
          <div className="text-sm font-light tracking-wider">
            You'll achieve much more in just a few weeks of starting City
            Beauty's treatment.
          </div>
          <div className=" text-sm font-light tracking-wider">
            Our primary goal is to deliver deep, long-lasting hydration that
            will prevent harsh aging and reduce the appearance of thinning,
            crepey skin. Visibly achieve healthy, supple skin with us.
          </div>
          <ButtomBottons />
        </div>
      </div>
    </div>
  );
}
