import { range } from "../../utils";
import { Select, type Option } from "../Select";

const quantityOptions: Option[] = range(0, 99).map((n) => {
  const str = String(n);

  return [str, str];
});

export const SelectQuantity = (args: JSX.IntrinsicElements["select"]) => (
  <Select {...args} options={quantityOptions} />
);
