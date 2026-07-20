function maxProfit(n) {
    let maxProfit = 0;
    let answer = {
        theatre: 0,
        pub: 0,
        commercial: 0
    };

    // Try every possible combination
    for (let t = 0; t <= 3; t++) {
        for (let p = 0; p <= 7; p++) {
            for (let c = 0; c <= 2; c++) {

                // Land check
                let land = (2 * t) + (1 * p) + (3 * c);

                if (land > 7)
                    continue;

                // Time check
                let usedTime = (5 * t) + (4 * p) + (10 * c);

                if (usedTime > n)
                    continue;

                // Remaining time
                let remaining = n - usedTime;

                // Profit
                let profit =
                    (t * 1500 * remaining) +
                    (p * 1000 * remaining) +
                    (c * 2000 * remaining);

                if (profit > maxProfit) {
                    maxProfit = profit;

                    answer.theatre = t;
                    answer.pub = p;
                    answer.commercial = c;
                }
            }
        }
    }

    console.log("Maximum Profit :", maxProfit);
    console.log("Theatre :", answer.theatre);
    console.log("Pub :", answer.pub);
    console.log("Commercial :", answer.commercial);
}

maxProfit(7);
maxProfit(8);
maxProfit(13);