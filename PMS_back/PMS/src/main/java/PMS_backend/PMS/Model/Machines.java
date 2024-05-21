package PMS_backend.PMS.Model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Machines implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomMachine;
    private String typeMachine;
    private String fonction;
    private boolean etat;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idAtelier")
    private Ateliers Atelier;
    
    @OneToMany(mappedBy = "machine", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Production> production = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "idChefAtelier")
	//@JoinColumn(name = "id", nullable = false)

    private ChefAtelier chefAtelier;
    
    public Machines() {}
    
    public Machines(String nomMachine, String typeMachine, String fonction, boolean etat, Ateliers atelier,
			List<Production> production, ChefAtelier chefAtelier) {
		super();
		this.nomMachine = nomMachine;
		this.typeMachine = typeMachine;
		this.fonction = fonction;
		this.etat = etat;
		Atelier = atelier;
		this.production = production;
		this.chefAtelier = chefAtelier;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomMachine() {
		return nomMachine;
	}

	public void setNomMachine(String nomMachine) {
		this.nomMachine = nomMachine;
	}

	public String getTypeMachine() {
		return typeMachine;
	}

	public void setTypeMachine(String typeMachine) {
		this.typeMachine = typeMachine;
	}

	public String getFonction() {
		return fonction;
	}

	public void setFonction(String fonction) {
		this.fonction = fonction;
	}

	public boolean isEtat() {
		return etat;
	}

	public void setEtat(boolean etat) {
		this.etat = etat;
	}

	public Ateliers getAtelier() {
		return Atelier;
	}

	public void setAtelier(Ateliers atelier) {
		Atelier = atelier;
	}

	public List<Production> getProduction() {
		return production;
	}

	public void setProduction(List<Production> production) {
		this.production = production;
	}

	public ChefAtelier getChefAtelier() {
		return chefAtelier;
	}

	public void setChefAtelier(ChefAtelier chefAtelier) {
		this.chefAtelier = chefAtelier;
	}
	
	
	

    

}
