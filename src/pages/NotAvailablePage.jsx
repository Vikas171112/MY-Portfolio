import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotAvailablePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md text-center shadow-lg rounded-2xl">
        <CardHeader>
          <div className="flex justify-center mb-2">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Page Not Available
          </CardTitle>
          <CardDescription>
            Oops! The page you're looking for doesn’t exist or is under
            construction.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="mt-4 w-full" onClick={() => navigate("/")}>
            Go Back Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default NotAvailablePage;
