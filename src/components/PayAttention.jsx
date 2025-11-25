import React, { useState } from "react";
import "../style/home.css";

function PayAttention({text}) {
  return (
    <div className="pay-attention">
      <p className="text-payAttetion">{text}</p>
    </div>
  )
}

export default PayAttention
