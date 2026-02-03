"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type AppointmentSuccessModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const AppointmentSuccessModal = ({ open, onOpenChange }: AppointmentSuccessModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Thank you for requesting appointment.</AlertDialogTitle>
          <AlertDialogDescription>
            We will contact you within 24 hours to confirm your appointment.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-end">
          <AlertDialogAction>Close</AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AppointmentSuccessModal;
