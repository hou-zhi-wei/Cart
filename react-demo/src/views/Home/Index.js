import React, { Component } from 'react'
import SwiperData from "../../component/SwiperList"
import ListData from "../../component/List"
import Tankuang from "../../component/TanKuang"
import {connect} from "react-redux"
import axios from "axios"
export default class Index extends Component {
    render() {
        let {SwiperList,List1}=this.props
        return (
            <div>
                <Tankuang></Tankuang>
                <SwiperData SwiperList={SwiperList}></SwiperData>
                <ListData List1={List1}></ListData>
            </div>
        )
    }
    componentDidMount(){
        this.props.Swiperdata()
        this.props.getdata()
    }
}
let mapStateToProps=(store)=>{
    let {SwiperList,List1}=store
    return {
        SwiperList,
        List1
    }
}
let maoDisPatchToProps=(dispatch)=>{
    return {
        //轮播图
        Swiperdata(){
            axios.get("/api/SwiperList").then(({data})=>{
                dispatch({type:"SWIPER",data})
            })
        },
        //换一换数据
        getdata(){
            axios.get("/api/List").then(({data})=>{
                console.log(data)
              dispatch({type:"LIST",List:data.List})
            })
        }
    }
}
Index=connect(mapStateToProps,maoDisPatchToProps)(Index)