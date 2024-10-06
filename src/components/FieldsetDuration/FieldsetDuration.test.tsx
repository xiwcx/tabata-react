import { expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FieldsetDuration } from "./FieldsetDuration";

/**
 * @vitest-environment jsdom
 */

test("duration is correctly deserialized", async () => {
  render(<FieldsetDuration label="foo" duration={150} onChange={vi.fn()} />);

  const [minutes, seconds] = screen.getAllByRole("combobox");

  expect((minutes as HTMLSelectElement).value).toBe("2");
  expect((seconds as HTMLSelectElement).value).toBe("30");
});

test("duration is correctly serialized", async () => {
  const user = userEvent.setup();
  const mockOnChange = vi.fn();

  render(
    <FieldsetDuration label="foo" duration={150} onChange={mockOnChange} />,
  );

  const [, seconds] = screen.getAllByRole("combobox");

  expect((seconds as HTMLSelectElement).value).toBe("30");

  expect(mockOnChange).not.toHaveBeenCalled();

  await user.selectOptions(seconds as HTMLSelectElement, "31");

  expect(mockOnChange).toHaveBeenCalled();
});
