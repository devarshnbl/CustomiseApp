export const Button = ({ children, onClick, variant }) => (
  <button onClick={onClick} className={`btn ${variant}`}>
    {children}
  </button>
);

export const Select = ({ label, value, onChange, options }) => (
  <div>
    <label>{label}</label>
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export const TextInput = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

export const Textarea = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <textarea value={value} onChange={onChange} />
  </div>
);
