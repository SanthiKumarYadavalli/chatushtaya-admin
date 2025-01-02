'use client';

import React, { useState } from 'react';
import AllContacts from '@/components/all-contacts';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'; 
import { Label} from '@/components/ui/label'; // Replace with your input and label component import paths
import { Input } from '@/components/ui/input';

export default function Page() {
  const [isAdding, setIsAdding] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    description: '',
    mobile: '',
    whatsapp: '',
    email: '',
  });

  const handleAddContact = () => {
    console.log("New contact added:", newContact);
    setIsAdding(false); // Close the dialog after saving
    setNewContact({
      name: '',
      description: '',
      mobile: '',
      whatsapp: '',
      email: '',
    }); // Reset the form
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
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newContact.name}
                onChange={(e) =>
                  setNewContact({ ...newContact, name: e.target.value })
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
              <Label htmlFor="mobile">Mobile</Label>
              <Input
                id="mobile"
                value={newContact.mobile}
                onChange={(e) =>
                  setNewContact({ ...newContact, mobile: e.target.value })
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
              <Button variant="outline" onClick={() => setIsAdding(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Contact</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
