package se.kth.sda6.nysure.insurance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface InsuranceRepository extends JpaRepository<Insurance, Long>{

    List<Insurance> findAllByStatus(boolean status);

    @Modifying
    @Transactional
    @Query("UPDATE Insurance SET status = true WHERE company = :company")
    int changeStatus(@Param("company") String company);
}
