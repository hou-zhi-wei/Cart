// import React from "react"

import Home from "../views/Home"
import Index from "../views/Home/Index"
import Classify from "../views/Home/Classify"
import VIP from "../views/Home/VIP"
import Cart from "../views/Home/Cart"
import My from "../views/Home/My"
export default {
    routes: [
        {
            path: "/Home",
            component: Home,
            children: [
                {
                    path: "/Home/Index",
                    component: Index
                },
                {
                    path: "/Home/Classify",
                    component: Classify
                },
                {
                    path: "/Home/VIP",
                    component: VIP
                },
                {
                    path: "/Home/Cart",
                    component: Cart
                },
                {
                    path: "/Home/My",
                    component: My
                }
            ]
        },
        {
            path: "/",
            redirect: "/Home/Index"
        }
    ]
}