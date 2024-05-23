package PMS_backend.PMS.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import PMS_backend.PMS.Model.Machines;
import PMS_backend.PMS.Reposetry.MachineRepo;

public class machineService {

	private MachineRepo repo;
	
	@Autowired
	public machineService(MachineRepo reposetry){
		this.repo = reposetry;
	}
	
	public List<Machines> getMachineById(Long id) {
		return repo.getMachineById(id);
	}
	
}
