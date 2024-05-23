package PMS_backend.PMS.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import PMS_backend.PMS.Model.Ateliers;
import PMS_backend.PMS.Services.atelierService;

@RestController
@RequestMapping("/Atelier")
public class atelierController {

	private atelierService service;
	@Autowired
	public atelierController(atelierService atelierservice) {
		this.service = atelierservice ;
	}
	
	
	@GetMapping("/atelier/{id}")
	public ResponseEntity<List<Ateliers>> getAtelierById(@PathVariable("id") Long id) {
		List<Ateliers> atelier = service.getAtelierById(id);
		if (!atelier.isEmpty()) {
	        return new ResponseEntity<>(atelier, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	
	
	
}
