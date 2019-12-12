package se.kth.sda6.nysure.insurance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda6.nysure.item.Item;

import java.util.List;

@RestController
@RequestMapping("/insurances")
public class InsuranceController {

    @Autowired
    private InsuranceService insuranceService;

    @GetMapping("")
    public List<Insurance> getAll(@RequestParam(required = true) boolean status) {
            return insuranceService.getAllByStatus(status);
    }

    @GetMapping("/user/{id}")
    public List<Insurance> getAllByUser(@PathVariable String id) {
        return insuranceService.getAllByUser(id);
    }

    @PostMapping("")
    public Insurance create(@RequestBody Insurance newInsurance) {
        return insuranceService.create(newInsurance);
    }

    @PutMapping("/change_status")
    public List<Insurance> changeStatus(@RequestParam(required = true) String company) {
      return insuranceService.changeStatus(company);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        insuranceService.delete(id);
    }
}
