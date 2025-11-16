import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { type FormData } from "../schemas/user";

function Reg({
  users,
  onDelete,
}: {
  users: FormData[];
  onDelete: (index: number) => void;
}) {
  return (
    <Table className="cursor-pointer">
      <TableCaption>Usuarios</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nombre</TableHead>
          <TableHead>Apellido</TableHead>
          <TableHead>Correo</TableHead>
          <TableHead className="text-right">Contraseña</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index} onClick={() => onDelete(index)}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.lastname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-right">{user.pass}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Reg;
