export type Option = [title: string, value: string];

type SelectArgs = JSX.IntrinsicElements["select"] & { options: Option[] };

export const Select = ({ options, ...rest }: SelectArgs) => (
  <select {...rest}>
    {options.map(([title, value]) => (
      <option key={value} value={value}>
        {title}
      </option>
    ))}
  </select>
);
