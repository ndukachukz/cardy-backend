/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import calculateTwoPercent from '../lib/index.js';

export default async (req: Request, res: Response): Promise<Response> => {
  const { reqAmount, monthlyEarn, monthlyPlan } = req.body;
  const monthlyInterest =
    calculateTwoPercent(Number(monthlyPlan)) * monthlyEarn;
  const monthlyPayment = reqAmount / monthlyPlan + monthlyInterest;

  try {
    return res.status(200).json({ monthlyPayment });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
