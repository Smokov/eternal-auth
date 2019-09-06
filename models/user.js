const Sequelize = require("sequelize");
const sequelize = require("../startup/database");

const User = sequelize.define(
  "user",
  {
    username: {
      type: Sequelize.STRING,
      index: { unique: true },
      required: true
    },
    email: { type: String, lowercase: true, unique: true, required: true },
    hash: { type: String },
    salt: { type: Number },
    firstname: { type: String, index: true },
    lastname: { type: String, index: true },
    phone: String,
    avatar: String,
    status: {
      type: Sequelize.ENUM,
      values: [
        CONSTANTS.STATUS.ACTIVE,
        CONSTANTS.STATUS.DISABLED,
        CONSTANTS.STATUS.PENDING
      ],
      default: CONSTANTS.STATUS.ACTIVE
    },
    confirmed: { type: Boolean, default: false },
    roles: [
      {
        type: String,
        enum: [
          CONSTANTS.STATUS.ADMIN,
          CONSTANTS.STATUS.DASHBOARD,
          CONSTANTS.STATUS.CUSTOMER
        ],
        default: CONSTANTS.STATUS.CUSTOMER
      }
    ],
    permissions: [String],
    safeguard: {
      lastLogin: Date,
      failedLoginAttempts: Number
    }
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);

module.exports = User;
