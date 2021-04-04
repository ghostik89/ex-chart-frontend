import React, {useState} from 'react';
import {useChart} from "./hooks/useChart";
import {Layout, Typography} from "antd";
import {DateSlider} from "./components/DateSlider";
import 'antd/dist/antd.css';
import {ChartTable} from "./components/ChartTable";
import {IdeChart} from "./components/IdeChart";

function App() {
    const {chart, isError, isLoading} = useChart()
    const [interval, setInterval] = useState({})
    const {Title, Paragraph} = Typography
    const {Content} = Layout

    return (
        <>
            <Layout>
                <Layout>
                    <Content>
                        <Title>Stats</Title>
                        <Paragraph>From som to som</Paragraph>
                        <DateSlider/>
                        <ChartTable/>
                        {['InteliJ IDEA', 'WebStorm', 'PhpStorm'].map((elem, index) => (
                            <IdeChart ideName={elem} key={index}/>
                        ))}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}

export default App;
