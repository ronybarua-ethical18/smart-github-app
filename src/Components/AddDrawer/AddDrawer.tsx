import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Drawer, Form, Button, Input, Select } from 'antd'
const AddDrawer = ({ show, handleOnClose, handleOnFinish, handleOnFinishFailed }:
    {
        show: boolean,
        handleOnClose: any,
        handleOnFinish: any,
        handleOnFinishFailed: any
    }): JSX.Element => {
    const initialValues = {
        collectionName: '',
        collectionType: '',
        selectDate: null,
        repository: null
    }
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);
    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option value={i} key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }
    return (
        <Drawer
            width={412}
            data-testid="add-collection-drawer"
            title="Add Collection"
            visible={show}
            onClose={handleOnClose}
            maskClosable={false}>
            <Form
                form={form}
                name="basic"
                initialValues={initialValues}
                onFinish={handleOnFinish}
                onFinishFailed={handleOnFinishFailed}
                layout="vertical"
            >
                <Form.Item
                    label="Collection Name"
                    name="collectionName"
                    rules={[{ required: true, message: 'Please input your collection name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Collection Type"
                    name="collectionType"
                    rules={[{ required: true, message: 'Please input your collection type' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Select Date"
                    name="selectDate"
                    rules={[{ required: true, message: 'Please select date' }]}
                >
                <Input type="date" />
                </Form.Item>
                <Form.Item
                    label="Select Repository"
                    name="repository"
                    rules={[{ required: true, message: 'Please select your repository' }]}>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        defaultValue={['a10', 'c12']}
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Fragment>
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                Add
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={() => form.resetFields()}
                            >Reset</Button>
                        </Fragment>
                    )}
                </Form.Item>
            </Form>
        </Drawer>
    );

};
AddDrawer.propTypes = {
    show: PropTypes.bool.isRequired,
    handleOnClose: PropTypes.func.isRequired,
    handleOnFinish: PropTypes.func.isRequired,
    handleOnFinishFailed: PropTypes.func.isRequired,
}
export default AddDrawer;