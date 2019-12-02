package se.kth.sda6.nysure.item;

import se.kth.sda6.nysure.insurance.Insurance;

import javax.persistence.*;

@Entity
@Table(name = "item")
public class Item {

    @Id
    @Column(name = "itemId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long itemId;

    @Column(name = "type")
    private String type;

    @ManyToOne()
    private Insurance insurance;

    public Item() {
    }

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Insurance getInsurance() {
        return insurance;
    }

    public void setInsurance(Insurance insurance) {
        this.insurance = insurance;
    }
}