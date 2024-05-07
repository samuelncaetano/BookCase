import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";

const usersFiltersSchema = z.object({
  id: z.string(),
  name: z.string(),
});

type UsersFiltersSchema = z.infer<typeof usersFiltersSchema>;

export function UsersFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const { register, handleSubmit } = useForm<UsersFiltersSchema>({
    resolver: zodResolver(usersFiltersSchema),
    values: { id: id ?? "", name: name ?? "" },
  });

  function handleFilterUsers({ id, name }: UsersFiltersSchema) {
    setSearchParams((slate) => {
      if (id) {
        slate.set("id", id);
      } else {
        slate.delete("id");
      }

      if (name) {
        slate.set("name", name);
      } else {
        slate.delete("name");
      }

      return slate;
    });
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
