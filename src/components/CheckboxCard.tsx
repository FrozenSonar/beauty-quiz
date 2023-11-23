/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Checkbox, type CheckboxProps } from "@mantine/core";
import Image from "next/image";
import { useHover } from "@mantine/hooks";
import useScreen from "~/hooks/isMobile";

export interface CheckboxCardProps extends CheckboxProps {
  text: string;
  subtext?: string;
  endImage?: string;
  isSelected?: boolean;
  checked?: boolean;
  setChecked?: () => void;
}

export default function CheckboxCard({
  text,
  subtext,
  endImage,
  isSelected,
  checked,
  setChecked,
  ...props
}: CheckboxCardProps) {
  const { hovered, ref } = useHover();
  const { isMobile } = useScreen();

  const CheckboxIcon: CheckboxProps["icon"] = ({
    indeterminate,
    ...others
  }) => (
    <Image
      src={`/assets/check-mark.png`}
      alt="check"
      width={150}
      height={150}
      {...others}
    />
  );

  return (
    <div
      className={`mb-2 overflow-hidden ${
        checked && "border-2 border-beauty-yellow"
      }`}
      ref={ref}
    >
      <Button
        variant="filled"
        radius="xs"
        fullWidth
        size="2xl"
        onClick={() => setChecked?.()}
        bg={hovered ? "#394A62" : "#556479"}
        // styles={{ root: { cursor: "default" } }}
        justify="space-between"
        leftSection={
          <div className="flex flex-row space-x-4 pl-6">
            <Checkbox
              {...props}
              tabIndex={-1}
              checked={checked}
              onChange={() => setChecked?.()}
              size={"1.75rem"}
              radius={0}
              styles={{ input: { cursor: "pointer" } }}
              icon={CheckboxIcon}
            />

            <div className="flex flex-col text-start">
              <div
                className={`mb-2 font-semibold ${
                  isMobile ? "text-[0.95rem]" : "text-lg"
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
