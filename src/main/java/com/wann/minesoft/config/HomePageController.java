package com.wann.minesoft.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomePageController {

	@RequestMapping("/")
	  public String landingPage(){
	    return "index"; // retorune la page index de Angular
	  }
}
