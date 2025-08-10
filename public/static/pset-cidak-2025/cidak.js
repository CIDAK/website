// Problem set cidak.js, see other file for more info. This folder only contains cidak.js and open1.txt. 

/* 
This problem you will work on is done in JavaScript, an entry level coding language for all UOL Students and therefore continues as:

Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

I will give you a few examples:

    1.
        Input: s = "aab"
        Output: "aba"

    2.
        Input: s = "aaab"
        Output: ""

Constraints:
        s.length = s,   1 <= s <= 499
        
        s can only be lowercase letters

*/
function reOrganizeStrings(array) {

    // Here you will code ...
}

// Simple tests
var testcase1 = ['aab'];
var testcase2 = ['aaba'];

// Execute Testcases 1 - 4
console.log(reOrganizeStrings(testcase1));
// console.log(reOrganizeStrings(testcase2));

// Harder tests
var testcase3 = ['abcadbcabcdabcc'];
var testcase4 = ['iancheydylanalexsilvamkenfritterscidak'];

// console.log(reOrganizeStrings(testcase3));
// console.log(reOrganizeStrings(testcase4));

// Do not alter anything below this ----------------------------------
module.exports = {
    reOrganizeStrings : reOrganizeStrings
}