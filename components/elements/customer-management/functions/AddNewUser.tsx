'use client'
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { IconPlus } from "@tabler/icons-react";

const AddNewUser = ({ onAddUser }: { onAddUser: (user: any) => void }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Handles modal visibility
  const [formData, setFormData] = useState({
    name: "",
    apartment: "",
    payment_amount: "",
    payment_due: "",
    status: "active",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    const newUser = {
      id: Math.random(), // Replace with proper ID generation logic
      avatar: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png", // Default avatar
      phone_number: "+971 000 0000",
      ...formData,
    };
    onAddUser(newUser); // Pass new user to parent
    onClose(); // Close modal
    setFormData({ // Reset form
      name: "",
      apartment: "",
      payment_amount: "",
      payment_due: "",
      status: "active",
    });
  };

  return (
    <>
      <Button color="primary" endContent={<IconPlus />} onPress={onOpen}>
        Add New
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>
            <h3>Add New User</h3>
          </ModalHeader>
          <ModalBody>
            <Input
              label="Name"
              placeholder="Enter user name"
              name="name"
              fullWidth
              onChange={handleInputChange}
              value={formData.name}
            />
            <Input
              label="Apartment"
              placeholder="Enter apartment"
              name="apartment"
              fullWidth
              onChange={handleInputChange}
              value={formData.apartment}
              className="mt-4"
            />
            <Input
              label="Payment Amount"
              placeholder="Enter payment amount"
              name="payment_amount"
              fullWidth
              onChange={handleInputChange}
              value={formData.payment_amount}
              className="mt-4"
            />
            <Input
              label="Payment Due"
              placeholder="Enter payment due date"
              name="payment_due"
              fullWidth
              onChange={handleInputChange}
              value={formData.payment_due}
              className="mt-4"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleAddUser}>
              Add User
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNewUser;