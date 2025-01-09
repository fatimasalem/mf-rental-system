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
  payment_amount: string;
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
  { name: "LAST PAYMENT AMOUNT", uid: "payment amount" },
  { name: "NEXT PAYMENT DUE", uid: "payment due" },
  { name: "ACTIONS", uid: "actions" },
];

export const users: UserType[] = [
  {
    id: 1,
    name: "Mohamed Ahmed",
    payment_amount: "+ 48,000/y",
    payment_due: "Oct 7th, 2025",
    payment_ratio: "4/5",
    apartment: "R1",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 123 4567",
  },
  {
    id: 2,
    name: "Saleh Faisal",
    payment_amount: "+ 35,000/y",
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
    payment_amount: "+ 41,000/y",
    payment_due: "N/A",
    payment_ratio: "5/5",
    apartment: "R3",
    status: "unactive",
    avatar: "https://cdn1.iconfinder.com/data/icons/64px-people-avatars/64/014_person-avatar-muslim-woman-moslem-hijab-512.png",
    phone_number: "+971 123 4567",
  },
  {
    id: 4,
    name: "Saeed Mohammed",
    payment_amount: "+ 45,000/y",
    payment_due: "April 10th, 2025",
    payment_ratio: "3/5",
    apartment: "R5",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 123 4567",
  },
  {
    id: 5,
    name: "Hannan Saif",
    payment_amount: "+ 30,000/y",
    payment_due: "May 20th, 2025",
    payment_ratio: "2/5",
    apartment: "AD1",
    status: "active",
    avatar: "https://cdn1.iconfinder.com/data/icons/64px-people-avatars/64/014_person-avatar-muslim-woman-moslem-hijab-512.png",
    phone_number: "+971 123 4567",
  },
  {
    id: 6,
    name: "Abdullah Bader",
    payment_amount: "+ 50,000/y",
    payment_due: "N/A",
    payment_ratio: "5/5",
    apartment: "AD2",
    status: "unactive",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 123 4567",
  },
  {
    id: 7,
    name: "Aisha Nasser",
    payment_amount: "+ 38,000/y",
    payment_due: "Jan 15th, 2025",
    payment_ratio: "4/5",
    apartment: "R6",
    status: "active",
    avatar: "https://cdn1.iconfinder.com/data/icons/64px-people-avatars/64/014_person-avatar-muslim-woman-moslem-hijab-512.png",
    phone_number: "+971 234 5678",
  },
  {
    id: 8,
    name: "Ali Jaber",
    payment_amount: "+ 60,000/y",
    payment_due: "March 3rd, 2025",
    payment_ratio: "3/5",
    apartment: "R7",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 345 6789",
  },
  {
    id: 9,
    name: "Fatima Saif",
    payment_amount: "+ 47,000/y",
    payment_due: "Dec 1st, 2024",
    payment_ratio: "4/5",
    apartment: "AD3",
    status: "active",
    avatar: "https://cdn1.iconfinder.com/data/icons/64px-people-avatars/64/014_person-avatar-muslim-woman-moslem-hijab-512.png",
    phone_number: "+971 456 7890",
  },
  {
    id: 10,
    name: "Omar Khaled",
    payment_amount: "+ 32,000/y",
    payment_due: "Feb 25th, 2025",
    payment_ratio: "2/5",
    apartment: "AD4",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 567 8901",
  },
  {
    id: 11,
    name: "Layla Ahmed",
    payment_amount: "+ 25,000/y",
    payment_due: "July 15th, 2025",
    payment_ratio: "1/5",
    apartment: "R8",
    status: "active",
    avatar: "https://cdn1.iconfinder.com/data/icons/64px-people-avatars/64/014_person-avatar-muslim-woman-moslem-hijab-512.png",
    phone_number: "+971 678 9012",
  },
  {
    id: 12,
    name: "Yousef Hassan",
    payment_amount: "+ 55,000/y",
    payment_due: "Aug 20th, 2025",
    payment_ratio: "5/5",
    apartment: "R9",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 789 0123",
  },
  {
    id: 13,
    name: "Noura Ibrahim",
    payment_amount: "+ 42,000/y",
    payment_due: "N/A",
    payment_ratio: "4/5",
    apartment: "AD5",
    status: "unactive",
    avatar: "https://cdn1.iconfinder.com/data/icons/64px-people-avatars/64/014_person-avatar-muslim-woman-moslem-hijab-512.png",
    phone_number: "+971 890 1234",
  },
  {
    id: 14,
    name: "Hassan Saleh",
    payment_amount: "+ 37,000/y",
    payment_due: "Jan 10th, 2025",
    payment_ratio: "3/5",
    apartment: "R10",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 901 2345",
  },
  {
    id: 15,
    name: "Khalifa Abdulrahman",
    payment_amount: "+ 49,000/y",
    payment_due: "March 18th, 2025",
    payment_ratio: "5/5",
    apartment: "AD6",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 012 3456",
  },
  {
    id: 16,
    name: "Sara Ali",
    payment_amount: "+ 29,000/y",
    payment_due: "May 5th, 2025",
    payment_ratio: "2/5",
    apartment: "R11",
    status: "active",
    avatar: "https://cdn1.iconfinder.com/data/icons/64px-people-avatars/64/014_person-avatar-muslim-woman-moslem-hijab-512.png",
    phone_number: "+971 123 4568",
  },
  {
    id: 17,
    name: "Fahad Mohammed",
    payment_amount: "+ 40,000/y",
    payment_due: "April 25th, 2025",
    payment_ratio: "4/5",
    apartment: "AD7",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 234 5679",
  },
  {
    id: 18,
    name: "Zahra Hassan",
    payment_amount: "+ 31,000/y",
    payment_due: "N/A",
    payment_ratio: "5/5",
    apartment: "R12",
    status: "unactive",
    avatar: "https://cdn1.iconfinder.com/data/icons/64px-people-avatars/64/014_person-avatar-muslim-woman-moslem-hijab-512.png",
    phone_number: "+971 345 6780",
  },
  {
    id: 19,
    name: "Ahmed Omar",
    payment_amount: "+ 36,000/y",
    payment_due: "Dec 10th, 2024",
    payment_ratio: "3/5",
    apartment: "AD8",
    status: "active",
    avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png",
    phone_number: "+971 456 7891",
  },
  {
    id: 20,
    name: "Mona Jaber",
    payment_amount: "+ 34,000/y",
    payment_due: "Feb 28th, 2025",
    payment_ratio: "2/5",
    apartment: "R13",
    status: "active",
    avatar: "https://cdn1.iconfinder.com/data/icons/64px-people-avatars/64/014_person-avatar-muslim-woman-moslem-hijab-512.png",
    phone_number: "+971 567 8902",
  },
];

interface TableProps {
  height?: string;
}

const Table: React.FC<TableProps> = ({ height }) => {

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
            return <p className="text-start">{user.apartment}</p>;

        case "status":
          return (
            <Chip
              className="capitalize border-none gap-1 text-default-600"
              color={user.status === "active" ? "success" : "danger"}
              size="sm"
              variant="dot"
            >
              {cellValue}
            </Chip>
          );
        case "payment amount":
          return <p className="text-start text-green-600">{user.payment_amount} <span>&#x62f;&#x2e;&#x625;</span></p>;
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
                base: `${height} overflow-x-scroll w-full`,
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