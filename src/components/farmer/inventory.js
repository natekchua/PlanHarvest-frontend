/* eslint-disable no-script-url */
import React from 'react';
import Layout from "../general/layout";
import InventoryContent from "./inventoryCard";
import ControlBar from "../general/controlBar";
import Divider from '@material-ui/core/Divider';

export default function Inventory(props) {
    return (
        <Layout>
            <>
                <ControlBar name="inventoryBar" forUser="farmer" type="product" history={props.history}/>
                <Divider />
                <InventoryContent history={props.history}/>
            </>
        </Layout>
    );
}
