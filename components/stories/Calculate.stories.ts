import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";

import Calculate from "../Calculate";

const meta = {
  title: "Calculate",
  component: Calculate,
} satisfies Meta<typeof Calculate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interaction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // I'm not sure if there's a better way to get the input elements
    await userEvent.type(canvas.getByPlaceholderText("1"), "1");
    await userEvent.type(canvas.getByPlaceholderText("2"), "2");
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByText("Sum: 3")).toBeInTheDocument();
  },
};
