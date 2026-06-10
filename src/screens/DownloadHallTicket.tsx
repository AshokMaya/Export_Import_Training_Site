import { Button } from "../components/ui/button";
import React from "react";
import { cn } from "../lib/utils";

export default function DownloadHallTicket(): JSX.Element {
  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center min-h-screen bg-white",
          "max-w-md mx-auto ",
        )}
      >
        <button
          type="submit"
          className={cn(
            "w-full bg-[#DA612B] text-white py-2 px-4 rounded-md hover:bg-[#FDECD9] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          )}
        >
          Download Hall Ticket
        </button>
      </div>
    </>
  );
}
