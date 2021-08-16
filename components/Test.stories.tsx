import React from "react";
import { Meta } from "@storybook/react";
import Test from "./Test";

export default {
  component: Test,
  title: "Components/Test",
} as Meta;

export const Primary = () => <Test />;
