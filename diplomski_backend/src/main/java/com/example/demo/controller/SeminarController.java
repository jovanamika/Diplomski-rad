package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.entity.SeminarEntity;
import com.example.demo.service.SeminarService;

@RestController
public class SeminarController {

	@Autowired
	private final SeminarService seminarService;

	public SeminarController(SeminarService seminarService) {
		this.seminarService = seminarService;
	}

	@RequestMapping("/seminars")
	public List<SeminarEntity> getAllSeminars() {
		return this.seminarService.getAllSeminars();
	}

	@RequestMapping("/seminars/{id}")
	public SeminarEntity getSeminarById(@PathVariable int id) {
		return this.seminarService.getSeminarById(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/seminars")
	public void addSeminar(@RequestBody SeminarEntity seminar) {
		System.out.println(seminar.toString());
		this.seminarService.addSeminar(seminar);
	}

}
