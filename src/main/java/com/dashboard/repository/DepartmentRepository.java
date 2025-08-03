package com.dashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dashboard.entity.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
