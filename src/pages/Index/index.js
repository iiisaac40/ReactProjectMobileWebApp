import React from 'react';
import { Carousel, Flex } from 'antd-mobile';
import axios from 'axios';

import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'


const navs = [
    {
      id: 1,
      img: Nav1,
      title: 'Rent',
      path: '/home/list'
    },
    {
      id: 2,
      img: Nav2,
      title: 'Share',
      path: '/home/list'
    },
    {
      id: 3,
      img: Nav3,
      title: 'Search on Map',
      path: '/map'
    },
    {
      id: 4,
      img: Nav4,
      title: 'For Rent',
      path: '/rent/add'
    }
  ]

export default class Index extends React.Component {
    state = {
        swiper: []
      }

    async getSwipers() {
        const res = await axios.get('http://localhost:8080/home/swiper')
        console.log('data:', res)
        this.setState( {
            swiper: res.data.body
        })
    }

    componentDidMount() {
        // simulate img loading
        this.getSwipers()
    }

    renderSwiper() {
        return this.state.swiper.map(item => (
        <a
            key={item.id}
            href="http://www.google.com"
            style={{
                display: 'inline-block',
                width: '100%',
                height: 212
              }}
        >
            <img
            src={`http://localhost:8080${item.imgSrc}`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            />
        </a>
        ))
    }

    renderNavs() {
        return navs.map(item => (
          <Flex.Item
            key={item.id}
            onClick={() => this.props.history.push(item.path)}
          >
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
          </Flex.Item>
        ))
    }

    render() {
        return (
            <div className='index'>
            <Carousel
                autoplay={true}
                infinite
            >
                {this.renderSwiper()}
                {this.renderNavs()}
            </Carousel>
            </div>
        );
    }
}
