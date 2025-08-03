package com.dashboard.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "departments")
public class Department
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String head;
    private String contact;

    // Constructors
    public Department() {}

    public Department(String name, String head, String contact) {
        this.name = name;
        this.head = head;
        this.contact = contact;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getHead() {
		return head;
	}

	public void setHead(String head) {
		this.head = head;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}
    
}
