package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.entity.RoleEntity;
import com.example.demo.model.entity.UserEntity;
import com.example.demo.service.RoleService;

@RestController
@CrossOrigin(origins = "*")
public class RoleController {

	@Autowired
	private final RoleService roleService;

	public RoleController(RoleService roleService) {
		this.roleService = roleService;
	}

	@RequestMapping("/roles")
	public List<RoleEntity> getAllRoles() {
		return this.roleService.getAllRoles();
	}

	@RequestMapping("/roles/{id}")
	public RoleEntity getRoleById(@PathVariable int id) {
		return this.roleService.getRoleById(id);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/roles")
    public void updateRole(@RequestBody RoleEntity role) {
    	this.roleService.updateRole(role);
    }
	@RequestMapping(method = RequestMethod.POST, value = "/roles")
	public void addRole(@RequestBody RoleEntity role) {
		System.out.println(role.toString());
		this.roleService.addRole(role);
	}

}
