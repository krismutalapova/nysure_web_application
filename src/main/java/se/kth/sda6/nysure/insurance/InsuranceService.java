package se.kth.sda6.nysure.insurance;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda6.nysure.user.User;

@Service
public class InsuranceService {

    @Autowired
    private InsuranceRepository repository;

    public List<Insurance> getAll() {
        return repository.findAll();
    }

    public List<Insurance> getAllByUserAndStatus(User user, boolean status) {
        //Create a new user from the id received and fetch the data from DB based on that id
        return repository.findAllByUserAndStatus(user, status);
    }

    public List<Insurance> getAllByStatus(boolean status) {
        return repository.findAllByStatus(status);
    }

    public Insurance create(Insurance newInsurance) {
        return repository.save(newInsurance);
    }

    public Insurance update(Insurance updatedInsurance) { return repository.save(updatedInsurance); }

    public List<Insurance> changeStatus(String userId, String company) {
        if (repository.changeStatus(userId, company) == 0){
            return null;
        }
        System.out.println("updated something in user " + userId);
        return repository.findAllByCompanyAndStatus(company, true);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
