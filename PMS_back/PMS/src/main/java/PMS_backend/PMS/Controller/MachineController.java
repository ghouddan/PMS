package PMS_backend.PMS.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import PMS_backend.PMS.Model.Machines;
import PMS_backend.PMS.Services.machineService;

@RestController
@RequestMapping("/machine")
public class MachineController {

	private machineService service;
	@Autowired
	public MachineController(machineService service) {
		this.service = service;
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<List<Machines>> getMachineById(@PathVariable("id") Long id) {
	    List<Machines> machines = service.getMachineById(id);
	    if (!machines.isEmpty()) {
	        return new ResponseEntity<>(machines, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	
}
