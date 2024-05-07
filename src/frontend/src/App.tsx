import * as t from "./components/ui/table";
import * as d from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Search, PlusCircle } from "lucide-react";

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Usuários</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do usuário" />
          <Input name="name" placeholder="Nome do usuário" />
          <Button type="submit" variant="link">
            <Search className="w-4 h-4 mr-2" />
            Filtrar usuário
          </Button>
        </form>

        <d.Dialog>
          <d.DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo usuário
            </Button>
          </d.DialogTrigger>

          <d.DialogContent>
            <d.DialogHeader>
              <d.DialogTitle>Novo usuário</d.DialogTitle>
              <d.DialogDescription>
                Criar um novo usuário no sistema
              </d.DialogDescription>
            </d.DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-2">
                <Label htmlFor="name">Usuário</Label>
                <Input className="col-span-3" id="name" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-2">
                <Label htmlFor="age">Idade</Label>
                <Input className="col-span-3" id="age" />
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
