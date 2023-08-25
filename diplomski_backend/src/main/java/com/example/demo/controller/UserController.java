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
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private final UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/users")
    public List<UserEntity> getAll(){
        return  this.userService.getAllUsers();
    }
    
    @RequestMapping("/users/{id}")
    public UserEntity getUserById(@PathVariable int id) {
    	return this.userService.getUserById(id);
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/users")
	public void addUser(@RequestBody UserEntity user) {
    	 System.out.println(user.toString());
		 this.userService.addUser(user);
	}
    
	@RequestMapping("/users/{id}/role")
	public Set<RoleEntity> getUserRoleByUserId(@PathVariable int id) {
		return this.userService.getRoleByUserId(id);
	}
	
    
    @RequestMapping(method = RequestMethod.DELETE, value="/users/{id}")
    public void deleteUserById(@PathVariable int id) {
    	this.userService.deleteUserById(id);
    }
    
    @RequestMapping(method = RequestMethod.PUT, value = "/users")
    public void updateUser(@RequestBody UserEntity user) {
    	this.userService.updateUser(user);
    }
}
