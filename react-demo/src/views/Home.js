import React, { Component } from 'react'

import Routerview from "../Router/Routerview"
import {NavLink} from "react-router-dom"
export default class Home extends Component {
    render() {
        return (
            <div className="warp">
                <header></header>
                <main>
                    <Routerview routes={this.props.routes}></Routerview>
                </main>
                <footer>
                    <NavLink to="/Home/Index">首页</NavLink>
                    <NavLink to="/Home/Classify">分类</NavLink>
                    <NavLink to="/Home/VIP">订单</NavLink>
                    <NavLink to="/Home/Cart">购物车</NavLink>
                    <NavLink to="/Home/My">我的</NavLink>
                </footer>

            </div>
        )
    }
}
