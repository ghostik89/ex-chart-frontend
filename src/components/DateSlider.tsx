import React from "react";
import {useChart} from "../hooks/useChart";
import {Button, Col, Row, Select, Skeleton} from "antd";
import {LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons";
import {useDateRange} from "../context/DatesContext";
import {add, sub} from "date-fns";

export const DateSlider = () => {
    const {changeRangeType, dateRange, changeStartDate, fromDate} = useDateRange()
    const {isLoading} = useChart()
    const { Option } = Select;

    const handleChange = (value:string) => {changeRangeType(value)}

    const handleAdd = () => {
        switch (dateRange) {
            case 'quarter':
                changeStartDate(add(fromDate, {months: 3}))
                break
            case 'month':
                changeStartDate(add(fromDate, {months: 1}))
                break
            case 'week':
                changeStartDate(add(fromDate, {days: 7}))
                break
            case 'day':
                changeStartDate(add(fromDate, {days: 1}))
                break
        }
    }

    const handleSub = () => {
        switch (dateRange) {
            case 'quarter':
                changeStartDate(sub(fromDate, {months: 3}))
                break
            case 'month':
                changeStartDate(sub(fromDate, {months: 1}))
                break
            case 'week':
                changeStartDate(sub(fromDate, {days: 7}))
                break
            case 'day':
                changeStartDate(sub(fromDate, {days: 1}))
                break
        }
    }

    return(
        <Row>
                <Col span={8}>
                    {isLoading? <Skeleton/>:<Button
                        type="primary"
                        icon={<LeftCircleOutlined/>}
                        onClick={handleAdd}
                    >
                        {`Previous ${dateRange}`}
                    </Button>}
                </Col>
            <Col span={8}>
                {isLoading? <Skeleton/>:
                    <Select value={dateRange} defaultValue="quarter" onChange={handleChange}>
                        <Option value="quarter">One quarter</Option>
                        <Option value="month">Month</Option>
                        <Option value="week">Week</Option>
                        <Option value="day">Day</Option>
                    </Select>}
            </Col>
            <Col span={8}>
                {isLoading? <Skeleton/>:<Button
                    type="primary"
                    icon={<RightCircleOutlined/>}
                    onClick={handleSub}
                >
                    {`Next ${dateRange}`}
                </Button>}
            </Col>
        </Row>
    )
}