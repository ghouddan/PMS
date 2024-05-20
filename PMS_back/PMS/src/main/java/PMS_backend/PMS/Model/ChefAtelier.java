package PMS_backend.PMS.Model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class ChefAtelier extends Users implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Iduser;
	@OneToMany(mappedBy = "chefAtelier", cascade = CascadeType.ALL, orphanRemoval = true)
	 private List<Machines> machines = new ArrayList<>();

	
	
	
	
	
	
	public ChefAtelier(List<Machines> machines) {
		super();
		this.machines = machines;
	}

	public ChefAtelier() {}
	
	public Long getIduser() {
		return Iduser;
	}
	public void setIduser(Long iduser) {
		Iduser = iduser;
	}

	public List<Machines> getMachines() {
		return machines;
	}

	public void setMachines(List<Machines> machines) {
		this.machines = machines;
	}
	
	
	
}
