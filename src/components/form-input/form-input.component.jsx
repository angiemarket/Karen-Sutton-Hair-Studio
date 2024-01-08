import "./form-input.styles.scss";

// const FORM_INPUT_TYPES = {
//   input: "input",
//   select: "select",
//   textarea: "textarea",
// };

const FormInput = ({ inputType, label, ...otherProps }) => {
  return (
    <div className="group">
      {inputType === "select" && (
        <select {...otherProps} className="form-input" />
      )}

      {inputType === "textarea" && (
        <textarea className="form-input" {...otherProps} />
      )}

      {!inputType && <input className="form-input" {...otherProps} />}

      {label && (
        <label
          className={`${
            otherProps.value || inputType === "select" ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
