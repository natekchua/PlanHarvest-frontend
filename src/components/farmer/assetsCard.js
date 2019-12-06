/* eslint-disable no-script-url */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IP from '../../IP'

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    centerButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    centerContent: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    }
});

function GetRender(props) {
    let classes = useStyles
    return (
        <>
            <h1 className={classes.centerContent}>My Farm</h1>
                <div className={classes.centerContent}>
                    <Typography component="p" variant="h6">
                        Fields: {props.fields}<br/>
                        Bins: {props.bins}<br/>
                        Sheds: {props.sheds}<br/>
                    </Typography>
                </div>
        </>
    );

}

export default class AssetsCard extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            fields: 0,
            bins: 0,
            sheds: 0
        }


    }

    componentDidMount() {
        fetch(IP + "farmer/assets/myfarm/" + this.props.farmerID)
        .then(response => {
            response.json().then(values => {
                let {numFields, numBins, numSheds} = values
                this.setState({
                    fields: numFields,
                    bins: numBins,
                    sheds: numSheds
                })
            })
        })
        .catch(err => console.log(err))
    }
    

    render = () => {
        return (
            <div>
                <GetRender fields={this.state.fields} bins={this.state.bins} sheds={this.state.sheds}/>
            </div>
                
        );
    }
}