/** @jsx jsx */

import React from 'react';
import {css, jsx} from "@emotion/core";
import Layout from "../general/layout";
import ControlBar from "../general/controlBar";
import Divider from "@material-ui/core/Divider";
import ContractsContent from "./contractsCard";

export default function Shed(){
    return (
        <Layout>
            <ControlBar name="inventoryBar" forUser="farmer" />
            <Divider />
            <ContractsContent />
        </Layout>
    );
}
