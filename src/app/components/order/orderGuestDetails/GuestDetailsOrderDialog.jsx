import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const GuestDetailsOrderDialog = ({ children, guestOrderData }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-6 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Hello {guestOrderData?.name} 👋
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-2 text-gray-700 border-gray-300 border-t pt-3">
          <p><strong>📧 Email:</strong> {guestOrderData?.email}</p>
          <p><strong>📞 Phone</strong> {guestOrderData?.phone}</p>
          <p><strong>📍 Address:</strong> {guestOrderData?.address}</p>
          <div className="border-t border-gray-300 pt-3">
            <p><strong>🚀 Status:</strong> {guestOrderData?.status || "unknown"}</p>
            <p><strong>⏳ Arrive In:</strong> {guestOrderData?.arriveIn || "unknown"}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuestDetailsOrderDialog;
