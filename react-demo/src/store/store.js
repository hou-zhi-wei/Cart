import {createStore} from "redux"

let reducer=(state,actions)=>{
    state=JSON.parse(JSON.stringify(state))
    //轮播图数据
    if(actions.type==="SWIPER"){
        state.SwiperList=actions.data
    }
    //换一换数据
    if(actions.type==="LIST"){
        state.List=actions.List
        state.List1=state.List.slice(0,3)
    }
    //换一换
    if(actions.type==="Listdata"){
        let num=Math.ceil(state.List.length/state.pageSizi)
        if(state.pageNo<num){
            state.pageNo++
        }else{
            state.pageNo=1
        }
        let start=(state.pageNo-1)*state.pageSizi
        let end=state.pageSizi*state.pageNo
        state.List1=state.List.slice(start,end)
    }
    
    // 加入购物车
    if(actions.type==="ADDClick"){
        let index=state.Cart.findIndex(item=>item.id===actions.item.id)
        if(index===-1){
            actions.item.num=1 //数量等于1
            actions.item.flag=true //默认为true
            state.Cart.push(actions.item)
        }else{
            alert("已存在")
        }
    }
    //购物车++
    if(actions.type==="ADDLIST"){
        let index=state.Cart.findIndex(item=>item.id===actions.item.id)
        state.Cart[index].num++;
    }
    //购物车--
    if(actions.type==="RemoveList"){
        let index=state.Cart.findIndex(item=>item.id===actions.item.id)
        if(state.Cart[index].num<2){
            alert("确定删除吗")
            state.Cart.splice(index,1)
        }else{
            state.Cart[index].num--;
        }
    }
    //单选
    if(actions.type==="checked"){
        let index=state.Cart.findIndex(item=>item.id===actions.item.id)
        state.Cart[index].flag=!state.Cart[index].flag
    }
    //全选
    if(actions.type==="CheckedAll"){
        state.Cart.forEach((item,index)=>{
            item.flag=actions.value
        })
    }

    // 分类
    if(actions.type==="ClassifyList"){
        state.classList=actions.ClassifyList
        console.log(actions.ClassifyList)
    }
    //Tab下标
    if(actions.type==="Tabclick"){
        state.TabIndex=actions.index
    }
    //分类加入购物车
    if(actions.type==="ADD"){
        let index=state.Cart.findIndex(item=>item.id===actions.item)
        if(index===-1){
            actions.item.num=1
            actions.item.flag=true
            state.Cart.push(actions.item)
        }else{
            alert("已存在")
        }
    }
    return state
}
let initState={
    SwiperList:[],//轮播图
    List:[],
    Cart:[],
    classList:[],
    TabIndex:0,
    List1:[],
    pageNo:1,
    pageSizi:3,
}
let store=createStore(reducer,initState)
export default store
