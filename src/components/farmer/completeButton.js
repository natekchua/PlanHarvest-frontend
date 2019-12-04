import FormControlLabel from "@material-ui/core/FormControlLabel";
import {jsx} from "@emotion/core";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {green} from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";


const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);


export default function ContractsCard(props) {
    const [state, setState] = React.useState({
        checkedG: true,
    });

    const handleChange = name => event => {
        setState({...state, [name]: event.target.checked});
    };
    return (
        <FormControlLabel
            control={
                <GreenCheckbox
                    checked={state.checkedG}
                    onChange={handleChange('checkedG')}
                    value="checkedG"
                />
            }
            label=""
        />
    );
}
