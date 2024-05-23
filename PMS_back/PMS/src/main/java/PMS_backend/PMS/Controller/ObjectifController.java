package PMS_backend.PMS.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import PMS_backend.PMS.Model.Objectif;
import PMS_backend.PMS.Services.objectifService;

@RestController
@RequestMapping("objectif")
public class ObjectifController {

	private objectifService service;
	@Autowired
	 public  ObjectifController(objectifService service) {
		this.service = service;
	}
	
	@GetMapping("/all")
    public ResponseEntity<List<Objectif>> getAllObjectifs() {
        List<Objectif> objectifs = service.getObjectif();
        return new ResponseEntity<>(objectifs, HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Objectif> updateObjectif(@RequestBody Objectif objectif) {
        Objectif updatedObjectif = service.updateObjectif(objectif);
        return new ResponseEntity<>(updatedObjectif, HttpStatus.OK);
    }
	
	 @DeleteMapping("/delete/{id}")
	    public ResponseEntity<Void> deleteObjectif(@PathVariable Long id) {
	        service.deleteObjectif(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
}
