import { mount } from 'enzyme';
// Why we are using context in this way: https://github.com/callemall/material-ui/pull/3820
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme();

const mountWithContext = (node, context = {}) => {
  return mount(node, {
    context: { muiTheme, ...context },
  });
};

export default mountWithContext;