package PMS_backend.PMS.Model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.ManyToAny;
import org.hibernate.type.TrueFalseConverter;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

@Entity
public class Produit implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String ProduitId;
	private int quentite;
	
	@OneToMany(mappedBy = "produit", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Production> production = new ArrayList<>();
	
	
	public Produit() {
		
	}


	public Produit(String produitId, int quentite, List<Production> production) {
		super();
		ProduitId = produitId;
		this.quentite = quentite;
		this.production = production;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getProduitId() {
		return ProduitId;
	}


	public void setProduitId(String produitId) {
		ProduitId = produitId;
	}


	public int getQuentite() {
		return quentite;
	}


	public void setQuentite(int quentite) {
		this.quentite = quentite;
	}


	public List<Production> getProduction() {
		return production;
	}


	public void setProduction(List<Production> production) {
		this.production = production;
	}
	
	
}
