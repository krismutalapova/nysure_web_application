package se.kth.sda6.nysure.claim;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@RestController
@RequestMapping("/claims")
public class ClaimController {
    @Autowired
    private ClaimService claimService;

    @GetMapping("")
    public List<Claim> getAll() {
        return claimService.getAll();
    }

    @GetMapping("/{id}")
    public Claim getById(@PathVariable Long id) {
        return claimService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/user/{id}")
    public List<Claim> getAllByUser(@PathVariable String id) {
        return claimService.getAllByUser(id);
    }

    @PostMapping("")
    public Claim create(@RequestBody Claim newClaim) {
        return claimService.create(newClaim);
    }

    @PutMapping("")
    public Claim update(@RequestBody Claim updatedClaim) {
        return claimService.update(updatedClaim);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        claimService.delete(id);
    }
}
