const crystalConverter = (convRate, ahPrice, crystPrice, quantity) => {
  const conversionRatio = convRate / 95;
  const marketRatio = (ahPrice * quantity) / crystPrice;
  const ratios = `Gold to Crystal: ${conversionRatio}G : 1 Crystal \n Market Price to Crystal: ${marketRatio}G : 1 Crystal.`;
  return conversionRatio > marketRatio
    ? `Buy from market. \n ${ratios}`
    : `Buy with Crystal. \n ${ratios}`;
};
