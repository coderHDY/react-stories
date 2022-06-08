import React from "react";
import ScrollView from "../components/scroll-view";

export default {
    title: 'Example/ScrollView',
    component: ScrollView,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        imgs: {
            description: 'imgs',
            type: 'array',
            defaultValue: [
                '/imgs/01.jpg',
                '/imgs/02.jpg',
                '/imgs/03.jpg',
                '/imgs/04.jpg',
                '/imgs/05.jpg',
            ],
            control: {
                type: 'array'
            }
        },
    },
};

const Template = args => (<ScrollView {...args} />);
export const Privite = Template.bind({});
