const formatCurrency = (value: number, locale: string, currency: string) => {
  return Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

export default formatCurrency;
