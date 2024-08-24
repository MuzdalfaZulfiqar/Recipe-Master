import React, { useState } from 'react';

function DismissibleAlert() {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => setShow(false)}
      ></button>
    </div>
  );
}

export default DismissibleAlert;
