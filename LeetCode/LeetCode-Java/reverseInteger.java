
// Question: https://leetcode.com/problems/reverse-integer/

/* Note: Assume we are dealing with an environment which could only store
integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
Assuming that function returns 0 when the reversed integer overflows.
 */

import java.io.*;

public class reverseInteger {

    public static void main(String args[]) throws IOException {
        int num = 123456789;
        // Reverse can be done using reverse()
        // System.out.print(reverse(num));
        System.out.print("Reverse of " + num + " = " + reverse(num));
    }

    public static int reverse(int num) {
        long res = 0;
        while (num != 0) {
            res = res * 10 + num % 10;
            num = num / 10;
        }
        if (res < Integer.MIN_VALUE || res > Integer.MAX_VALUE) {
            return 0;
        } else {
            return (int)res;
        }
    }
}
