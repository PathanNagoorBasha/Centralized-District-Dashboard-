package com.dashboard.service;

import java.util.List;
import com.dashboard.entity.Department;

public interface DepartmentService {
    Department createDepartment(Department department);
    List<Department> getAllDepartments();
    Department getDepartmentById(Long id);
    void deleteDepartment(Long id);
}
