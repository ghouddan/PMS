package PMS_backend.PMS.Model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Production implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@ManyToOne
	@JoinColumn(name = "IdMachine")
	private Machines machine;
	
	@ManyToOne
	@JoinColumn(name = "IdProduit")
	private Produit produit;
	
	public Production() {
		
	}

	public Production(Machines machine, Produit produit) {
		super();
		this.machine = machine;
		this.produit = produit;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Machines getMachine() {
		return machine;
	}

	public void setMachine(Machines machine) {
		this.machine = machine;
	}

	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}
	
	
}
