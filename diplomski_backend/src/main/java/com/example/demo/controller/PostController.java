package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.entity.PostEntity;
import com.example.demo.model.entity.UserEntity;
import com.example.demo.service.PostService;

@RestController
public class PostController {

	@Autowired
	private final PostService postService;;

	public PostController(PostService postService) {
	        this.postService = postService;
	    }

	@RequestMapping("/posts")
	public List<PostEntity> getAll() {
		return this.postService.getAllPosts();
	}

	@RequestMapping("/posts/{id}")
	public PostEntity getPostById(@PathVariable int id) {
		return this.postService.getPostById(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/posts")
	public void addPost(@RequestBody PostEntity post) {
		System.out.println(post.toString());
		this.postService.addPost(post);
	}

}
