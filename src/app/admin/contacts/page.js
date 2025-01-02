'use client';

import React, { useState } from 'react';
import AllContacts from '@/components/all-contacts';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'; 
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { addContact } from '@/backend/utils';

export default function Page() {
  const [isAdding, setIsAdding] = useState(false);
  const [newContact, setNewContact] = useState({
    title: '',
    description: '',
    phoneNumber: '',
    whatsapp: '',
    email: '',
  });
  const [isSaving, setIsSaving] = useState(false); // To manage saving state

  const handleAddContact = async () => {
    setIsSaving(true);
    try {
      await addContact(newContact); // Call the function to save the contact
      console.log("New contact added:", newContact);
      setIsAdding(false); // Close the dialog
      setNewContact({
        title: '',
        description: '',
        phoneNumber: '',
        whatsapp: '',
        email: '',
      }); // Reset the form
    } catch (error) {
      console.error("Error adding contact:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between pl-10 pr-10 pb-10">
        <h1 className="text-[calc(40px)]">Contacts</h1>
        <Button onClick={() => setIsAdding(true)}>New Contact</Button>
      </div>

      <AllContacts />

      {/* Dialog for Adding New Contact */}
      <Dialog open={isAdding} onOpenChange={() => setIsAdding(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Contact</DialogTitle>
            <DialogDescription>
              Fill in the details below and click save to add a new contact.
            </DialogDescription>
          </DialogHeader>
          <form
            className="grid gap-4 px-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddContact();
            }}
          >
            <div className="grid gap-2">
              <Label htmlFor="title">Name</Label>
              <Input
                id="title"
                value={newContact.title}
                onChange={(e) =>
                  setNewContact({ ...newContact, title: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={newContact.description}
                onChange={(e) =>
                  setNewContact({
                    ...newContact,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phoneNumber">Mobile</Label>
              <Input
                id="phoneNumber"
                value={newContact.phoneNumber}
                onChange={(e) =>
                  setNewContact({ ...newContact, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input
                id="whatsapp"
                value={newContact.whatsapp}
                onChange={(e) =>
                  setNewContact({
                    ...newContact,
                    whatsapp: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={newContact.email}
                onChange={(e) =>
                  setNewContact({ ...newContact, email: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                onClick={() => setIsAdding(false)}
                disabled={isSaving}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Contact"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
