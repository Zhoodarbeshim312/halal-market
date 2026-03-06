namespace Clients {
  type UserRole = "admin" | "seller" | "client";

  type Client = {
    readonly id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string | null;
    user_role: UserRole;
  };

  export type ResClients = Client[];
}
