package PMS_backend.PMS.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import PMS_backend.PMS.Model.Ateliers;
import PMS_backend.PMS.Reposetry.AtelierRepo;

public class atelierService {

	
	private AtelierRepo repo;
	@Autowired
	public atelierService (AtelierRepo reposetry){
		this.repo = reposetry;
	}
	
	public List<Ateliers> getAtelierById(Long id) {
		return repo.getAtelierById(id);
	}
	
	
	
}
