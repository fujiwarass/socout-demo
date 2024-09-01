import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../_component/mainLayout/Header";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "サカウト_選手",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Box sx={{ display: 'flex' }}>
        <Header /> 
        <Box
          component="main"
          sx={{ 
                flexGrow: 1
               ,p: 3
               , marginTop: '64px'
               , transition: 'width 0.3s ease, margin-left 0.3s ease'
              }}>
          {children}
        </Box>
      </Box>
        </body>
    </html>
  );
}
