package com.todolist.doit.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "will_do")
@Getter
@ToString
@NoArgsConstructor
public class ToDo {


        @Id
        @Column(name = "t_id", unique = true, nullable = false)
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long tId;

        @Column(length = 100,nullable = false)
        private String email;

        @Column(nullable = false)
        private String content;

        @Column(length = 15, nullable = false)
        private String dueDate;

        @Column(nullable = false)
        private Boolean state;

        @Builder
        public ToDo(String email, String content, String dueDate, Boolean state) {
                this.email = email;
                this.content = content;
                this.dueDate = dueDate;
                this.state = state;
        }

        @Builder
        public ToDo(Long tid,String email, String content, String dueDate, Boolean state) {
                this.tId = tid;
                this.email = email;
                this.content = content;
                this.dueDate = dueDate;
                this.state = state;
        }


}
