import{q as i,w as r,x as e}from"./index-adccf17c.js";import{d as u}from"./apiBookings-fd5c752d.js";function c(){const o=i(),{isLoading:s,mutate:n}=r({mutationFn:u,onSuccess:()=>{e.success("Booking successfully deleted"),o.invalidateQueries({queryKey:["bookings"]})},onError:t=>e.error(t.message)});return{isDeleting:s,deleteBooking:n}}export{c as u};