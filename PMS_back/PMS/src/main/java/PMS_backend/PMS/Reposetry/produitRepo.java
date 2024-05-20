package PMS_backend.PMS.Reposetry;

import org.springframework.data.jpa.repository.JpaRepository;

import PMS_backend.PMS.Model.Produit;

public interface produitRepo extends JpaRepository<Produit, Long> {

}
