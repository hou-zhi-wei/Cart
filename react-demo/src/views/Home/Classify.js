import React, { Component } from 'react'
import {connect} from 'react-redux'
import TabbarList from "../../component/tabbar"
import Axios from 'axios';
export default class Classify extends Component {
    render() {
        let {classList}=this.props
        return (
            <div>
                <TabbarList classList={classList}></TabbarList>
            </div>
        )
    }
    componentDidMount(){
        this.props.getClassify()
    }
}
let mapStateToProps=(store)=>{
    let {classList}=store

    return {
        classList
    }
}
let mapDisPatchToProps=(dispatch)=>{
    return {
        getClassify(){
            Axios.get("/api/TabList").then(({data})=>{
                dispatch({type:"ClassifyList",ClassifyList:data.TabList})
            })
        }
    }
}

Classify=connect(mapStateToProps,mapDisPatchToProps)(Classify)
