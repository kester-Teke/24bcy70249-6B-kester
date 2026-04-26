import Transaction from "../models/transaction.model.js";
import Account from "../models/account.model.js";

export const createTransaction = async (req, res, next) => {
  try {

    const { accountId, fromAccountId, toAccountId, type, amount } = req.body;

    // DEPOSIT
    if (type === "deposit") {

      const account = await Account.findById(accountId);

      if (!account) {
        return res.status(404).json({
          success: false,
          message: "Account not found"
        });
      }

      account.balance += amount;
      await account.save();

      const transaction = await Transaction.create({
        account: accountId,
        type,
        amount
      });

      return res.status(201).json({
        success: true,
        data: transaction
      });
    }

    // WITHDRAW
    if (type === "withdraw") {

      const account = await Account.findById(accountId);

      if (!account) {
        return res.status(404).json({
          success: false,
          message: "Account not found"
        });
      }

      if (account.balance < amount) {
        return res.status(400).json({
          success: false,
          message: "Insufficient balance"
        });
      }

      account.balance -= amount;
      await account.save();

      const transaction = await Transaction.create({
        account: accountId,
        type,
        amount
      });

      return res.status(201).json({
        success: true,
        data: transaction
      });
    }

    // TRANSFER
    if (type === "transfer") {

      const fromAccount = await Account.findById(fromAccountId);
      const toAccount = await Account.findById(toAccountId);

      if (!fromAccount || !toAccount) {
        return res.status(404).json({
          success: false,
          message: "Account not found"
        });
      }

      if (fromAccount.balance < amount) {
        return res.status(400).json({
          success: false,
          message: "Insufficient balance"
        });
      }

      fromAccount.balance -= amount;
      toAccount.balance += amount;

      await fromAccount.save();
      await toAccount.save();

      const transaction = await Transaction.create({
        account: fromAccountId,
        type,
        amount
      });

      return res.status(201).json({
        success: true,
        data: transaction
      });
    }

  } catch (error) {
    next(error);
  }
};

export const getTransactions = async (req, res, next) => {
  try {

    const transactions = await Transaction.find()
      .populate("account");

    res.status(200).json({
      success: true,
      data: transactions
    });

  } catch (error) {
    next(error);
  }
};