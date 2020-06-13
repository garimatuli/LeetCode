
// Question : https://leetcode.com/problems/two-sum/

// Time Complexity = O(n) ; Space Complexity = O(n)
// A hash table - best way to maintain a mapping of each element in the array to its index


import java.io.*;
import java.util.*;

public class TwoSumTwoPassHashMap {

    public static void main(String args[]) throws IOException {

        int[] nums = {7,3,4,2,3};
        // int[] nums = {7,3,4};
        int target = 6;
        int[] result = twoSum(nums,target);
        System.out.print("Result for two sum = ");
        for (int x : result ) {
            System.out.print(x + " ");
        }
    }

    public static int[] twoSum(int[] nums, int target){
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            // adding each element's value and its index to the map
            map.put(nums[i], i);
        }

        // Display Map Keys & Values using forEach Loop
        map.forEach((key, value) -> System.out.println(key + ":" + value));

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            // checking if element's complement exists in the map
            if (map.containsKey(complement) && map.get(complement) != i) {
                return new int[] { i, map.get(complement) };
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
