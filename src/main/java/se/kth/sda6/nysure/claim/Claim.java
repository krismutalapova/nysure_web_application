package se.kth.sda6.nysure.claim;

import se.kth.sda6.nysure.insurance.Insurance;
import javax.persistence.*;

@Entity
@Table(name = "claim")
public class Claim {
    @Id
    @Column(name = "claimId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long claimId;

    @Column(name = "incidentDescription")
    private String inDescr;

    @ManyToOne()
    private Insurance insurance;

    public Claim() {
    }

    public Long getClaimId() {
        return claimId;
    }

    public void setClaimId(Long claimId) {
        this.claimId = claimId;
    }

    public String getInDescr() {
        return inDescr;
    }

    public void setInDescr(String inDescr) {
        this.inDescr = inDescr;
    }

    public Insurance getInsurance() {
        return insurance;
    }

    public void setInsurance(Insurance insurance) {
        this.insurance = insurance;
    }
}

