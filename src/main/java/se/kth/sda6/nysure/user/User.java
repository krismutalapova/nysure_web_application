package se.kth.sda6.nysure.user;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Entity
@Table(name="account")
public class User {
    @Id
    @Pattern(regexp = "[0-9]{8}-[0-9]{4}", message = "Personal ID must be in format YYYYMMDD-XXXX.")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "id", unique = true)
    private String id;

    @Email(message = "Invalid email address! Please provide a valid email address")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "email", unique = true)
    private String email;


    @Length(min = 5, max=100, message = "Password length most be between 5-100 characters")
    @Column(name = "password")
    private String password;

    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "name")
    private String name;

    @Length(min = 3, max=50, message = "Address must be between 3-50 characters")
    @Column(name = "address")
    private String address;

    @Length(min = 7, max=15, message = "Phone must be between 7-15 characters")
    @Column(name = "phone")
    private String phone;

    // Hibernate needs a default constructor to function
    public User() {}

    public String getId() {
        return id;
    }

    public void setId(@Pattern(regexp = "[0-9]{8}-[0-9]{4}", message = "Personal ID must be in format YYYYMMDD-XXXX.") @NotEmpty(message = "Please provide an email address") String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(@Email(message = "Invalid email address! Please provide a valid email address") @NotEmpty(message = "Please provide an email address") String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(@Length(min = 5, max = 100, message = "Password length most be between 5-100 characters") String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(@Length(min = 3, max = 100, message = "Name must be between 3-100 characters") String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress (@Length(min = 3, max=50, message = "Address must be between 3-50 characters") String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(@Length(min = 7, max=15, message = "Phone must be between 7-15 characters") String phone) {
        this.phone = phone;
    }
}
