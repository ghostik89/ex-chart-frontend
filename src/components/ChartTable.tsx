import React from 'react'
import {Space, Table, Tag} from "antd";


export const ChartTable = () => {
    const columns = [
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'min usage',
            dataIndex: 'minUsage',
            key: 'minUsage',
        },
        {
            title: 'max usage',
            dataIndex: 'maxUsage',
            key: 'maxUsage',
        },
        {
            title: 'average usage',
            key: 'averageUsage',
            dataIndex: 'averageUsage',
        },
    ];
    const data = [
        {
            key: '1',
            product: 'webstorm',
            minUsage: 32,
            maxUsage: 26,
            averageUsage: 15
        },
    ];
    return(<Table columns={columns} dataSource={data} />)
}