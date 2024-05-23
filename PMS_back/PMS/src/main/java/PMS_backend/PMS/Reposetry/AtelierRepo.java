package PMS_backend.PMS.Reposetry;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import PMS_backend.PMS.Model.Ateliers;

public interface AtelierRepo extends JpaRepository<Ateliers, Long>{

	List<Ateliers> getAtelierById(Long id);
}
