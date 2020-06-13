// Question : https://leetcode.com/problems/two-sum/
// Time Complexity = O(n^2)

import java.io.*;

public class TwoSumBruteForce {

    public static void main (String args[]) throws IOException {

        int[] nums = {7,3,4,2,3};
        int target = 6;
        int[] result = twoSum(nums,target);
        for (int x : result ) {
            System.out.print(x + " ");
        }
    }

    public static int[] twoSum(int[] nums, int target){
        int[] result = new int[2];
        for (int i = 0; i < nums.length; i++) {
            for (int j = i+1 ; j < nums.length; j++) {
                if (nums[j] == target-nums[i]) {
                    result[0] = i;
                    result[1] = j;
                    break;
                }
            }
        }
        return result;
    }
}

