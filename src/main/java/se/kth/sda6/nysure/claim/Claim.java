package se.kth.sda6.nysure.claim;

import se.kth.sda6.nysure.item.Item;
import se.kth.sda6.nysure.user.User;

import javax.persistence.*;

@Entity
@Table(name = "claim")
public class Claim {
    @Id
    @Column(name = "claimId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long claimId;

    @Column(name = "type")
    private String type;

    @Column(name = "incidentDescription")
    private String incidentDescription;

    @Column(name = "incidentDate")
    private String incidentDate;

    @Column(name = "fieldA")
    private String fieldA;

    @Column(name = "fieldB")
    private String fieldB;

    @Column(name = "status")
    private String status;

    @ManyToOne()
    private Item item;

    @ManyToOne()
    private User user;

    public Claim() {
    }

    public Long getClaimId() {
        return claimId;
    }

    public void setClaimId(Long claimId) {
        this.claimId = claimId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getIncidentDescription() {
        return incidentDescription;
    }

    public void setIncidentDescription(String incidentDescription) {
        this.incidentDescription = incidentDescription;
    }

    public String getIncidentDate() {
        return incidentDate;
    }

    public void setIncidentDate(String incidentDate) {
        this.incidentDate = incidentDate;
    }

    public String getFieldA() {
        return fieldA;
    }

    public void setFieldA(String fieldA) {
        this.fieldA = fieldA;
    }

    public String getFieldB() {
        return fieldB;
    }

    public void setFieldB(String fieldB) {
        this.fieldB = fieldB;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

