import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseTemplate, BaseTemplateProps } from '../BaseTemplate.component';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Large = Template.bind({});
Large.args = {
  ...mockBaseTemplateProps.LARGE,
} as BaseTemplateProps;

export const Default = Template.bind({});
Default.args = {
  ...mockBaseTemplateProps.DEFAULT,
} as BaseTemplateProps;
