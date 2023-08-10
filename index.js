Algorithm IsPalindrome
Input: word(a string)
Output: isPalindrome(a boolean indicating whether the word is a palindrome)

if length of word is less than or equal to 1 then
        set isPalindrome to true
    else
if first character of word is equal to last character of word then
            set isPalindrome to IsPalindrome(substring of word excluding first and last characters)
        else
            set isPalindrome to false
        end if
    end if

    return isPalindrome
End Algorithm
