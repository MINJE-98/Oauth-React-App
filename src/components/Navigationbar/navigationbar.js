import { Component } from "react";
export default class Navigationbar extends Component {
    constructor(props){
        super(props)
        console.log(props);
    }
    loginButtonForKakao() {
        window.location.href =
          "https://kauth.kakao.com/oauth/authorize?client_id=95c2b6fc38e21b3d6d255e32020e7b75&redirect_uri=http://localhost:3000/auth&response_type=code";
      };
    render(){
        return(
            <div>
                {!this.props.data
                ?
                <button 
                title="카카오 로그인하기"
                onClick={this.loginButtonForKakao}>
                    로그인하기
            </button>
                :
                <button>
                    로그아웃!    
                </button>}
            </div>
        );
    }
}