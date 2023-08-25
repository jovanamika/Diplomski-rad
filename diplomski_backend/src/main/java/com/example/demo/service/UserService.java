package com.example.demo.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.entity.RoleEntity;
import com.example.demo.model.entity.UserEntity;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleService roleService;

	public List<UserEntity> getAllUsers() {
		return this.userRepository.findAll();
	}

	public UserEntity getUserById(int id) {
		return this.userRepository.findById(id).get();
	}

	public Set<RoleEntity> getRoleByUserId(int id) {
		return this.userRepository.findRolesByUserEntityId(id);
	}

	public void addUser(UserEntity user) {

		RoleEntity role = this.roleService.getRoleById(1);
		user.setRoles(role);
		this.userRepository.save(user);
		user.setActive(true);
		user.setRoles(role);
		this.updateUser(user);
		role.addUser(user);
		this.roleService.updateRole(role);

	}

	public void deleteUserById(int id) {
		UserEntity user = this.getUserById(id);
		user.setActive(false);
		this.updateUser(user);
	}

	public void updateUser(UserEntity user) {
		this.userRepository.save(user);
	}

}
