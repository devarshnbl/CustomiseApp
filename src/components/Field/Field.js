import React from "react";

export const Field = ({ field, onChange, onDelete }) => {
  const renderInputByType = (type) => {
    switch (type) {
      case "textarea":
        return <textarea value={field.value} onChange={onChange} rows="3" />;
      case "file":
        return <input type="file" onChange={onChange} />;
      case "select":
        return (
          <select value={field.value} onChange={onChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        );
      default:
        return <input type="text" value={field.value} onChange={onChange} />;
    }
  };

  return (
    <div className="field">
      <label>{field.label}</label>
      {renderInputByType(field.type)}
      <button onClick={onDelete}>Delete Field</button>
    </div>
  );
};
