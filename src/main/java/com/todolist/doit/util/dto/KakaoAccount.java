package com.todolist.doit.util.dto;

import lombok.Data;

@Data
public class KakaoAccount {
    private Boolean has_email;
    private Boolean email_needs_agreement;
    private Boolean is_email_valid;
    private Boolean is_email_verified;
    private String email;
    private Boolean profile_needs_agreement;
    private Boolean profile_nickname_needs_agreement;
    private Boolean profile_image_needs_agreement;
    private Profile profile;
}