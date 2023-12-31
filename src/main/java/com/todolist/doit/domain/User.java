package com.todolist.doit.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @Column(nullable = false, unique = true)
    private Long id;

    @Column(length = 100)
    private String email;
    private String nickname;
    private String thumbnail_image_url;
    private String profile_image_url;
    private String createTime;


}
