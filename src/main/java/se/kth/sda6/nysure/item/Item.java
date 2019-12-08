package se.kth.sda6.nysure.item;

import org.springframework.format.annotation.DateTimeFormat;
import se.kth.sda6.nysure.insurance.Insurance;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "item")
public class Item {

    @Id
    @Column(name = "itemId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long itemId;

    @Column(name = "itemType")
    private String itemType;

    @ManyToOne()
    private Insurance insurance;

    @Column(name="date")
    private LocalDate date;

    public Item() {
    }

    public Item(Long itemId) {
        this.itemId = itemId;
    }

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    public String getItemType() {
        return itemType;
    }

    public void setItemType(String itemType) {
        this.itemType = itemType;
    }

    public Insurance getInsurance() {
        return insurance;
    }

    public void setInsurance(Insurance insurance) {
        this.insurance = insurance;
    }

    public LocalDate getDate() { return date; }

    public void setDate(LocalDate date) { this.date = date; }
}