/* eslint-disable no-script-url */
import React from 'react';
import Layout from "../general/layout";
import ContractsContent from "./contractsCard";
import ControlBar from "../general/controlBar";
import Divider from '@material-ui/core/Divider';

export default function Contracts(props) {
    return (
        <Layout>
            <>
                <ControlBar name="inventoryBar" forUser="farmer" type="contract"/>
                <Divider />
                <ContractsContent type="farmer" id={props.id}/>
            </>
        </Layout>
    );
}
