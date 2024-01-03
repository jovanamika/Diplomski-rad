package com.example.demo.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.entity.RoleEntity;
import com.example.demo.model.entity.UserEntity;
import com.example.demo.service.RoleService;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private final UserService userService;
    
    @Autowired
    private final RoleService roleService;


    public UserController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @RequestMapping("/users")
    public List<UserEntity> getAll(){
        return  this.userService.getAllUsers();
    }
    
  /*  @RequestMapping("/users/teachers")
    public List<UserEntity> getAllTeachers(){
    	return this.userService.getAllTeachers();
    }*/
    
    @RequestMapping("/users/{id}")
    public UserEntity getUserById(@PathVariable int id) {
    	return this.userService.getUserById(id);
    }
    
    
    @RequestMapping("/users/isAvailable/{email}")
	public boolean isAvailable(@PathVariable String email) {
		return userService.isAvailable(email);
	}
    
    @RequestMapping(method = RequestMethod.POST, value = "/users/{role_id}")
	public UserEntity addUser(@RequestBody UserEntity user, @PathVariable int role_id) {
		 return this.userService.addUser(user, role_id);
	}
    
	/*@RequestMapping("/users/{id}/role")
	public Set<RoleEntity> getUserRoleByUserId(@PathVariable int id) {
		return this.userService.getRoleByUserId(id);
	}*/
	
	@RequestMapping("users/{email}/{password}")
	public UserEntity getLogInUser(@PathVariable String email, @PathVariable String password) {
		return this.userService.getLogInUser(email, password);
	}
	
    
    @RequestMapping(method = RequestMethod.DELETE, value="/users/{id}")
    public void deleteUserById(@PathVariable int id) 
    {
    	this.userService.deleteUserById(id);
    	//this.roleService.deleteByUserId(id);
    }
    
    @RequestMapping(method = RequestMethod.PUT, value = "/users")
    public void updateUser(@RequestBody UserEntity user) {
    	this.userService.updateUser(user);
    }
}
