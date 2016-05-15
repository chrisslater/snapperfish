import { shallow } from 'enzyme';
// Why we are using context in this way: https://github.com/callemall/material-ui/pull/3820
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme();

const shallowWithContext = (node, context = {}) => {
  return shallow(node, {
    context: { muiTheme, ...context },
  });
};

export default shallowWithContext;