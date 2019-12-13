package se.kth.sda6.nysure.claim;

import se.kth.sda6.nysure.item.Item;

import javax.persistence.*;

@Entity
@Table(name = "claim")
public class Claim {
    @Id
    @Column(name = "claimId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long claimId;

    @Column(name = "incidentDescription")
    private String incidentDescription;

    @Column(name = "incidentDate")
    private String incidentDate;

    @Column(name = "fieldA")
    private String fieldA;

    @Column(name = "fieldB")
    private String fieldB;

    @ManyToOne()
    private Item item;

    public Claim() {
    }

    public Long getClaimId() {
        return claimId;
    }

    public void setClaimId(Long claimId) {
        this.claimId = claimId;
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

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }
}

