package com.codeCristi.employee.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity   // We tell the SpringBoot that is the GPA entity
@Table(name = "employee")
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)  //Cand creem employee-ul il va incrementa automat la id 1
    private Long id;

    private String name;

    private String email;

    private String phone;

    private String department;
}
