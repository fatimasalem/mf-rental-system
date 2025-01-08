'use client'
import React from "react";

import {
  IconEdit,
  IconEye,
  IconTrash,
} from "@tabler/icons-react";

import {
  Table as NextUITable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  user,
} from "@nextui-org/react";

// Define types for user and columns
interface UserType {
  id: number;
  name: string;
  apartment: string,
  payment_due: string;
  payment_ratio: string;
  status: string;
  avatar: string;
  phone_number: string;
}

export const columns = [
  { name: "CLIENT", uid: "client" },
  { name: "APARTMENT", uid: "apartment" },
  { name: "STATUS", uid: "status" },
  { name: "PAYMENT", uid: "payment due" },
  { name: "ACTIONS", uid: "actions" },
];

export const users: UserType[] = [
  {
    id: 1,
    name: "Mohamed Ahmed",
    payment_due: "Oct 7th, 2025",
    payment_ratio: "4/5",
    apartment: "R1",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 123 4567",
  },
  {
    id: 2,
    name: "Saleh faisal",
    payment_due: "Feb 18th, 2025",
    payment_ratio: "1/5",
    apartment: "R2",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 123 4567",
  },
  {
    id: 3,
    name: "Mariam Khaled",
    payment_due: "N/A",
    payment_ratio: "5/5",
    apartment: "R3",
    status: "unactive",
    avatar: "https://media.istockphoto.com/id/1481415511/vector/arab-woman-face-covered-with-hijab-muslim-woman-muslim-girl-avatar-avatar-icon-in-flat-style.jpg?s=612x612&w=0&k=20&c=rQQYEUAa2jcvMS_CW5-ztC96zZ6J4EiSbzHHwyw_5pE=",
    phone_number: "+971 123 4567",
  },
  {
    id: 4,
    name: "Saeed Mohammed",
    payment_due: "April 10th, 2025",
    payment_ratio: "3/5",
    apartment: "R5",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 123 4567",
  },
  {
    id: 5,
    name: "hannan Saif",
    payment_due: "May 20nd, 2025",
    payment_ratio: "2/5",
    apartment: "AD1",
    status: "active",
    avatar: "https://media.istockphoto.com/id/1481415511/vector/arab-woman-face-covered-with-hijab-muslim-woman-muslim-girl-avatar-avatar-icon-in-flat-style.jpg?s=612x612&w=0&k=20&c=rQQYEUAa2jcvMS_CW5-ztC96zZ6J4EiSbzHHwyw_5pE=",
    phone_number: "+971 123 4567",
  },
  {
    id: 6,
    name: "Abdullah Bader",
    payment_due: "N/A",
    payment_ratio: "5/5",
    apartment: "AD2",
    status: "unactive",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 123 4567",
  },
];

const Table: React.FC = () => {

  const renderCell = React.useCallback(
    (user: UserType, columnKey: string) => {
      const cellValue = user[columnKey as keyof UserType];

      switch (columnKey) {
        case "client":
          return (
            <User
              avatarProps={{ radius: "lg", src: user.avatar, className: "outline outline-1 outline-default-200 rounded-full outline-offset-2" }}
              description={user.phone_number}
              name={user.name}
            />
          );
          case "apartment":
            return <p className="text-center">{user.apartment}</p>;

        case "status":
          return (
            <Chip className="capitalize" color={user.status === "active" ? "success" : "danger"} size="sm" variant="flat">
              {user.status}
            </Chip>
          );
        case "payment due":
          return (
            <div className="flex flex-col">
                <p>{user.payment_due}</p>
                <p className="text-xs text-default-400">{user.payment_ratio}</p>
            </div>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Edit user">
                <span className="text-xs text-default-400 cursor-pointer active:opacity-50">
                  <IconEdit size={20} />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="text-xs text-danger cursor-pointer active:opacity-50">
                  <IconTrash size={20} />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <div className="border-t border-r border-l rounded-2xl">
        <NextUITable 
            isHeaderSticky

            aria-label="Table with custom cells"
            classNames={{
                base: "max-h-[395px] overflow-x-scroll w-full",
            }}
        >
        <TableHeader columns={columns}>
            {(column) => (
            <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
            >
                {column.name}
            </TableColumn>
            )}
        </TableHeader>
        <TableBody items={users}>
            {(item: UserType) => (
            <TableRow key={item.id}>
                {(columnKey) => (
                <TableCell>{renderCell(item, columnKey.toString())}</TableCell>
                )}
            </TableRow>
            )}
        </TableBody>
        </NextUITable>
    </div>
  );
};

export default Table;