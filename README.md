# Metric-Imperial converter, first InfoSec and Quality assurance FreeCodeCamp Challenge 

## User Stories

* [x] I will help prevent the client from trying to guess(sniff) the MIME type. 
* [x] I will prevent cross-site scripting (XSS) attacks.
* I can <b>GET</b> <code>/api/convert</code> with a single parameter containing an accepted number and unit and have it converted.>
Hint: Split the input by looking for the index of the first character.
* I can convert 'gal' to 'L' and vice versa. <b>(1 gal to 3.78541 L)</b>
* I can convert 'lbs' to 'kg' and vice versa. <b>(1 lbs to 0.453592 kg)</b>
* I can convert 'mi' to 'km' and vice versa. <b>(1 mi to 1.60934 km)</b>
* [x] If my unit of measurement is invalid, returned will be 'invalid unit'.
* [x] If my number is invalid, returned with will 'invalid number'.
* [x] If both are invalid, return will be 'invalid number and unit'.
* [x] I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
* My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format <code>{initNum} {initial_Units} converts to {returnNum} {return_Units}</code> with the result rounded to 5 decimals.
* All 16 unit tests are complete and passing.
* All 5 functional tests are complete and passing.