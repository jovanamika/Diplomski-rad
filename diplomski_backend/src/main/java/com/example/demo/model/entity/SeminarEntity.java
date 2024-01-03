package com.example.demo.model.entity;

import java.sql.Date;
import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
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
	@Column(columnDefinition = "TEXT")
	private String description;

	@Basic
	@Column(name = "event_date")
	private Date eventDate;

	@Basic
	@Column(name = "event_time")
	private Time eventTime;

	@Basic
	@Column(name = "active")
	private Boolean active;
	
	@ManyToOne
	private UserEntity user;

	private SeminarEntity() {
	};

	public SeminarEntity(String title, String description, String eventDate,String eventTime, Boolean active) {
		super();
		 SimpleDateFormat dateSdf = new SimpleDateFormat("yyyy-MM-dd");
		    SimpleDateFormat timeSdf = new SimpleDateFormat("HH:mm:ss");

		    try {
		        java.util.Date date = dateSdf.parse(eventDate);
		        java.util.Date time = timeSdf.parse(eventTime);

		        this.title = title;
		        this.description = description;
		        this.eventDate = new Date(date.getTime());
		        this.eventTime = new Time(time.getTime());

		    } catch (ParseException e) {
		        // Handle the parsing exception here
		        e.printStackTrace();
		    }
	}

	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.REMOVE)
	@JoinTable(name = "users_seminar", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "seminar_id"))
	private List <UserEntity> users = new ArrayList<>();
	
	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.REMOVE)
	@JoinTable(name = "teachers_seminar", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "seminar_id"))
     private List<UserEntity> teachers = new ArrayList<>();

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

	public UserEntity getUser() {
		return user;
	}
	
	public void setUset(UserEntity user) {
		this.user = user;
	}

	public List<UserEntity> getUsers() {
		return users;
	}

	public void signIn(UserEntity user) {
		this.users.add(user);
	}

	public List<UserEntity> getTeachers() {
		return teachers;
	}

	public void addTeacher(UserEntity teacher) {
		this.teachers.add(teacher);
	}

	@Override
	public String toString() {
		return "SeminarEntity [id=" + id + ", title=" + title + ", description=" + description + ", eventDate="
				+ eventDate + ", eventTime=" + eventTime +"]";
	}

}
