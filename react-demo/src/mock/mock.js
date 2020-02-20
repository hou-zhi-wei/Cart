import Mock from "mockjs"
import data from "./data.json"
let dataList = Mock.mock({
    "List|10": [{
        "id|+1":1,
        "dataimg": "@image(200x100,@color())",
        "datatitle": "@cparagraph(1, 2)",
        "dataprice|1-200": 1,
        "num":1,
        "flag":true
    }],
    "TabList|10":[{
        "id|+1":1,
        "datatitle":"@ctitle(4)",
        "children|10":[{
            "id|+1":1,
            "dataimg":"@image(200x100,@color())",
            "datatitle":"@cparagraph(1, 2)",
            "dataprice|1-200":1
        }]
    }]
})
Mock.mock(("/api/List"), "get", () => {
    return dataList
})

Mock.mock(("/api/SwiperList"), "get", () => {
    return data
})

Mock.mock(("/api/TabList"),"get",()=>{
    return dataList
})