import React, { Component } from 'react'
import {connect} from "react-redux"
export default class List extends Component {
    render() {
        let { List1 } = this.props
        return (
            <div className="ListBox">
                <div className="ListBox1">
                    <h3>今日TOP</h3>
                    <span onClick={()=>this.props.huanClick(List1)}>换一换</span>
                </div>
                <div className="ListBox2">
                    {
                        List1.map((item, index) => {
                            return <div key={index} className="ListBox3">
                                <dl>
                                    <dt><img src={item.dataimg} alt="" /></dt>
                                    <dd>{item.datatitle}</dd>
                                    <dd>￥{item.dataprice}<span className="jia" onClick={()=>{this.props.Addclick(item)}}>+</span></dd>
                                </dl>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
let mapStateToProps=()=>{
    return {

    }
}
let mapDisPatchToProps=(dispatch)=>{
    return {
        Addclick(item){
           dispatch({type:"ADDClick",item})
        },
        huanClick(List){
            dispatch({type:"Listdata",List})
        }
    }
}
List=connect(mapStateToProps,mapDisPatchToProps)(List)
