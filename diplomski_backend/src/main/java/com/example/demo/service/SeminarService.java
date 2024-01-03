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
    
    public List<SeminarEntity> getAllByTitle(String title) {
		return this.seminarRepository.getAllByTitle(title);
	}
    
    public void addSeminar(SeminarEntity seminar) {
    	
   	 this.seminarRepository.save(seminar);

   }
    
    public void updateSeminar(SeminarEntity seminar) {
 
      	 this.seminarRepository.save(seminar);

      }
    
	public void deleteSeminarById(int id) {
		SeminarEntity seminar = this.getSeminarById(id);
		this.seminarRepository.delete(seminar);
	}
}
