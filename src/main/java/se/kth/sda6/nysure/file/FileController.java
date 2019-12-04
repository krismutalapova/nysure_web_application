package se.kth.sda6.nysure.file;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/upload")
public class FileController {

    private static final Logger logger = LoggerFactory.getLogger(FileController.class);
    @Autowired
    FileService fileService;
    @PostMapping("")
    public @ResponseBody ResponseMetadata handleFileUpload(@RequestParam(value="file") MultipartFile file) throws IOException {
        return fileService.save(file);
    }
    @GetMapping("/{id}")
    public @ResponseBody File getFile(@PathVariable Long id) {
        return fileService.getFileById(id);
    }
    @GetMapping("")
    public @ResponseBody List<File> getFile() {
        return fileService.findAll();
    }
}
