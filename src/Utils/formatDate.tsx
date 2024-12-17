export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(date)
    .replace(/(\d+)\s(\w+)/, "$1 $2,");
};
