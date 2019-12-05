/* eslint-disable no-script-url */
import React from 'react';
import Layout from "../general/layout";
import ControlBar from "../general/controlBar";
import Divider from '@material-ui/core/Divider';
import BinsContent from '../farmer/binsCard';
import ShedsContent from '../farmer/shedsCard';

export default function fieldSummary() {
    return (
        <Layout>
            <>
                <ControlBar name="inventoryBar" forUser="farmer" type="product"/>
                <Divider />
                <BinsContent />
                <ShedsContent />
            </>
        </Layout>
    );
}