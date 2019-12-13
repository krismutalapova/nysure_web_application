package se.kth.sda6.nysure.claim;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda6.nysure.user.User;

import java.util.List;

@Repository
public interface ClaimRepository extends JpaRepository<Claim, Long>{
    List<Claim> findAllByUser(User user);
}
