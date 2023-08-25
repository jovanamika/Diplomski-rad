package com.example.demo.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.entity.RoleEntity;
import com.example.demo.model.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity,Integer>{
	 @Query("SELECT u.roles FROM UserEntity u WHERE u.id = ?1")
	    Set<RoleEntity> findRolesByUserEntityId(int userId);
}
