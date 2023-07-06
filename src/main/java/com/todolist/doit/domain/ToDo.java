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
        @Column(name = "t_id")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long tId;

        @Column
        private String email;

        @Column
        private String content;

        @Column
        private String dueDate;

        @Column
        private String state;

        @Builder
        public ToDo(String email, String content, String dueDate, String state) {
                this.email = email;
                this.content = content;
                this.dueDate = dueDate;
                this.state = state;
        }


}
