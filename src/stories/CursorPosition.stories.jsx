import React from "react";
import CursorPosition from '../components/cursor-position/index.tsx';

export default {
    title: 'Example/CursorPosition',
    component: CursorPosition,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (...args) => (<CursorPosition {...args} />);
export const Privite = Template.bind({});