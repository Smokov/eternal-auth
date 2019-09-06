const TokenSchema = new Schema(
  {
    token: {
      type: String,
      index: true,
      unique: true
    },
    userId: { type: Schema.ObjectId, index: true },
    clientId: { type: Schema.ObjectId, index: true },
    description: String,
    roles: [String],
    issuedAt: { type: Date },
    tokenLifeSpan: String,
    expireAt: { type: Date, default: undefined }
  },
  {
    timestamps: true
  }
);

module.exports = TokenSchema;
