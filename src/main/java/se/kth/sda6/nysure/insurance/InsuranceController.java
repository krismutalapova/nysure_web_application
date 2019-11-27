package se.kth.sda6.nysure.insurance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@RestController
@RequestMapping("/insurances")
public class InsuranceController {

    @Autowired
    private InsuranceService insuranceService;

    @GetMapping("")
    public List<Insurance> getAll() {
        return insuranceService.getAll();
    }

    @GetMapping("/{id}")
    public Insurance getById(@PathVariable Long id) {
        return insuranceService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }


    @PostMapping("")
    public Insurance create(@RequestBody Insurance newPost) {
        return insuranceService.create(newPost);
    }

    @PutMapping("")
    public Insurance update(@RequestBody Insurance updatedPost) {
        return insuranceService.update(updatedPost);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        insuranceService.delete(id);
    }
}
