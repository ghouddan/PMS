package PMS_backend.PMS.Controller;

import java.security.Provider.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import PMS_backend.PMS.Model.Users;
import PMS_backend.PMS.Services.UserService;


@RestController
@RequestMapping("/user")
public class UserContoller {

	private UserService service;
	
	@Autowired
	public UserContoller(UserService userservice) {
		this.service = userservice;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Users>> getAllUser(){
		List<Users> user = service.getAllUser();
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Users> addUser(@RequestBody Users user) {
		Users newuser = service.addUser(user);
		return new ResponseEntity<>(newuser, HttpStatus.CREATED);
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Users> getUserById(@PathVariable("id") Long id){
		Users user = service.getUserById(id);
		return new ResponseEntity<>(user, HttpStatus.OK);
		
	}
	
	
	
	
	
}
