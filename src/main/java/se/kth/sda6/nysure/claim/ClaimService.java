package se.kth.sda6.nysure.claim;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda6.nysure.user.User;

@Service
public class ClaimService {

    @Autowired
    private ClaimRepository repository;

    public List<Claim> getAll() {
        return repository.findAll();
    }

    public Optional<Claim> getById(Long id) {
        return repository.findById(id);
    }

    public Claim create(Claim newClaim) {
        return repository.save(newClaim);
    }

    public Claim update(Claim updatedClaim) {

        return repository.save(updatedClaim);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public List<Claim> getAllByUser(String id) {
        //Create a new user from the id received and fetch the data from DB based on that id
        return repository.findAllByUser(new User(id));
    }
}
