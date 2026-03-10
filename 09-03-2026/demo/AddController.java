package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddController {
    @GetMapping("/add")
    public int addnumbers(@RequestParam int a,@RequestParam int b,@RequestParam int c){
        return a + b + c;
    }
   @GetMapping("/add/{a}:{b}")
   public int Addnumbers(@PathVariable int a,@PathVariable int b){
      return a+b;
   }
   @PostMapping("/add")
   public String addNumbers(@RequestBody Numbers num){
     return "Result:" +(num.getA() +num.getB());
   }
  
}
