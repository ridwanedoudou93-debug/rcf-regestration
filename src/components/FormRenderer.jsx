import React, { useState } from 'react';
import ProgressSteps from './ProgressSteps';
import FieldRenderer from './FieldRenderer';
import { validateField } from '../utils/validators';
import { ui } from '../data/brand';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';

const FormRenderer = ({ schema, onSubmit, onBackToLanding }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentStep = schema.steps[currentStepIndex];
  const totalSteps = schema.steps.length;

  const handleFieldChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = () => {
    const stepErrors = {};
    currentStep.fields.forEach(field => {
      const error = validateField(formData[field.name], field);
      if (error) {
        stepErrors[field.name] = error;
      }
    });
    
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStepIndex < totalSteps - 1) {
        setCurrentStepIndex(prev => prev + 1);
        window.scrollTo(0, 0);
      } else {
        handleFinalSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    } else {
      onBackToLanding();
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    const finalData = {
      formType: schema.formType,
      formTitle: schema.title,
      fullName: formData.fullName,
      phone: formData.phone,
      wilaya: formData.wilaya,
      answers: formData
    };
    
    const result = await onSubmit(finalData);
    setIsSubmitting(false);
    
    if (!result.success) {
      alert(ui.genericError);
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '2rem' }}>
      <ProgressSteps 
        currentStep={currentStepIndex + 1} 
        totalSteps={totalSteps} 
      />

      <div className="card animate-fade-in" style={{ padding: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            {currentStep.title}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {currentStep.fields.map((field) => (
            <FieldRenderer
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={handleFieldChange}
              error={errors[field.name]}
            />
          ))}
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginTop: '1.5rem',
          flexDirection: 'column' 
        }}>
          <button 
            className="btn btn-primary" 
            onClick={handleNext}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="loader" />
            ) : (
              <>
                {currentStepIndex === totalSteps - 1 ? ui.submit : ui.next}
                {currentStepIndex === totalSteps - 1 ? <Send size={18} /> : <ChevronLeft size={18} />}
              </>
            )}
          </button>
          
          <button 
            className="btn btn-secondary" 
            onClick={handleBack}
            disabled={isSubmitting}
          >
            <ChevronRight size={18} />
            {ui.previous}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormRenderer;
