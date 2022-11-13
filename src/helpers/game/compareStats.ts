const compareStats = (firstStats: number, secondStats: number) => {
  if (firstStats > secondStats) {
    return {
      text: 'Win',
      color: 'text-green-600',
    };
  }
  if (secondStats > firstStats) {
    return {
      text: 'Lose',
      color: 'text-red-500',
    };
  }

  return {
    text: 'Tie',
    color: 'text-yellow-500',
  };
};

export default compareStats;
