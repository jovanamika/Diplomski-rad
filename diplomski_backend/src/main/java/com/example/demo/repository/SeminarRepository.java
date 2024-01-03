package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.entity.SeminarEntity;

public interface SeminarRepository extends JpaRepository<SeminarEntity, Integer>{
	
	@Query("SELECT s FROM SeminarEntity s WHERE LOWER(s.title) LIKE CONCAT('%',LOWER(:title),'%')")
	public List<SeminarEntity> getAllByTitle(@Param("title") String title);

}
