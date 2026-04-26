import Account from "../models/account.model.js";

export const createAccount = async (req, res, next) => {
  try {

    const account = await Account.create({
      user: req.user.id,
      type: req.body.type
    });

    res.status(201).json({
      success: true,
      data: account
    });

  } catch (error) {
    next(error);
  }
};

export const getAccounts = async (req, res, next) => {
  try {

    const accounts = await Account.find({ user: req.user.id });

    res.json({
      success: true,
      data: accounts
    });

  } catch (error) {
    next(error);
  }
};