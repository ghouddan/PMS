package PMS_backend.PMS.Model;

import java.io.Serializable;
import java.util.List;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Ateliers implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAtelier;
	private String nomAtelier;
	private String chefAtelier;
	private int nombrePersonel;
	
	@OneToMany(mappedBy = "Atelier")
	private List<Machines> machines;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "idUsine")
	private Usines usine;
	
	
	@ManyToOne
	@JoinColumn(name = "idChefUsine", nullable = false)
	@JoinColumn(name = "id", nullable = false)
	private ChefUsine chefUsine;
	
	
	public Ateliers(String nomAtelier, String chefAtelier, int nombrePersonel, List<Machines> machines, Usines usine) {
		super();
		this.nomAtelier = nomAtelier;
		this.chefAtelier = chefAtelier;
		this.nombrePersonel = nombrePersonel;
		this.machines = machines;
		this.usine = usine;
	}
	
	public Ateliers() {}

	public Long getId() {
		return idAtelier;
	}

	public void setId(Long id) {
		this.idAtelier = id;
	}

	public String getNomAtelier() {
		return nomAtelier;
	}

	public void setNomAtelier(String nomAtelier) {
		this.nomAtelier = nomAtelier;
	}

	public String getChefAtelier() {
		return chefAtelier;
	}

	public void setChefAtelier(String chefAtelier) {
		this.chefAtelier = chefAtelier;
	}

	public int getNombrePersonel() {
		return nombrePersonel;
	}

	public void setNombrePersonel(int nombrePersonel) {
		this.nombrePersonel = nombrePersonel;
	}

	public List<Machines> getMachines() {
		return machines;
	}

	public void setMachines(List<Machines> machines) {
		this.machines = machines;
	}

	public Usines getUsine() {
		return usine;
	}

	public void setUsine(Usines usine) {
		this.usine = usine;
	}

	
	
	
}
