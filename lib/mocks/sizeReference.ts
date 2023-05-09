export const MULTIPLE_VALUES = {
  preferences: [
    {
      title: 'Traditional Bra Sizing (US),Traditional Bra Sizing (UK/EU)',
      title_substitute: 'Fits sizes',
      show_unit: false,
    },
  ],
  sizeChart: [
    ['Size', 'Traditional Bra Sizing (US)', '-', '-', '-', '-'],
    ['S', '28DD', '30D', '32C', '', ''],
    ['M', '34B', '34C', '36B', '38B', ''],
    ['L', '32D', '34D', '36C', '36D', '38C'],
    ['_', '38D', '', '', '', ''],
    ['XL', '36DD', '36DDD', '38DD', '40C', '40D'],
    ['_', '44B', '', '', '', ''],
    ['2XL', '40DD', '42C', '42D', '44C', '46B'],
    ['_', '48B', '', '', '', ''],
    ['3XL', '42DD', '44D', '44DD', '46C', '46D'],
    ['_', '48D', '', '', '', ''],
    ['4XL', '44DDD', '46DD', '48DD', '', ''],
  ],
}
export const SINGLE_BRA_SIZES_VALUES = {
  preferences: [
    {
      title: 'Cup Size / Band Size',
      title_substitute: 'Fits sizes',
      show_unit: false,
    },
  ],
  sizeChart: [
    [
      'Cup Size / Band Size',
      '28',
      '30',
      '32',
      '34',
      '36',
      '38',
      '40',
      '42',
      '44',
      '46',
      '48',
    ],
    ['A', '', '', '', 'S', 'M', 'M', 'L', 'XL', '2XL', '2XL', '3XL'],
    ['B', null, '', 'S', 'M', 'M', 'L', 'L', 'XL', '2XL', '3XL', '3XL'],
    ['C', null, 'S', 'S', 'M', 'L', 'L', 'XL', 'XL', '2XL', '3XL', '4XL'],
    ['D', '', 'S', 'M', 'M', 'L', 'XL', 'XL', '2XL', '3XL', '3XL', '4XL'],
    ['DD/E', 'S', 'S', 'M', 'L', 'XL', 'XL', '2XL', '2XL', '3XL', '4XL', '4XL'],
    ['DDD/F', '', 'M', 'M', 'L', 'XL', '2XL', '2XL', '3XL', '3XL', '4XL', ''],
    ['G', '', '', 'L', 'XL', '2XL', '2XL', '3XL', '3XL', '4XL', '4XL', ''],
    ['H', '', '', '', '', '', '', '', '4XL', '4XL', '', ''],
  ],
}
export const SINGLE_VALUES = {
  preferences: [
    {
      title: 'Dress Size,Dress Size (UK)',
      title_substitute: 'Fits sizes',
      show_unit: false,
    },
    {
      title: 'Waist (in),Waist (cm)',
      title_substitute: 'Waist',
      show_unit: true,
    },
    {
      title: 'Hips (in),Hips (cm)',
      title_substitute: 'Hips',
      show_unit: true,
    },
  ],
  sizeChart: [
    ['Size', 'Dress Size', 'Bust (in)', 'Waist (in)', 'Hips (in)'],
    ['S', '0 - 2', '24 - 28', '22.5 - 25', '28 - 32'],
    ['M', '4', '28.5 - 31', '25 - 28', '32.5 - 35'],
    ['L', '6', '31.5 - 33', '28.5 - 30.5', '35.5 - 38'],
    ['XL', '8', '33.5 - 36', '31 - 34', '38.5 - 40'],
    ['2XL', '10 - 14', '36.5 - 40', '34.5 - 38', '40.5 - 44'],
    ['3XL', '16 - 18', '40.5 - 44', '38.5 - 42', '44.5 - 48'],
    ['4XL', '20 - 22', '44.5 - 47', '42.5 - 45', '48.5 - 51'],
  ],
}

export const MULTIPLE_VALUES_KEYS = {
  preferences: [
    {
      title: 'Dress Size,Pant Size (UK)',
      title_substitute: 'Fits sizes',
      show_unit: false,
    },
    {
      title: 'Waist (in),Waist (cm)',
      title_substitute: 'Waist',
      show_unit: true,
    },
    {
      title: 'Hips (in),Hips (cm)',
      title_substitute: 'Hips',
      show_unit: true,
    },
  ],
  sizeChart: [
    ['Size', 'Pant Size', 'Waist (in)', 'Hips (in)'],
    ['XS/S', '0 - 4', '23 - 27', '33 - 37'],
    ['M/L', '6 - 12', '27.5 - 33', '37.5 - 43'],
    ['XL/2XL', '14 - 18', '33.5 - 38', '43.5 - 48'],
    ['3XL', '20', '38.5 - 41', '48.5 - 51'],
    ['4XL', '22', '41.5 - 46', '51.5 - 54.5'],
  ],
}
