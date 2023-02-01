import SecurityQuestionModel from "../models/registerModel/securityQuestion.schema";

const getAll = () =>
  SecurityQuestionModel.aggregate([
    {
      $match: {
        isDeleted: false,
      },
    },
    {
      $sort: {
        createdAt: 1,
      },
    },
    {
      $project: {
        question: 1,
      },
    },
  ]);

export default {
  getAll,
};
