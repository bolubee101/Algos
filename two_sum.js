var twoSum = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        let sum_num = target - nums[i]
        if (map[sum_num] !== undefined) {
            return [i, map[target - nums[i]]]
        }
        map[nums[i]] = i
    }
};


