package com.todolist.doit.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "will_do")
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ToDo {

        @Id
        @Column(name = "t_id", unique = true, nullable = false)
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long tId;

        @Column(nullable = false)
        private Long userId;

        @Column(nullable = false)
        private String content;

        @Column(length = 15, nullable = false)
        private String dueDate;

        @Column(nullable = false)
        private Boolean state;



}
