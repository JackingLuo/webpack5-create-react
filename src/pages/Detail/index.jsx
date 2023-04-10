import React from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import { getInfo } from 'Src/api';
// import { Column } from '@ant-design/plots';
import './index.scss';

const Detail = () => {

    // const params = useParams();
    // const locations = useLocation();
    // const navigate = useNavigate();
    // const config = {
    //     data,
    //     isGroup: true,
    //     xField: '月份',
    //     yField: '月均降雨量',
    //     seriesField: 'name',

    //     /** 设置颜色 */
    //     //color: ['#1ca9e6', '#f88c24'],

    //     /** 设置间距 */
    //     // marginRatio: 0.1,
    //     label: {
    //         // 可手动配置 label 数据标签位置
    //         position: 'middle',
    //         // 'top', 'middle', 'bottom'
    //         // 可配置附加的布局方法
    //         layout: [
    //             // 柱形图数据标签位置自动调整
    //             {
    //                 type: 'interval-adjust-position',
    //             }, // 数据标签防遮挡
    //             {
    //                 type: 'interval-hide-overlap',
    //             }, // 数据标签文颜色自动调整
    //             {
    //                 type: 'adjust-color',
    //             },
    //         ],
    //     },
    // };

    const handleClick = async () => {
        const res = await getInfo({ id: 110 });

        console.log('%c [ res ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', res);
    };

    return (
        <div className="business-center-container" >
            <div className="box-shadow">
                <Row gutter={8}>
                    <Col span={4}>
                        1
                    </Col>
                    <Col span={4}>2</Col>
                    <Col span={4}>3</Col>
                    <Col span={4}>4</Col>
                    <Col span={4}>5</Col>
                    <Col span={4}>6</Col>
                </Row>
            </div>
            <div>
                <Row gutter={4}>
                    <Col span={12} className="box-shadow">
                        1
                    </Col>
                    <Col span={12} className="box-shadow">2</Col>
                </Row>
            </div>
            <div>
                <Row gutter={4}>
                    <Col span={15} className="box-shadow">
                        1
                    </Col>
                    <Col span={9} className="box-shadow">2</Col>
                </Row>
            </div>
            <Button type="primary" onClick={handleClick}>Detail</Button>
            {/* <Column {...config} /> */}
        </div>
    );
};

export default Detail;
