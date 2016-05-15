import getMuiTheme from 'material-ui/styles/getMuiTheme';
import vars from './variables';
const theme = {
  palette: {
    primary1Color: vars['--primary1Color'],
  },
};

/**
 * @TODO - find out how to use { userAgent: 'all' },
 * without it mucking up the template.
 */
export default getMuiTheme(theme);
