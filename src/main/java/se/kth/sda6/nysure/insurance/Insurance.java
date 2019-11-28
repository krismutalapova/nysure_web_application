package se.kth.sda6.nysure.insurance;

import se.kth.sda6.nysure.user.User;
import javax.persistence.*;

@Entity
@Table(name = "insurance")
public class Insurance {

    @Id
    @Column(name = "policyId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long policyId;

    @Column(name = "insuranceType")
    private String insuranceType;

    @Column(name = "company")
    private String company;


    @ManyToOne()
    private User user;


    /** @TODO Add the list of insurances to a User Class and add a One to Many relationship
    * @OneToMany(mappedBy = "insurance", cascade = CascadeType.ALL)
    * private List<Insurance> insurances = new ArrayList<>();
    */

    public Insurance() {
    }

    public Long getPolicyId() {
        return policyId;
    }

    public void setPolicyId(Long policyId) {
        this.policyId = policyId;
    }

    public String getInsuranceType() {
        return insuranceType;
    }

    public void setInsuranceType(String insuranceType) {
        this.insuranceType = insuranceType;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
