import { Component } from "react";

export default class GetToken extends Component{
    constructor(props) {
        super(props)
        const kakaocode = new URL(window.location.href).searchParams.get('code');
        this.state ={
            kakaocode: kakaocode
        }
    }
    componentDidMount(){
        this.props.getToken(this.state.kakaocode);
    }
    render(){
        return(
            <div>
                <div>토큰 발급중이다..</div>
            </div>
        );
    }
}