import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const usersFiltersSchema = z.object({
  id: z.string(),
  name: z.string(),
});

type UsersFiltersSchema = z.infer<typeof usersFiltersSchema>;

export function UsersFilters() {
  const { register, handleSubmit } = useForm<UsersFiltersSchema>({
    resolver: zodResolver(usersFiltersSchema),
  });

  function handleFilterUsers(data: UsersFiltersSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilterUsers)}
      className="flex items-center gap-2"
    >
      <Input placeholder="ID do usuário" {...register("id")} />
      <Input placeholder="Nome do usuário" {...register("name")} />
      <Button type="submit" variant="link">
        <Search className="w-4 h-4 mr-2" />
        Filtrar usuário
      </Button>
    </form>
  );
}
