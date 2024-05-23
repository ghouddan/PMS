package PMS_backend.PMS.Services;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;

import PMS_backend.PMS.Model.Users;
import PMS_backend.PMS.Reposetry.UsersRepo;

public class UserService {

	private UsersRepo repo;
	
	@Autowired
	public UserService(UsersRepo reposetry) {
		this.repo = reposetry;
	}
	
	public List<Users> getAllUser() {
		return repo.findAll();
	}
	public Users getUserById(Long id) {
		return repo.getUserById(id);
	}
	
	public Users addUser(Users user) {
		return repo.save(user);
	}
	
	
	
	
}
