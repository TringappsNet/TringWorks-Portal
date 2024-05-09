import React, { useState } from 'react';

function EmailForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [sentMessage, setSentMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const thisForm = event.target;
    const action = thisForm.getAttribute('action');
    const recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

    if (!action) {
      displayError('The form action property is not set!');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setSentMessage('');

    const formData = new FormData(thisForm);

    if (recaptcha) {
      if (typeof grecaptcha !== 'undefined') {
        try {
          const token = await grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' });
          formData.set('recaptcha-response', token);
          await phpEmailFormSubmit(action, formData);
        } catch (error) {
          displayError(error);
        }
      } else {
        displayError('The reCaptcha JavaScript API URL is not loaded!');
      }
    } else {
      await phpEmailFormSubmit(action, formData);
    }
  };

  const phpEmailFormSubmit = async (action, formData) => {
    try {
      const response = await fetch(action, {
        method: 'POST',
        body: formData,
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      });
      if (response.ok) {
        const data = await response.text();
        setLoading(false);
        if (data.trim() === 'OK') {
          setSentMessage('Message sent successfully!');
          // Optionally reset form fields
          // event.target.reset();
        } else {
          throw new Error(data ? data : `Form submission failed and no error message returned from: ${action}`);
        }
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`);
      }
    } catch (error) {
      displayError(error);
    }
  };

  const displayError = (error) => {
    setLoading(false);
    setErrorMessage(error.toString());
  };

  return (
    <form className="php-email-form" onSubmit={handleSubmit}>
      {/* Add your form fields here */}
      <div className={loading ? 'loading d-block' : 'loading'}>Loading...</div>
      <div className={errorMessage ? 'error-message d-block' : 'error-message'}>{errorMessage}</div>
      <div className={sentMessage ? 'sent-message d-block' : 'sent-message'}>{sentMessage}</div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmailForm;
