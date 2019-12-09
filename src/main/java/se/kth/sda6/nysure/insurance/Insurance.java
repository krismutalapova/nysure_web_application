package se.kth.sda6.nysure.insurance;

import se.kth.sda6.nysure.user.User;
import javax.persistence.*;

@Entity
@Table(name = "insurance")
public class Insurance {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    @Column(name = "type")
    private String type;

    @Column(name = "company")
    private String company;

    @Column(name = "cost")
    private Long cost;

    @Column(name = "status")
    private boolean status;

    @ManyToOne()
    private User user;

    public Insurance() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public Long getCost() {
        return cost;
    }

    public void setCost(Long cost) {
        this.cost = cost;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
