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
    public List<Insurance> getAll(@RequestParam(required = false) boolean status) {
        if (true){
            return insuranceService.getAllByStatus(status); }
        return insuranceService.getAll();
    }

    @PostMapping("")
    public Insurance create(@RequestBody Insurance newInsurance) {
        return insuranceService.create(newInsurance);
    }

    @PutMapping("/change_status")
    public void changeStatus(@RequestParam(required = true) String company) {
        insuranceService.changeStatus(company);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        insuranceService.delete(id);
    }
}
