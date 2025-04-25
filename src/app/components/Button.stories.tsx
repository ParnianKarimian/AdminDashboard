import React from "react";
import { Meta, StoryObj } from  '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> ={
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            control:'select',
            options:['primary','secondary','danger']
        },
        size:{
            control:'select',
            options:['small','medium','large']
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default:Story ={
    args:{
        label: 'Click Me',
        onClick: () => alert('Clicked'),
        variant:'primary',
        size:'medium',
    },
};

export const Primary: Story={
    args:{
        label:'Primary Button',
        variant:'primary',
        size:'medium',
    },
};

export const Secondary: Story={
    args:{
        label:'Secondary Button',
        variant:'secondary',
        size:'medium',
    },
};

export const Danger: Story={
    args:{
        label:'Danger Button',
        variant:'danger',
        size:'medium',
    },
};