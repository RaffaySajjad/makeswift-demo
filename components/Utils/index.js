const months = [
  {
    long: "January",
    short: "Jan",
  },
  {
    long: "February",
    short: "Feb",
  },
  {
    long: "March",
    short: "Mar",
  },
  {
    long: "April",
    short: "Apr",
  },
  {
    long: "May",
    short: "May",
  },
  {
    long: "June",
    short: "Jun",
  },
  {
    long: "July",
    short: "Jul",
  },
  {
    long: "August",
    short: "Aug",
  },
  {
    long: "September",
    short: "Sept",
  },
  {
    long: "October",
    short: "Oct",
  },
  {
    long: "November",
    short: "Nov",
  },
  {
    long: "December",
    short: "Dec",
  },
];

/**
 * @param {import('frontend-customer/dist/customer-hooks').CustomerState} customer
 */
export const getCustomerName = (customer) => {
  return customer.firstName
    ? `${customer.firstName} ${customer.lastName}`
    : customer.email || "";
};

export const nth = (/** @type {Date} */ today) => {
  const date = today.getDate();

  return date % 10 === 1 && date !== 11
    ? "st"
    : date % 10 === 2 && date !== 12
    ? "nd"
    : date % 10 === 3 && date !== 13
    ? "rd"
    : "th";
};

export const formatDateOrdinal = (
  /** @type {String} */ date,
  /** @type {'long' | 'short'} */ monthNameFormat
) => {
  const dateObj = new Date(date);
  const dateNum = dateObj?.getDate();
  const month = dateObj?.getMonth();
  const year = dateObj?.getFullYear();

  return `${months[month][monthNameFormat]} ${dateNum}${nth(dateObj)}, ${year}`;
};

/**
 * @param {string | number} [base]
 * @returns {string}
 */
export const uniqueId = (base) => {
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2);

  return base ? `${base}_${id}` : id;
};
