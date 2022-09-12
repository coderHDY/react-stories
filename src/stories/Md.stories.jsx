import React from 'react';

import Md from '../components/react-markdown/index.tsx';

export default {
    title: 'Example/Md',
    component: Md,
};

const Template = (args) => <Md {...args} />;

export const Primary = Template;
