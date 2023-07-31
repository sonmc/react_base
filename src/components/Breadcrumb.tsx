import React, { useState } from 'react';
import { Breadcrumb, theme } from 'antd';

const Breadcrum: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    console.log(collapsed);

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
    );
};
export default Breadcrum;
