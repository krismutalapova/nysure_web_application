package se.kth.sda6.nysure.file;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface FileRepository extends CrudRepository<File, Long>{
}