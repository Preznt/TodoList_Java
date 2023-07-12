# TodoList

## 사용기술
- FrontEnd : React, tailwind
- BackEnd : SpringBoot
- Database : MySQL
- Deploy : AWS RDS

## 기능
- 할 일 추가, 수정, 삭제, 완료
- 해당 투두리스트 달력에 날짜별로 표현

## CRUD API 설계
|기능|Method| URL            |  
|--|--|----------------|  
|할 일 생성|POST| /api/todo      |
|할 일 조회|GET| /api/todo      |  
|할 일 삭제|DELETE| /api/todo/{id} |
|할 일 수정|PUT| /api/todo/{id} |

## 오류
- 7/10  
삭제시 해당 리스트가 삭제되는 것이 아니라 맨 마지막리스트가 사라지는 현상 발생  
하지만 새로고침시 올바르게 나온다,  
그리고 생성후에 바로 완료 체크버튼를 누르면 생성한 모든 곳에 체크가 되었다



