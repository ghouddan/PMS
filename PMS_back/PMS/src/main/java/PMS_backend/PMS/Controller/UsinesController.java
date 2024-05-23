package PMS_backend.PMS.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import PMS_backend.PMS.Model.Usines;
import PMS_backend.PMS.Services.UsineService;

@RestController
@RequestMapping("/usine")
public class UsinesController {

	private UsineService service;
	
	@Autowired
	public UsinesController(UsineService usinesercie) {
		this.service = usinesercie;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Usines>> getAllUsines(){
		 List<Usines> usines = service.getAllUsine();
		return new ResponseEntity<>(usines, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteUsine(@PathVariable("id") Long id){
		service.deleteUsine(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<List<Usines>> getUsineById(Long id){
		List<Usines> usines = service.getUsineById(id);
		if (!usines.isEmpty()) {
	        return new ResponseEntity<>(usines, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	
}
