# Oauth 1.0 vs Oauth 2.0

왜 Oauth 2.0으로 대체되어 사용되고 있을까?

Oauth1.0에서 토큰 승인 과정에서 세션 고정 공격이라는 보안 결함이 발견되었고, 이문제를 해결하기 위해 Oauth 1.0a로 업데이트 되었다.

Oauth 1.0a에도 여전히 여러가지 문제들이 존재했다.

1. 웹 애플리케이션이 아닌 애플리케이션에서는 사용하기 곤란하다.
2. 절차가 복잡하여 Service Provider에게 부담이 발생한다.
3. Access Token의 유효기간이 없다.

등 이러한 문제점들을 개선한 Oauth 2.0을 사용하는 것이다.

# Oauth 2.0 특징

1. Refresh Token을 도입하여 토큰 유효 기간을 단축
2. Service Provider의 역할 명칭 변경 및 세분화
    1. Resource Owner
    2. Resource Server
    3. Authentication Server
3. API 호출 인증 및 보안
    1. 서명 대신 HTTPS를 의무화 하여 서버 및 클라이언트 개발 편의성 개선
4. 클라이언트 지원 유형
    1. 웹 애플리케이션 뿐만아니라 거의 모든 애플리케이션 지원

# 역할

OAuth 2.0은 4가지의 역할이 있다.

Client | OAuth 2.0을 사용해 서드파티 로그인 기능을 구현할 자사 또는 개인 애플리케이션 서버다.

Recource Owner | 서드파티 애플리케이션 (Google, Facebook, Kakao 등)에 이미 개인정보를 저장(회원가입)하고 있으며 Client가 제공하는 서비스를 이용하려는 사용자,'Resource' 는 개인정보라고 생각하면 된다.

Resource Server | 사용자의 개인정보를 가지고있는 애플리케이션 (Google, Facebook, Kakao 등) 서버다.  Client는 Token을 이 서버로 넘겨 개인정보를 응답 받을 수 있다.

Authorization Server | 권한을 부여(인증에 사용할 아이템을 제공주는)해주는 서버다.사용자는 이 서버로 ID, PW를 넘겨 Authorization Code를 발급 받을 수 있다.Client는 이 서버로 Authorization Code을 넘겨 Token을 받급 받을 수 있다.

# 인증 절차

![https://tilog-file-service-s3.s3.ap-northeast-2.amazonaws.com/1o8h72wr8ywc2022-01-15%2012%3A02%3A48.png](https://tilog-file-service-s3.s3.ap-northeast-2.amazonaws.com/1o8h72wr8ywc2022-01-15%2012%3A02%3A48.png)

그림1. 페이코 Oauth 2.0 설명

추가 적으로 8번에서 Authorization code로 Access Token과 Fresh Token을 요청하며, Access Token의 만료기간은 1~3시간정도로 굉장히 짧게 설정되어있고, 8번에서 받은 Refresh Token으로 Access Token을 다시 발급하는 식으로 진행된다.
