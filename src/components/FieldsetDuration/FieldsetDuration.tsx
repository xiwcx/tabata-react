import { useMemo } from "react";
import { range } from "../../utils";
import { leftPad } from "../../utils/leftPad";
import { Select, type Option } from "../Select";

type FieldsetDurationProps = {
  fieldSetProps?: JSX.IntrinsicElements["fieldset"];
  label: string;

  /**
   * expected to be in seconds
   */
  duration: number;

  /**
   *
   * @param value expected to be in seconds
   * @returns
   */
  onChange: (value: number) => void;
};

const timeRange = range(0, 59);
const minutes: Option[] = timeRange.map((number) => {
  const numberString = String(number);

  return [numberString, numberString];
});
const seconds: Option[] = timeRange.map((number) => {
  const numberString = String(number);

  return [leftPad(numberString, 2, "0"), numberString];
});

type DurationDeserializer = (duration: number) => {
  minuteValue: string;
  secondValue: string;
};
const durationDeserializer: DurationDeserializer = (duration) => ({
  minuteValue: String(Math.floor(duration / 60)),
  secondValue: String(duration % 60),
});

type DurationSerializer = (minute: string, second: string) => number;
const durationSerializer: DurationSerializer = (minute, second) =>
  Number(minute) * 60 + Number(second);

export const FieldsetDuration = ({
  fieldSetProps,
  label,
  duration,
  onChange,
}: FieldsetDurationProps) => {
  const { minuteValue, secondValue } = useMemo(
    () => durationDeserializer(duration),
    [duration],
  );

  return (
    <fieldset {...fieldSetProps} style={{ all: "unset", display: "block" }}>
      <legend style={{ all: "unset" }}>{label}</legend>

      <Select
        aria-label="minutes"
        options={minutes}
        value={minuteValue}
        onChange={(e) =>
          onChange(durationSerializer(e.target.value, secondValue))
        }
      />

      <span>:</span>

      <Select
        aria-label="seconds"
        options={seconds}
        value={secondValue}
        onChange={(e) =>
          onChange(durationSerializer(minuteValue, e.target.value))
        }
      />
    </fieldset>
  );
};
