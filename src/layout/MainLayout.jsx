// src/layouts/MainLayout.jsx
import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";

export default function MainLayout({ children }) {
  return (
    <Box>
        <main>{children}</main>
    </Box>

  );
}
