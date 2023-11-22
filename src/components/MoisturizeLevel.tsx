import { HEADER_LIST, SUBTEXT_LIST } from "~/consts/list";
import useScreen from "~/hooks/isMobile";

interface MoisturizeLevelProps {
  level: number;
}

export default function MoisturizeLevel({ level }: MoisturizeLevelProps) {
  const { isMobile } = useScreen();

  return (
    <div className="h-40 bg-beauty-grey p-8">
      <div className="mb-2 text-xl font-semibold tracking-wide">
        {HEADER_LIST[level]}
      </div>
      <div className={isMobile ? "text-sm" : "text-base"}>
        {SUBTEXT_LIST[level]}
      </div>
    </div>
  );
}
