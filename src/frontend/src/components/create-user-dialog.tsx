import * as d from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserSchema = z.object({
  name: z.string(),
  age: z.coerce.number(),
});

type CreateUserSchema = z.infer<typeof createUserSchema>;

export function CreateUserDialog() {
  const { register, handleSubmit } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  function handleCreateUser(data: CreateUserSchema) {
    console.log(data);
  }

  return (
    <d.DialogContent>
      <d.DialogHeader>
        <d.DialogTitle>Novo usuário</d.DialogTitle>
        <d.DialogDescription>
          Criar um novo usuário no sistema
        </d.DialogDescription>
      </d.DialogHeader>

      <form onSubmit={handleSubmit(handleCreateUser)} className="space-y-6">
        <div className="grid grid-cols-4 items-center text-right gap-2">
          <Label htmlFor="name">Usuário</Label>
          <Input className="col-span-3" {...register("name")} />
        </div>

        <div className="grid grid-cols-4 items-center text-right gap-2">
          <Label htmlFor="age">Idade</Label>
          <Input className="col-span-3" {...register("age")} />
        </div>

        <d.DialogFooter>
          <d.DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </d.DialogClose>
          <Button type="submit">Salvar</Button>
        </d.DialogFooter>
      </form>
    </d.DialogContent>
  );
}
