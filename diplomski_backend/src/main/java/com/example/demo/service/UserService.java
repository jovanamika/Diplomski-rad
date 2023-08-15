package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.entity.UserEntity;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

    public List<UserEntity> getAllUsers(){
        return this.userRepository.findAll();
    }
    
    public UserEntity getUserById(int id) {
        return this.userRepository.findById(id).get();
    }
    
    public void addUser(UserEntity user) {
    	
   	 this.userRepository.save(user);

   }
}
