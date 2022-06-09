import React from "react";
import ThrottleInput from "../components/throttle-input/index.tsx";

export default {
    title: 'Example/ThrottleInput',
    component: ThrottleInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        timeout: {
            description: 'How long would you want to wait',
            type: 'number',
            defaultValue: 200,
            control: {
                type: 'number'
            }
        },
    },
};

const Template = args => (<ThrottleInput {...args} />);
export const Privite = Template.bind({});
