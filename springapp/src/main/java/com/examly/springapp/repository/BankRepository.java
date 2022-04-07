package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Bank;

@Repository
public interface BankRepository extends JpaRepository<Bank, Long>{

}
