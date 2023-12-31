package com.todolist.doit.util.dto;

import lombok.Data;

@Data
public class Profile {
    private String nickname;
    private String thumbnail_image_url;
    private String profile_image_url;
    private Boolean is_default_image;
}
