package se.kth.sda6.nysure.insurance;


import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InsuranceService {

    @Autowired
    private InsuranceRepository repository;

    public List<Insurance> getAll() {
        return repository.findAll();
    }

    public Optional<Insurance> getById(Long id) {
        return repository.findById(id);
    }

    public Insurance create(Insurance newInsurance) {
        return repository.save(newInsurance);
    }

    public Insurance update(Insurance updatedInsurance) {

        return repository.save(updatedInsurance);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
