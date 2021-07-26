class AppError extends Error {
  constructor(err) {
    // Make sure to pass a `message` to the `Error` constructor. Be it from the backend server or otherwise
    super(err.response?.data.message || err.message);

    // If there is a `response` and the `status` is within the `400` range?
    const isClientErr =
      err.response?.status >= 400 && err.response?.status < 500;

    // If `isClientErr` is `false`? this will be `true`
    const isUnexpectedErr = !isClientErr;

    // Otherwise this `error` should not happen under normal circumstance, so it's `unexpected`
    if (isUnexpectedErr) {
      // Log the Error
      console.log("Logging the Error", { err });

      // set to `true` if this Error is a `Network Error`
      this.network = /network/i.test(err.message);

      // Prepare the `error` for `unexpected` Error properties
      this.statusCode = 500;
      this.message = this.network
        ? "please check your internet connection"
        : "an unexpected error occurred";
      this.status = "error";

      this.unexpected = true;

      //
      // This Log will be deleted
      console.log("UNEXPECTED error", { error: this });
    }

    // This `error` is caused by the `client` and they should fix it :)
    if (isClientErr) {
      if (err.response.status === 401) {
        location.replace("/auth/login");
      }

      // This Client Error is coming from an `identified server`(a backend server that is meant for this Application)

      console.log(err.response);

      if (err.response.data.message || err.response.data.err?.message) {
        let message =
          err.response.data.message || err.response.data.err?.message;

        // Checks if `message` is an `Array`
        const isMessageArr = Array.isArray(message);
        // Generate a Random `index` for `message` array
        const getRandIndex = () => Math.floor(Math.random() * message.length);
        // Change `message` to a single string msg is it was an `Array`
        if (isMessageArr) {
          message = message[getRandIndex()];
        }

        this.message = message;
      }
      // This Client Error is coming from an `unidentified server`(a RANDOM backend server)
      else {
        this.message = "there's was unknown Client Error";
      }

      this.statusCode = err.response.status;
      this.status = "fail";

      //
      // This Log will be deleted
      console.log("CLIENT error", { error: this });
    }
  }
}

export default AppError;
