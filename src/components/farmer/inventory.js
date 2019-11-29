/* eslint-disable no-script-url */
import React from 'react';
import Layout from "../layout";
import InventoryContent from "./inventoryCard";
import ControlBar from "../controlBar";
import Divider from '@material-ui/core/Divider';

export default function Inventory() {
    return (
        <Layout>
            <>
                <ControlBar name="inventoryBar" forUser="farmer" />
                <Divider />
                <InventoryContent />
            </>
        </Layout>
    );
}
