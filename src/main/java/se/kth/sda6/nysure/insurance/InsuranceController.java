package se.kth.sda6.nysure.insurance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.kth.sda6.nysure.item.Item;
import se.kth.sda6.nysure.user.User;

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
    public List<Insurance> getAllByUser(@PathVariable String id,
                                        @RequestParam(required = true) boolean status) {
        return insuranceService.getAllByUserAndStatus(new User(id), status);
    }

    @PostMapping("")
    public Insurance create(@RequestBody Insurance newInsurance) {
        return insuranceService.create(newInsurance);
    }

    @PutMapping("/change_status/{id}")
    public List<Insurance> changeStatus(@PathVariable String id,
                                        @RequestParam(required = true) String company) {
      return insuranceService.changeStatus(id, company);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        insuranceService.delete(id);
    }
}
