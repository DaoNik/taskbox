import {PureInboxScreenComponent} from "./pure-inbox-screen.component";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {TaskModule} from "../task.module";
import {NgxsModule, Store} from "@ngxs/store";
import {TasksState} from "../../state/task.state";
import {fireEvent, within} from "@storybook/testing-library";

export default {
  component: PureInboxScreenComponent,
  decorators: [
    moduleMetadata({
      declarations: [PureInboxScreenComponent],
      imports: [CommonModule, TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  ],
  title: 'PureInboxScreen',
} as Meta;

const Template: Story = args => ({
  props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const WithInteractions = Template.bind({});
WithInteractions.play = ({canvasElement}) => {
  const canvas = within(canvasElement);
  
  fireEvent.click(canvas.getByLabelText('pinTask-1'));

  fireEvent.click(canvas.getByLabelText('pinTask-3'));
}
