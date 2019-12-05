package se.kth.sda6.nysure.file;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda6.nysure.item.Item;

import java.io.IOException;
import java.util.List;


@Service
public class FileService {

    @Autowired
    private FileRepository repository;

    public ResponseMetadata save(Item item, MultipartFile file) throws IOException {

        //Create a new file with data received from front end
        File uploadedFile = new File(file.getOriginalFilename(), file.getContentType(), file.getBytes(), item);

        //save file in database
        repository.save(uploadedFile);

        ResponseMetadata metadata = new ResponseMetadata();

        //prepare response
        metadata.setMessage("success");
        metadata.setStatus(200);
        metadata.setData(uploadedFile);

        return metadata;
    }

    public List<File> findAllByItem(Item item) {
        return repository.findAllByItem(item);
    }

    public List<File> findAll() {
        return (List<File>) repository.findAll();
    }
}
