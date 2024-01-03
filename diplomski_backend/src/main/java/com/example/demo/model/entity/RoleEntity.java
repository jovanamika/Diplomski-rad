package com.example.demo.model.entity;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "roles")
public class RoleEntity {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Basic
	@Column(name = "name")
	private String name;
	

    public RoleEntity() { }
     
    public RoleEntity(String name) {
        this.name = name;
    }
     
    public RoleEntity(Integer id, String name) {
        this.id = id;
        this.name = name;
    }
 
    @Override
    public String toString() {
        return this.id+" "+this.name;
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	/*public Set<UserEntity> getUsers() {
		return users;
	}
	
	public void addUser(UserEntity user) {
		this.users.add(user);
	}

	public void setUsers(Set<UserEntity> users) {
		this.users = users;
	*/
	
	

}
