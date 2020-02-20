import React, { Component } from 'react'
import { connect } from "react-redux"
export default class tabbar extends Component {
    render() {
        let { classList, TabIndex } = this.props
        console.log(TabIndex)
        return (
            <div className="tabbarBox">
                <div className="tabbarBox1">
                    <div className="left1">
                        {
                            classList.map((item, index) => {
                                return <div key={index} onClick={() => this.props.Tabclick(index)} className={TabIndex===index?"active":' '}>
                                    <p>{item.datatitle}</p>
                                </div>
                            })
                        }
                    </div>
                    <div className="rigth1">
                        {
                            classList.length > 0 && classList[TabIndex].children.map((item, index) => {
                                return <div key={index}>
                                    <dl>
                                        <dt><img src={item.dataimg} alt=""/></dt>
                                        <dd>{item.datatitle}</dd>
                                        <dd>￥{item.dataprice}<span className="jia" onClick={()=>this.props.addclick(item)}>+</span></dd>
                                    </dl>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (store) => {
    let { TabIndex } = store
    return {
        TabIndex
    }
}
let mapDisPatchToProps = (dispatch) => {
    return {
        Tabclick(index) {
            dispatch({ type: "Tabclick", index })
        },
        addclick(item){
            dispatch({type:"ADD",item})
        }
    }
}
tabbar = connect(mapStateToProps, mapDisPatchToProps)(tabbar)