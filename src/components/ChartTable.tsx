import React, {useEffect, useState} from 'react'
import {Table} from "antd";
import {useChart} from "../hooks/useChart";
import {useDateRange} from "../context/DatesContext";
import {isWithinInterval} from "date-fns";


export const ChartTable = () => {
    const {chart, isLoading} = useChart()
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
        const temp = chart
            .filter((elem: { timestamp: string | number | Date; }) => isWithinInterval(new Date(elem.timestamp),
            {start: fromDate, end: toDate}))
            .map((elem: { webstorm: number | null; }) => elem.webstorm)
            .filter((elem: null | number) => elem !== null)
        const minUsage = Math.min.apply(null, temp)
        const maxUsage = Math.max.apply(null, temp)
        const averageUsage = temp.reduce((a: any, b: any) => a + b, 0) / temp.length || 0;

        return { minUsage, maxUsage, averageUsage }
    }

    const configIdea = () => {
        const temp = chart
            .filter((elem: { timestamp: string | number | Date; }) => isWithinInterval(new Date(elem.timestamp),
                {start: fromDate, end: toDate}))
            .map((elem: { idea: number | null; }) => elem.idea)
            .filter((elem: null | number) => elem !== null)
        const minUsage = Math.min.apply(null, temp)
        const maxUsage = Math.max.apply(null, temp)
        const averageUsage = temp.reduce((a: any, b: any) => a + b, 0) / temp.length || 0;

        return { minUsage, maxUsage, averageUsage }
    }

    const configPhpStorm = () => {
        const temp = chart
            .filter((elem: { timestamp: string | number | Date; }) => isWithinInterval(new Date(elem.timestamp),
                {start: fromDate, end: toDate}))
            .map((elem: { goland: number | null; }) => elem.goland)
            .filter((elem: null | number) => elem !== null)
        const minUsage = Math.min.apply(null, temp)
        const maxUsage = Math.max.apply(null, temp)
        const averageUsage = temp.reduce((a: any, b: any) => a + b, 0) / temp.length || 0;

        return { minUsage, maxUsage, averageUsage }
    }

    useEffect(() => {
        if(!isLoading)
            setData([
                {
                    key: '1',
                    product: 'InteliJ IDEA',
                    ...configIdea()
                },
                {
                    key: '2',
                    product: 'Webstorm',
                    ...configWebstorm()
                },
                {
                    key: '3',
                    product: 'Phpstorm',
                    ...configPhpStorm()
                }
            ])
    },[isLoading, dateRange, fromDate])

    return(<Table columns={columns} dataSource={data} loading={isLoading}/>)
}