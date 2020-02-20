import React, { Component } from 'react'
import { Carousel } from 'antd';
export default class SwiperList extends Component {
    render() {
        let { SwiperList } = this.props
        return (
            <div>
                <Carousel autoplay>
                   {
                       SwiperList.map((item,index)=>{
                           return <div key={index}>
                               <img src={item.img} alt=""/>
                           </div>
                       })
                   }
                </Carousel>
            </div>
        )
    }
}
