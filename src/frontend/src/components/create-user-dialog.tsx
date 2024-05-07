import * as d from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser, User } from "@/data/users";

const createUserSchema = z.object({
  name: z.string(),
  age: z.coerce.number(),
});

type CreateUserSchema = z.infer<typeof createUserSchema>;

export function CreateUserDialog() {
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const { mutateAsync: createUserFn } = useMutation({
    mutationFn: createUser,
    onSuccess(_, Variable) {
      const data = queryClient.getQueryData<User[]>(["users"]) || [];
      queryClient.setQueryData<User[]>(
        ["users"],
        [
          ...data,
          {
            id: crypto.randomUUID(),
            name: Variable.name, // Substitua 'Variable.name' pelo valor adequado
            age: Variable.age, // Substitua 'Variable.age' pelo valor adequado
          },
        ],
      );
    },
  });

  async function handleCreateUser(data: CreateUserSchema) {
    try {
      await createUserFn({
        name: data.name,
        age: data.age,
      });
    } catch (err) {
      alert("Erro ao cadastrar usuário");
    }
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
          <d.DialogClose asChild>
            <Button type="submit">Salvar</Button>
          </d.DialogClose>
        </d.DialogFooter>
      </form>
    </d.DialogContent>
  );
}
