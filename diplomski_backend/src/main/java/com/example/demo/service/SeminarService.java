package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.entity.SeminarEntity;
import com.example.demo.model.entity.UserEntity;
import com.example.demo.repository.SeminarRepository;

@Service
public class SeminarService {
	@Autowired
	private SeminarRepository seminarRepository;

    public List<SeminarEntity> getAllSeminars(){
        return this.seminarRepository.findAll();
    }
    
    public SeminarEntity getSeminarById(int id) {
        return this.seminarRepository.findById(id).get();
    }
    
    public void addSeminar(SeminarEntity seminar) {
    	
   	 this.seminarRepository.save(seminar);

   }
}
