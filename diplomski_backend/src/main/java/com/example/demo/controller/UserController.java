package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
}
