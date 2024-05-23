package PMS_backend.PMS.Reposetry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import PMS_backend.PMS.Model.Machines;

public interface MachineRepo extends JpaRepository<Machines, Long> {

	List<Machines> getMachineById(Long id);
}

