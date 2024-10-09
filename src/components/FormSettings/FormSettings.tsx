import { useForm } from "@tanstack/react-form";
import { valibotValidator } from "@tanstack/valibot-form-adapter";
import * as v from "valibot";
import { SelectQuantity } from "../SelectQuantity";
import { FieldContainer } from "../FieldContainer";
import { FieldsetDuration } from "../FieldsetDuration";

const tabataSettingsSchema = v.object({
  initialCountdown: v.pipe(v.number(), v.minValue(0)),
  warmupInterval: v.pipe(v.number(), v.minValue(0)),
  exerciseInterval: v.pipe(v.number(), v.minValue(1)),
  restInterval: v.pipe(v.number(), v.minValue(1)),
  setQuantity: v.pipe(v.number(), v.minValue(1)),
  recoveryInterval: v.pipe(v.number(), v.minValue(0)),
  cycleQuantity: v.pipe(v.number(), v.minValue(1)),
  cooldownInterval: v.pipe(v.number(), v.minValue(0)),
});

type TabataSettings = v.InferOutput<typeof tabataSettingsSchema>;

const defaultSettings: TabataSettings = {
  initialCountdown: 7 * 60,
  warmupInterval: 0,
  exerciseInterval: 20,
  restInterval: 20,
  setQuantity: 8,
  recoveryInterval: 0,
  cycleQuantity: 1,
  cooldownInterval: 0,
};

export function FormSettings() {
  const form = useForm({
    defaultValues: defaultSettings,
    onSubmit: ({ value }) => {
      console.log(value);
    },
    validators: { onChange: tabataSettingsSchema },
    validatorAdapter: valibotValidator(),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field
        name="initialCountdown"
        children={(field) => (
          <FieldsetDuration
            duration={field.state.value}
            label={field.name}
            onChange={(value) => field.handleChange(value)}
          />
        )}
      />

      <form.Field
        name="warmupInterval"
        children={(field) => (
          <FieldsetDuration
            duration={field.state.value}
            label={field.name}
            onChange={(value) => field.handleChange(value)}
          />
        )}
      />

      <form.Field
        name="exerciseInterval"
        children={(field) => (
          <FieldsetDuration
            duration={field.state.value}
            label={field.name}
            onChange={(value) => field.handleChange(value)}
          />
        )}
      />

      <form.Field
        name="restInterval"
        children={(field) => (
          <FieldsetDuration
            duration={field.state.value}
            label={field.name}
            onChange={(value) => field.handleChange(value)}
          />
        )}
      />

      <form.Field
        name="setQuantity"
        children={(field) => (
          <FieldContainer label="Set Quantity">
            <SelectQuantity
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(Number(e.target.value))}
            />
          </FieldContainer>
        )}
      />

      <form.Field
        name="recoveryInterval"
        children={(field) => (
          <FieldsetDuration
            duration={field.state.value}
            label={field.name}
            onChange={(value) => field.handleChange(value)}
          />
        )}
      />

      <form.Field
        name="cycleQuantity"
        children={(field) => (
          <FieldContainer label="Set Quantity">
            <SelectQuantity
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(Number(e.target.value))}
            />
          </FieldContainer>
        )}
      />

      <form.Field
        name="cooldownInterval"
        children={(field) => (
          <FieldsetDuration
            duration={field.state.value}
            label={field.name}
            onChange={(value) => field.handleChange(value)}
          />
        )}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
