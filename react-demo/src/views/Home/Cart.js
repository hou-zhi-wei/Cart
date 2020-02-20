import React, { Component } from 'react'
import { connect } from "react-redux"
export default class Cart extends Component {
    render() {
        let { Cart } = this.props
        console.log(Cart)
        return (
            <div className="CartBox">
                <div className="CartBox1">
                    全选:<input type="checkbox" checked={Cart.every(item=>item.flag)} onChange={(e)=>this.props.checkedAll(e)}/>
                    {
                        Cart.map((item, index) => {
                            return <div key={index} className="CartBox2">
                                <div className="left">
                                    <input type="checkbox" checked={item.flag} onChange={()=>this.props.checked(item)}/>
                                </div>
                                <div className="center">
                                    <dl>
                                        <dt><img src={item.dataimg} alt=""/></dt>
                                        <dd>{item.datatitle}</dd>
                                    </dl>
                                </div>
                                <div className="right">
                                    <span className="jia" onClick={()=>this.props.AddList(item)}>+</span>
                                    <span>{item.num}</span>
                                    <span className="jia" onClick={()=>this.props.RemoveList(item)}>-</span>
                                </div>
                            </div>
                        })
                    }
                    <span>总价{this.data}</span>
                </div>

            </div>
        )
    }
    get data(){
        let price=this.props.Cart.reduce((total,item)=>{
            if(item.flag){
                total+=item.num*item.dataprice
            }
            return total
        },0)
        return price
    }
}
let mapStateToProps = (store) => {
    let { Cart } = store
    return {
        Cart
    }
}
let mapDisPatchToProps = (dispatch) => {
    return {
        AddList(item){
         dispatch({type:"ADDLIST",item})
        },
        RemoveList(item){
            dispatch({type:"RemoveList",item})
        },
        checked(item){
           dispatch({type:"checked",item})
        },
        checkedAll(e){
            dispatch({type:"CheckedAll",value:e.target.checked})
        }
    }
}
Cart = connect(mapStateToProps, mapDisPatchToProps)(Cart)
