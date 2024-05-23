package PMS_backend.PMS.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Objectif {

	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;
	private String Produit;
	private String titre;
	private Long quantite;
	private String duree;
	@ManyToOne
	@JoinColumn(name = "usine_id", nullable = false)
	private Usines usine;
	
	public Objectif() {}
	
	
	public Objectif(String produit, String titre, Long quantite, String duree, Usines usine) {
		super();
		Produit = produit;
		this.titre = titre;
		this.quantite = quantite;
		this.duree = duree;
		this.usine = usine;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getProduit() {
		return Produit;
	}
	public void setProduit(String produit) {
		Produit = produit;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public Long getQuantite() {
		return quantite;
	}
	public void setQuantite(Long quantite) {
		this.quantite = quantite;
	}
	public String getDuree() {
		return duree;
	}
	public void setDuree(String duree) {
		this.duree = duree;
	}


	public Usines getUsine() {
		return usine;
	}


	public void setUsine(Usines usine) {
		this.usine = usine;
	}
	
	
	
	
	
}
