package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.entity.PostEntity;
import com.example.demo.repository.PostRepository;

@Service
public class PostService {

	@Autowired
	private PostRepository postRepository;

	public List<PostEntity> getAllPosts() {
		return this.postRepository.findAll();
	}

	public PostEntity getPostById(int id) {
		return this.postRepository.findById(id).get();
	}

	public void addPost(PostEntity post) {

		this.postRepository.save(post);

	}
}
