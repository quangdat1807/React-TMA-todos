import React, { useState, useEffect } from "react";
import Validator from "hero-validate";

import "../css/Form.css"

const rules = {
  email: "required|email|min:8|max:20",
  password: "required|min:5|max:7"
};
Validator.setLocale(Validator.languages.en);
/// custom message for your form
Validator.setMessages({
  email: "sfsdfds :name",
  password: {
    min: ":name cant be less than 5",
    max: ":name cant be greater than 7",
  }
});
function Form() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [errors, setErrors] = useState(Validator.getEmpty());

  /// add function error custom
  const hasErr = (name) => {
    return touched[name] && errors.isError(name);
  };
  /// add function when value change
  const handleChange = (event) => {
    event.persist();
    setTouched({ ...touched, [event.target.name]: true });
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  /// hook react
  useEffect(() => {
    setErrors(Validator.validate(values, rules));
  }, [values]);
  return (
    <div className="form-group">
      <form>
        <div>
          <label htmlFor="email"> Email :</label>
          <input
            type="text"
            className={hasErr("email") ? "error" : ""}
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {hasErr("email") && (
            <div className="text-red">{errors.getError("email")}</div>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="password"> Password :</label>
          <input
            type="password"
            className={hasErr("password") ? "error" : ""}
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {hasErr("password") && (
            <div className="text-red">{errors.getError("password")}</div>
          )}
        </div>
      </form>
      </div>
  );
}

export default Form;