 /*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.finalproject;

/**
 *
 * @author Benjamin
 */
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Named;

@Named
@RequestScoped
public class Pass {
    private String name;
    private String pword1;
    private String pword2;
    private String pword3;

    public Pass() {
    }

    public String getUsername() {
        return name;
    }

    public void setUsername(String user_name) {
        this.name = user_name;
    }
    public String getPassword1() {
        return pword1;
    }

    public void setPassword1(String word) {
        this.pword1 = word;
    }    
    public String getPassword2() {
        return pword2;
    }

    public void setPassword2(String word) {
        this.pword2 = word;
    }    
    
    public String getPassword3() {
        return pword3;
    }

    public void setPassword3(String word) {
        this.pword3 = word;
    }    
    
}
