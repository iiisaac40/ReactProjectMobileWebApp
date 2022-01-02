import React from 'react'
import {Route} from 'react-router-dom'
import {TabBar} from 'antd-mobile'

import './index.css'

import Index from '../Index'
import News from '../News'
import Profile from '../Profile'
import HouseList from '../HouseList'




const tabItems = [
    {
        title: "Font Page",
        icon: "icon-ind",
        path: "/home"
    },
    {
        title: "Search",
        icon: "icon-findHouse",
        path: "/home/list"
    },
    {
        title: "Info",
        icon: "icon-infom",
        path: "/home/news"
    },
    {
        title: "My",
        icon: 'icon-my',
        path: '/home/profile'
    }
]

export default class Home extends React.Component {
    state = {
        selectedTab: this.props.location.pathname 
    }

    renderTabBarItem() {
        return tabItems.map(item => <TabBar.Item
            title={item.title}
            key={item.title}
            icon={
                <i className={`iconfont ${item.icon}`}/>
            }
            selectedIcon={<i className={`iconfont ${item.icon}`}/>
            }
            selected={this.state.selectedTab === item.path}
            
            onPress={() => {
                this.setState({
                    selectedTab: item.path
                })
                this.props.history.push(item.path)
            }}
        />)
    }
    
    render() {
        
        return (
            
            <div className='home'>
                <Route path="/home/news" component={News} />
                <Route exact path="/home" component={Index} />
                <Route path="/home/profile" component={Profile} />
                <Route path="/home/list" component={HouseList} />
                    <TabBar
                        // unselectedTintColor="#888"
                        tintColor="#21b97a"
                        barTintColor="white"
                        noRenderContent={true}                        
                    >
                         {this.renderTabBarItem()}
                        
                    </TabBar>
                
            </div>
        )  
    }
}