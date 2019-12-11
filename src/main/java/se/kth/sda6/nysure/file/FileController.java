package se.kth.sda6.nysure.file;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;

import se.kth.sda6.nysure.insurance.Insurance;
import se.kth.sda6.nysure.item.Item;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/upload")
public class FileController {

    private static final Logger logger = LoggerFactory.getLogger(FileController.class);

    @Autowired
    FileService fileService;

    @PostMapping("/{id}")
    public @ResponseBody ResponseMetadata handleFileUpload(@PathVariable Long id,
                                                           @RequestParam(value="file") MultipartFile file) throws IOException {
        return fileService.save(new Item(id), file);
    }

    @PostMapping("/file_insurance/{id}")
    public @ResponseBody ResponseMetadata handleInsuranceFileUpload(@PathVariable String id,
                                                           @RequestParam(value="file") MultipartFile file) throws IOException {
        return fileService.saveInsurance(new Insurance(id), file);
    }

    @GetMapping("/{id}")
    public @ResponseBody List<File> getItemFiles(@PathVariable Long id) {
        return fileService.findAllByItem(new Item(id));
    }

    @GetMapping("/file_insurance/{id}")
    public @ResponseBody List<File> getInsuranceFiles(@PathVariable String id) {
        return fileService.findAllByInsurance(new Insurance(id));
    }

    @GetMapping("")
    public @ResponseBody List<File> getFile() {
        return fileService.findAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        fileService.delete(id);
    }
}
