const ctx = document.getElementById("myChart");

const labelName = [
  "Sale open to the public",
  "Team",
  "Investor Tokens",
  "Strategic Reserves",
  "Advisor amount",
  "Donations",
  "Academy Users (Tokens that will be given as rewards for courses)",
  "Market Place User (Tokens given to first user of the platform) (airdrop)",
  "Device Owner Tokens (First buyers of device will receive tokens) (airdrop)",
  "Mining",
  "Staking",
];

const data = [
  200000000, 200000000, 100000000, 200000000, 1000000, 8000000, 90000000,
  1000000, 50000000, 60000000, 90000000,
];

const size = () => {
  if (screen.width < 600) {
    return { position: "bottom", fontSize: 25, aspectRatio: 1 | 1 };
  } else {
    return { position: "right", fontSize: 18, aspectRatio: 2 | 1 };
  }
};

new Chart(ctx, {
  type: "pie",
  data: {
    labels: labelName,
    datasets: [
      {
        label: "# of Votes",
        data: data,
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: size().position,
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: size().fontSize,
          },
        },
      },
    },
    devicePixelRatio: 2,
    aspectRatio: size().aspectRatio,
    responsive: false,
  },
});
