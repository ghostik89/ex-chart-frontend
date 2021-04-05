import React, {useEffect, useState} from 'react';
import {useChart} from "./hooks/useChart";
import {Skeleton, Typography} from "antd";
import {DateSlider} from "./components/DateSlider";
import 'antd/dist/antd.css';
import {ChartTable} from "./components/ChartTable";
import {IdeChart} from "./components/IdeChart";
import {add, format} from 'date-fns';
import { DateProvider } from './context/DatesContext';
import './App.css'

function App() {
    const {chart, isError, isLoading} = useChart()
    const {Title, Paragraph} = Typography
    const [dates, setDates] = useState([])
    const [dateRange, setDateRange] = useState('quarter')
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())

    useEffect(() => {
        if(!isLoading) {
            setDates(chart.map((elem: any) => new Date(elem.timestamp)))
            setFromDate(new Date(chart[0].timestamp))
        }
    },[isLoading])

    const changeStartDate = (date:Date) => {
        setFromDate(date)
    }

    useEffect(() => {
        let tempDate = fromDate
        switch (dateRange) {
            case 'quarter':
                setToDate(add(tempDate, {months: 3}))
                break
            case 'month':
                setToDate(add(tempDate, {months: 1}))
                break
            case 'week':
                setToDate(add(tempDate, {days: 7}))
                break
            case 'day':
                setToDate(add(tempDate, {days: 1}))
                break
        }
    },[fromDate, dateRange])

    const changeRangeType = (dateRange:string) => {
        setDateRange(dateRange)
    }

    return (
        <DateProvider value={{changeRangeType, dateRange, fromDate, changeStartDate, toDate}}>
            <div className="container">
                <Title>Stats</Title>
                <Paragraph>{isLoading? <Skeleton />: `From ${format(fromDate, 'MMM, dd yyyy')}
                 to ${format(toDate, 'MMM, dd yyyy')}`}</Paragraph>
                <DateSlider/>
                <ChartTable/>
                {['InteliJ IDEA', 'WebStorm', 'PhpStorm'].map((elem, index) => (
                    <IdeChart ideName={elem} key={index}/>
                ))}
            </div>
        </DateProvider>
    );
}

export default App;
