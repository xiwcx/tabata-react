type FieldContainerProps = {
  labelProps?: JSX.IntrinsicElements["label"];
  label: string;
  error?: string;
  children: React.ReactNode;
};

export const FieldContainer = ({
  label,
  labelProps,
  children,
}: FieldContainerProps) => (
  <div>
    <label {...labelProps}>{label}</label>

    {children}
  </div>
);
