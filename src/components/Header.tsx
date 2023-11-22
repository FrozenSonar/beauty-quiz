import Image from "next/image";
import CustomProgressBar from "./CustomProgressBar";

interface HeaderProps {
  alignment?: string;
  hasProgressBar?: boolean;
}

export default function Header({
  alignment = "place-items-center",
  hasProgressBar = true,
}: HeaderProps) {
  return (
    <div className={`mb-8 flex flex-col space-y-2 ${alignment} "`}>
      <div className="mb-8 w-20">
        <Image
          src="/assets/city-beauty-logo.png"
          alt="City Beauty Logo"
          width={100}
          height={100}
        />
      </div>
      {hasProgressBar && <CustomProgressBar />}
    </div>
  );
}
