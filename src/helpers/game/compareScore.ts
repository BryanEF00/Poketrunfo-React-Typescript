const compareScore = (firstStats: number, secondStats: number) => {
  if (firstStats > secondStats) {
    return {
      text: 'Victory',
      color: 'text-green-600',
    };
  }
  if (secondStats > firstStats) {
    return {
      text: 'Defeat',
      color: 'text-red-500',
    };
  }

  return {
    text: 'Tie',
    color: 'text-yellow-500',
  };
};

export default compareScore;
