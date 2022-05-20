// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all numbers from 0 up to the user number
 */
function calculateProduct() {
  // initialize the sum to 0
	let sum = 0;
	
	// get the user number
	let userNum1 = parseInt(document.getElementById('userNum1').value)	
  let userNum2 = parseInt(document.getElementById('userNum2').value)	
	// use a for loop to calculate the product of the numbers using addition
	for (let counter = 1; counter <= userNum2; counter++) {
		// add the counter each time to the current sum
		sum = sum + userNum1
	}
	
  	// return the sum or product of the numbers back to html
  	document.getElementById('display-results').innerHTML = "The product of your two positive integers is = " + sum
}