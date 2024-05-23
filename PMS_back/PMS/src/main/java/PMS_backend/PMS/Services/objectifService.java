package PMS_backend.PMS.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import PMS_backend.PMS.Model.Objectif;
import PMS_backend.PMS.Reposetry.ObjectiifRepo;

@Service
public class objectifService {

	private ObjectiifRepo repo;
	@Autowired
	public objectifService(ObjectiifRepo repo) {
		this.repo = repo;
	}
	
	public List<Objectif> getObjectif() {
		return repo.findAll();
	}
	
	public Objectif updateObjectif(Objectif objectif) {
		return repo.save(objectif);
	}
	
	public void deleteObjectif(Long id) {
		repo.deleteById(id);
	}
}
