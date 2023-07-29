package com.todolist.doit.repository;

import com.todolist.doit.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<User,Long> {
     User findByEmail(String email);
}
