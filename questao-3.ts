function calculateRevenue(fdaily: number[]): {
  minRevenue: number;
  maxRevenue: number;
  daysAboveAverage: number;
} {
  let minRevenue = -1;
  let maxRevenue = -1;
  let totalRevenue = 0;
  let daysWithRevenue = 0;

  for (const value of fdaily) {
    if (value > 0) {
      if (value < minRevenue) minRevenue = value;
      if (value > maxRevenue) maxRevenue = value;
      totalRevenue += value;
      daysWithRevenue++;
    }
  }
  
  const annualAverage = totalRevenue / daysWithRevenue;
  let daysAboveAverage = 0;
  
  for (const value of fdaily) {
    if (value > annualAverage) {
      daysAboveAverage++;
    }
  }

  return {
    minRevenue,
    maxRevenue,
    daysAboveAverage,
  };
}

const dailyRevenue = [  
  100, 
  200, 
  0, 
  300,
  50,
  0,
  400,
  500,
  0,
  600,
  0,
  700,
  800,
  0,
  900,
  1000,
];

const result = calculateRevenue(dailyRevenue);
console.log("Menor valor:", result.minRevenue);
console.log("Maior valor:", result.maxRevenue);
console.log("Dias acima da média:", result.daysAboveAverage);
