
import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue'
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500]
        },
        secondary: {
            main: orange[400]
        }
    }
})

export default theme;
