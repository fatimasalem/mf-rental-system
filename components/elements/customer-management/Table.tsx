'use client'
import React from "react";
import {
  Table as NextUITable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  SortDescriptor,
  Tooltip
} from "@nextui-org/react";
import { Key } from "@react-types/shared";
import {
  IconTrash,
  IconEdit
} from "@tabler/icons-react"
import AddNewUser from "./functions/AddNewUser";

export const columns = [
  { name: "CLIENT", uid: "client", sortable: true },
  { name: "APARTMENT", uid: "apartment", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "LAST PAYMENT AMOUNT", uid: "payment amount" },
  { name: "NEXT PAYMENT DUE", uid: "payment due" },
  { name: "ACTIONS", uid: "actions" },
];

interface UserType {
  id: number;
  name: string;
  apartment: string,
  payment_amount: string;
  payment_due: string;
  payment_ratio?: string;
  status: string;
  avatar: string;
  phone_number: string;
}

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

export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const VerticalDotsIcon = ({size = 24, width, height, className, ...props}: {size?: number, width?: number, height?: number, className?: string}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export const ChevronDownIcon = ({strokeWidth = 1.5, ...otherProps}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...otherProps}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const statusColorMap: Record<string, "success" | "danger" | "warning"> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const INITIAL_VISIBLE_COLUMNS = ["client", "apartment", "status", "payment amount", "payment due", "actions"];

export default function Table() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Set<Key>>(new Set<Key>());
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState<Set<string>>(new Set(["all"]));
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "apartment",
    direction: "ascending" as const,
  });

  const [users, setUsers] = React.useState([

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
  ]);

  const handleAddNewUser = (newUser: any) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns.has("all")) return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (!statusFilter.has("all") && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
      return [...items].sort((a: typeof users[0], b: typeof users[0]) => {
        const first = a[sortDescriptor.column as keyof typeof users[0]];
        const second = b[sortDescriptor.column as keyof typeof users[0]];
        const cmp = first < second ? -1 : first > second ? 1 : 0;

        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      });
    }, [sortDescriptor, items]);

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

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={(keys) => setStatusFilter(new Set(keys as Set<string>))}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={(keys) => setVisibleColumns(new Set(keys as Set<string>))}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <AddNewUser onAddUser={handleAddNewUser} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {users.length} users</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    users.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys.size === filteredItems.length
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <NextUITable
      isHeaderSticky
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys as Iterable<Key>}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={(keys) => setSelectedKeys(new Set(keys as Set<Key>))}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </NextUITable>
  );
}

