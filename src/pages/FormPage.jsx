import React from 'react';
import Layout from '../components/Layout';
import FormRenderer from '../components/FormRenderer';
import { formSchemas } from '../data/formSchemas';

const FormPage = ({ formType, onBack, onSubmit }) => {
  const schema = formSchemas[formType];

  if (!schema) return null;

  return (
    <Layout 
      title={schema.title}
      subtitle={schema.subtitle}
      showBack={true}
      onBack={onBack}
    >
      <FormRenderer 
        schema={schema} 
        onSubmit={onSubmit}
        onBackToLanding={onBack}
      />
    </Layout>
  );
};

export default FormPage;
