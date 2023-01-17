import { z } from 'zod';
export const preApprovalDataSchema = z.object({
  body: z.object({
    accomodationStatus: z.enum([
      'Looking to renew my rent',
      'Want to pay for a new place',
      "I'm still searcing",
    ]),
    reqAmount: z.string({
      required_error: 'rent request amount is required',
    }),
    monthlyEarn: z.string({
      required_error: 'monthly earnings is required',
    }),
    monthlyPlan: z.enum([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ]),
  }),
});

/* monthlyEarn: data.monthlyEarnings,
reqAmount: data.reqAmount,
accomodationStatus: selected?.text.toLocaleLowerCase(),
monthlyPlan: months[selectedIndex.row].toString() */
