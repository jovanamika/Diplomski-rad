package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.entity.PostEntity;
import com.example.demo.model.entity.UserEntity;
import com.example.demo.service.PostService;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "*")
@RestController
public class PostController {

	@Autowired
	private final PostService postService;
	
	@Autowired
	private final UserService userService;

	public PostController(PostService postService, UserService userService) {
	        this.postService = postService;
	        this.userService =  userService;
	}

	@RequestMapping("/posts")
	public List<PostEntity> getAll() {
		return this.postService.getAllPosts();
	}

	@RequestMapping("/posts/{id}")
	public PostEntity getPostById(@PathVariable int id) {
		return this.postService.getPostById(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/users/{id}/posts")
	public void addPost(@RequestBody PostEntity post, @PathVariable int id) {
		System.out.println(post.toString());
		UserEntity user = this.userService.getUserById(id);
        post.setUser(user);
		this.postService.addPost(post);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/posts")
	public void addPost(@RequestBody PostEntity post) {;
		this.postService.addPost(post);
	}
	
    @RequestMapping(method = RequestMethod.DELETE, value="/posts/{id}")
    public void deletePostById(@PathVariable int id) {
    	this.postService.deletePostById(id);
    }
    
    @RequestMapping(method = RequestMethod.PUT, value = "/posts")
    public void updatePost(@RequestBody PostEntity post) {
    	this.postService.updatePost(post);
    }
    

}
