package se.kth.sda6.nysure.item;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.kth.sda6.nysure.user.User;

@Service
public class ItemService {

    @Autowired
    private ItemRepository repository;

    public List<Item> getAll() {
        return repository.findAll();
    }

    public List<Item> getAllByUser(String id) {
        System.out.println(id);
        //Create a new user from the id received and fetch the data from DB based on that id
        return repository.findAllByUser(new User(id));
    }

    public Optional<Item> getById(Long id) {
        return repository.findById(id);
    }

    public Item create(Item newItem) {
        return repository.save(newItem);
    }

    public Item update(Item updatedItem) {

        return repository.save(updatedItem);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
