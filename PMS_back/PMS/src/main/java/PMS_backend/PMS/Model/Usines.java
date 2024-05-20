package PMS_backend.PMS.Model;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Usines implements Serializable{
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
	 	private Long id;
	    private String nomUsine;
	    private String adresse;
	    private ChefUsine chef;
	    @OneToMany(mappedBy = "usine" )
	    private List<Ateliers> atelier; 
	    
	    @ManyToOne
	    @JoinColumn(name = "idChefProduction" )
	    private ChefProduction chefProduction; 

	    public Usines() {}

		public Usines( String nomUsine, String adresse, ChefUsine chef, List<Ateliers> atelier) {
			super();
			this.nomUsine = nomUsine;
			this.adresse = adresse;
			this.chef = chef;
			this.atelier = atelier;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getNomUsine() {
			return nomUsine;
		}

		public void setNomUsine(String nomUsine) {
			this.nomUsine = nomUsine;
		}

		public String getAdresse() {
			return adresse;
		}

		public void setAdresse(String adresse) {
			this.adresse = adresse;
		}

		public ChefUsine getChef() {
			return chef;
		}

		public void setChef(ChefUsine chef) {
			this.chef = chef;
		}

		public List<Ateliers> getAtelier() {
			return atelier;
		}

		public void setAtelier(List<Ateliers> atelier) {
			this.atelier = atelier;
		}
		
		
	    
	    
	    
}
