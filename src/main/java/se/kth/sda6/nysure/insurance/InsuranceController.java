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
    public Insurance create(@RequestBody Insurance newInsurance) {
        return insuranceService.create(newInsurance);
    }

    @PutMapping("")
    public Insurance update(@RequestBody Insurance updatedInsurance) {
        return insuranceService.update(updatedInsurance);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        insuranceService.delete(id);
    }
}
