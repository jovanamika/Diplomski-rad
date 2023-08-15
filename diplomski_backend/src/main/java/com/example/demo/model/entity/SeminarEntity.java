package com.example.demo.model.entity;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class SeminarEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String description;
	private Date eventDate;
	private Time eventTime;
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
