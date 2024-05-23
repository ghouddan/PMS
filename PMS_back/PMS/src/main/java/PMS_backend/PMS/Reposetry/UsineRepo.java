package PMS_backend.PMS.Reposetry;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import PMS_backend.PMS.Model.Usines;

public interface UsineRepo extends JpaRepository<Usines, Long>{

 void deleteUsine(Long id);
 List<Usines> getUsineById(Long id);
}
