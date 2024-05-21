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
public class ChefProduction extends Users implements Serializable{

	/*@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Iduser;*/
	
	@OneToMany(mappedBy = "chefProduction", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Usines> usines = new ArrayList<>();
	
	public ChefProduction() {}

	public ChefProduction(List<Usines> usines) {
		super();
		this.usines = usines;
	}

	/*public Long getIduser() {
		return Iduser;
	}

	public void setIduser(Long iduser) {
		Iduser = iduser;
	}*/

	public List<Usines> getUsines() {
		return usines;
	}

	public void setUsines(List<Usines> usines) {
		this.usines = usines;
	}
	
	
	
}
