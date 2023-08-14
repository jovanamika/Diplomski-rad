package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.entity.PostEntity;

public interface PostRepository extends JpaRepository<PostEntity,Integer>{

}
