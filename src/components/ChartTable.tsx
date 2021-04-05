import React, {useEffect, useState} from 'react'
import {Space, Table, Tag} from "antd";
import {useChart} from "../hooks/useChart";
import {useDateRange} from "../context/DatesContext";
import {isWithinInterval} from "date-fns";


export const ChartTable = () => {
    const {chart, isError, isLoading} = useChart()
    const {dateRange, fromDate, toDate} = useDateRange()
    const [data, setData] = useState<any>([])

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

    const configWebstorm = () => {
        chart.filter((elem: { timestamp: string | number | Date; }) => isWithinInterval(new Date(elem.timestamp),
            {start: fromDate, end: toDate}))
    }

    useEffect(() => {
        setData(['InteliJ IDEA', 'WebStorm', ''])
    },[dateRange, fromDate])

    // const data = [
    //     {
    //         key: '1',
    //         product: 'webstorm',
    //         minUsage: 32,
    //         maxUsage: 26,
    //         averageUsage: 15
    //     },
    // ];
    return(<Table columns={columns} dataSource={data} />)
}