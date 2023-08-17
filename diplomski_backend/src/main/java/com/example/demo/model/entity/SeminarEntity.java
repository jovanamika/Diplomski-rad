package com.example.demo.model.entity;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "seminar")
public class SeminarEntity {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Basic
	@Column(name = "title")
	private String title;
	
	@Basic
	@Column(name = "description")
	private String description;
	
	@Basic
	@Column(name = "event_date")
	private Date eventDate;
	
	@Basic
	@Column(name = "event_time")
	private Time eventTime;
	
	@Basic
	@Column(name = "active", insertable = false)
	private boolean active;

	private SeminarEntity() {
	};

	public SeminarEntity(String title, String description, Date eventDate, Time eventTime) {
		super();
		this.title = title;
		this.description = description;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.active = true;
	}
	
	@ManyToMany(fetch = FetchType.EAGER)

	@JoinTable(name = "users_seminar", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "seminar_id"))

	private List<UserEntity> users = new ArrayList<>();

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

	public Date getEventDate() {
		return eventDate;
	}

	public void setEventDate(Date eventDate) {
		this.eventDate = eventDate;
	}

	public Time getEventTime() {
		return eventTime;
	}

	public void setEventTime(Time eventTime) {
		this.eventTime = eventTime;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "SeminarEntity [id=" + id + ", title=" + title + ", description=" + description + ", eventDate="
				+ eventDate + ", eventTime=" + eventTime + ", active=" + active + "]";
	}

}
