package com.example.diplomski_backend.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Date;
import java.sql.Time;

@Entity
public class Seminar {
    @Id
    private int id;
    private String title;
    private String description;
    private Date date;
    private Time time;

    public Seminar(){}
    public Seminar(String title, String description, Date date, Time time) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.time = time;
    }

    public int getId() {
        return id;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }
}
