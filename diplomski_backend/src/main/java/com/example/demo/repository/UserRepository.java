package com.example.demo.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.entity.RoleEntity;
import com.example.demo.model.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
/*	@Query("SELECT u.roles FROM UserEntity u WHERE u.id = ?1")
	Set<RoleEntity> findRolesByUserEntityId(int userId);*/

	@Query("FROM UserEntity WHERE email = ?1 AND password = ?2")
	public UserEntity findByEmailAndPassword(String email, String password);

	@Query("FROM UserEntity WHERE email = ?1")
	public List<UserEntity> findByEmail(String email);

	
}