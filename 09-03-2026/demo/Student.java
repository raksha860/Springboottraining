package com.example.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class Student {
    @PostMapping("/marks")
   public String totalmarks(@RequestBody Demo s){
    int m1=s.getM1();
    int m2=s.getM2();
    int m3=s.getM3();
    int m4=s.getM4();
    int m5=s.getM5();

    
    double avg= (m1+m2+m3+m4+m5)/5.0;
    if(avg>75){
        return "Avg"+ avg + "Eligible";
     }
     else{
        return "Avg" + avg + "not eligible";
     }


   }

}

    
