package PMS_backend.PMS.Reposetry;

import org.springframework.data.jpa.repository.JpaRepository;

import PMS_backend.PMS.Model.Users;

public interface UsersRepo extends JpaRepository<Users, Long>  {

}
