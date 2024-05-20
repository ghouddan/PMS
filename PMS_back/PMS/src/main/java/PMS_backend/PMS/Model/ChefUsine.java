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
public class ChefUsine extends Users implements Serializable{

	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long Iduser;
	
	@OneToMany(mappedBy = "chefUsine", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ateliers> ateliers = new ArrayList<>();
	
	
	
	public ChefUsine() {
		
	}
	
	public ChefUsine(List<Ateliers> atelier) {
		super();
		this.ateliers = atelier;
	}
	public Long getIduser() {
		return Iduser;
	}
	public void setIduser(Long iduser) {
		Iduser = iduser;
	}
	public List<Ateliers> getAtelier() {
		return ateliers;
	}
	public void setAtelier(List<Ateliers> atelier) {
		this.ateliers = atelier;
	}
	
	
}
