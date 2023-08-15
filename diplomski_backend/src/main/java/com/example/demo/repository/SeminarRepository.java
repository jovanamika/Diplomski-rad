package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.entity.SeminarEntity;

public interface SeminarRepository extends JpaRepository<SeminarEntity, Integer>{

}
