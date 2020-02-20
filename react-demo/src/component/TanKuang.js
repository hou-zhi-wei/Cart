import React, { Component } from 'react'
export default class TanKuang extends Component {
    state = ({
        falg: true
    })
    mengcengClick = () => {
        this.setState({
            falg: false
        })
        localStorage.falg="111"
    }
    componentWillMount() {
        if (localStorage.falg === "111") {
            this.setState({
                falg: false
            })
        }
    }
    render() {
        let { falg } = this.state
        console.log(falg)
        return (
            <div  className={falg?"block":"none"}>
                <div className="TanKuang">
                    <div className="TanKuang1">
                        <img src="http://image.biaobaiju.com/uploads/20180802/01/1533144547-HjKwoGUqyr.jpg" alt="" />
                        <span onClick={() => { this.mengcengClick() }}>X</span>
                    </div>
                </div>
            </div>

        )
    }
}
