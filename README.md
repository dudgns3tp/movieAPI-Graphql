# movieAPI-Graphql

## GraphQL 용어 정리

### Over - fetching

/users /GET 한다고 가정을 해보자.
사용자의 이름만 가져오고싶은데 이름 이외에 나이, 주소, 연락처 까지 가져오는것을 over-fetching이라고 한다.
일허게 쓸모없는 정보를 함께 받는것이 오버패칭이다. 상당히 비효율적이다. - graphql이해결 가능

### Under-fetching

어떤 하나를 완성하기위해 다른 요청들을 해야할때 발생

> 인스타그램 실행한다고 가정해보자
피드, 알림, 사용자 데이터가 불러와진다
/feed/
/notifications/
/user/1
즉 앱을 실행하기위해 3가지 요청을 해야한다. REST에서 하나를 완성하려고 많은 소스를 요청함. 
이것이 under-Fetching

Graph-ql은 하나의 query에서 내가 원하는 정보만 받을 수 있다.

/feed/
/notifications/
/user/1
이 모든 요청을 GraphQL에서는 한개의 query로 만들 수 있다.


```graphql
Query {
    feed{
         comments
         likeNumbers
    }
    notifications{
        isRead
    }
    user{
        username
        profilePic
    }
}
```
> 이것이 graphQL에 보낼것이고

``` javascript
{
    feed:[
        {
            comments:1,
            likeNumber:20
        }
    ],
    notifications:[
        {
            isRead:true
        },
        {
            isRead:false
        }
    ],
    user :{
        username:"dudgns3tp",
        profile:"http"
    }
}
```
이것에 GraphQL에서 보낸 JSON이다.


schema.graphql 에서는 
database 로부터 정보를 얻는다. 이것을 query라 부른다
그 후 정보를 database로 보낸다. 즉 query는 내가 정보를 받을때만 쓰인다. 
Mutation은 서버 ,db, 메모리에서서 정보를 바꾸는 작업을 할때..
(데이터 베이스 상태가 변할 때 사용되어진다고 생각하면된다.)

우리는 이제 graphql서버에서 할것은 어떤 mutations 과 query들을 
resolve는 query를 해결(resolve) 하는 역할이다.

query 와 resolver를 작성 해 주고 localhost:4000으로 접속하면 graphql playground가 나온다
이는 Database를 테스트하게 해준다.

GraphQL 서버와 REST API를 함께 사용해보자!
> GraphQL을 가지고 어떻게 REST API를 감쌀까.. 잘 생각해보자.
