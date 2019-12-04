package se.kth.sda6.nysure.file;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.List;
import java.util.Optional;


@Service
public class FileService {

    @Autowired
    private FileRepository repository;
    public ResponseMetadata save(MultipartFile file) throws IOException {
        File uploadedFile = new File();
        uploadedFile.setFileName(file.getOriginalFilename());
        uploadedFile.setFileData(file.getBytes());
        uploadedFile.setFileType(file.getContentType());
        repository.save(uploadedFile);
        ResponseMetadata metadata = new ResponseMetadata();
        metadata.setMessage("success");
        metadata.setStatus(200);
        metadata.setData(uploadedFile);
        return metadata;
    }
    public File getFileById(Long id) {
        return repository.findById(id).get();
    }
    public List<File> findAll() {
        return (List<File>) repository.findAll();
    }
}
