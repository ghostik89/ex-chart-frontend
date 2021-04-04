import React from "react";
import {useChart} from "../hooks/useChart";
import {Button, Col, Row, Select} from "antd";
import {LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons";

export const DateSlider = () => {
    const {chart, isError, isLoading} = useChart()
    const { Option } = Select;

    return(
        <Row>
            <Col span={8}>
                <Button
                    type="primary"
                    icon={<LeftCircleOutlined />}
                >
                    Click me!
                </Button>
            </Col>
            <Col span={8}>
                <Select defaultValue="lucy">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Col>
            <Col span={8}>
                <Button
                    type="primary"
                    icon={<RightCircleOutlined />}
                >
                    Click me!
                </Button>
            </Col>
        </Row>
    )
}