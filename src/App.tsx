import React, { Fragment, useState } from 'react';
import './App.css';
import { Button, Table, Layout } from 'antd';
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons"
import AddDrawer from "./Components/AddDrawer/AddDrawer"
import { connect } from 'react-redux';
import { addCollection, deleteCollection } from './redux/collections/actions';

const App = ({collections, addCollection, deleteCollection}: 
  {
    collections: any, 
    addCollection: any,
    deleteCollection: any
  }) => {
  
  const [showDrawer, setShowDrawer] = useState(false)
  const [error, setError] = useState("")
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Content, Footer, Sider } = Layout;

  const handleFormOnFinish = (formData: any) => {
    // setValues([...values, { key: values.length + 1, ...formData }])
    setShowDrawer(false)
    addCollection({
      key: collections.length + 1, ...formData
    })
  }
  console.log(collections)
  const handleFormOnFinishFailed = (error: any) => {
    setError(error)
  }
  const onCollapse = (isCollapsed: boolean) => {
    setCollapsed(isCollapsed)
  }

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title:"Action",
      key: "action",
      render:(record: any) => (
        <span>
          <Button onClick={() => deleteCollection(record.key)} icon={<DeleteOutlined/>}></Button>
        </span>
      )
    }
  ];
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Fragment>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <div></div>
                <div>
                  <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={() => setShowDrawer(true)}
                    data-testid="add-collection-button"
                  >
                    Add
                  </Button>
                </div>
              </div>
              <Layout.Content>
                <Table dataSource={collections} columns={columns} />
              </Layout.Content>
              <AddDrawer
                show={showDrawer}
                handleOnFinish={handleFormOnFinish}
                handleOnFinishFailed={handleFormOnFinishFailed}
                handleOnClose={() => setShowDrawer(false)}
              />
            </Fragment>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Smart GitHub App @2021</Footer>
      </Layout>
    </Layout>


  );
}
const mapStateToProps = (state: any) =>{
  return{
    collections:state.collections && state.collections.allCollection
  }
}
const mapDispatchToProps = (dispatch: any) =>{
  return{
    addCollection: (collection:any) =>{
      dispatch(addCollection(collection))
    },
    deleteCollection: (key: any) =>{
      dispatch(deleteCollection(key))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
