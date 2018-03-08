package com.gz.springbootdemo;

import org.apache.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;




/**
 * @author gaozhen
 * @date 2017年10月29日
 * @version 1.0
 */
@SpringBootApplication
@ServletComponentScan
@EnableScheduling
public class Application implements CommandLineRunner {

	private static Logger log = Logger.getLogger(Application.class);
	
	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(Application.class);
		app.run(args);
		log.info("run success...");
	}

	@Override
	public void run(String... arg0) throws Exception {
	}
		
	

}
