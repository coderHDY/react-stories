import React from 'react';

import Md2 from '../components/react-markdown2/index.tsx';

export default {
    title: 'Example/Md2',
    component: Md2,
};

const Template = (args) => <Md2 {...args} />;

export const Primary = Template;
