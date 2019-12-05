package se.kth.sda6.nysure.file;

import se.kth.sda6.nysure.item.Item;

import javax.persistence.*;

@Entity
@Table(name="file")
public class File {

    @Id
    @Column(name="fileID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="fileName")
    private String fileName;

    @Column (name="fileType")
    private String fileType;

    @Column(name="fileContent")
    @Lob
    private byte [] fileData;

    @ManyToOne
    private Item item;

    public File(){

    }

    public File(String fileName, String fileType, byte[] fileData, Item item) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.fileData = fileData;
        this.item = item;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public byte[] getFileData() {
        return fileData;
    }

    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }
}
