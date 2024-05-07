import * as t from "../components/ui/table";
import * as d from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { PlusCircle } from "lucide-react";
import { UsersFilters } from "../components/users-filter";
import { CreateUserDialog } from "../components/create-user-dialog";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getUsers } from "../data/users";

export function Users() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const { data: users } = useQuery({
    queryKey: ["users", id, name],
    queryFn: () => getUsers({ id, name }),
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Usuários</h1>

      <div className="flex items-center justify-between">
        <UsersFilters />

        <d.Dialog>
          <d.DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo usuário
            </Button>
          </d.DialogTrigger>

          <CreateUserDialog />
        </d.Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <t.Table>
          <t.TableHeader>
            <t.TableHead>ID</t.TableHead>
            <t.TableHead>NAME</t.TableHead>
            <t.TableHead>AGE</t.TableHead>
          </t.TableHeader>
          <t.TableBody>
            {users?.map((users) => {
              return (
                <t.TableRow key={users.id}>
                  <t.TableCell>{users.id}</t.TableCell>
                  <t.TableCell>{users.name}</t.TableCell>
                  <t.TableCell>{users.age}</t.TableCell>
                </t.TableRow>
              );
            })}
          </t.TableBody>
        </t.Table>
      </div>
    </div>
  );
}
