import type { Reservation } from "@/components/reservations/type";
import type { UseQueryResult } from "react-query";
import { useQuery } from "react-query";
import { GetRequest } from "./utils";

export function GetReservation(reservationId: number): { req: UseQueryResult; data: Reservation } {
  const req = useQuery({
    queryKey: [reservationId],
    queryFn: () => GetRequest<Reservation>(`/api/reservation/${reservationId}`),
  });

  return { req, data: req.data as Reservation };
}
