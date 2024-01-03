package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.entity.SeminarEntity;
import com.example.demo.model.entity.UserEntity;
import com.example.demo.service.SeminarService;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "*")
@RestController
public class SeminarController {

	@Autowired
	private final SeminarService seminarService;
	
	@Autowired
	private final UserService userService;

	public SeminarController(SeminarService seminarService, UserService userService) {
		this.seminarService = seminarService;
		this.userService = userService;
	}

	@RequestMapping("/seminars")
	public List<SeminarEntity> getAllSeminars() {
		return this.seminarService.getAllSeminars();
	}

	@RequestMapping("/seminars/{id}")
	public SeminarEntity getSeminarById(@PathVariable int id) {
		return this.seminarService.getSeminarById(id);
	}

	@RequestMapping("/seminars/find/{title}")
	public List<SeminarEntity> getAllByTitle(@PathVariable String title) {
		return  seminarService.getAllByTitle(title);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/seminars/{sid}/signIn/{uid}")
	public void singIn(@PathVariable int sid, @PathVariable int uid) {
		SeminarEntity seminar = this.seminarService.getSeminarById(sid);
		UserEntity user = this.userService.getUserById(uid);
		seminar.signIn(user);
		this.seminarService.updateSeminar(seminar);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/seminars/{sid}/teachers/{uid}")
	public void addTeacherToSeminar (@PathVariable int sid, @PathVariable int uid) {
		SeminarEntity seminar = this.seminarService.getSeminarById(sid);
		UserEntity teacher = this.userService.getUserById(uid);
		seminar.addTeacher(teacher);
		this.seminarService.updateSeminar(seminar);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/users/{id}/seminars/{sid}")
	public void addUser(@PathVariable int id, @PathVariable int sid) {
		SeminarEntity seminar = this.seminarService.getSeminarById(sid);
		UserEntity user = this.userService.getUserById(id);
		seminar.setUset(user);
		this.seminarService.updateSeminar(seminar);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/seminars")
	public void addSeminar(@RequestBody SeminarEntity seminar) {
		System.out.println(seminar.toString());
		this.seminarService.addSeminar(seminar);
	}
	
    @RequestMapping(method = RequestMethod.DELETE, value="/seminars/{id}")
    public void deleteSeminarById(@PathVariable int id) {
    	this.seminarService.deleteSeminarById(id);
    }
    
    

}
