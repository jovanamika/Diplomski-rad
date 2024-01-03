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
	
	/*public List<UserEntity> getAllTeachers(){
		return this.userRepository.findAllTeachers();
	}*/

	public UserEntity getUserById(int id) {
		return this.userRepository.findById(id).get();
	}

	/*public Set<RoleEntity> getRoleByUserId(int id) {
		return this.userRepository.findRolesByUserEntityId(id);
	}*/
	
	 public UserEntity getLogInUser(String email, String password) {
	    	return this.userRepository.findByEmailAndPassword(email, password);
	    }
	 
	 public boolean isAvailable(String email) {
			return this.userRepository.findByEmail(email).size()==0;
		}
		

	public UserEntity addUser(UserEntity user, int role_id) {

		RoleEntity role = this.roleService.getRoleById(role_id);
		user.setRole(role);
		this.userRepository.save(user);
		user.setActive(true);
		user.setRole(role);
		this.updateUser(user);
		return user;

	}

	public void deleteUserById(int id) {
		UserEntity user = this.getUserById(id);
		user.setRole(null);
		userRepository.delete(user);
	}

	public void updateUser(UserEntity user) {
		this.userRepository.save(user);
	}

}
