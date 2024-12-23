import React from "react";

export default function Alert(profs) {
  return (
    profs.alert && (
      <div>
        <div
          className={`alert alert-${profs.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {profs.alert.msg}
        </div>
      </div>
    )
  );
}
