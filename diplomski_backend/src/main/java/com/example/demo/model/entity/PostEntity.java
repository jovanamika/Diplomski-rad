package com.example.demo.model.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "post")
public class PostEntity {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Basic
	@Column(name = "title")
	private String title;
	
	@Basic
	@Lob
	@Column(columnDefinition = "TEXT")
	private String description;
	
	@Basic
	@Column(name="image_url")
	private String imageUrl;
	
	@Basic
	@Column(name="datum_objave")
	private java.sql.Timestamp datumObjave;
	
	@Basic
	@Column (name="active")
	private boolean active;
	
	
    @ManyToOne
    private UserEntity user;
    
	public PostEntity() {
	};

	public PostEntity(String title, String description, String imageURL, java.sql.Timestamp datumObjave, boolean active) {
		super();
		this.title = title;
		this.description = description;
		this.imageUrl = imageUrl;
		this.datumObjave = datumObjave;
		this.active = active;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public UserEntity getUser() {
		return user;
	}
	
	public void setUser(UserEntity user) {
		this.user = user;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public java.sql.Timestamp getDatumObjave() {
		return datumObjave;
	}

	public void setDatumObjave(java.sql.Timestamp datumObjave) {
		this.datumObjave = datumObjave;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "PostEntity [id=" + id + ", title=" + title + ", description=" + description + "]";
	}

}
