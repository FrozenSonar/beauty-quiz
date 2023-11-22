import {
  Button,
  type ButtonProps,
  type RadioProps,
  Radio,
} from "@mantine/core";
import Image from "next/image";
import { useHover } from "@mantine/hooks";

export interface RadioCardProps extends RadioProps {
  text: string;
  subtext?: string;
  endImage?: string;
  buttonProps?: ButtonProps;
  checked?: boolean;
  setChecked?: () => void;
}

export default function RadioCard({
  text,
  subtext,
  endImage,
  buttonProps,
  checked,
  setChecked,
  ...props
}: RadioCardProps) {
  const { hovered, ref } = useHover();

  return (
    <div
      className={`mb-2 overflow-hidden ${
        checked ? "border-2 border-beauty-yellow" : ""
      }`}
      ref={ref}
    >
      <Button
        {...buttonProps}
        variant="filled"
        onClick={() => setChecked?.()}
        bg={hovered ? "#394A62" : "#556479"}
        radius="xs"
        fullWidth
        size="2xl"
        justify="space-between"
        leftSection={
          <div className="flex flex-row space-x-4 pl-8">
            <Radio
              {...props}
              checked={checked}
              onChange={() => setChecked?.()}
              color="#e2c47c"
              tabIndex={-1}
              size="md"
              aria-label="Checkbox example"
            />
            <div className="flex flex-col text-start">
              <div className="text-lg">{text}</div>
              {subtext && <div className="text-xs">{subtext}</div>}
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
      />
    </div>
  );
}
