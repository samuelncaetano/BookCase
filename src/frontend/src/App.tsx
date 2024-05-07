import * as t from "./components/ui/table";
import * as d from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { PlusCircle } from "lucide-react";
import { UsersFilters } from "./components/users-filter";
import { CreateUserDialog } from "./components/create-user-dialog";

export function App() {
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
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <t.TableRow key={i}>
                  <t.TableCell>{i}</t.TableCell>
                  <t.TableCell>User {i}</t.TableCell>
                  <t.TableCell>{i + 15}</t.TableCell>
                </t.TableRow>
              );
            })}
          </t.TableBody>
        </t.Table>
      </div>
    </div>
  );
}
