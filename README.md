This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Component documentation

To run storybook:

```bash
yarn storybook
```

Your browser should open page at `http://localhost:6006`

Write components documentation by creating `MyComponent.stories.tsx` file in the `components` folder

Here's an example:

```tsx
import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, IButtonProps } from "@components/Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    color: "primary",
  },
} as Meta<IButtonProps>;

const Template: Story<IButtonProps> = args => <Button {...args} />;

export const Example = Template.bind({});
```

## Configuration

### Absolute imports

Import from `components`, `pages` and `hooks` folders by using:

```js
import Button from "@components/Button";
import Home from "@pages/index";
import useTest from "@hooks/useTest";
```

### Styles

This project uses `Chakra UI` and `emotion` for styling.

It can be used a'la styled-components:

```js
<chakra.button
  px="3"
  py="2"
  bg="green.200"
  rounded="md"
  _hover={{ bg: "green.300" }}
>
  Click me
</chakra.button>
```

The available component props are described here: [https://chakra-ui.com/docs/features/style-props](https://chakra-ui.com/docs/features/style-props)

Chakra also provides `sx` prop to pass any arbitrary CSS with Theme tokens. Usefull when there is no component prop available.

```js
<Image
  src="http://placekitten.com/200/300"
  alt="a kitten"
  sx={{ filter: "blur(8px)" }}
/>
```

More info here: [https://chakra-ui.com/docs/features/the-sx-prop](https://chakra-ui.com/docs/features/the-sx-prop)

## Testing

### Jest

For unit tests Jest is used along with `react-testing-library`. The tests are located in `/test/pages/SomePage.test.tsx`

```js
describe("HomePage", () => {
  it("should render the heading", () => {
    render(<Home />);

    const heading = screen.getByText(/Welcome to/i);

    expect(heading).toBeInTheDocument();
  });
});
```

### Cypress

For end-to-end and integration tests Cypress is used. The tests are located in the `/cypress/integration/` directory:

```ts
context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the home page and display a message", () => {
    cy.get("h1").contains("Welcome");
  });
});
```

Run with `yarn cypress` (tests once) or `yarn cypress:open` (opens the Cypress GUI)

> Note: before running Cypress tests you must run the Next.js server as well: `yarn dev` or `yarn start` (production build)

## Commit lint

### Pre-commit checks

Every commit is checked for validity by `lint-staged` which uses Prettier for formatting and ESLint for static type-checking

### Commit message hook

When commiting from CLI `commitizen` is used to format commit message according to the conventional-changelog

Every commit is also checked by if matching the rules of conventional-changelog no mather if it was created using the `commitizen`

## TODO List

When starting new project:

- [ ] Replace base colors in tailwind.config.js
- [ ] Generate favicons and put them into `src/_app.tsx`
