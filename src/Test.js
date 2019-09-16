import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "react-tabs/style/react-tabs.css"

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabIndex: 0
    }
  }

  render() {
    return (
      <div style={{ paddingLeft: '5%', paddingRight: 10, backgroundColor: ' #fff2e6' }}>
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList>
            <Tab style={{background:'transparent'}}>Cake</Tab>
            <Tab style={{background:'transparent'}}>Title 2</Tab>
            <Tab style={{background:'transparent'}}>Title 3</Tab>
          </TabList>

          <TabPanel>
            <Tab className="row" style={{zIndex:0}}>
              <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3" style={{ paddingLeft: 25, textAlign: 'center' }}>
                <img className="img-fluid" src={require('/image/dessert/chocolate_cake.jpg')} alt="Chocolate_cake" />
                <label>Name: Chocolate Cake</label>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3" style={{ paddingLeft: 25, textAlign: 'center' }}>
                <img className="img-fluid" src={process.env.PUBLIC_URL + '/image/dessert/chocolate_cake.jpg'} alt="Chocolate_cake" />
                <label>Name: Chocolate Cake</label>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3" style={{ paddingLeft: 25, textAlign: 'center' }}>
                <img className="img-fluid" src={process.env.PUBLIC_URL + '/image/dessert/chocolate_cake.jpg'} alt="Chocolate_cake" />
                <label>Name: Chocolate Cake</label>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3" style={{ paddingLeft: 25, textAlign: 'center' }}>
                <img className="img-fluid" src={process.env.PUBLIC_URL + '/image/dessert/chocolate_cake.jpg'} alt="Chocolate_cake" />
                <label>Name: Chocolate Cake</label>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3" style={{ paddingLeft: 25, textAlign: 'center' }}>
                <img className="img-fluid" src={process.env.PUBLIC_URL + '/image/dessert/chocolate_cake.jpg'} alt="Chocolate_cake" />
                <label>Name: Chocolate Cake</label>
              </div>

              <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3" style={{ paddingLeft: 25, textAlign: 'center' }}>
                <img className="img-fluid" src={process.env.PUBLIC_URL + '/image/dessert/chocolate_cake.jpg'} alt="Chocolate_cake" />
                <label>Name: Chocolate Cake</label>
              </div>
            </Tab>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <p>Any Content</p>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default Test