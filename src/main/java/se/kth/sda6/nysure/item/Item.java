package se.kth.sda6.nysure.item;

import se.kth.sda6.nysure.insurance.Insurance;
import se.kth.sda6.nysure.user.User;
import javax.persistence.*;

@Entity
@Table(name = "item")
public class Item {

    @Id
    @Column(name = "itemId")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long itemId;

    @Column(name = "itemBrand")
    private String itemBrand;

    @Column(name = "itemModel")
    private String itemModel;

    @Column(name = "itemDate")
    private String itemDate;

    @Column(name = "itemPrice")
    private Double itemPrice;

    @Column(name = "itemType")
    private String itemType;

    @ManyToOne()
    private Insurance insurance;

    @ManyToOne()
    private User user;

    public Item() {
    }

    public Item(Long itemId) {
        this.itemId = itemId;
    }

    //getters and setter of itemId
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

    public String getItemBrand() {
        return itemBrand;
    }

    public void setItemBrand(String itemBrand) {
        this.itemBrand = itemBrand;
    }

    public String getItemModel() { return itemModel; }

    public void setItemModel(String itemModel) {
        this.itemModel = itemModel;
    }

    public Double getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(Double itemPrice) {
        this.itemPrice = itemPrice;
    }

    public String getItemDate() {
        return itemDate;
    }

    public void setItemDate(String itemDate) {
        this.itemDate = itemDate;
    }

    public Insurance getInsurance() {
        return insurance;
    }

    public void setInsurance(Insurance insurance) {
        this.insurance = insurance;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}