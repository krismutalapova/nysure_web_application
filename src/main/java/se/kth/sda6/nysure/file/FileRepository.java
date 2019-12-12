package se.kth.sda6.nysure.file;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import se.kth.sda6.nysure.insurance.Insurance;
import se.kth.sda6.nysure.item.Item;

import java.util.List;

@Repository
public interface FileRepository extends CrudRepository<File, Long>{

    @Transactional
    List<File> findAllByItem(Item item);

    @Transactional
    int deleteAllByItem(Item item);

    @Transactional
    List<File> findAllByInsurance(Insurance insurance);
}