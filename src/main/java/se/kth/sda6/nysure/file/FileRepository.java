package se.kth.sda6.nysure.file;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda6.nysure.item.Item;

import java.util.List;

@Repository
public interface FileRepository extends CrudRepository<File, Long>{
    List<File> findAllByItem(Item item);
}