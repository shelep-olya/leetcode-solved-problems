// Count Bits

class Solution {
    public int[] countBits(int n) {
        int[] bits = new int[n + 1]; 

        for (int i = 0; i <= n; i++) {
            bits[i] = countOnesInBinary(i); 
        }

        return bits;
    }
    public int countOnesInBinary(int n) {
        int count = 0;
        while (n > 0) {
            count += n % 2;
            n = n / 2;     
        }
        return count;
    }
}
