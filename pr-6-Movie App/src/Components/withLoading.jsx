import React from "react";
import { Spinner } from "react-bootstrap";

export default function withLoading(Component) {
  return function WithLoading({ loading, ...props }) {
    if (loading) {
      return (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
        </div>
      );
    }
    return <Component {...props} />;
  };
}