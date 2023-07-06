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
|기능|Method| URL        |  
|--|--|------------|  
|할 일 생성|POST| /todo      |
|할 일 조회|GET| /todo      |  
|할 일 삭제|DELETE| /todo/{id} |
|할 일 수정|PUT|/todo/{id}|


