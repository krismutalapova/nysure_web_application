package se.kth.sda6.nysure.insurance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import se.kth.sda6.nysure.user.User;

import java.util.List;

@Repository
public interface InsuranceRepository extends JpaRepository<Insurance, Long>{

    List<Insurance> findAllByStatus(boolean status);

    List<Insurance> findAllByUserAndStatus(User user, boolean status);

    List<Insurance> findAllByCompanyAndStatus(String company, boolean status);

    @Modifying
    @Transactional
    @Query("UPDATE Insurance SET status = true WHERE user_id = :user_id AND company = :company AND status = false")
    int changeStatus(@Param("user_id") String user_id, @Param("company") String company);
}
