package PMS_backend.PMS.Reposetry;

import org.springframework.data.jpa.repository.JpaRepository;

import PMS_backend.PMS.Model.Production;

public interface ProductionRepo extends JpaRepository<Production, Long>{

}
