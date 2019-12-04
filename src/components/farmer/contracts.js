/* eslint-disable no-script-url */
import React from 'react';
import Layout from "../general/layout";
import ContractsContent from "./contractsCard";
import ControlBar from "../general/controlBar";
import Divider from '@material-ui/core/Divider';

export default function Contracts() {
    return (
        <Layout>
            <>
                <ControlBar name="inventoryBar" forUser="farmer" />
                <Divider />
                <ContractsContent side="farmer"/>
            </>
        </Layout>
    );
}
