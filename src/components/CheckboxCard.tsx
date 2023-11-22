import { Button, Checkbox, type CheckboxProps } from "@mantine/core";
import Image from "next/image";
import { useHover } from "@mantine/hooks";
import useScreen from "~/hooks/isMobile";

export interface CheckboxCardProps extends CheckboxProps {
  text: string;
  subtext?: string;
  endImage?: string;
  isSelected?: boolean;
}

export default function CheckboxCard({
  text,
  subtext,
  endImage,
  isSelected,
  ...props
}: CheckboxCardProps) {
  const { hovered, ref } = useHover();
  const { isMobile } = useScreen();

  return (
    <div
      className={`mb-2 overflow-hidden ${
        isSelected && "border-2 border-beauty-yellow"
      }`}
      ref={ref}
    >
      <Button
        variant="filled"
        radius="xs"
        fullWidth
        size="2xl"
        bg={hovered ? "#394A62" : "#556479"}
        justify="space-between"
        leftSection={
          <div className="flex flex-row  space-x-4 pl-6">
            <Checkbox
              {...props}
              color="#e2c47c"
              tabIndex={-1}
              size="sm"
              radius={0}
            />
            <div className="flex flex-col text-start">
              <div
                className={`mb-2 font-semibold ${
                  isMobile ? "text-[0.95rem]" : "text-xl"
                }`}
              >
                {text}
              </div>
              {subtext && (
                <div className="text-xs font-light tracking-wide">
                  {subtext}
                </div>
              )}
            </div>
          </div>
        }
        rightSection={
          endImage ? (
            <div className="w-36">
              <Image
                src={`/assets/${endImage}`}
                alt="endImage"
                objectFit="contain"
                width={250}
                height={250}
              />
            </div>
          ) : (
            <span />
          )
        }
      ></Button>
    </div>
  );
}
