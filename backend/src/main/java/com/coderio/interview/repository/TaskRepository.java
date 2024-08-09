package com.coderio.interview.repository;

import com.coderio.interview.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
