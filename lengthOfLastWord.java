// Length of Last Word

class Solution {
    public int lengthOfLastWord(String s) {
        String removedSpaceString = s.trim();
        String[] words = removedSpaceString.split(" ");
        String lastWord = words[words.length - 1];
        return lastWord.length();
    }
}