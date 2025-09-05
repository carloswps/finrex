export type incomeItem = {
  name:
    | 'mainIncome'
    | 'freelance'
    | 'benefits'
    | 'businessProfit'
    | 'other'
    | 'transportation'
    | 'rent'
    | 'groceries'
    | 'utilities'
    | 'entertainment';
  label: string;
};
