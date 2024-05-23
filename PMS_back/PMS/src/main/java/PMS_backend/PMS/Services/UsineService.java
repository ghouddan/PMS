package PMS_backend.PMS.Services;

import java.lang.StackWalker.Option;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import PMS_backend.PMS.Model.Usines;
import PMS_backend.PMS.Reposetry.UsineRepo;

public class UsineService {

	private UsineRepo repo;
	
	@Autowired
	public UsineService(UsineRepo reposetry) {
		this.repo = reposetry;
	}
	
	
	public List<Usines> getAllUsine(){
		return repo.findAll();
	}
	
	public void deleteUsine(Long id) {
		repo.deleteUsine(id);
	}
	
	public List<Usines> getUsineById(Long id) {
		return repo.getUsineById(id);
	}
	
	
	
}
