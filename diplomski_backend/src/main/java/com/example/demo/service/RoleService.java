package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.entity.RoleEntity;
import com.example.demo.model.entity.UserEntity;
import com.example.demo.repository.RoleRepository;

@Service
public class RoleService {

	@Autowired
	private RoleRepository roleRepository;

	public List<RoleEntity> getAllRoles() {
		return this.roleRepository.findAll();
	}

	public RoleEntity getRoleById(int id) {
		return this.roleRepository.findById(id).get();
	}
	
	public void addRole(RoleEntity role) {

		this.roleRepository.save(role);

	}
	
	public void updateRole(RoleEntity role) {
		this.roleRepository.save(role);
	}
	
	/*public void deleteByUserId(int id) {
		this.roleRepository.deleteByUserId(null);
	}*/

}
