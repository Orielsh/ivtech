class JOIValidationError extends Error {
  constructor(message) {
    super(message);
    this.status = 400
  }
}

module.exports = JOIValidationError;