function trapWater(height) {

    let n = height.length;

    let leftMax = new Array(n);
    let rightMax = new Array(n);

    // Left Maximum
    leftMax[0] = height[0];

    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Right Maximum
    rightMax[n - 1] = height[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Calculate Water
    let totalWater = 0;

    for (let i = 0; i < n; i++) {

        let water =
            Math.min(leftMax[i], rightMax[i]) - height[i];

        totalWater += water;
    }

    return totalWater;
}

const arr = [0,4,0,0,0,6,0,6,4,0];

console.log(trapWater(arr));