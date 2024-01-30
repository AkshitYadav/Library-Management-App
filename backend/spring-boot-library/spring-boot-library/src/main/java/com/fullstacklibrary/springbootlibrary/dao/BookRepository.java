package com.fullstacklibrary.springbootlibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fullstacklibrary.springbootlibrary.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
