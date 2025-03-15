import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addNewOrder } from "@/app/services/client/product.client.services";

const CheckoutCart = ({ children, cartGuestId,setRefreshOnEvent,prodcuts }) => {
  const [formData, setFormData] = useState({
    orderGuestId: cartGuestId,
    name: "",
    email: "",
    phone: "",
    address: "",
    products: prodcuts,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewOrder(cartGuestId, formData).then(()=>{
      setRefreshOnEvent(prev => !prev);
    })
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Please fill the form</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <Input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} />
          <Input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <Textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          <Button type="submit" className="w-full">Submit Order</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutCart;
