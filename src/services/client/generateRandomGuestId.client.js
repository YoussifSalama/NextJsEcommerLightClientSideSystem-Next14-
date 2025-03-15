import { getClientCookie, setClientCookie } from "@/lib/js.cookies";

export default function generateRandomGuestIdClient(length) {
  const guestid=getClientCookie("guestid");
  if(!guestid){
    const newGuestId = Math.random().toString(36).substring(2, length);
    setClientCookie("guestid", newGuestId);
    return newGuestId;
  }
  else{
    return guestid;
  }
}