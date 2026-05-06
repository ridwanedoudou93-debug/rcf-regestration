import React from 'react';

const FieldRenderer = ({ field, value, onChange, error }) => {
  const { name, label, type, options, required, placeholder } = field;

  const handleChange = (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    onChange(name, val);
  };

  const handleCheckboxChange = (option) => {
    const currentValues = Array.isArray(value) ? [...value] : [];
    const index = currentValues.indexOf(option);
    
    if (index > -1) {
      currentValues.splice(index, 1);
    } else {
      currentValues.push(option);
    }
    
    onChange(name, currentValues);
  };

  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select 
            id={name}
            className={`select ${error ? 'field-error' : ''}`}
            value={value || ''}
            onChange={handleChange}
          >
            <option value="" disabled>اختر من القائمة...</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        );

      case 'radio':
        return (
          <div className="options-list">
            {options.map((opt) => (
              <label key={opt} className="option-item">
                <input 
                  type="radio" 
                  name={name}
                  value={opt}
                  checked={value === opt}
                  onChange={handleChange}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="options-list">
            {options.map((opt) => (
              <label key={opt} className="option-item">
                <input 
                  type="checkbox" 
                  name={name}
                  value={opt}
                  checked={Array.isArray(value) && value.includes(opt)}
                  onChange={() => handleCheckboxChange(opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        );

      case 'textarea':
        return (
          <textarea 
            id={name}
            className={`textarea ${error ? 'field-error' : ''}`}
            value={value || ''}
            onChange={handleChange}
            placeholder={placeholder || 'اكتب هنا...'}
            rows={4}
          />
        );

      case 'tel':
        return (
          <input 
            type="tel"
            id={name}
            className={`input ${error ? 'field-error' : ''}`}
            value={value || ''}
            onChange={handleChange}
            placeholder={placeholder || '05XXXXXXXX'}
            dir="ltr"
            style={{ textAlign: 'right' }}
          />
        );

      default:
        return (
          <input 
            type={type}
            id={name}
            className={`input ${error ? 'field-error' : ''}`}
            value={value || ''}
            onChange={handleChange}
            placeholder={placeholder || ''}
          />
        );
    }
  };

  return (
    <div className="input-group animate-fade-in">
      <label htmlFor={name} className="label">
        {label} {required && <span style={{ color: 'var(--error)' }}>*</span>}
      </label>
      {renderInput()}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FieldRenderer;
